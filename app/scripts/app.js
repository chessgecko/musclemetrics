/* global app:true */

'use strict';

/**
 * @ngdoc overview
 * @name fitconApp
 * @description
 * # fitconApp
 *
 * Main module of the application.
 */
 var app = angular
 .module('fitconApp', [
  'ngAnimate',
  'ngCookies',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'ngTouch',
  ]).constant('SERVER_URL', 'http://104.236.59.44:3000/api/');
 
 app.config(function ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'views/main.html',
    controller: 'MainCtrl'
  })
  .when('/about', {
    templateUrl: 'views/about.html',
    controller: 'AboutCtrl'
  })
  .when('/login', {
    templateUrl: '/views/login.html',
    controller: 'AuthCtrl'
  })
  .when('/register', {
    templateUrl: '/views/register.html',
    controller: 'AuthCtrl'
  })
  .when('/busRegister', {
    templateUrl: '/views/busRegister.html',
    controller: 'AuthCtrl'
  })
  .when('/profile', {
    templateUrl: '/views/profile.html',
    controller: 'ProfCtrl'
  })
  .otherwise({
    redirectTo: '/'
  });
});
