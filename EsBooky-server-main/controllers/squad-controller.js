const Squad = require("../models/squadModel");

exports.newSquad = async (req, res) => {
	const squad = req.body;
	try {
		const addedSquad = await Squad.create(squad);
		res.status(201).send(addedSquad);
	} catch (e) {
		console.log(e, "Error with get new squad");
	}
};

exports.getUserSquads = async (req, res) => {
	const { id } = req.params;
	try {
		const userSquads = await Squad.findOne({ users: id });
		if (userSquads) res.status(200).send(userSquads);
		else res.status(404);
	} catch (e) {
		console.log(e, "Error with get user squads");
	}
};

exports.getSquadInfo = async (req, res) => {
	const { id } = req.params;
	try {
		const squad = await Squad.findOne({ id: id });
		res.status(200).send(squad);
	} catch (e) {
		console.log(e, "Error with get Squad info");
	}
};

exports.addUserToSquad = async (req, res) => {
	const userId = req.body.userId;
	const { squadId } = req.params;
	try {
		const squad = await Squad.findOne({ id: squadId });
		squad.users.push(userId);
		squad.save();
		res.status(200).send(squad);
	} catch (e) {
		console.log(e, "Error with get addUserToSquad");
	}
};
exports.deleteUserFromSquad = async (req, res) => {
	const userId = req.body.userId;
	const { squadId } = req.params;
	try {
		const squad = await Squad.findOne({ id: squadId });
		const userIndex = await squad.users.indexOf(userId);
		squad.users.splice(userIndex, 1);
		squad.save();
		res.status(200).send(squad);
	} catch (e) {
		console.log(e, "Error with get deleteUserFromSquad");
	}
};

exports.postToSquadCompleted = async (req, res) => {
	const { squadId } = req.params;
	const roomId = req.body.roomId;
	try {
		const squad = await Squad.findOne({ id: squadId });
		if (!squad.completed_list.includes(roomId)) {
			squad.completed_list.push(roomId);
			squad.save();
			res.sendStatus(200).send(squad);
		} else {
			res.sendStatus(400);
		}
	} catch (e) {
		console.log(e, "Error with get postToSquadCompleted");
	}
};

exports.deleteSquadCompleted = async (req, res) => {
	const { squadId } = req.params;
	const roomId = req.body.roomId;
	try {
		const squad = await Squad.findOne({ id: squadId });
		const roomIndex = await squad.completed_list.indexOf(roomId);
		squad.completed_list.splice(roomIndex, 1);
		squad.save();
		res.sendStatus(200).send(squad);
	} catch (e) {
		console.log(e, "Error with get deleteSquadCompleted");
	}
};

exports.postToSquadFavs = async (req, res) => {
	const { squadId } = req.params;
	const roomId = req.body.roomId;
	try {
		const squad = await Squad.findOne({ id: squadId });
		if (!squad.fav_list.includes(roomId)) {
			squad.fav_list.push(roomId);
			squad.save();
			res.sendStatus(200);
		} else {
			res.sendStatus(400);
		}
	} catch (e) {
		console.log(e, "Error with get postToSquadFavs");
	}
};

exports.deleteSquadFavs = async (req, res) => {
	const { squadId } = req.params;
	const roomId = req.body.roomId;
	try {
		const squad = await Squad.findOne({ id: squadId });
		const roomIndex = await squad.fav_list.indexOf(roomId);
		squad.fav_list.splice(roomIndex, 1);
		squad.save();
		res.sendStatus(200);
	} catch (e) {
		console.log(e, "Error with get deleteSquadFavs");
	}
};
