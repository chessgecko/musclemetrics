'use strict';

/**
 * @ngdoc function
 * @name fitconApp.controller:AuthCtrl
 * @description
 * # MainCtrl
 * Controller of the fitconApp
 */
 app.controller('AuthCtrl', [ '$scope', '$rootScope', '$location', 'Auth', function ($scope, $rootScope, $location, Auth) {
 	
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
 	$scope.register = function(){
 		Auth.register($scope.user).then(function(user){
 			$location.path("/profile");
 		}, function(error){
 			alert(error);
 		});
 	};
 	$scope.login = function(){
 		Auth.login($scope.user).then(function (user){
 			$location.path("/profile");
 		}, function(error){
 			alert("incorrect username or password");
 		});
 	};
 	$scope.logout = function(){
 		Auth.logout();
 	}

 }]);