import React from "react";
import { Linking } from "react-native";
import { TouchableOpacity } from "react-native";
import { Button } from "react-native";
import { Image, StyleSheet, Text, View } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";

export default function RoomElementHome(props) {
	const img = { uri: props.room.imgURL };

	const handleBookNow = () => {
		Linking.openURL(props.room.contact_info.booking_website);
	};

	const swipeComplete = () => {
		return (
			<View style={{ width: "20%", alignItems: "center" }}>
				<View style={styles.swipeBox}>
					<TouchableOpacity onPress={() => props.handleDelete(props.room._id)}>
						<Image
							source={require("../../assets/Icons/delete-lists.png")}
							style={styles.deleteIcon}
						/>
					</TouchableOpacity>
				</View>
			</View>
		);
	};
	const swipeSaved = () => {
		return (
			<View style={{ width: "40%", flexDirection: "row" }}>
				<View style={styles.swipeBox}>
					<TouchableOpacity
						onPress={() => props.handleComplete(props.room._id)}
					>
						<Image
							source={require("../../assets/Icons/completed.png")}
							style={styles.completedIcon}
						/>
					</TouchableOpacity>
				</View>
				<View style={styles.swipeBox}>
					<TouchableOpacity onPress={() => props.handleDelete(props.room._id)}>
						<Image
							source={require("../../assets/Icons/delete-lists.png")}
							style={styles.deleteIcon}
						/>
					</TouchableOpacity>
				</View>
			</View>
		);
	};
	return (
		<View style={styles.elementContainer}>
			<View style={styles.containerImg}>
				<Image source={img} style={styles.img} />
			</View>
			<View style={styles.containerText}>
				<Swipeable
					renderRightActions={!props.complete ? swipeSaved : swipeComplete}
				>
					<Text style={styles.title} numberOfLines={1}>
						{props.room.name}
					</Text>
					{!props.complete ? (
						<View style={{ width: "100%", height: "80%" }}>
							<Text numberOfLines={3} style={{ color: "#828282" }}>
								{props.room.description}
							</Text>
							<View
								style={{
									flexDirection: "row",
									justifyContent: "center",
									alignItems: "center",
								}}
							>
								<View>
									<Button title="Book Now" onPress={handleBookNow} />
								</View>
							</View>
						</View>
					) : (
						<Text
							numberOfLines={4}
							style={{ color: "#828282", marginTop: "5%" }}
						>
							{props.room.description}
						</Text>
					)}
				</Swipeable>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	elementContainer: {
		height: 130,
		width: 387,
		borderWidth: 0.7,
		borderColor: "#BDBDBD",
		margin: "2%",
		borderRadius: 8,
		flexDirection: "row",
	},
	containerImg: {
		width: "30%",
	},
	img: {
		width: "100%",
		height: "100%",
		borderTopLeftRadius: 8,
		borderBottomLeftRadius: 8,
	},
	containerText: {
		paddingHorizontal: "4%",
		paddingVertical: "2%",
		alignItems: "flex-start",
		justifyContent: "flex-start",
		width: "70%",
	},
	title: {
		fontSize: 19,
		paddingBottom: 4,
		fontWeight: "300",
	},
	smallText: {
		fontSize: 14,
		paddingBottom: 1,
		fontWeight: "200",
	},
	buttonContainer: {
		alignItems: "center",
		justifyContent: "center",
		width: "100%",
		height: 40,
		marginTop: 5,
		fontSize: 20,
	},
	completedDeleteContainer: {
		alignItems: "center",
		justifyContent: "center",
		width: "50%",
		height: 40,
		flexDirection: "row",
	},
	completedIcon: {
		height: 30,
		width: 30,
		marginHorizontal: 20,
	},
	deleteIcon: {
		height: 30,
		width: 30,
	},
	swipeBox: {
		height: "100%",
		justifyContent: "center",
		alignItems: "center",
		width: "50%",
	},
});
