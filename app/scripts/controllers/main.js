'use strict';

/**
 * @ngdoc function
 * @name angularjsDemoClase3App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularjsDemoClase3App
 */
angular.module('angularjsDemoClase3App')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
