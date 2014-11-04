'use strict';

/**
 * @ngdoc function
 * @name fitconApp.controller:ProfCtrl
 * @description
 * # MainCtrl
 * Controller of the fitconApp
 */
 app.controller('ProfCtrl', ['$rootScope', '$scope', '$location', 'Auth', function ($rootScope, $scope, $location, Auth) {

 	$scope.currentName = "Overview";
 	$scope.activeLink = "prof-overview";

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

 	$scope.setActive = function(newAct, curName){
 		if(newAct !== $scope.activeLink){
 			$('#'+newAct).attr('class', 'active');
 			$('#'+$scope.activeLink).attr('class', '');
 			$scope.activeLink = newAct;
 			$scope.currentName = curName;
 			console.log("curName: " +curName);
 		}
 	};
 	$scope.activeTab = function (name) {
 		return $scope.currentName ===name;
 	};

 	$scope.logout = function(){
 		Auth.logout();
 		$location.path('#');
 	}

 }]);
