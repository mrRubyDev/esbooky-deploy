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

export default function CreateSquad({ navigation }) {
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.marginContainer}>
				<View
					style={{
						height: 40,
						alignItems: "flex-start",
						justifyContent: "flex-end",
						flexDirection: "row",
					}}
				>
					<TouchableOpacity>
						<Text
							style={{
								fontSize: 30,
								marginRight: 20,
								marginTop: 5,
								color: "#FF267C",
							}}
						>
							+
						</Text>
					</TouchableOpacity>
				</View>
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
	},
});

{
	/* <Image
        source={ghostFace}
        fadeDuration={0}
        style={styles.genreMenuImg}
      /> */
}
