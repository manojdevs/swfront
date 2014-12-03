'use strict';
angular.module('swFrontApp').controller('LoginCtrl',function($scope, auth,$location){
$scope.login = function(){
	if($scope.loginForm.$valid){
		var promise=auth.login($scope.user);
		promise.then(success,error);
	}
	else
	{
		$scope.loginForm.submitted=true;
	}
};
	var success= function(response){
		localStorage.setItem('auth_token',response.data.auth_token);
		$location.path('/edges');
		
	};
	var error= function(response){
		$scope.wrongCredentials=true;
	};
});