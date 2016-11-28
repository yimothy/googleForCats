angular.module('googleCats.search', [])
.controller('SearchController', function($scope, $location, Search) {
  $scope.data = {};
  $scope.data.query;

  $scope.search = function () {
    Search.search($scope.data.query)
    .then(function(queryResults) {
      console.log('THIS THE SEARCH RESULTS, ', queryResults);
      $scope.data.results = queryResults;
//      $location.path('/results');
    })
    .catch(function(error) {
      console.log("There was an error in search.js: ", error);
    });
  };

});
