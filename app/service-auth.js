app.config(function ($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
});

app.factory('authInterceptor', function ($q, $window) {
  return {
    request: function (config) {
      config.headers = config.headers || {};
      var token = localStorage.getItem("token");
      console.log("token : " + token);
      if (token) {
        console.log("config : ");
        config.headers.token = token;
      } else {
        $window.location.assign("#/login");
      }
      return config;
    },
    responseError: function (rejection) {
      if (rejection.status === 401) {
        // handle the case where the user is not authenticated
        $window.location.assign("#/login");
      }
      return $q.reject(rejection);
    }
  };
});