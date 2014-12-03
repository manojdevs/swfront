'use strict';
angular.module('swFrontApp').service('auth',function($http){
	this.login=function(user){
		return $http.post('/api/login',{email: user.email,password: user.password});
	};
	this.logout=function(){
		return $http.delete('/api/logout');
	};
	this.isLoggedIn=function(){
		return(localStorage.getItem('auth_token'))? true : false;
	};
});