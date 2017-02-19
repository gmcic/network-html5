
// Sidebar
angular.module('app').controller('SidebarController', function($scope, $location, $route, $routeParams, $location) {
    $scope.gotoFlashPage = function (moduleName, swfRelativePath, params) {

          // 生产环境
          // $('#ngview').hide();
          // $('#nestingflash').removeClass('hide');
          //
          //   var _flash = document.getElementById('Index');
          //
          //   _flash.setLoadingPage(moduleName, swfRelativePath, params);

          // 开发环境
          if($('#nestingflashlocal').length > 0)
          {
            // alert('直接定位' + $('#nestingflashlocal').get(0).contentWindow.document.getElementById('Index'));

            var _flash = $('#nestingflashlocal').get(0).contentWindow.document.getElementById('Index');

            _flash.setLoadingPage(moduleName, swfRelativePath, params);

          }
          else
          {
            $location.path('/nestingflash', true);
          }
    };
  });

