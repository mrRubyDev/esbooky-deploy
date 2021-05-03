import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
	StyleSheet,
	Text,
	View,
	Image,
	SafeAreaView,
	Modal,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function AddSquadMenu({ navigation }) {
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.marginContainer}>
				<Text style={{ marginBottom: 35, fontSize: 30, fontWeight: "bold" }}>
					SQUAD
				</Text>
				<TouchableOpacity
					onPress={() => navigation.navigate("JoinSquad")}
					style={{
						padding: 4,
						backgroundColor: "#FF267C",
						width: 250,
						height: 60,
						justifyContent: "center",
						alignItems: "center",
						marginBottom: 5,
						borderRadius: 8,
					}}
				>
					<Text style={{ fontSize: 20, fontWeight: "500" }}>Join</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => navigation.navigate("CreateSquad")}
					style={{
						padding: 4,
						backgroundColor: "#5FC9F8",
						width: 250,
						height: 60,
						justifyContent: "center",
						alignItems: "center",
						marginBottom: 5,
						borderRadius: 8,
					}}
				>
					<Text style={{ fontSize: 20, fontWeight: "500" }}>Create</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => navigation.navigate("Squad")}
					style={{
						padding: 4,

						width: 250,
						height: 60,
						justifyContent: "center",
						alignItems: "center",
						marginBottom: 5,
						marginTop: 30,
						borderRadius: 8,
					}}
				>
					<Text style={{ fontSize: 20, fontWeight: "400" }}>Cancel</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
	genreMenuImg: {
		width: 70,
		height: 70,
	},
	marginContainer: {
		marginHorizontal: "3%",
		marginTop: "1%",
		height: "100%",
		alignItems: "center",
		justifyContent: "center",
	},
});

{
	/* <Image
        source={ghostFace}
        fadeDuration={0}
        style={styles.genreMenuImg}
      /> */
}
