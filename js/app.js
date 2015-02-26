var app = angular.module('sounder', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider.when
		.when('/tracks', {
			templateUrl: '',
			controller: 'mainControl'

		})
		.when('/users', {
			resolve: {
				user: function(soundService, $routeParams){
					return soundService.getUser($routeParams.userId);
				}
			}
		})
		.otherwise('/', {
			
		})
});


//NEW STRUCTURE 
/*
templates
	tracks.html
	users.html
controller
	tracksControl
	usersControl
add ng-view to index and take away ng-controller
add ng-repeat stuff to tracks.html