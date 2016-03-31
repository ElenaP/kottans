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
    var timer = $timeout(function() {
      $scope.loading = true;
    }, 500);
    serviceHttp.get('//pokeapi.co' + url).then(function(data){
      $scope.pokemons = $scope.pokemons.concat(data.objects);
      $scope.url = data.meta.next;
      $scope.loading = false;
      $timeout.cancel(timer);
    });
  };
}]);
