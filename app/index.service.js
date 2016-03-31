app.service('serviceHttp', ['$http', '$log',
  function($http, $log) {
    this.get = function(url) {
      return $http({
        method: 'GET',
        url: url
      }).then(function(response){
        return response.data;
      }, function(response){
        $log.log(response);
      })
    }
}]);