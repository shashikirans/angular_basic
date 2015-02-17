// app/scripts/controllers/groups.js

'use strict';

/**
 * @ngdoc function
 * @name fakeLunchHubApp.controller:GroupsCtrl
 * @description
 * # GroupsCtrl
 * Controller of the fakeLunchHubApp
 */
angular.module('fakeLunchHubApp')
  .controller('GroupsCtrl', ['$scope', 'Group', function ($scope, Group) {
  	console.log(Group.query());
    $scope.groups = Group.query();
  }]);