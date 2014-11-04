'use strict';

/**
 * @ngdoc function
 * @name fitconApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the fitconApp
 */
 app.controller('MainCtrl', ['$scope', '$rootScope', '$location', 'Auth', function ( $scope, $rootScope, $location, Auth) {
 	$scope.awesomeThings = [
 	'HTML5 Boilerplate',
 	'AngularJS',
 	'Karma'
 	];

 	$scope.redirectRegister = function(){
 		if($rootScope.signedIn()){
 			$location.path("/profile");
 		}else{
 			$location.path("/register");
 		}
 	};
 	$scope.redirectMain = function(){
 		$location.path("/");
 	};
 	$scope.redirectLogin = function(){
 		if($rootScope.signedIn()){
 			$location.path("/profile");
 		}else{
 			$location.path("/login");
 		}
 	};
 	$scope.redirectBusreg = function(){
 		if($rootScope.signedIn()){
 			$location.path("/profile");
 		}else{
 			$location.path("/busRegister");
 		}
 	};
 }]);
