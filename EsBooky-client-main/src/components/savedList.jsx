import React, { useEffect, useState } from "react";
import { StyleSheet, FlatList, View, ScrollView } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { add_completed_list, delete_from_saved } from "../redux/actions";

import RoomElementList from "./roomElementList";

export default function SavedList({ userId }) {
	const rooms = useSelector(state => state.rooms);
	const user = useSelector(state => state.user);

	const [roomList, setRoomList] = useState([]);

	const dispatch = useDispatch();

	useEffect(() => {
		if (rooms.length) {
			setRoomList(rooms.filter(el => user.fav_list.includes(el._id)));
		}
	}, [user]);

	const handleCompleted = roomId => {
		dispatch(add_completed_list(roomId, userId));
	};
	const handleDelete = roomId => {
		dispatch(delete_from_saved(roomId, userId));
	};

	return (
		<View style={styles.container}>
			<FlatList
				style={{
					flex: 1,
				}}
				showsVerticalScrollIndicator={false}
				bounces={false}
				data={roomList}
				keyExtractor={item => item._id.toString()}
				renderItem={({ item, index }) => (
					<View key={index}>
						<RoomElementList
							room={item}
							key={index}
							id={index}
							userId={userId}
							handleDelete={handleDelete}
							handleComplete={handleCompleted}
							complete={false}
						/>
					</View>
				)}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		marginVertical: 10,
	},
	input: {
		height: 35,
		width: "80%",
		borderWidth: 1,
		borderRadius: 15,
		borderColor: "#AAAAAA",
		paddingLeft: 7,
	},
	filterContainer: {
		width: "20%",
		justifyContent: "center",
		alignItems: "center",
	},
});
