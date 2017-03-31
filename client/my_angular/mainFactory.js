app.factory('mainFactory', ['$location', '$http', function($location, $http){
	var factory = {};

	factory.register_login = function(user){
		$http({url: '/register_login', method: 'POST', data: user}).then(function(res){
			$location.url('/index_polls')
		},
		function(res){
			console.log(res);
		})
	};
	factory.currentuser = function(callback){
		$http({url: '/currentuser',method: 'GET'}).then(function(res){
			callback(res.data); //is the object user in json req.session
		},
		function(res){
			$location.url('/')
		})
	};
	factory.indexpolls = function(callback){
		$http({url: '/indexpolls',method: 'GET'}).then(function(res){
			console.log(res);
			callback(res.data);
		},
		function(res){
			console.log(res);
		})
	};
	factory.createpoll = function(newpoll, callback){
		console.log('printing data in the factory ', newpoll)
		$http({url:'/createpoll',method: 'POST',data: newpoll}).then(function(res){
			console.log(res);
			callback();  // -- this callback is the indexposts function
			$location.url('/index_polls');
		})
	};
	factory.showpoll = function(poll_id, callback){
		$http({url: '/showpoll/' + poll_id ,method: 'GET'}).then(function(res){
			callback(res.data);
		},
		function(res){
		})
	};
	factory.vote1 = function(currentpoll_option, currentpoll_id, callback){
		$http({url: '/vote1/' + currentpoll_id, method: 'POST',data: currentpoll_option}).then(function(res){
			callback(currentpoll_id);
			console.log(res);
		})
	};
	factory.vote2 = function(currentpoll_option, currentpoll_id, callback){
		$http({url: '/vote2/' + currentpoll_id, method: 'POST',data: currentpoll_option}).then(function(res){
			callback(currentpoll_id);
			console.log(res);
		})
	};
	factory.vote3 = function(currentpoll_option, currentpoll_id, callback){
		$http({url: '/vote3/' + currentpoll_id, method: 'POST',data: currentpoll_option}).then(function(res){
			callback(currentpoll_id);
			console.log(res);
		})
	};
	factory.vote4 = function(currentpoll_option, currentpoll_id, callback){
		$http({url: '/vote4/' + currentpoll_id, method: 'POST',data: currentpoll_option}).then(function(res){
			callback(currentpoll_id);
			console.log(res);
		})
	};
	factory.delete = function(poll_id, indexpolls){
		$http({url: '/delete/' + poll_id, method: 'GET'}).then(function(res){
			indexpolls(poll_id);
		})
	};
	factory.edit = function(editpoll, currentpoll_id, indexpolls){
		$http({url: '/edit/' + currentpoll_id, method: 'POST', data: editpoll}).then(function(res){
			indexpolls(currentpoll_id);
			$location.url('/index_polls');
		})
	}


	return factory;
}])
