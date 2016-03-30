app.controller('pokemonsCtrl', ['$scope', 'serviceHttp', '$timeout', function($scope, serviceHttp, $timeout) {
  $scope.indicateProgress = true;
  serviceHttp.get('//pokeapi.co/api/v1/pokemon/?limit=12&skip=12').then(function(data){
    $scope.pokemons = data.objects;
    $scope.url = data.meta.next;
    $scope.indicateProgress = false;
  });
  serviceHttp.get('//pokeapi.co/api/v1/type/?limit=999').then(function(data){
    $scope.types = data.objects.map(function(type) { return {label: type.name, value: type.name}});
    $scope.types.unshift({label: "All types", value: ""});
    $scope.typeFilter = $scope.types[0].value;
  });
  $scope.loadMore = function(url) {
    $timeout(function() {
      $scope.indicateProgress = true;
    }, 1000);
    serviceHttp.get('//pokeapi.co' + url).then(function(data){
      $scope.pokemons = data.objects;
      $scope.url = data.meta.next;
      if($scope.indicateProgress) {
        $scope.indicateProgress = false;
      }
    });
  };
}]);
