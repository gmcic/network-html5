// 公告管理
angular.module('app').controller('TodoController', function($scope, $http, commonService, $controller) {

  $scope.dropdowns = {};

  $controller('BaseController', {$scope: $scope}); //继承

  /**
   * 待办事项
   * ---------------------------
   * */
  $scope.todoportal = {

    id: "todo",

    name: "待办事项",

    server: "/api/v2/idcstodos",

    defilters: { "personCode": "员工编号", "personName": "员工名称 "},

    callback: {}
  };

  $controller('BaseCRUDController', {$scope: $scope, component: $scope.todoportal}); //继承

  $scope.todoportal.list();
});
