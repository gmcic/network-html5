
// 嵌入Flash
angular.module('app').controller('NestingflashController', function($scope, $controller, $filter, $http, commonService) {

  // alert('网页的高度: ' + document.documentElement.clientHeight);

  $('#nestingflash').height(document.documentElement.clientHeight - 75);

});