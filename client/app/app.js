angular.module('googleCats',
[
  'googleCats.services',
  'googleCats.search',
   'ngRoute'
])
.config(function($routeProvider, $httpProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'index.html',
    controller: 'SearchController'
  })
  // .otherwise({
  //   redirectTo: '/'
  // });
})
