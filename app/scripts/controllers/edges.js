'use strict';

/**
 * @ngdoc function
 * @name swFrontApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the swFrontApp
 */
angular.module('swFrontApp')
  .controller('EdgesCtrl', function ($http) {
    $http.get('/api/users');
  });
