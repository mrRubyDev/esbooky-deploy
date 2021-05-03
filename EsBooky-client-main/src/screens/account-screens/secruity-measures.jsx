import React from "react";
import {
	StyleSheet,
	Text,
	View,
	Image,
	SafeAreaView,
	TouchableOpacity,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function Security({ navigation }) {
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
				</View>
				<Text style={styles.roomTitle}>Security measures against COVID-19</Text>
				<View>
					<Text style={{ marginTop: 5, fontSize: 15, color: "#FF267C" }}>
						The escape rooms featured in EsBooky, have all agreed to follow a
						set of rules for COVID prevention:{" "}
					</Text>
					<ScrollView
						style={{ height: "100%" }}
						showsVerticalScrollIndicator={false}
					>
						<View style={styles.measuresElement}>
							<Image
								source={require("../../../assets/Icons/room-desinfection.png")}
								style={{ height: 180, width: 180 }}
							/>
							<View style={styles.textElement}>
								<Text style={{ fontSize: 17 }}>Room disinfection:</Text>
								<Text style={{ fontSize: 14, marginTop: 6, color: "#828282" }}>
									After each group has finished, the room masters will make sure
									to desinfect every item in the game, so that the next team can
									play safely and secure.{" "}
								</Text>
							</View>
						</View>
						<View style={styles.measuresElement}>
							<View style={styles.textElement}>
								<Text style={{ fontSize: 17 }}>Constant ventilation:</Text>
								<Text style={{ fontSize: 14, marginTop: 6, color: "#828282" }}>
									The room owners have made sure to implement the latest
									technology in terms on room ventilation, so you will have
									renewed air the whole time.
								</Text>
							</View>
							<Image
								source={require("../../../assets/Icons/room-ventilation.png")}
								style={{ height: 180, width: 180 }}
							/>
						</View>
						<View style={styles.measuresElement}>
							<Image
								source={require("../../../assets/Icons/waste-management.png")}
								style={{ height: 180, width: 180 }}
							/>
							<View style={styles.textElement}>
								<Text style={{ fontSize: 17 }}>Waste management:</Text>
								<Text style={{ fontSize: 14, marginTop: 6, color: "#828282" }}>
									Sometimes we need to use stuff in a less safer way and these
									objects could be resused in the past, but during COVID room
									owners have made sure to avoid using these kind of items.
								</Text>
							</View>
						</View>
						<View style={styles.measuresElement}>
							<View style={styles.textElement}>
								<Text style={{ fontSize: 17 }}>Health department:</Text>
								<Text style={{ fontSize: 14, marginTop: 6, color: "#828282" }}>
									Room escapes strictly follow the indications and rules set by
									the Spanish government regarding coronavirus prevention.
								</Text>
							</View>
							<Image
								source={require("../../../assets/Icons/government.png")}
								style={{ height: 180, width: 180 }}
							/>
						</View>
						<View style={{ marginTop: 200 }}></View>
					</ScrollView>
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
		fontSize: 30,
		fontWeight: "500",
	},
	measuresElement: {
		marginTop: 9,
		flexDirection: "row",
		height: 200,
		alignItems: "center",
		borderRadius: 16,
		borderWidth: 1,
		borderColor: "#BDBDBD",
		padding: 10,
	},
	textElement: {
		width: "50%",
		height: "100%",
		alignItems: "flex-start",
		justifyContent: "center",
	},
});
