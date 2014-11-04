'use strict';

app.factory('Auth', ['$http', '$rootScope', 'SERVER_URL', function ($http, $rootScope, SERVER_URL) {

  var signedIn = false;
  var currentUser = null;
  var username = "";
  var password = "";

  var Auth = {

    register: function (user) {
      if(signedIn){
        alert("register on signed in");
        return;
      }

      username = user.username;
      password = user.password;

      return $http({
        url: SERVER_URL + 'users',
        method: "POST",
        headers : { 'Content-Type': 'application/x-www-form-urlencoded' },
        data: $.param(user)
      }).success(function (data) {
        console.log("successful creation");
        console.log("data: ");
        console.log(data);
        signedIn = true;
        currentUser = data.data;
      });
    },
    signedIn: function () {
      return signedIn;
    },
    login: function (user) {
      return $http({
        url: SERVER_URL + 'users',
        method: "GET",
        headers: {
          'Authorization': 'basic ' +btoa(user.username + ":" + user.password)
        }
      }).success(function (data) {
        console.log("successful login");
        console.log("data: ")
        console.log(data);
        currentUser = data.data;
        signedIn = true;
      });
    },
    logout: function () {
      signedIn = false;
      currentUser = null;
      username = "";
      password = "";
    }
  };

  $rootScope.signedIn = function () {
    return signedIn;
  };

  $rootScope.AuthorizationHeader = function(){
    if(signedIn){
      return ('basic ' +btoa(username + ":" + password));
    } else{
      return("not signed in upon request");
    }
  };

  return Auth;
}]);