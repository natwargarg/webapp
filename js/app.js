'use strict';

/* App Module */

var compsApp = angular.module('compsApp', ['ngRoute']);

compsApp.config(['$routeProvider', function($routeProvider) {
$routeProvider.
  
  when('/home', {
      templateUrl: 'templates/home.html',
      controller: 'homeCtrl'
    }).
  
  when('/chart', {
      templateUrl: 'templates/chart.html',
      controller: 'chartCtrl'
    }).
  
  otherwise({
    redirectTo: '/home'
  });

}]);