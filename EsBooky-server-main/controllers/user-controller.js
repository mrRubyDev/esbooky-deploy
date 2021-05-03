const User = require("../models/userModel");

exports.checkEmail = async (req, res) => {
	const { email } = req.params;
	try {
		const emailFound = await User.findOne({ email: email });
		if (emailFound) {
			res.status(200).send(emailFound);
		}
		// res.status(200).send(emailFound);
	} catch (e) {
		console.log(e);
	}
};

exports.newUser = async (req, res) => {
	const user = req.body;
	try {
		const userExists = await User.find({ email: user.email });
		if (userExists.length) res.status(400).send(userExists);
		else {
			const addedUser = await User.create(user);
			res.status(201).send(addedUser);
		}
	} catch (e) {
		console.log(e);
	}
};

exports.postToCompleted = async (req, res) => {
	const userId = req.body.userId;
	const roomId = req.body.roomId;
	try {
		const user = await User.findOne({ id: userId });
		if (!user.completed_list.includes(roomId)) {
			user.completed_list.push(roomId);
			user.save();
			res.sendStatus(200);
		} else {
			res.sendStatus(400);
		}
	} catch (e) {
		console.log(e);
	}
};

exports.deleteCompleted = async (req, res) => {
	const userId = req.body.userId;
	const roomId = req.body.roomId;
	try {
		const user = await User.findOne({ id: userId });
		const roomIndex = await user.completed_list.indexOf(roomId);
		user.completed_list.splice(roomIndex, 1);
		user.save();
		res.sendStatus(200);
	} catch (e) {
		console.log(e);
	}
};

exports.postToFavs = async (req, res) => {
	const userId = req.body.userId;
	const roomId = req.body.roomId;
	try {
		const user = await User.findOne({ id: userId });
		if (!user.fav_list.includes(roomId)) {
			user.fav_list.push(roomId);
			user.save();
			res.sendStatus(200);
		} else {
			res.sendStatus(400);
		}
	} catch (e) {
		console.log(e);
	}
};

exports.deleteFavs = async (req, res) => {
	const userId = req.body.userId;
	const roomId = req.body.roomId;
	try {
		const user = await User.findOne({ id: userId });
		const roomIndex = await user.fav_list.indexOf(roomId);
		user.fav_list.splice(roomIndex, 1);
		user.save();
		res.sendStatus(200);
	} catch (e) {
		console.log(e);
	}
};

// exports.postOne = async (req, res) => {
// 	const room = req.body;
// 	console.log("Room:", room);
// 	try {
// 		const addedRoom = await RoomEscape.create(room);
// 		res.status(201).send(addedRoom);
// 	} catch (e) {
// 		console.log(e);
// 	}
// };
