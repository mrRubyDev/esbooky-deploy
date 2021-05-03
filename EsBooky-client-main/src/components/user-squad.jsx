import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Lists from "../screens/lists";
import { useDispatch } from "react-redux";
import { delete_user_from_squad, get_user_squad } from "../redux/actions";

export default function UserSquadElement({ squad, userId }) {
	const dispatch = useDispatch();

	const leaveSquadHandler = () => {
		dispatch(delete_user_from_squad(squad.id, userId));
	};
	return (
		<View style={styles.container}>
			<View style={{ flexDirection: "row" }}>
				<Text style={styles.title}>{squad["name"]}</Text>
				<View
					style={{
						alignSelf: "flex-end",
						width: "20%",
						justifyContent: "center",
						alignContent: "center",
					}}
				>
					<Button title="Leave" color="#FC3D39" onPress={leaveSquadHandler} />
				</View>
			</View>
			<Text style={styles.id}>ID: {squad.id}</Text>
			<Text style={{ marginTop: 10, color: "#FF267C" }}>Description:</Text>
			<Text style={styles.description}>"{squad.description}"</Text>
			<Text style={{ marginTop: 10, color: "#FF267C" }}>Participants:</Text>
			<View style={styles.participant}>
				<Text> {squad.users.length} </Text>
			</View>
			<View style={{ marginLeft: "-4%" }}>
				<Lists />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingTop: "5%",
		height: "100%",
	},
	title: {
		width: "80%",
		fontSize: 35,
		fontWeight: "500",
	},
	id: {
		width: "90%",
		marginTop: 5,
		fontSize: 30,
		fontWeight: "400",
	},
	description: {
		width: "90%",
		marginTop: 2,
		fontSize: 20,
		fontWeight: "300",
	},
});
