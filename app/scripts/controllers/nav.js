'use strict';
angular.module('swFrontApp').controller('NavCtrl',function($scope,$location,auth){
   $scope.isLoggedIn=auth.isLoggedIn(); 
   
   $scope.logout=function(){
   	var promise=auth.logout();
   	promise.then(function(){
   		localStorage.removeItem('auth_token');
   		$location.path('/login');
   	});
   };

   $scope.isActive=function(path){
   	return path === $location.path();

   };
});