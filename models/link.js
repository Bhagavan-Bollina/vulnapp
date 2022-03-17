const mongoose = require('mongoose');
const Schema = mongoose.Schema;



linkSchema = new Schema( {
	unique_id: Number,
	username:{type: String},
	siteName: {type: String },
	siteUrl: {type: String, required: true}
}),
Link = mongoose.model('Link', linkSchema);

module.exports = Link;