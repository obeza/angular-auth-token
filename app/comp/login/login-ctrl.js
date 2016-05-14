app.controller('LoginCtrl', ['$scope', '$http', '$state', function ($scope, $http, $state) {
	
	$scope.test ="hello";

	$scope.login = function(e){

		$http.post('http://localhost:8888/laboratoire/auth-token/api/login', e)
		.success( function(data, status, headers, config){
			console.log("msg " + JSON.stringify(data) );

			if (data.msg==="ok"){
				console.log('ok');
				localStorage.setItem("token", data.token);
				$state.transitionTo('utilisateur/liste');
			}
		});

	};

}]);