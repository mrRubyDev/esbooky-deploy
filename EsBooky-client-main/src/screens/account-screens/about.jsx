import React from "react";
import {
	StyleSheet,
	Text,
	View,
	Image,
	SafeAreaView,
	TouchableOpacity,
} from "react-native";

export default function About({ navigation }) {
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
					<Text style={styles.roomTitle}>About</Text>
				</View>
				<Text style={{ marginTop: 20, fontSize: 20, marginHorizontal: 20 }}>
					EsBooky is mobile-only application that serves users within the
					Escapes Room niche to find new escapes or have a list of their
					completed ones.
				</Text>
				<Text style={{ marginTop: 20, fontSize: 20, marginHorizontal: 20 }}>
					We don't own any Escape Rooms nor represent any economic interest in
					any of the ones displayed.
				</Text>
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
