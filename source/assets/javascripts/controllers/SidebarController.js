
// Sidebar
angular.module('app').controller('SidebarController', function($scope, $location, $route, $routeParams, $location) {
    $scope.gotoFlashPage = function (moduleName, swfRelativePath, params) {

      $('#ngview').hide();
      $('#nestingflash').removeClass('hide');

        var _flash = document.getElementById('Index');

        _flash.setLoadingPage(moduleName, swfRelativePath, params);
      // if($('#nestingflash').length > 0)
      // {
      //   // alert('直接定位' + $('#nestingflash').get(0).contentWindow.document.getElementById('Index'));
      //
      //   var _flash = $('#nestingflash').get(0).contentWindow.document.getElementById('Index');
      //
      //   _flash.setLoadingPage(moduleName, swfRelativePath, params);
      //
      // }
      // else
      // {
      //   $location.path('/nestingflash', true);
      // }
      // alert("angular$scope.gotoFlashPage");
    };
  });

