// 公告管理
angular.module('app').controller('NotificationController', function($scope, $http, commonService, $controller) {

  $scope.dropdowns = {};

  $controller('BaseController', {$scope: $scope}); //继承

  /**
   * 公告管理
   * ---------------------------
   * */
  $scope.notificationportal = {

    id: "notification",

    name: "公告管理",

    server: "/api/v2/idcsnotifications",

    defilters: { "personCode": "员工编号", "personName": "员工名称 "},

    callback: {}
  };

  $controller('BaseCRUDController', {$scope: $scope, component: $scope.notificationportal}); //继承

  $scope.notificationportal.list();
});
