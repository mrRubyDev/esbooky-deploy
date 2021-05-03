import { combineReducers } from "redux";

const initialUser = {};
function user(state = initialUser, action) {
	switch (action.type) {
		case "LOG_OUT_USER":
			return initialUser;
		case "SET_USER_INFO":
			return action.user;
		case "ADD_SAVED_LIST":
			const newList = {
				...state,
				fav_list: [...state.fav_list, action.roomId],
			};
			return newList;

		case "ADD_COMPLETED_LIST":
			const newList1 = {
				...state,
				completed_list: [...state.completed_list, action.roomId],
			};
			return newList1;

		case "DELETE_FROM_SAVED":
			const filteredSaved = state.fav_list.filter(id => id !== action.roomId);
			const newState = { ...state, fav_list: [...filteredSaved] };
			return newState;

		case "DELETE_FROM_COMPLETED":
			const filteredComp = state.completed_list.filter(
				id => id !== action.roomId
			);
			const newStateComp = { ...state, completed_list: [...filteredComp] };
			return newStateComp;

		default:
			return state;
	}
}
const initialLogin = false;
function login(state = initialLogin, action) {
	switch (action.type) {
		case "SET_LOGIN_TRUE":
			return true;
		case "SET_LOGIN_FALSE":
			return false;
		case "WRONG_CREDENTIALS":
			return "error";
		default:
			return state;
	}
}
const initialId = null;
function selected_id(state = initialId, action) {
	switch (action.type) {
		case "SELECT_ROOM_ID":
			return action.id;
		default:
			return state;
	}
}
const initialRooms = [];
function rooms(state = initialRooms, action) {
	switch (action.type) {
		case "SELECT_GENRE":
			return action.genre;
		case "FETCH_ROOMS":
			return action.list;

		default:
			return state;
	}
}

const initialSquad = null;
function squad(state = initialSquad, action) {
	switch (action.type) {
		case "SET_SQUAD_INFO":
			return action.squad;
		case "POST_NEW_SQUAD":
			return action.squad;
		case "ADD_SQUAD_SAVED_LIST":
			const newSquadList = {
				...state,
				fav_list: [...state.fav_list, action.roomId],
			};
			return newSquadList;

		case "ADD_SQUAD_COMPLETED_LIST":
			const newSquadList1 = {
				...state,
				completed_list: [...state.completed_list, action.roomId],
			};
			return newSquadList1;

		case "DELETE_FROM_SQUAD_SAVED":
			const filteredSquadSaved = state.fav_list.filter(
				id => id !== action.roomId
			);
			const newSquadState = { ...state, fav_list: [...filteredSquadSaved] };
			return newSquadState;

		case "DELETE_FROM_SQUAD_COMPLETED":
			const filteredSquadComp = state.completed_list.filter(
				id => id !== action.roomId
			);
			const newSquadStateComp = {
				...state,
				completed_list: [...filteredSquadComp],
			};
			return newSquadStateComp;

		case "DELETE_USER_FROM_SQUAD":
			return initialSquad;
		default:
			return initialSquad;
	}
}

export default combineReducers({ user, login, selected_id, rooms, squad });
