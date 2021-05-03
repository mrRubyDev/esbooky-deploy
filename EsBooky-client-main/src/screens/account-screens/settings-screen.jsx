import React from "react";
import {
	StyleSheet,
	Text,
	View,
	Image,
	SafeAreaView,
	TouchableOpacity,
} from "react-native";

export default function Settings({ navigation }) {
	const handleBackNavigation = () => {
		navigation.navigate("AccountScreen");
	};
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.marginContainer}>
				<View style={styles.backTitle}>
					<TouchableOpacity onPress={handleBackNavigation}>
						<Image
							source={require("../../../assets/Icons/back-arrow.png")}
							style={{ height: 25, width: 30 }}
						/>
					</TouchableOpacity>
					<Text style={styles.roomTitle}>Settings</Text>
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
	marginContainer: {
		marginHorizontal: "3%",
		marginTop: "1%",
		height: "100%",
	},
	backTitle: {
		marginTop: 5,
		flexDirection: "row",
		height: 40,
		alignItems: "center",
	},
	roomTitle: {
		marginLeft: 8,
		fontSize: 30,
		fontWeight: "500",
	},
});
