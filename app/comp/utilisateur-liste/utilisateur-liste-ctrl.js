app.controller('UtilisateurListeCtrl', ['$scope', 'RestService', function ($scope, RestService) {
	
	$scope.test = "liste";

	$scope.utilisateurs = RestService.query({
		controller:"utilisateur"
	});

}])