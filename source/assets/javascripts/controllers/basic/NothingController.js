// 员工管理
angular.module('app').controller('NothingController', function ($scope, $http, commonService, $controller) {

  $controller('BaseController', {$scope: $scope}); //继承

  var name = location.href.substring(location.href.lastIndexOf('/')+1);
  //
  // if(name == 'warning')
  // {
  //   $scope.moduleName = "告警事件";
  // }
  //
  // if(name == 'violate')
  // {
  //   $scope.moduleName = "违规事件";
  // }
  //
  // if(name == 'forecast')
  // {
  //   $scope.moduleName = "可能违规事件";
  // }
  //
  // if(name == 'assetstatistics')
  // {
  //   $scope.moduleName = "资产统计";
  // }
  //
  // if(name == 'assetquery')
  // {
  //   $scope.moduleName = "综合查询";
  // }
  //
  // if(name == 'assetexp')
  // {
  //   $scope.moduleName = "导入导出";
  // }
  //
  // if(name == 'workstatistics')
  // {
  //   $scope.moduleName = "工单统计";
  // }
  //
  // if(name == 'overhaulplan')
  // {
  //   $scope.moduleName = "检修计划";
  // }
  //
  // if(name == 'emergency')
  // {
  //   $scope.moduleName = "紧急抢修";
  // }
  //
  // if(name == 'workorder')
  // {
  //   $scope.moduleName = "我的工单";
  // }
  //
  // if(name == 'bug')
  // {
  //   $scope.moduleName = "缺陷管理";
  // }
  //
  // if(name == 'motorroom')
  // {
  //   $scope.moduleName = "机房";
  // }
  //
  // if(name == 'reportlist')
  // {
  //   $scope.moduleName = "报表浏览";
  // }
  //
  // if(name == 'reportnow')
  // {
  //   $scope.moduleName = "即时报表";
  // }
  //
  // if(name == 'flux')
  // {
  //   $scope.moduleName = "流量查询";
  // }
  //
  // if(name == 'reporttemp')
  // {
  //   $scope.moduleName = "报表模板";
  // }
  //
  // if(name == 'reporttask')
  // {
  //   $scope.moduleName = "任务管理";
  // }
  //
  // if(name == 'reportfix')
  // {
  //   $scope.moduleName = "设备报表";
  // }
  //
  // if(name == 'reporttop')
  // {
  //   $scope.moduleName = "topN报表";
  // }
  //
  // if(name == 'reportsearch')
  // {
  //   $scope.moduleName = "性能查询";
  // }
  //
  // if(name == 'gather1')
  // {
  //   $scope.moduleName = "实时性能采集";
  // }
  //
  // if(name == 'gather2')
  // {
  //   $scope.moduleName = "查看采集数据";
  // }
  //
  // if(name == 'gather3')
  // {
  //   $scope.moduleName = "查看采集任务";
  // }
  //
  // if(name == 'gather4')
  // {
  //   $scope.moduleName = "修改经验阈值";
  // }
  //
  // if(name == 'gather5')
  // {
  //   $scope.moduleName = "添加采集任务";
  // }

  $scope.moduleName = "亲，系统正在加班开发中！";
});
