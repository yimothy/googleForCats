angular.module('googleCats',
[
  'googleCats.services',
  'googleCats.search',
   'ngRoute'
])
.config(function($routeProvider, $httpProvider) {

  console.log('THIS IS FROM THE ROUTER DOT WHEN');
  $routeProvider
  .when('/', {
    templateUrl: 'index.html',
    controller: 'SearchController'
  })
  .otherwise({
    redirectTo: '/'
  });
})
