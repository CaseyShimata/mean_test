var mongoose = require('mongoose');
var User = mongoose.model('User');
var Poll = mongoose.model('Poll');
module.exports = {
	register_login: function(req, res){
		User.findOne({name: req.body.name}, function(err, data){
			if(data == null){
				var user = new User(req.body);
				user.save(function(err,data){ //.save with the new User saves the req.body keys values in the database
					if(err){
						res.status(400).send("User did not save.")
					}
					else{
						req.session.user = data;
						res.sendStatus(200);
					}
				})
			}
			else{
				req.session.user = data; //user from login form/ user in the logincontroller/ data: user in the mainfactory/ to session in the server controller and thus server
				res.sendStatus(200);
			}
		})
	},
	currentuser: function(req, res){
		if(req.session.user){
			res.json(req.session.user);
		}
		else{
			res.status(401).send("No user in session.");
		}
	},
	logout: function(req, res){
		req.session.destroy();
		res.redirect('/')
	},
	indexpolls: function(req, res){
		Poll.find({}).populate('_user').exec(function(err, data){  //allows the comments id in Post to be injected and allows the _user id in Comment to be populated to grab the Comment _user.name
			if(err){
				res.status(400).send("Problem getting all the posts and their users populated info and their populated options arrays.")
			}
			else{
				res.json(data);
			}
		})
	},
	createpoll: function(req, res){
		var newpoll = new Poll({poll: req.body.poll, option1: req.body.option1, option2: req.body.option2, option3: req.body.option3, option4: req.body.option4, _user: req.session.user._id});
		newpoll.save(function(err, data){
			if(err){
				res.status(400).send("Problem saving poll");
			}
			else{
				console.log(data);
				res.sendStatus(200);
			}
		})
	},
	showpoll: function(req, res){
		Poll.findOne({_id: req.params.poll_id}).populate('_user').exec(function(err, data){
			if(err){
				res.status(400).send(err);
			}
			else{
				res.json(data);
			}
		})
	},
	vote1: function(req, res){
		Poll.findOne({_id: req.params.currentpoll_id}, function(err, data){
			if(err){
				res.status(400).send(err + 'could not find a answer with that info line 104 server controller');
			}
			else{
				data.votes1 += 1;
				console.log(data);
				data.save(function(err, showpoll){
					if(err){
						res.status(400).send(err);
					}
					else{
						res.sendStatus(200);
					}
				})
			}
		})
	},
	vote2: function(req, res){
		Poll.findOne({_id: req.params.currentpoll_id}, function(err, data){
			if(err){
				res.status(400).send(err + 'could not find a answer with that info line 104 server controller');
			}
			else{
				data.votes2 += 1;
				console.log(data);
				data.save(function(err, showpoll){
					if(err){
						res.status(400).send(err);
					}
					else{
						res.sendStatus(200);
					}
				})
			}
		})
	},
	vote3: function(req, res){
		Poll.findOne({_id: req.params.currentpoll_id}, function(err, data){
			if(err){
				res.status(400).send(err + 'could not find a answer with that info line 104 server controller');
			}
			else{
				data.votes3 += 1;
				console.log(data);
				data.save(function(err, showpoll){
					if(err){
						res.status(400).send(err);
					}
					else{
						res.sendStatus(200);
					}
				})
			}
		})
	},
	vote4: function(req, res){
		Poll.findOne({_id: req.params.currentpoll_id}, function(err, data){
			if(err){
				res.status(400).send(err + 'could not find a answer with that info line 104 server controller');
			}
			else{
				data.votes4 += 1;
				console.log(data);
				data.save(function(err, showpoll){
					if(err){
						res.status(400).send(err);
					}
					else{
						res.sendStatus(200);
					}
				})
			}
		})
	},
	delete: function(req, res){
		Poll.remove({_id: req.params.poll_id}, function(err, data){
			if(err){
				res.status(400).send(err + 'could not find a answer with that info line 104 server controller');
			}
			else{
				res.status(200).send('successfully deleted');
			}
		})
	},
	edit: function(req, res){
		Poll.findOne({_id: req.params.currentpoll_id}, function(err, data){
			if(err){
				res.status(400).send(err + 'could not find a answer with that info line 104 server controller');
			}
			else{
				// console.log(data);
				data.poll = req.body.poll ||data.poll;
				data.option1 = req.body.option1 ||data.option1;
				data.option2 = req.body.option2 ||data.option2;
				data.option3 = req.body.option3 ||data.option3;
				data.option4 = req.body.option4 ||data.option4;
				data.save(function(err, data){
					if(err){
						res.status(400).send("Problem saving poll");
					}
					else{
						console.log(data);
						res.sendStatus(200);
					}
				})
			}
		})
	},
}
//------------
