// app/scripts/app.js

'use strict';

/**
 * @ngdoc overview
 * @name fakeLunchHubApp
 * @description
 * # fakeLunchHubApp
 *
 * Main module of the application.
 */
 var app = angular.module('fakeLunchHubApp', [
  'ngAnimate',
  'ngCookies',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'ngTouch'
  ]);

 app.config(function($httpProvider) {
  $httpProvider.defaults.headers.common['X-CSRF-Token'] =
  $('meta[name=csrf-token]').attr('content');
});


// routes.js
app.config(['$httpProvider','$routeProvider',function ($httpProvider,$routeProvider) {
 $httpProvider.defaults.headers.common['Content-Type'] = 'application/json; charset=utf-8';
 $httpProvider.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8';
 $httpProvider.defaults.useXDomain = true;
 delete $httpProvider.defaults.headers.common['X-Requested-With'];

 $routeProvider
 .when('/', {
  templateUrl: 'views/main.html',
  controller: 'MainCtrl'
})
 .when('/about', {
  templateUrl: 'views/about.html',
  controller: 'AboutCtrl'
})
 .when('/groups', {
  templateUrl: 'views/groups.html',
  controller: 'GroupsCtrl'
})
 .when('/myroute', {
  templateUrl: 'views/myroute.html',
  controller: 'MyrouteCtrl'
})
 .otherwise({
  redirectTo: '/'
});

}]);

// // models.js
// app.factory('Group', ['$resource', function($resource) {
//   return $resource('/api/groups/:id.json', null, {
//     'update': { method:'PUT' }
//   });
// }]);