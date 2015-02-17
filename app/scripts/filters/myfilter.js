'use strict';

/**
 * @ngdoc filter
 * @name fakeLunchHubApp.filter:myFilter
 * @function
 * @description
 * # myFilter
 * Filter in the fakeLunchHubApp.
 */
angular.module('fakeLunchHubApp')
  .filter('myFilter', function () {
    return function (input) {
      return 'myFilter filter: ' + input;
    };
  });
