const router = require("express").Router();
const roomController = require("./controllers/rooms-controller");
const userController = require("./controllers/user-controller");
const squadController = require("./controllers/squad-controller");

//Escape rooms routes
router.get("/rooms", roomController.allRooms);
router.get("/:genre", roomController.getGenre);
router.get("/rooms/:id", roomController.getOne);
router.post("/add", roomController.postOne);

//Users routes
router.get("/login/:email", userController.checkEmail);
router.post("/addUser", userController.newUser);
router.post("/postCompleted", userController.postToCompleted);
router.delete("/deleteCompleted", userController.deleteCompleted);
router.post("/postToFavs", userController.postToFavs);
router.delete("/deleteFavs", userController.deleteFavs);

//Squad routes
router.post("/postSquad", squadController.newSquad);
router.get("/squad/:id", squadController.getSquadInfo);
router.get("/squad/users/:id", squadController.getUserSquads);
router.post("/squad/:squadId", squadController.addUserToSquad);
router.delete(
	"/squad/:squadId/deleteUser",
	squadController.deleteUserFromSquad
);
router.post(
	"/squad/:squadId/postCompleted",
	squadController.postToSquadCompleted
);
router.delete(
	"/squad/:squadId/deleteCompleted",
	squadController.deleteUserFromSquad
);
router.post("/squad/:squadId/postToFavs", squadController.postToSquadFavs);
router.delete("/squad/:squadId/deleteFavs", squadController.deleteSquadFavs);

module.exports = router;
