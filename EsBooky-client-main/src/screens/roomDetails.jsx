import React, { useEffect, useState } from "react";

import {
	StyleSheet,
	Text,
	View,
	Image,
	SafeAreaView,
	ScrollView,
	Button,
	Linking,
	TouchableOpacity,
	TouchableHighlight,
} from "react-native";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { add_saved_list } from "../redux/actions";
import { getOne } from "../../apiService";

const mockRoom = {
	contact_info: {
		address: "Baro, 17, 08921, Santa Coloma de Gramenet",
		phone_number: "",
		email: "info@escapesantacoloma.com",
		websiteURL: "www.escapebarcelona.com",
		booking_website: "https://www.escapebarcelona.com/reservas.php",
	},
	price: ["", ""],
	genres: ["", "", ""],
	_id: 8,
	name: "",
	rating: "",
	participants: "",
	difficulty: "",
	description: "",
	duration: 90,
	imgURL: "a",
};

//TODO: ADD GOOGLE MAPS API WITH LOCATION
//TODO: MAYBE ADD VIDEO IF POSSIBLE

export default function RoomDetails({ navigation }) {
	const [selectedRoom, setSelectedRoom] = useState(mockRoom);
	const selectedId = useSelector(state => state.selected_id, shallowEqual);
	const dispatch = useDispatch();
	const user = useSelector(state => state.user);

	useEffect(() => {
		// Call Api service and set the selected room.
		getOne(selectedId).then(room => setSelectedRoom(room));
	}, []);

	const handleLinking = () => {
		Linking.openURL(selectedRoom.contact_info.booking_website);
	};

	const handleBackNavigation = () => {
		navigation.navigate("Home");
	};

	const handleAddToFavorites = () => {
		if (!user.fav_list.includes(selectedId))
			dispatch(add_saved_list(selectedId, user.id));
	};

	return (
		<SafeAreaView style={styles.marginContainer}>
			<View style={{ flexDirection: "row", alignItems: "flex-end" }}>
				<TouchableOpacity onPress={handleBackNavigation}>
					<Image
						source={require("../../assets/Icons/back-arrow.png")}
						style={{ height: 30, width: 30 }}
					/>
				</TouchableOpacity>
				<Text style={styles.roomTitle}> {selectedRoom.name} </Text>
			</View>

			<Image source={{ uri: selectedRoom.imgURL }} style={styles.img} />

			<ScrollView
				showsVerticalScrollIndicator={false}
				style={styles.infoContainer}
			>
				<View style={styles.descriptionContainer}>
					<Text style={styles.detailsTitle}>Description</Text>
					<Text style={styles.descriptionText}>{selectedRoom.description}</Text>
				</View>
				<Text style={styles.detailsTitle}>Details </Text>
				<View style={styles.detailsContainer}>
					<View style={styles.detailsText}>
						<View style={styles.iconDetails}>
							<View style={styles.iconDetailsElement}>
								<Image
									source={require("../../assets/Icons/rating.png")}
									style={styles.detailsIcon}
								/>
								<Text style={{ fontWeight: "200" }}>
									{" "}
									{selectedRoom.rating}{" "}
								</Text>
							</View>
							<View style={styles.iconDetailsElement}>
								<Image
									source={require("../../assets/Icons/lock.png")}
									style={styles.detailsIcon}
								/>
								<Text style={{ fontWeight: "200" }}>
									{" "}
									{selectedRoom.difficulty}{" "}
								</Text>
							</View>
							<View style={styles.iconDetailsElement}>
								<Image
									source={require("../../assets/Icons/clock.png")}
									style={{ height: 30, width: 35 }}
								/>
								<Text style={{ fontWeight: "200" }}>
									{" "}
									{selectedRoom.duration}'{" "}
								</Text>
							</View>
							<View style={styles.iconDetailsElement}>
								<Image
									source={require("../../assets/Icons/players.png")}
									style={styles.detailsIcon}
								/>
								<Text style={{ fontWeight: "200" }}>
									{" "}
									{selectedRoom.participants}{" "}
								</Text>
							</View>
							<View style={styles.iconDetailsElement}>
								<Image
									source={require("../../assets/Icons/money.png")}
									style={styles.detailsIcon}
								/>
								<Text style={{ fontWeight: "200" }}>
									{" "}
									{selectedRoom.price[0]} - {selectedRoom.price[1]}€
								</Text>
							</View>
						</View>
						<View style={styles.contactDetails}>
							<View style={styles.contactDetailsElement}>
								<Image
									source={require("../../assets/Icons/location.png")}
									style={{ height: 20, width: 20 }}
								/>
								<Text style={{ fontWeight: "200" }}>
									{selectedRoom.contact_info.address}
								</Text>
							</View>

							<View style={styles.contactDetailsElement}>
								<Text style={styles.smallTitle}>Genre: </Text>
								<Text style={{ fontWeight: "200" }}>
									{" "}
									{selectedRoom.genres[0]}{" "}
								</Text>
							</View>

							<View style={styles.contactDetailsElement}>
								<Text style={styles.smallTitle}>Contact: </Text>
								<Text style={{ fontWeight: "200" }}>
									{" "}
									{selectedRoom.contact_info.phone_number}{" "}
								</Text>
							</View>
							<View style={styles.map}>
								<Image
									source={require("../../assets/map-sample.png")}
									style={styles.mapImg}
								/>
							</View>
						</View>
					</View>
					<View style={styles.callToActionContainer}>
						<View style={styles.btnMargin}>
							<Button
								onPress={handleLinking}
								title="BOOK NOW"
								style={styles.bookBtn}
								color="black"
							/>
						</View>
						<TouchableOpacity onPress={handleAddToFavorites}>
							<Text style={styles.favoriteIcon}>❤️</Text>
						</TouchableOpacity>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
	infoContainer: {
		position: "absolute",
		backgroundColor: "#fff",
		top: "45%",
		width: "100%",
		height: "58%",
		borderRadius: 20,
		padding: "4%",
	},
	marginContainer: {
		marginHorizontal: "3%",
		marginTop: "1%",
		height: "100%",
	},
	roomTitle: {
		marginTop: 10,
		fontSize: 25,
		fontWeight: "500",
	},
	img: {
		height: "60%",
		width: "100%",
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
		marginTop: 10,
	},
	detailsTitle: {
		fontSize: 25,
		fontWeight: "400",
		paddingBottom: 5,
	},
	descriptionContainer: {
		justifyContent: "center",
	},
	descriptionText: {
		fontSize: 15,
		paddingBottom: 10,
	},
	detailsContainer: {
		width: "100%",
		height: "70%",
		padding: 2,
	},
	detailsText: {
		flexDirection: "row",
	},
	iconDetailsElement: {
		marginVertical: 5,
		flexDirection: "row",
		alignItems: "center",
	},
	detailsIcon: {
		height: 35,
		width: 35,
	},
	contactDetailsElement: {
		flexDirection: "row",
		marginVertical: 5,
		alignItems: "center",
		width: "85%",
	},

	btnMargin: {
		padding: 5,
		marginRight: 15,
		backgroundColor: "#62DB93",
		alignItems: "center",
		justifyContent: "center",
		width: "60%",
		borderRadius: 35,
	},
	btnMargin1: {
		marginTop: 10,
		padding: 13,
		borderWidth: 1,
		alignItems: "center",
		justifyContent: "center",
		width: "25%",
		borderRadius: 10,
	},
	favoriteIcon: {
		fontSize: 30,
	},
	map: {
		height: 150,
		width: 260,
		marginLeft: 7,
	},
	mapImg: {
		height: 150,
		width: 260,
		borderRadius: 20,
		marginTop: 10,
	},
	callToActionContainer: {
		alignItems: "flex-start",
		justifyContent: "center",
		marginTop: 8,
		width: "100%",
		flexDirection: "row",
		marginTop: 30,
		marginBottom: 30,
	},
});

{
	/* <Image
        source={ghostFace}
        fadeDuration={0}
        style={styles.genreMenuImg}
      /> */
}
