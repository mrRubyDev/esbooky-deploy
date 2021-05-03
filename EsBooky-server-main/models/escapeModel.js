const mongoose = require("./index");

const roomSchema = mongoose.Schema({
	name: {
		type: String,
		require: true,
	},
	_id: {
		type: Number,
		require: true,
	},
	rating: {
		type: Number,
		require: true,
	},
	price: {
		type: [Number],
		require: true,
	},
	genres: {
		type: [String],
		require: true,
	},
	contact_info: {
		address: {
			type: String,
			require: true,
		},
		phone_number: {
			type: Number,
			require: true,
		},
		email: {
			type: String,
			require: true,
		},
		websiteURL: {
			type: String,
			require: true,
		},
		booking_website: String,
	},

	participants: {
		type: String,
		require: true,
	},

	imgUrl: {
		type: String,
		require: true,
	},

	difficulty: {
		type: String,
		require: true,
	},

	description: {
		type: String,
		require: true,
	},
	duration: {
		type: Number,
		require: true,
	},
});

const EscapeRoom = mongoose.model("rooms", roomSchema);
module.exports = EscapeRoom;
