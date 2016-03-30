/**
 * Created by hep on 29.03.16.
 */
app.controller('pokemonCtrl', ['$scope', 'serviceHttp', '$stateParams', function($scope, serviceHttp, $stateParams) {
  serviceHttp.get('//pokeapi.co/api/v1/pokemon/' + $stateParams.id).then(function(data){
    $scope.pokemon = data;
  });
}]);