


app.config(function($stateProvider, $urlRouterProvider) {
  
  $stateProvider
    .state('utilisateur/creer', {
      url: "/utilisateur/creer",
      templateUrl: "app/comp/utilisateur-creer/utilisateur-creer-tpl.html",
      controller: "UtilisateurCreerCtrl"
    })
    .state('utilisateur/liste', {
      url: "/utilisateur/liste",
      templateUrl: "app/comp/utilisateur-liste/utilisateur-liste-tpl.html",
      controller: "UtilisateurListeCtrl"
    })
    .state('login', {
      url: "/login",
      templateUrl: "app/comp/login/login-tpl.html",
      controller: "LoginCtrl"
    })


    ;

    $urlRouterProvider.otherwise("/login");

});


