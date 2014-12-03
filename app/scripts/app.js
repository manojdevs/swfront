'use strict';

/**
 * @ngdoc overview
 * @name swFrontApp
 * @description
 * # swFrontApp
 *
 * Main module of the application.
 */
angular
  .module('swFrontApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])

  .factory('authInterceptor', function($q,$location){
    return{
      request: function(config){
        config.headers = config.headers || {};
        if (localStorage.auth_token){
          config.headers.token = localStorage.auth_token;
        }
        return config;
      },
      responseError: function(response){
        if(response.status === 401){
          $location.path('/login');
        }
        return $q.reject(response);
      }
    }
  })
  .config(function($httpProvider){
    $httpProvider.interceptors.push('authInterceptor');
  })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/edges', {
        templateUrl: 'views/edges.html',
        controller: 'EdgesCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
