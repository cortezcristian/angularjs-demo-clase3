'use strict';

/**
 * @ngdoc overview
 * @name angularjsDemoClase3App
 * @description
 * # angularjsDemoClase3App
 *
 * Main module of the application.
 */
angular
  .module('angularjsDemoClase3App', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
