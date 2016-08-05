angular.module('olympicApp', ['ngRoute']);

// var currSport = '';
//
// var fencing = [];
// var badminton = [];
// var boxing = [];
// var canoe = [];
// var mPentath = [];

// get sports here

angular.module('olympicApp').config(function($routeProvider, $locationProvider){
  $routeProvider.when('/fencing', {
      templateUrl: 'views/fencing.html',
      controller: 'fencingController'
    })
    .when('/canoe', {
      templateUrl: 'views/canoe.html',
      controller: 'CanoeController'
    }).when('/boxing', {
      templateUrl: 'views/boxing.html',
      controller: 'boxingController'
    }).when('/badminton', {
      templateUrl: 'views/badminton.html',
      controller: 'badmintonController'
    }).when('/mPentath', {
      templateUrl: 'views/mPentath.html',
      controller: 'mPentathController'
    });

    $locationProvider.html5Mode(true);
  });


angular.module('olympicApp').controller('fencingController', function($scope, $http){
  $http.get('/olympian/fencing').then(function(response){
    $scope.fencer = response.data;
  });
});
angular.module('olympicApp').controller('mPentathController', function($scope, $http){
  $http.get('/olympian/mPentath').then(function(response){
    $scope.athlete = response.data;
  });
});
angular.module('olympicApp').controller('boxingController', function($scope, $http){
  $http.get('/olympian/boxing').then(function(response){
    $scope.athlete = response.data;
  });
});
angular.module('olympicApp').controller('badmintonController', function($scope, $http){
  $http.get('/olympian/badminton').then(function(response){
    $scope.athlete = response.data;
  });
});
angular.module('olympicApp').controller('CanoeController', function($scope, $http){
  $http.get('/olympian/canoe').then(function(response){
    $scope.athlete = response.data;
  });
});
