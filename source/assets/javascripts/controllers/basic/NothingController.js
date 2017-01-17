// 员工管理
angular.module('app').controller('NothingController', function ($scope, $http, commonService, $controller) {

  $controller('BaseController', {$scope: $scope}); //继承

  var name = location.href.substring(location.href.lastIndexOf('/')+1);

  if(name == 'warning')
  {
    $scope.moduleName = "告警事件";
  }

  if(name == 'violate')
  {
    $scope.moduleName = "违规事件";
  }

  if(name == 'forecast')
  {
    $scope.moduleName = "可能违规事件";
  }

  if(name == 'assetstatistics')
  {
    $scope.moduleName = "资产统计";
  }

  if(name == 'assetquery')
  {
    $scope.moduleName = "综合查询";
  }

  if(name == 'assetexp')
  {
    $scope.moduleName = "导入导出";
  }

  if(name == 'workstatistics')
  {
    $scope.moduleName = "工单统计";
  }

  if(name == 'overhaulplan')
  {
    $scope.moduleName = "检修计划";
  }

  if(name == 'emergency')
  {
    $scope.moduleName = "紧急抢修";
  }

  if(name == 'workorder')
  {
    $scope.moduleName = "我的工单";
  }

  if(name == 'bug')
  {
    $scope.moduleName = "缺陷管理";
  }

});
