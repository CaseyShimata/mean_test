var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var deepPopulate = require('mongoose-deep-populate')(mongoose);

var UserSchema = new mongoose.Schema({
	name: {type:String, required: true, unique: true},
	polls: [{type:Schema.Types.ObjectId, ref: 'Poll'}]
}, {timestamps:true})
//
var PollSchema = new mongoose.Schema({
	_user: {type: Schema.Types.ObjectId, ref: 'User'},
	poll: {type:String, required: true},
	option1: {type:String, required: true},
	votes1: {type:Number, default:0},
	option2: {type:String, required: true},
	votes2: {type:Number, default:0},
	option3: {type:String, required: true},
	votes3: {type:Number, default:0},
	option4: {type:String, required: true},
	votes4: {type:Number, default:0},}, {timestamps: true})
//
mongoose.model('User', UserSchema);
mongoose.model('Poll', PollSchema);
