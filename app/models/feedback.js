var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var FeedbackSchema = new Schema({

	creator: { type: Schema.Types.ObjectId, ref: 'User' },
	strength: String,
	weakness: String,
	created: { type: Date, defauly: Date.now},
	createdFor: String,
	createdBy: String

});

module.exports = mongoose.model('Feedback', FeedbackSchema);