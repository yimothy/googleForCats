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
  $scope.data.images = [
    'http://www.wallpapertycoon.com/wp-content/uploads/2016/05/Funny-Cat-for-Desktop-Wallpaper-256x256.jpg',
    'https://pbs.twimg.com/profile_images/602729491916435458/hSu0UjMC.jpg',
    'https://pbs.twimg.com/profile_images/571260078292865024/0EvP5vXn.jpeg',
    'https://pbs.twimg.com/profile_images/672352030191542272/8Sp3RsXo.jpg',
    'https://pbs.twimg.com/profile_images/625633822235693056/lNGUneLX.jpg',
    'http://files.gamebanana.com/img/ico/sprays/funny-picture-cat-picture-ehpien_.png',
    'https://pbs.twimg.com/profile_images/682493419579699200/xu2JTnH4.jpg',
    'https://humorkitty.files.wordpress.com/2015/06/cute-cat-hipster-desktop-background-wallpaper.jpg?w=256&h=256&crop=1',
    'https://pbs.twimg.com/profile_images/676801385405538304/M8hgumGw.jpg',
    'https://pbs.twimg.com/profile_images/737359467742912512/t_pzvyZZ.jpg',
    'https://pbs.twimg.com/profile_images/687737847403511808/ybDKqCoN.jpg',
    'https://pbs.twimg.com/profile_images/2904725256/5ab2b154bc9321e6c57a9364c81288dd.jpeg',
    'https://i.ytimg.com/vi/prALrHUJ8Ns/hqdefault.jpg',
    'https://i.ytimg.com/vi/Ea8rOZyawIs/hqdefault.jpg',
    'https://s-media-cache-ak0.pinimg.com/564x/ff/db/78/ffdb783d33d132470318966dc1ba5ec5.jpg',
    'https://s-media-cache-ak0.pinimg.com/originals/13/97/ba/1397baf2dde16d074b50497a50d2eb33.jpg',
    'http://cdn2.business2community.com/wp-content/uploads/2014/10/Sushi-Cat-Halloween-Costume2.jpg2.jpg',
    'https://s-media-cache-ak0.pinimg.com/564x/e5/dc/c0/e5dcc0d704daab8993e3aa28701f55e5.jpg',
    'http://www.oddities123.com/wp-content/uploads/2014/03/fat-cats-4.jpg',
    'https://www.funnypica.com/wp-content/uploads/2015/05/TOP-30-Cute-Cats-Cute-Cat-30.jpg'
  ];

  $scope.getRandomNum = function(){
    return Math.floor(Math.random() * $scope.data.images.length);
  }
  // console.log('THIS IS THE RANDOM NUM', $scope.randomNum);
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
