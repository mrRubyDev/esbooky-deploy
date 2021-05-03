const baseURL = "http://192.168.1.132:3000/";

export const getRooms = async () => {
	return fetch(baseURL + "rooms")
		.then(data => data.json())
		.then(topics => topics)
		.catch(err => console.log(err));
};
export const getGenre = async genre => {
	try {
		const res = await fetch(baseURL + genre);
		const data = await res.json();
		return data;
	} catch (e) {
		console.log("There is an error with getGenre: ", e);
	}
};

export const getOne = async id => {
	try {
		const res = await fetch(baseURL + "rooms/" + id);
		const data = await res.json();
		return data;
	} catch (e) {
		console.log("There is an error with getOne: ", e);
	}
};

export const newUser = async (name, email, pass) => {
	const header = new Headers();
	header.append("Content-Type", "application/json");
	const res = await fetch(baseURL + "addUser", {
		method: "POST",
		headers: header,
		body: JSON.stringify({
			name: name,
			email: email.toLowerCase(),
			password: pass,
		}),
		redirect: "follow",
	})
		.then(response => response.text())
		.then(result => console.log(result))
		.catch(error => console.log("error with new User: ", error));
};

export const checkCredentials = async email => {
	try {
		const res = await fetch(baseURL + "login/" + email);
		const data = await res.json();
		console.log(data);
		return data;
	} catch (e) {
		console.log("There is an error with check Credentials: ", e);
	}
};

export const postToFavs = async (roomId, userId) => {
	const myHeaders = new Headers();
	myHeaders.append("Content-Type", "application/json");

	const raw = JSON.stringify({
		roomId: roomId,
		userId: userId,
	});

	const res = await fetch(baseURL + "postToFavs", {
		method: "POST",
		headers: myHeaders,
		body: raw,
		redirect: "follow",
	})
		.then(response => response.text())
		.then(result => console.log(result))
		.catch(error => console.log("There's an error with get Fav: ", error));
};

export const deleteFromFavs = async (roomId, userId) => {
	const myHeaders = new Headers();
	myHeaders.append("Content-Type", "application/json");

	const raw = JSON.stringify({
		roomId: roomId,
		userId: userId,
	});

	const res = fetch(baseURL + "deleteFavs", {
		method: "DELETE",
		headers: myHeaders,
		body: raw,
		redirect: "follow",
	})
		.then(response => response.text())
		.then(result => console.log(result))
		.catch(error => console.log("There is an error with delete Fav: ", error));
};

export const postToCompleted = async (roomId, userId) => {
	const myHeaders = new Headers();
	myHeaders.append("Content-Type", "application/json");

	const raw = JSON.stringify({
		roomId: roomId,
		userId: userId,
	});

	const res = await fetch(baseURL + "postCompleted", {
		method: "POST",
		headers: myHeaders,
		body: raw,
		redirect: "follow",
	})
		.then(response => response.text())
		.then(result => console.log(result))
		.catch(error =>
			console.log("There's an error with get postCompleted: ", error)
		);
};

export const deleteFromCompleted = async (roomId, userId) => {
	const myHeaders = new Headers();
	myHeaders.append("Content-Type", "application/json");

	const raw = JSON.stringify({
		roomId: roomId,
		userId: userId,
	});

	const res = fetch(baseURL + "deleteCompleted", {
		method: "DELETE",
		headers: myHeaders,
		body: raw,
		redirect: "follow",
	})
		.then(response => response.text())
		.then(result => console.log(result))
		.catch(error => console.log("There is an error with delete Fav: ", error));
};

//SQUAD SERVICES
export const postNewSquad = async (squadName, squadDescription, squadID) => {
	const myHeaders = new Headers();
	myHeaders.append("Content-Type", "application/json");

	const raw = JSON.stringify({
		name: squadName,
		description: squadDescription,
		id: squadID,
	});
	const res = fetch(baseURL + "postSquad", {
		method: "POST",
		headers: myHeaders,
		body: raw,
		redirect: "follow",
	})
		.then(response => response.text())
		.then(result => console.log(result))
		.catch(error => console.log("Error with postNewSquad:", error));
};

export const getSquadInfo = async squadId => {
	const myHeaders = new Headers();
	myHeaders.append("Content-Type", "application/json");

	const res = fetch(baseURL + "squad/" + squadId)
		.then(response => response.text())
		.then(result => console.log(result))
		.catch(error => console.log("Error with getSquadInfo:", error));
};

export const getUserSquad = userId => {
	const myHeaders = new Headers();
	myHeaders.append("Content-Type", "application/json");

	return fetch(baseURL + "squad/" + "users/" + userId)
		.then(response => response.json())
		.then(result => {
			console.log(result);
			return result;
		})
		.catch(error => console.log("Error with getSquadInfo:", error));
};

export const addUserToSquad = (squadID, userId) => {
	const myHeaders = new Headers();
	myHeaders.append("Content-Type", "application/json");
	const raw = JSON.stringify({
		userId: userId,
	});
	return fetch(baseURL + "squad/" + squadID, {
		method: "POST",
		headers: myHeaders,
		body: raw,
		redirect: "follow",
	})
		.then(response => response.text())
		.then(result => console.log(result))
		.catch(error => console.log("Error with postUserToSquad:", error));
};

export const postToSquadCompleted = async (squadID, roomId) => {
	const myHeaders = new Headers();
	myHeaders.append("Content-Type", "application/json");

	const raw = JSON.stringify({
		roomId: roomId,
	});
	const res = fetch(baseURL + "squad/" + squadID + "/postCompleted", {
		method: "POST",
		headers: myHeaders,
		body: raw,
		redirect: "follow",
	})
		.then(response => response.text())
		.then(result => console.log(result))
		.catch(error => console.log("Error with postToSquadCompleted:", error));
};

export const deleteFromSquadCompleted = async (squadID, roomId) => {
	const myHeaders = new Headers();
	myHeaders.append("Content-Type", "application/json");

	const raw = JSON.stringify({
		roomId: roomId,
	});
	const res = fetch(baseURL + "squad/" + squadID + "/deleteCompleted", {
		method: "DELETE",
		headers: myHeaders,
		body: raw,
		redirect: "follow",
	})
		.then(response => response.text())
		.then(result => console.log(result))
		.catch(error => console.log("Error with deleteFromSquadCompleted:", error));
};

export const postToSquadFavs = async (squadID, roomId) => {
	const myHeaders = new Headers();
	myHeaders.append("Content-Type", "application/json");

	const raw = JSON.stringify({
		roomId: roomId,
	});
	const res = fetch(baseURL + "squad/" + squadID + "/postToFavs", {
		method: "POST",
		headers: myHeaders,
		body: raw,
		redirect: "follow",
	})
		.then(response => response.text())
		.then(result => console.log(result))
		.catch(error => console.log("Error with postToSquadFavs:", error));
};

export const deleteFromSquadFavs = async (squadID, roomId) => {
	const myHeaders = new Headers();
	myHeaders.append("Content-Type", "application/json");

	const raw = JSON.stringify({
		roomId: roomId,
	});
	const res = fetch(baseURL + "squad/" + squadID + "/deleteFavs", {
		method: "DELETE",
		headers: myHeaders,
		body: raw,
		redirect: "follow",
	})
		.then(response => response.text())
		.then(result => console.log(result))
		.catch(error => console.log("Error with deleteFromSquadFavs:", error));
};

export const deleteUserFromSquad = async (squadID, userId) => {
	const myHeaders = new Headers();
	myHeaders.append("Content-Type", "application/json");

	const raw = JSON.stringify({
		userId: userId,
	});

	return fetch(baseURL + "squad/" + squadID + "/deleteUser", {
		method: "DELETE",
		headers: myHeaders,
		body: raw,
		redirect: "follow",
	})
		.then(response => response.text())
		.then(result => console.log(result))
		.catch(error => console.log("Error with deleteFromSquadFavs:", error));
};
