angular.module('googleCats.search', [])
.controller('SearchController', function($scope, Search) {
  $scope.data = {};

  $scope.search = function () {
    console.log('THIS IS THE SEARCH QUERY IN SEARCH.JS', $scope.data.query);
    Search.search($scope.data.query)
    .then(function(queryResults) {
      console.log('THIS THE SEARCH RESULTS AFTER THE FACTORY SEARCH: ', queryResults);
      $scope.data.results = queryResults;
//      $location.path('/results');
    })
    .catch(function(error) {
      console.log("There was an error in search.js: ", error);
    });
  };

});
