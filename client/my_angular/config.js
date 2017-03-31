var app = angular.module('app', ['ngRoute', 'ngMessages']);
app.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: 'partials/home.html',
			controller: 'mainController'
		})
		.when('/index_polls', {
			templateUrl: 'partials/index_polls.html',
			controller: 'mainController'
		})
		.when('/create_poll', {
			templateUrl: 'partials/create_poll.html',
			controller: 'mainController'
		})
		.when('/show_poll/:poll_id', {
			templateUrl: 'partials/show_poll.html',
			controller: 'mainController'
		})
		.when('/edit/:poll_id', {
			templateUrl: 'partials/edit_poll.html',
			controller: 'mainController'
		})
		.otherwise({
			redirectTo: '/'
		})
})
