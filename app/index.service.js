app.service('serviceHttp', ['$http',
  function($http) {
    this.get = function(url) {
      return $http({
        method: 'GET',
        url: url
      }).then(function(response){
        return response.data;
      }, function(response){

      })
    }
}]);