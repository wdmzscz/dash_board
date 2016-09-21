//var loginApp = angular.module('Login', ['ui.router','ngCookies'])
App.controller('loginCtrl', function($scope, $http, $cookieStore, $location) {
    // $cookieStore.remove("username");
    //$window.alert($cookieStore.get("username"));
    var user = function(username, password) {
        this.userName = username;
        this.password = password;
    };
    $scope.submit = function() {
        var users = new user($scope.username, $scope.password);

        $http.post('http://localhost:3000/api/login', users)
            .success(function(data, status, headers, config) {
                
                if (data.authentication == "success") {

                    // $scope.test = data.authentication;
                    $cookieStore.put("username", $scope.username);
                    $location.path("/root/work");
                }
            }).error(function(data, status, headers, config) {
                $scope.errorMsg = "Login is not correct, please try again!";   
            });
    }
  
});

