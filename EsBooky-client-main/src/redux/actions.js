import {
	getRooms,
	checkCredentials,
	postToFavs,
	postToCompleted,
	deleteFromFavs,
	deleteFromCompleted,
	postNewSquad,
	getSquadInfo,
	getUserSquad,
	addUserToSquad,
	postToSquadCompleted,
	deleteFromSquadCompleted,
	postToSquadFavs,
	deleteFromSquadFavs,
	deleteUserFromSquad,
	newUser,
} from "./../../apiService";

export const select_id = id => ({
	type: "SELECT_ROOM_ID",
	id,
});
export const select_genre = genre => ({
	type: "SELECT_GENRE",
	genre,
});

export const fetch_rooms = () => {
	return dispatch => {
		getRooms()
			.then(rooms =>
				dispatch({
					type: "FETCH_ROOMS",
					list: rooms,
				})
			)
			.catch(e => console.log(e));
	};
};

export const add_saved_list = (roomId, userId) => {
	return dispatch => {
		postToFavs(roomId, userId)
			.then(() => {
				dispatch({
					type: "ADD_SAVED_LIST",
					roomId,
				});
			})
			.catch(e => console.log(e, "Error with add_saved_list"));
	};
};

export const add_completed_list = (roomId, userId) => {
	return dispatch => {
		postToCompleted(roomId, userId)
			.then(() => {
				deleteFromFavs(roomId, userId).then(() => {
					console.log("Getting here");
					dispatch({
						type: "ADD_COMPLETED_LIST",
						roomId,
					});
					dispatch({
						type: "DELETE_FROM_SAVED",
						roomId,
					});
				});
			})
			.catch(e => console.log(e, "Error with add_completed_list"));
	};
};

export const delete_from_saved = (roomId, userId) => {
	return dispatch => {
		deleteFromFavs(roomId, userId)
			.then(() => {
				dispatch({
					type: "DELETE_FROM_SAVED",
					roomId,
				});
			})
			.catch(e => console.log(e, "Error with delete_from_saved"));
	};
};
export const delete_from_completed = (roomId, userId) => {
	return dispatch => {
		deleteFromCompleted(roomId, userId)
			.then(() => {
				dispatch({
					type: "DELETE_FROM_COMPLETED",
					roomId,
				});
			})
			.catch(e => console.log(e, "Error with delete_from_saved"));
	};
};

export const set_login_true = () => ({
	type: "SET_LOGIN_TRUE",
});

export const set_user_info = (email, pass) => {
	return dispatch => {
		checkCredentials(email)
			.then(user => {
				console.log(user);
				if (user && user.password === pass) {
					dispatch({
						type: "SET_LOGIN_TRUE",
					});
					dispatch({
						type: "SET_USER_INFO",
						user,
					});
				} else {
					dispatch({
						type: "WRONG_CREDENTIALS",
					});
				}
			})
			.catch(e => console.log(e));
	};
};
export const create_new_user = (name, email, pass) => {
	return dispatch => {
		newUser(name, email, pass)
			.then(user => {
				console.log(user);
				dispatch({
					type: "SET_LOGIN_TRUE",
				});
				dispatch({
					type: "SET_USER_INFO",
					user,
				});
			})
			.catch(e => console.log(e));
	};
};

export const get_user_squad = userId => {
	return dispatch => {
		getUserSquad(userId)
			.then(squad => {
				dispatch({
					type: "SET_SQUAD_INFO",
					squad,
				});
			})
			.catch(e => console.log(e));
	};
};

export const delete_user_from_squad = (squadID, userId) => {
	return dispatch => {
		deleteUserFromSquad(squadID, userId)
			.then(() => {
				dispatch({
					type: "DELETE_USER_FROM_SQUAD",
					userId,
				});
			})
			.catch(e => console.log(e, "Error with delete_user_from_squad"));
	};
};

export const add_user_to_squad = (squadId, userId) => {
	return dispatch => {
		addUserToSquad(squadId, userId).then(() => {
			getUserSquad(userId)
				.then(squad => {
					dispatch({
						type: "SET_SQUAD_INFO",
						squad,
					});
				})
				.catch(e => console.log("There's an error with add_user_to_squad", e));
		});
	};
};

export const log_out_user = () => ({
	type: "LOG_OUT_USER",
});

export const set_log_out = () => ({
	type: "SET_LOGIN_FALSE",
});
