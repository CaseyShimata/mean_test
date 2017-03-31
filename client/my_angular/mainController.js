app.controller('mainController', ['$scope', '$location', 'mainFactory', '$routeParams', function($scope, $location, mainFactory, $routeParams){
	$scope.register_login = function(user){
		mainFactory.register_login(user);
	}
	function currentuser(){
		mainFactory.currentuser(function(data){  //we do this when we need to get info. function/callback taking in 'data' from the factory
			$scope.user = data;  //the above call back gave us the session user as data
		});
	}
	currentuser();

	function indexpolls(){
		mainFactory.indexpolls(function(data){
			$scope.polls = data;  //---- the scope post grabs the ng-repeat in the html
		})
	}
	indexpolls();

	$scope.createpoll = function(newpoll){
		mainFactory.createpoll(newpoll, indexpolls);
		$scope.newpoll = {};
	}

	function showpoll(poll_id){
		mainFactory.showpoll(poll_id, function(data){
			console.log(data);
			$scope.currentpoll = data;
		});
	}
	showpoll($routeParams.poll_id);

	$scope.vote1 = function(currentpoll_option, currentpoll_id){
		mainFactory.vote1(currentpoll_option, currentpoll_id, showpoll)
	}
	$scope.vote2 = function(currentpoll_option, currentpoll_id){
		mainFactory.vote2(currentpoll_option, currentpoll_id, showpoll)
	}
	$scope.vote3 = function(currentpoll_option, currentpoll_id){
		mainFactory.vote3(currentpoll_option, currentpoll_id, showpoll)
	}
	$scope.vote4 = function(currentpoll_option, currentpoll_id){
		mainFactory.vote4(currentpoll_option, currentpoll_id, showpoll)
	}
	$scope.delete = function(poll_id){
		mainFactory.delete(poll_id, indexpolls)
	}
	$scope.edit = function(editpoll, currentpoll_id){
		console.log(editpoll);
		mainFactory.edit(editpoll, currentpoll_id, indexpolls);
		$scope.editpoll = {};
	}

}])
