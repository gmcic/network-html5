angular.module('app').controller('BaseController', function ($scope, $http, commonService) {

  $scope.error = "未找到定义";

  $http.defaults.headers.post.authorization = commonService.getAuthorization();

  $http.defaults.headers.post['Content-Type'] = 'application/json';

  $('#ngview').show();
  $('#nestingflash').addClass('hide');

  // 使用日期控件
  jQuery().datepicker && $(".date-picker-btn").datepicker({
    format: 'yyyy-mm-dd',
    orientation: "left",
    autoclose: !0
  }).on("changeDate", function () {
    $(this).parent().prev().val($(this).datepicker('getFormattedDate'));
  });

  jQuery().datepicker && $(".date-picker").datepicker({
    format: 'yyyy-mm-dd',
    orientation: "left",
    autoclose: !0
  });

  $scope.dropboxinit = function (args) {

    var invoke =  args.callback;

    if(!invoke)
    {
      invoke = {};
    }

    if(!!args.dicts)
    {
      // 字典
      $scope.selectDicts('dicttypes', invoke.dicts, args.dicts);
    }

    if(!!args.userdicts)
    {
      // 用户字典
      $scope.selectDicts('userdicts', invoke.userdicts, args.userdicts);
    }

    if(!!args.products)
    {
      // 商品与服务
      $scope.selectDicts('itemcates', invoke.products, args.products);
    }

    // if(!!args.gestLevels)
    // {
    //     //会员等级
    //     $scope.selectDicts('gestlevels', invoke.gestLevels, args.gestLevels);
    // }

  };

  $scope.selectDicts = function (uri, invoke, data) {
    $http.post(commonService.getBusinessHostname() + "/api/v2/" + uri + "/selects", data).success(function (data, status, headers, config) {

      $.extend($scope.dropdowns, data.data);

      if(invoke)
      {
        invoke.call();
      }
    });
  };


  /**
   * 设置下拉选项默认值
   * ---------------------------
   * */
  $scope.setSelectDefault = function (name, fieldNames) {
    angular.forEach(fieldNames, function (fieldName) {

      var keys = fieldName.split(".");

      if ($scope.dropdowns[keys[0] + "Set"]) {

        var type = $scope.dropdowns[keys[0] + "Set"][0];

        if(keys.length == 2 && keys[1])
        {
          $scope[name][keys[0]] = type[keys[1]];
        }
        else if(type.personName)
        {
          $scope[name][keys[0]] = type.id;
        }
        else if (!!type.itemCode) {
          // product
          $scope[name][keys[0]] = type.itemCode;
        }
        else if (!!type.valueNameCn) {
          // dicttypes | dicts | custom
          $scope[name][keys[0]] = type.id;
        }
      }
    });
  };

  $scope.setSelectDefaultObject = function (name, fieldNames) {
    angular.forEach(fieldNames, function (fieldName) {
      if (!!$scope.dropdowns[fieldName + "Set"]) {
        $scope[name][fieldName] = $scope.dropdowns[fieldName + "Set"][0];
      }
    });
  };

  /**
   * 下拉选项, 将查询出的对象替换为本地对象
   * ---------------------------
   * */
  $scope.replaceLocalObject = function (keyword, fieldNames) {
    angular.forEach(fieldNames, function(fieldName){
      if($scope[keyword][fieldName])
      {
        $scope[keyword][fieldName] = $scope.dropdowns[fieldName + "Set"].getObjectWithId($scope[keyword][fieldName]);
      }
    });
  };

  $scope.dropdownWithTable = function (component) {

    if(component.condition)
    {
      var filters = [];

      angular.forEach(component.condition, function(data, key){
        filters.push({"fieldName": key, "operator": "EQ", "value": data});
      });

      $http.post(commonService.getBusinessHostname() + component.server+ "/page", { 'pageSize': 10000, 'pageNumber': 1, 'filters': filters})

        .success(function (data, status, headers, config) {
          var dropdown = [];

          if(component.value) {
            angular.forEach(data.data.content, function (record) {
              dropdown.push({id: record[component.value], valueNameCn: record[component.text]});
            });
          }
          else {
            dropdown = data.data.content;
          }

          // console.log(dropdown);

          $scope.dropdowns[component.id + "Set"] = dropdown;
        });
    }
    else
    {
      $http.get(commonService.getBusinessHostname() + component.server).success(function (data, status, headers, config) {

        var dropdown = [];

        if(component.value) {
          angular.forEach(data.data, function (record) {
            dropdown.push({id: record[component.value], valueNameCn: record[component.text]});
          });
        }
        else {
          dropdown = data.data;
        }

        // console.log(dropdown);

        $scope.dropdowns[component.id + "Set"] = dropdown;
      });
    }

  };



  /**
   * 生成编号
   * ---------------------------
   * */
  $scope.serialNumber = function(component){
    // 生成-会员编号
    $http.get(commonService.getBusinessHostname() + "/api/v2/appconfigs/genNumberByName?name=" + component.numberName).success(function (data, status, headers, config) {

      $scope[component.id][component.fieldName]= data.data;

    }).error(function (data, status, headers, config) { //     错误
      commonService.modaldanger(component.id, "生成" +component.numberName+ "失败");
    });
  };

})
  .controller('FilterController', function ($scope, component, $http, commonService) {

    if(!component.filters)
    {
      component.filters = [];
    }

    // component.placeholder

    var _placeholder = "";

    if(!!component.defilters)
    {
      angular.forEach(component.defilters, function (value, key) {
        component.filters.push({"fieldName": key, "operator": "LIKE", "value":""});
        _placeholder += "/" + value;
      });
    }

    if(!component.placeholder)
    {
      component.placeholder = "请输入" + _placeholder.substr(1);
    }


    // 默认过滤条件
    component.filtersCopy = component.filters;

    // 搜索条
    component.searchbar = {
      "field": "",
      "fieldName": "综合搜索",
      "dataType": "",
      "type": "",

      "firstValue": "",
      "lastValue": "",

      "firstTextPlaceholder": component.placeholder,
      "lastTextPlaceholder": ""
    };

    /**
     * 搜索条支持
     * ---------------------------
     * */
    component.filter = function () {

      if ((!component.searchbar.type && !!component.searchbar.firstValue)) {

        if (!component.searchbar.field) {
          // 综合搜索
          $.each(component.filtersCopy, function (i, filter) {
            filter.value = component.searchbar.firstValue;
          });

          component.filters = component.filtersCopy;
        }
        else {
          component.filters = [{
            "fieldName": component.searchbar.field,
            "operator": "LIKE",
            "value": component.searchbar.firstValue
          }];
        }

        // console.log(component.filters);
      }
      else if (component.searchbar.type == 'between' && (!!component.searchbar.firstValue || !!component.searchbar.lastValue)) {
        if (!component.searchbar.firstValue || !component.searchbar.lastValue) {
          if (!!component.searchbar.firstValue) {
            component.filters = [{
              "fieldName": component.searchbar.field,
              "operator": "GTE",
              "value": component.searchbar.firstValue
            }];
          }

          if (!!component.searchbar.lastValue) {
            component.filters = [{
              "fieldName": component.searchbar.field,
              "operator": "LTE",
              "value": component.searchbar.lastValue
            }];
          }
        }
        else {
          component.filters = component.searchbar;
        }
      }
      else {
        component.filters = [];
      }

      if (!!component.callback && !!component.callback.filter) {
        component.callback.filter();
      }

      // // 手动触发
      // $timeout(function () {
      //     component.$apply();
      //     component.search();
      // });
    };

    /**
     * 搜索条支持
     * ---------------------------
     * */
    component.setField = function (field, fieldName, dataType, type) {

      component.searchbar.field = (!field ? '' : field);
      component.searchbar.fieldName = (!fieldName ? '' : fieldName);
      component.searchbar.dataType = (!dataType ? '' : dataType );
      component.searchbar.type = (!type ? '' : type );

      component.searchbar.firstValue = component.searchbar.lastValue = '';

      if (!component.searchbar.field) {
        // 综合搜索
        component.searchbar.firstTextPlaceholder = component.placeholder;
      }
      else if (!!component.searchbar.field && component.searchbar.type == 'between') {
        // 区间搜索
        if (component.searchbar.dataType == 'date') {
          component.searchbar.firstTextPlaceholder = "请选择最小日期";

          component.searchbar.lastTextPlaceholder = "请选择最大日期";
        }
        else {
          component.searchbar.firstTextPlaceholder = "请输入最小值";

          component.searchbar.lastTextPlaceholder = "请输入最大值";
        }
      }
      else {
        component.searchbar.firstTextPlaceholder = "请输入" + component.searchbar.fieldName;
      }
    };


  })
  .controller('PaginationController', function ($scope, component, $http, commonService) {

    /**
     * 分页对象
     * ---------------------------
     * */
    component.pagination = {
      'pageSize': 20,
      'pageNumber': 1,
      "first": true,
      "last": false,
      "totalElements": 1,
      "totalPages": 1
    };

    /**
     * 跳转码
     * ---------------------------
     * */
    component.jump = function (_pagenumber) {

      if (!!_pagenumber) {
        component.pagination.pageNumber = _pagenumber;
      }

      if (!!component.callback && !!component.callback.jump) {
        component.callback.jump();
      }
      // $timeout(function () {
      //     component.$apply();
      //     component.search();
      // });
    };

    /**
     * 前一页
     * ---------------------------
     * */
    component.prevpage = function () {

      if (component.pagination.pageNumber > 0) {
        component.pagination.pageNumber -= 1;
      }

      if (!!component.callback && !!component.callback.jump) {
        component.callback.jump();
      }
      // $timeout(function () {
      //     component.$apply();
      //     component.search();
      // });
    };

    /**
     * 后一页
     * ---------------------------
     * */
    component.nextpage = function () {

      component.pagination.pageNumber += 1;

      if (!!component.callback && !!component.callback.jump) {
        component.callback.jump();
      }
      // $timeout(function () {
      //     component.$apply();
      //     component.search();
      // });
    };

  })
  .controller('BaseCUDController', function ($scope, component, $http, commonService) {

    // 添加 \ 个性 \ 删除

    /**
     * 添加
     * ---------------------------
     * */
    component.insert = function () {

      $scope[component.id + 'form'].submitted = false;

      // 添加
      $scope[component.id] = {};

      if(!!component.foreignkey && !!$scope[component.foreign])
      {
        $scope[component.id][component.foreignkey] = $scope[component.foreign][$scope[component.foreign + "portal"].foreignKey || 'id'];
      }

      if (!!component.callback && !!component.callback.insert) {
        component.callback.insert();
      }

      $('#' + component.id).modal('toggle');
    };

    component.selectchange = function (inputName, fieldName) {

      // 本对象字段名, 选择对象的字段名
      angular.forEach($scope.dropdowns[inputName  + 'Set'], function (data) {
        if($scope[component.id][inputName] == data[fieldName])
        {
          if(component.callback && component.callback.selectsync)
          {
            component.callback.selectsync(inputName, data);
          }
        }
      });

    };

    /**
     * 变更
     * ---------------------------
     * */
    component.update = function (id) {

      $scope[component.id + 'form'].submitted = false;

      $scope[component.id] = $scope[component.id + 's'].getObjectWithIdValue(id);

//        angular.forEach($scope[component.id + 's'], function (data, index, array) {
//            if (data.id == id) {
//                $scope[component.id] = data;
//            }
//        });

//         console.log($scope[component.id]);

      if (!!component.callback && !!component.callback.update) {
        component.callback.update();
      }

      $('#' + component.id).modal('toggle');
    };

    /**
     * 查看
     * ---------------------------
     * */
    component.view = function (id) {

      angular.forEach($scope[component.id + 's'], function (data, index, array) {
        if (data.id == id) {
          $scope[component.id] = data;
        }
      });

      if (!!component.callback && !!component.callback.view) {
        component.callback.view();
      }

      $("#" + component.id + "view").modal('toggle');
    };

    /**
     * 获取惟一的记录
     * ---------------------------
     * */
    component.unique = function (id) {

      $http.get(commonService.getBusinessHostname() + component.server + "/" + id).success(function (data, status, headers, config) {

        $scope[component.id] = data.data;

        if (!!component.callback && !!component.callback.unique) {
          component.callback.unique();
        }
      }).error(function (data, status, headers, config) {
        commonService.modaldanger(component.id, "加载惟一的记录失败")
      });
    };

    /**
     * 提交保存
     * ---------------------------
     * */
    component.submit = function () {

      $scope[component.id + "form"].submitted = true;

      if (!!component.callback && !!component.callback.submitbefore) {
        component.callback.submitbefore();
      }

      if ($scope[component.id + "form"].$valid) {

        var isappend = !$scope[component.id].id;

        $http.post(commonService.getBusinessHostname() + component.server, $scope[component.id]).success(function (data, status, headers, config) {

          $('#' + component.id).modal('toggle');

          $scope[component.id] = data.data;

          if (!!component.callback && !!component.callback.submit) {
            component.callback.submit();
          }

          if(isappend && $scope[component.id + "s"])
          {
            $scope[component.id + "s"].unshift(data.data);
          }

          commonService.success("保存成功")
        }).error(function (data, status, headers, config) { //     错误

          commonService.modaldanger(component.id, "保存失败")
        });
      }
    };

    /**
     * 直接保存
     * ---------------------------
     * */
    component.save = function () {

      $http.post(commonService.getBusinessHostname() + component.server, $scope[component.id]).success(function (data, status, headers, config) {

        $scope[component.id] = data.data;

        if (!!component.callback && !!component.callback.save) {
          component.callback.save(data.data);
        }
      }).error(function (data, status, headers, config) { //     错误

        commonService.modaldanger(component.id, "保存失败")
      });
    };

    component.saveWithEntity = function (entity) {

      $http.post(commonService.getBusinessHostname() + component.server, entity).success(function (data, status, headers, config) {

      }).error(function (data, status, headers, config) { //     错误
        commonService.modaldanger(component.id, "保存失败")
      });
    };

    /**
     * 批量删除数据
     */
    component.removes = function () {
      var size = 0;

      angular.forEach(component.selection, function (value, key) {
        if (value == true) {
          size++;
        }
      });

      if (confirm("您确定要删除选中[" + size + "]条记录吗?")) {
        angular.forEach(component.selection, function (value, key) {
          if (value == true) {
            component.delete($scope[component.id+"s"].getObjectWithIdValue(key));
          }
        });
      }

    };

    /**
     * 删除单条数据
     */
    component.remove = function (obj) {

      obj = obj || $scope[component.id];

      if (confirm("您确定要删除该记录吗?")) {
        component.delete(obj);
      }
    };

    /**
     * 具体的删除逻辑
     */
    component.delete = function (obj) {

      if(obj.id)
      {
        $http.delete(commonService.getBusinessHostname() + component.server + "/" + obj.id).success(function (data, index, array) {

          $scope[component.id + "s"].removeById(obj);

          if (!!component.callback && !!component.callback.delete) {
            component.callback.delete();
          }

          commonService.success("删除成功")

        }).error(function (data) {
          commonService.danger("删除失败");
        });
      }
      else
      {
        $scope[component.id + "s"].removeObject(obj);

        if (!!component.callback && !!component.callback.delete) {
          component.callback.delete();
        }
      }
    };

    /**
     * 初始化
     * ---------------------------
     * */
    component.init= function () {
      // component.search();
    };

  })
  .controller('BaseCRUDController', function ($scope, component, $controller, $http, commonService) {

    $http.defaults.headers.post.authorization = commonService.getAuthorization();

    $http.defaults.headers.post['Content-Type'] = 'application/json';


    // 若有外键
    // console.log("Foreign | " + component.foreign + ": ");

    $controller('BaseCUDController', {$scope: $scope, component: component}); //继承

    if(!component.callback)
    {
      component.callback = {};
    }

    if(!component.callback.jump)
    {
      component.callback.jump = function () {
        component.search();
      };
    }

    if(!component.callback.filter)
    {
      component.callback.filter= function () {
        component.search();
      };
    }

    /**
     * 继承过滤&分页
     * ---------------------------
     * */
    $controller('FilterController', {$scope: $scope, component: component}); //继承

    $controller('PaginationController', {$scope: $scope, component: component}); //继承

    /**
     * 选择
     * ---------------------------
     * */
    component.selectedall = false;

    component.isRemoves = true;

    component.selection = {};

    component.selectChange = function () {
      component.isRemoves = true;
      angular.forEach(component.selection, function (value, key) {
        if (value == true) {
          component.isRemoves = false;
        }
      });
    };

    component.selectAll = function () {

      angular.forEach($scope[component.id + 's'], function (data) {
        component.selection[data.id] = component.selectedall;
      });

      component.isRemoves = !component.selectedall
    };

    /**
     * 搜索不分页
     * ---------------------------
     * */
    component.list = function () {
      $http.get(commonService.getBusinessHostname() + component.server).success(function (data, status, headers, config) {
        $scope[component.id + 's'] = data.data;

        if(!!component.callback && !!component.callback.list)
        {
          component.callback.list();
        }
      });
    };

    /**
     * 添加外键过滤条件
     * ---------------------------
     * */
    component.doForeignFilter = function () {
      var _filter;

      angular.forEach(component.filters, function (filter) {
        if (filter.fieldName == component.foreignkey) {
          _filter = filter;
        }
      });

      if (!_filter) {

        _filter = {"fieldName": component.foreignkey, "operator": "EQ", "value": $scope[component.foreign][$scope[component.foreign + "portal"].foreignKey || 'id']};

        component.filters.push(_filter);
      }
      else {
        _filter.value = $scope[component.foreign][$scope[component.foreign + "portal"].foreignKey || 'id'];
      }

      return _filter;
    };

    /**
     * 搜索
     * ---------------------------
     * */
    component.searchByWhere = function(condition, invoke){

      var filters = [];

      angular.forEach(condition, function(data, key){
        filters.push({"fieldName": key, "operator": "EQ", "value": data});
      });

      $http.post(commonService.getBusinessHostname() + component.server + "/page", { 'pageSize': 10000, 'pageNumber': 1, 'filters': filters})
        .success(function (data, status, headers, config) {
          $scope[component.id + 's'] = data.data.content;

          if(invoke)
          {
            invoke.call();
          }
        });
    };

    /**
     * 分页搜索
     * ---------------------------
     * */
    component.search = function () {

      if (!!component.foreign && !!$scope[component.foreign] && !!$scope[component.foreign][$scope[component.foreign + "portal"].foreignKey || 'id']) {
        component.doForeignFilter();
      }

      $http.post(commonService.getBusinessHostname() + component.server + "/page", {
        'pageSize': component.pagination.pageSize,
        'pageNumber': component.pagination.pageNumber,
        'filters': component.filters
      }).success(function (data, status, headers, config) {

        $scope[component.id + 's'] = data.data.content;

        // // console.log($scope[component.id + 's']);

        // 搜索+分页
        component.pagination.pageNumber = data.data.number + 1;

        component.pagination.last = data.data.last;
        component.pagination.first = data.data.first;
        component.pagination.totalPages = data.data.totalPages;
        component.pagination.totalElements = data.data.totalElements;
      });
    };

  })
  .controller('SidePanelController', function ($scope, component, $controller, $http, commonService) {

    $http.defaults.headers.post.authorization = commonService.getAuthorization();

    $http.defaults.headers.post['Content-Type'] = 'application/json';

    $controller('BaseCUDController', {$scope: $scope, component: component}); //继承

    /**
     * 查询
     * ---------------------------
     * */
    component.switched = function (id) {
      component.selectedId = id;

      angular.forEach($scope[component.id + "s"], function (data) {
        if (data.id == component.selectedId) {
          component.selected = data;
          $scope[component.id] = data;
        }
      });

      if(!!component.callback && !!component.callback.switched)
      {
        component.callback.switched();
      }
    };


    /**
     * 查询
     * ---------------------------
     * */
    component.search = function () {
      // 分类
      $http.get(commonService.getBusinessHostname() + component.server).success(function (data, status, headers, config) {
        $scope[component.id + "s"]= data.data;

        component.switched($scope[component.id + "s"][0].id);

        if(!!component.callback && !!component.callback.search)
        {
          component.callback.search();
        }
      });
    };

    /**
     * 初始化
     * ---------------------------
     * */
    component.init = function () {
      component.search();
    };
  })
  .controller('TreeSidePanelController', function ($scope, component, $controller, $http, commonService) {

    $http.defaults.headers.post.authorization = commonService.getAuthorization();

    $http.defaults.headers.post['Content-Type'] = 'application/json';

    // $controller('BaseCUDController', {$scope: $scope, component: component}); //继承

    /**
     * 目录树配置
     * ---------------------------
     * */
    component.treeConfig = {
      core: {
        themes: {responsive: !1},
        multiple: false,
        animation: false,
        error: function (error) {
          alert("error from js tree - " + angular.toJson(error));
        },
        check_callback: true,
        worker: true
      },
      types: {
        default: {
          icon: 'fa fa-folder icon-state-warning icon-lg'
        },
        file: {icon: "fa fa-file icon-state-warning icon-lg"}
      },
      version: 1,
      plugins: ['types', 'radio']
    };


    /**
     * 树事件触发
     * ---------------------------
     * */
    component.treeEventsObj = {
      'select_node': function (e, item) {

        // // // console.log(item.selected[0]);

        component.selectedId = item.selected[0];

        angular.forEach($scope[component.id + "s"], function (data) {
          if (data.id == component.selectedId) {
            component.selected = data;
            $scope[component.id] = data;
          }
        });

        // console.log(component.id + ": ");
        // console.log($scope[component.id]);

        if(!!component.callback && !!component.callback.switched)
        {
          component.callback.switched();
        }

        // component.search();
        // alert('select_node called: ' + item.selected);
      }
    };

    /**
     * 取消选中
     * ---------------------------
     * */
    component.cancelSelected = function () {
      component.selectedId = null;
      component.selected = null;
      $scope[component.id] = null;
    };

    /**
     * 查询
     * ---------------------------
     * */
    component.search = function () {

      $http.get(commonService.getBusinessHostname() + component.server).success(function (data, status, headers, config) {

        angular.forEach(data.data, function (item) {
          item.text = item[component.text];
          item.parent = item[component.parent] || "#";
          // item.parent = "#";
          // // console.log("Text: " + item.text)
          // // console.log("Parent: " + item.parent)
        });

        $scope[component.id + 's'] = data.data;

        // // console.log($scope[component.id + 's']);

        // component.treeData = data.data;

        component.treeConfig.version++;
      });
    };

    /**
     * 添加
     * ---------------------------
     * */
    component.insert = function () {

      $scope[component.id + 'form'].submitted = false;

      // 添加
      $scope[component.id] = {};

      if(!!component.foreignkey && !!$scope[component.foreign])
      {
        $scope[component.id][component.foreignkey] = $scope[component.foreign][$scope[component.foreign + "portal"].foreignKey || 'id'];
      }

      // 加载
      if (!component.selected) {
        $scope[component.id].parentObject = {};
        $scope[component.id].parentObject[component.parent] = "#";
        $scope[component.id].parentObject[component.text] = "顶级";
      }
      else {
        $scope[component.id].parentObject = component.selected;
      }

      if (!!component.callback && !!component.callback.insert) {
        component.callback.insert();
      }

      $('#' + component.id).modal('toggle');
    };

    /**
     * 变更
     * ---------------------------
     * */
    component.update = function () {

      $scope[component.id + 'form'].submitted = false;

      if((component.selected[component.parent] || "#") == "#")
      {
        $scope[component.id].parentObject = {};
        $scope[component.id].parentObject[component.parent] = "#";
        $scope[component.id].parentObject[component.text] = "顶级";
      }
      else{
        $scope[component.id].parentObject = $scope[component.id + 's'].getObjectWithIdValue(component.selected[component.parent]);

        console.log("$scope[component.id].parentObject");
        console.log(component.selected[component.parent]);
        console.log($scope[component.id].parentObject);
      }

      if (!!component.callback && !!component.callback.update) {
        component.callback.update();
      }

      $('#' + component.id).modal('toggle');
    };

    /**
     * 保存
     * ---------------------------
     * */
    component.submit = function () {
      $scope[component.id + "form"].submitted = true;

//        console.log($scope[component.id]);

      delete $scope[component.id].parentObject;

      if (!!component.callback && !!component.callback.submitbefore) {
        component.callback.submitbefore();
      }

      if ($scope[component.id + "form"].$valid) {

        delete $scope[component.id].text;
        delete $scope[component.id].parent;

        $http.post(commonService.getBusinessHostname() + component.server, $scope[component.id]).success(function (data, status, headers, config) {

          $('#' + component.id).modal('toggle');

          $scope[component.id] = data.data;

          if (!!component.callback && !!component.callback.submit) {
            component.callback.submit();
          }

          $scope[component.id + "s"].unshift(data.data);

          component.refresh();

          commonService.success("保存成功")
        }).error(function (data, status, headers, config) { //     错误

          commonService.modaldanger(component.id, "保存失败")
        });
      }
    };

    /**
     * 批量删除数据
     */
    component.removes = function () {
      var size = 0;

      angular.forEach(component.selection, function (value, key) {
        if (value == true) {
          size++;
        }
      });

      if (confirm("您确定要删除选中[" + size + "]条记录吗?")) {
        angular.forEach(component.selection, function (obj, key) {
          if (value == true) {
            component.delete(obj);
          }
        });
      }

    };

    /**
     * 删除单条数据
     */
    component.remove = function (obj) {

      obj = obj || $scope[component.id];

      if (confirm("您确定要删除该记录吗?")) {
        component.delete(obj);
      }
    };

    /**
     * 具体的删除逻辑
     */
    component.delete = function (obj) {

      if(obj.id)
      {
        $http.delete(commonService.getBusinessHostname() + component.server + "/" + obj.id).success(function (data, index, array) {

          $scope[component.id + "s"].removeById(obj);

          if (!!component.callback && !!component.callback.delete) {
            component.callback.delete();
          }

          component.refresh();

          commonService.success("删除成功")

        }).error(function (data) {
          commonService.danger("删除失败");
        });
      }
      else
      {
        $scope[component.id + "s"].removeById(obj);

        if (!!component.callback && !!component.callback.delete) {
          component.callback.delete();
        }
      }
    };

    /**
     * 刷新目录树
     * ---------------------------
     * */
    component.refresh = function () {
      component.search();
      component.treeConfig.version++;

    };

    /**
     * 初始化
     * ---------------------------
     * */
    component.init = function () {
      component.search();
    };
  });