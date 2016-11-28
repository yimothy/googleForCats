angular.module('googleCats.services', [])

.factory('Search', function($http) {

  var search = function(query) {
    return $http({
      method: 'GET',
      url: 'https://api.cognitive.microsoft.com/bing/v5.0/search?q=' + query + 'for cats' +'&count=20',
      headers: {
        'Ocp-Apim-Subscription-Key': 'ebd601c68c1d42e2acd11deb4ace9dbb'
      }
    })
    .then(function(resp) {
      return resp.value;
    });
  };

  return {
    search: search
  }
})
