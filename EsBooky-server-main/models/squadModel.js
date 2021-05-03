const mongoose = require("./index");

const squadSchema = mongoose.Schema({
	name: {
		type: String,
		require: true,
	},
	description: {
		type: String,
		require: false,
	},
	id: {
		type: Number,
		require: true,
	},
	fav_list: {
		type: [Object],
		require: false,
	},
	completed_list: {
		type: [Object],
		require: false,
	},
	users: {
		type: [Number],
		require: false,
	},
});

const Squad = mongoose.model("squads", squadSchema);
module.exports = Squad;
