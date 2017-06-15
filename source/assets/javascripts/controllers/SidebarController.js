
// Sidebar
angular.module('app').controller('SidebarController', function($scope, $location, $window, $route, $routeParams, $location) {
    $scope.gotoFlashPage = function (moduleName, swfRelativePath, params) {

          // 生产环境
          $('#ngview').hide();
          $('#nestingflash').height(function(index, height){
            // alert("index: " + index + ", Height: " + height);
            return nestingflashHeight;
          });

          var _flash = document.getElementById('Index');

          _flash.setLoadingPage(moduleName, swfRelativePath, params);

          //
          // // 开发环境
          // if($('#nestingflashlocal').length > 0)
          // {
          //   // alert('直接定位' + $('#nestingflashlocal').get(0).contentWindow.document.getElementById('Index'));
          //
          //   var _flash = $('#nestingflashlocal').get(0).contentWindow.document.getElementById('Index');
          //
          //   _flash.setLoadingPage(moduleName, swfRelativePath, params);
          //
          //   if ( params == 'childmenuid=exit')
          //   {
          //     $window.location.href = '/login.html';
          //   }
          //
          // }
          // else
          // {
          //   $location.path('/nestingflash', true);
          // }
    };
  });

