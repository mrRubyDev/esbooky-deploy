const RoomEscape = require("../models/escapeModel");

exports.allRooms = async (req, res) => {
	try {
		const rooms = await RoomEscape.find();
		const sortedRooms = rooms.sort((a, b) => b.rating - a.rating);
		res.send(sortedRooms);
	} catch (e) {
		console.log(e);
	}
};
exports.getOne = async (req, res) => {
	const { id } = req.params;
	try {
		const room = await RoomEscape.findOne({ _id: id });
		console.log(room);
		res.status(200).send(room);
	} catch (e) {
		console.log(e);
	}
};

exports.getGenre = async (req, res) => {
	const { genre } = req.params;
	try {
		const rooms = await RoomEscape.find({ genres: genre });
		res.status(200).send(rooms);
	} catch (e) {
		console.log(e);
	}
};
exports.postOne = async (req, res) => {
	const room = req.body;
	try {
		const addedRoom = await RoomEscape.create(room);
		res.status(201).send(addedRoom);
	} catch (e) {
		console.log(e);
	}
};

exports.deleteRoom = async (req, res) => {
	const { id } = req.params;
	try {
		await RoomEscape.findByIdAndRemove(id);
		res.status(204);
		res.end();
	} catch (e) {
		console.log(e);
	}
};
