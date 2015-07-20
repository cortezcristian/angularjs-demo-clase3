'use strict';

/**
 * @ngdoc function
 * @name angularjsDemoClase3App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularjsDemoClase3App
 */
angular.module('angularjsDemoClase3App')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
