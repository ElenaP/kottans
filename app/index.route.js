app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state('pokemon', {
      url: "/pokemon/:name/:id",
      templateUrl: "app/components/pokemon.html",
      controller: "pokemonCtrl"
    })
});