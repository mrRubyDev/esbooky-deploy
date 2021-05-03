import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default function AccountElement({
	name,
	bottomTab,
	navHandler,
	imgPath,
}) {
	const handleNav = () => {
		if (name === "Security measures") name = "Security";
		navHandler(name);
	};

	return (
		<TouchableOpacity
			style={styles.accountElementContainer}
			onPress={handleNav}
		>
			<View style={styles.accountElementContainer}>
				<Image source={imgPath} style={styles.icon} />
				<View style={styles.innerTextContainer}>
					<Text style={!bottomTab ? styles.innerText : styles.tabText}>
						{" "}
						{name}{" "}
					</Text>
				</View>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	accountElementContainer: {
		width: "100%",
		height: 60,
		flexDirection: "row",
		alignItems: "center",
	},
	innerElement: {
		flexDirection: "row",
		alignItems: "center",
	},
	innerTextContainer: {
		width: "85%",
		height: "100%",
		justifyContent: "center",
		borderBottomWidth: 1,
		borderBottomColor: "#828282",
	},
	innerText: {
		marginLeft: 5,
		fontSize: 18,
		color: "black",
	},
	icon: {
		height: 30,
		width: 30,
	},
	tabText: {
		marginLeft: 5,
		fontSize: 18,
		color: "#FF267C",
	},
});
