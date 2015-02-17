'use strict';

/**
 * @ngdoc function
 * @name fakeLunchHubApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the fakeLunchHubApp
 */
angular.module('fakeLunchHubApp')
  .controller('MainCtrl', function ($scope,$http) {
  	// $scope.formInfo = {};
    $scope.save = function(){
    	console.log($scope.formInfo);
		$http({
            method:'POST',
            url:'http://localhost:3000/api/v1/sign_up.json',
            data: $scope.formInfo,
            headers : { 'Content-Type': 'application/json' }
            
        });

  // $http.post("http://localhost:3000/api/v1/sign_up", {headers: {'Content-Type': 'application/json'} })
  //       .then(function (response) {
  //           return response;
  //       });
    };
  });
