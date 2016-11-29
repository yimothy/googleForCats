angular.module('googleCats',
[
  'googleCats.search',
   'ngRoute'
])
.config(function($routeProvider, $httpProvider) {

  $routeProvider
  .when('/', {
    templateUrl: 'index.html',
    controller: 'SearchController'
  })
  .otherwise({
    redirectTo: '/'
  });
})
