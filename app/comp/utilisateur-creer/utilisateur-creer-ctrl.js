app.controller('UtilisateurCreerCtrl', ['$scope', 'RestService', function ($scope, RestService) {
	
	$scope.form = {};

	$scope.creer = function(e){
		console.log(e);

		if (e.passe===e.passe2){

			var ajouter = RestService.save( {controller:"utilisateur"}, e, function(){
				console.log('msg : ' + ajouter);

				//$state.go('utilisateur/liste',{'id':$stateParams.id});
				
				//
				// transitionTo :: force le rafraichissement
				//
				//$state.transitionTo('utilisateur/liste',{'id':$stateParams.id});
			});

		} else {
			console.log('pas le meme mot de passe.');
		}

	};

}]);