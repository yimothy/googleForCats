angular.module('googleCats.services', [])

.factory('Search', function($http) {
//console.log('THIS IS THE API KEY',apiKey);
  var search = function(query) {
    return $http({
      method: 'GET',
      url: 'https://api.cognitive.microsoft.com/bing/v5.0/search?q=' + query + ' for cats'+'&count=20',
      headers: {
        'Ocp-Apim-Subscription-Key': 'de49753287c242bcb6b22d3cf4360cbe'
      }
    })
    .then(function(resp) {
      console.log(resp.data.webPages.value);
      return resp.data.webPages.value;
    });
  };

  return {
    search: search
  }
})
