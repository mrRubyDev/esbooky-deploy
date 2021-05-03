import React, { useState } from "react";
import {
	StyleSheet,
	TextInput,
	Text,
	View,
	TouchableOpacity,
	Image,
} from "react-native";

export default function SearchBar({ handleChange }) {
	const [name, setName] = useState();

	return (
		<View style={styles.container}>
			<TextInput style={styles.input} placeholder='🔍 Try "La casa de papel"' />
			<TouchableOpacity style={styles.filterContainer}>
				<Text>Filter</Text>
			</TouchableOpacity>
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
