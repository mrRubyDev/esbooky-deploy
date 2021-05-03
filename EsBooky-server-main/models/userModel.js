const mongoose = require("./index");

const userSchema = mongoose.Schema({
	name: {
		type: String,
		require: true,
	},
	id: {
		type: Number,
		require: true,
	},
	email: {
		type: String,
		require: true,
	},
	password: {
		type: String,
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
	my_squad: {
		type: [Number],
		require: false,
	},
});

const User = mongoose.model("users", userSchema);
module.exports = User;
