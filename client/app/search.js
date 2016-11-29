angular.module('googleCats.search', [])

.factory('Search', function($http) {
//console.log('THIS IS THE API KEY',apiKey);
  var search = function(data) {
    return $http({
      method: 'POST',
      url: '/search',
      data: data
    })
    .then(function(resp) {
      // console.log("THIS IS THE RESPONSE IN THE SEARCH", resp.data.body);
      var body = JSON.parse(resp.data.body);
      console.log('THIS IS THE BODY.WEBPAGES', body.webPages);
      return body.webPages.value;
    });
  };

  return {
    search: search
  }
})

.controller('SearchController', function($scope, Search) {
  $scope.data = {};
  $scope.search = function () {
    $scope.data.query = $scope.data.query + ' for cats';
    Search.search($scope.data)
    .then(function(queryResults) {
      console.log('THIS THE SEARCH RESULTS AFTER THE FACTORY SEARCH: ', queryResults);
      $scope.data.results = queryResults;
    })
    .catch(function(error) {
      console.log("There was an error in search.js: ", error);
    });
  };

});
