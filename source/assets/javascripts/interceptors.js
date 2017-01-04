// 拦截器(验证用户是否登录)
angular.module('app').factory('UserInterceptor', ["$q", "$window", "commonService", function ($q, $window, commonService, Auth) {
  return {
    request: function (config) {

      sessionStorage.setItem("authorization", "fc5db3b3-4063-4a12-a511-880ba19e4b58");

      // config.headers["authorization"] = "fc5db3b3-4063-4a12-a511-880ba19e4b58";

      // alert(("SessionStorage Auth : " + sessionStorage.getItem("authorization")));

      if (sessionStorage.getItem("authorization")) {
        config.headers.post = config.headers.post || {};
        config.headers.post['Content-Type'] = 'application/json';
        config.headers["authorization"] = sessionStorage.getItem("authorization");
      }
      else {
        $window.location.href = "login.html";
      }

      // alert('OK' + SessionService.isAnonymous);

      return config;
    }
  };
}]);