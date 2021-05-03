import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const CITIES = ["Barcelona, Spain", "Madrid, Spain", "Valencia, Spain"];

export default function Location() {
	const [currCity, setCurrCity] = React.useState(0);

	const handleLocation = () => {
		setCurrCity(currCity + 1 == CITIES.length ? 0 : currCity + 1);
	};

	return (
		<View style={styles.container}>
			<Image
				source={require("../../assets/Icons/location.png")}
				style={styles.img}
			/>
			<TouchableOpacity onPress={handleLocation}>
				<Text style={styles.title}>{CITIES[currCity]} </Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: "60%",
		paddingTop: "4%",
		flexDirection: "row",
		alignItems: "center",
	},
	title: {
		fontSize: 12,
		fontWeight: "400",
		fontStyle: "italic",
		marginLeft: 5,
	},
	img: {
		height: 20,
		width: 20,
		tintColor: "#FF267C",
		marginLeft: -4,
	},
});
