import React from "react";
import { TouchableOpacity } from "react-native";
import { Image, StyleSheet, Text, View } from "react-native";

export default function RoomElementHome(props) {
	const img = { uri: props.room.imgURL };

	return (
		<View style={styles.elementContainer}>
			<View style={styles.containerImg}>
				<Image source={img} style={styles.img} />
			</View>
			<TouchableOpacity
				onPress={() => props.handleAddToFav(props.room._id)}
				style={styles.addToFavoritesContainer}
			>
				<Image
					source={
						props.isFavorite
							? require("../../assets/Icons/liked-red.png")
							: require("../../assets/Icons/liked-grey.png")
					}
					style={{ height: "90%", width: "90%" }}
				/>
			</TouchableOpacity>
			<View style={styles.containerText}>
				<Text style={{ fontSize: 17 }}>{props.room.name}</Text>
				<Text numberOfLines={3} style={styles.roomDescription}>
					{props.room.description}
				</Text>
			</View>

			<View style={styles.detailsContainer}>
				<View style={styles.detailsContainerElement}>
					<Image
						source={require("../../assets/Icons/rating.png")}
						style={styles.detailsImg}
					/>
					<Text style={styles.detailsElementText}> {props.room.rating} </Text>
				</View>
				<View style={styles.detailsContainerElement}>
					<Image
						source={require("../../assets/Icons/lock.png")}
						style={styles.detailsImg}
					/>
					<Text style={styles.detailsElementText}>
						{" "}
						{props.room.difficulty}{" "}
					</Text>
				</View>
				<View style={styles.detailsContainerElement}>
					<Image
						source={require("../../assets/Icons/clock.png")}
						style={{ height: 20, width: 20 }}
					/>
					<Text style={styles.detailsElementText}>
						{" "}
						{props.room.duration}'{" "}
					</Text>
				</View>
				<View style={styles.detailsContainerElement}>
					<Image
						source={require("../../assets/Icons/players.png")}
						style={styles.detailsImg}
					/>
					<Text style={styles.detailsElementText}>
						{" "}
						{props.room.participants}{" "}
					</Text>
				</View>
				<View style={styles.detailsContainerElement}>
					<Image
						source={require("../../assets/Icons/money.png")}
						style={styles.detailsImg}
					/>
					<Text style={styles.detailsElementText}>
						{" "}
						{props.room.price[0]} - {props.room.price[1]}{" "}
					</Text>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	elementContainer: {
		height: 310,
		width: 380,
		borderWidth: 0.9,
		borderColor: "#BDBDBD",
		margin: "2%",
		borderRadius: 8,
	},
	container: {
		paddingTop: "2%",
	},
	title: {
		width: "60%",
		fontSize: 25,
		fontWeight: "400",
	},
	containerImg: {
		alignItems: "center",
		backgroundColor: "lightblue",
		borderTopLeftRadius: 8,
		borderTopRightRadius: 8,
		backgroundColor: "lightgreen",
	},
	img: {
		width: "100%",
		height: 180,
		borderTopRightRadius: 8,
		borderTopLeftRadius: 8,
	},
	containerText: {
		paddingHorizontal: "4%",
		paddingVertical: "2%",
	},
	roomDescription: {
		flexShrink: 10,
		paddingTop: "3%",
		color: "#828282",
	},
	detailsContainer: {
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "row",
	},
	detailsContainerElement: {
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "row",
		paddingHorizontal: "1%",
	},

	detailsImg: {
		width: 23,
		height: 23,
	},
	detailsElementText: {
		fontSize: 13,
	},
	favoriteIcon: {
		fontSize: 25,
		zIndex: 1001,
	},
	addToFavoritesContainer: {
		height: 40,
		width: 50,
		alignItems: "center",
		position: "absolute",
		right: 5,
		marginTop: 4,
	},
});
