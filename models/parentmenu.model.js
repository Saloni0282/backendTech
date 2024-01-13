const mongoose = require('mongoose');

const parentSchema = new mongoose.Schema({
	menu_id:{
		type:mongoose.Schema.Types.ObjectId,
		ref:'Menu'
	},
    parentMenu:String,
});
const ParentModel = mongoose.model('ParentMenu', parentSchema)

module.exports = ParentModel