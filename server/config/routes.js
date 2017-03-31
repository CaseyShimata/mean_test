var serverController = require('./../controllers/serverController.js')

module.exports = function(app){
	app.post('/register_login', serverController.register_login);
	app.get('/logout', serverController.logout);
	app.get('/currentuser', serverController.currentuser);
	app.get('/indexpolls', serverController.indexpolls);
	app.post('/createpoll', serverController.createpoll);
	app.get('/showpoll/:poll_id', serverController.showpoll);
	app.post('/vote1/:currentpoll_id', serverController.vote1);
	app.post('/vote2/:currentpoll_id', serverController.vote2);
	app.post('/vote3/:currentpoll_id', serverController.vote3);
	app.post('/vote4/:currentpoll_id', serverController.vote4);
	app.get('/delete/:poll_id', serverController.delete);
	app.post('/edit/:currentpoll_id', serverController.edit);
}
