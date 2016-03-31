/**
 * Created by hep on 29.03.16.
 */
app.controller('pokemonCtrl', ['$scope', 'serviceHttp', '$stateParams', '$timeout', function($scope, serviceHttp, $stateParams, $timeout) {
  var timer = $timeout(function() {
    $scope.loading = true;
  }, 100);
  serviceHttp.get('//pokeapi.co/api/v1/pokemon/' + $stateParams.id).then(function(data){
    $scope.pokemon = data;
    $scope.loading = false;
    $timeout.cancel(timer);
  });
}]);