import React, { useState } from "react";
import { Button } from "react-native";
import {
	StyleSheet,
	Text,
	View,
	Image,
	SafeAreaView,
	TouchableOpacity,
} from "react-native";

import { useSelector, useDispatch } from "react-redux";

export default function AccountScreen({ navigation }) {
	const [user, setUser] = useState(useSelector(state => state.user));
	const dispatch = useDispatch();
	const handleBackNavigation = () => {
		navigation.navigate("AccountScreen");
	};

	const handleLogOut = () => {
		dispatch(log_out_user());
		dispatch(set_log_out());
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
					<Text style={styles.roomTitle}>Account</Text>
				</View>
				<View
					style={{
						marginTop: 20,
						alignItems: "center",
						height: "100%",
					}}
				>
					<Text style={{ fontSize: 40 }}>
						{user.name}, what do you want to do?
					</Text>
					<View
						style={{
							justifyContent: "center",
							height: "70%",
						}}
					>
						<Button
							title="Change email"
							onPress={() => alert("You pressed 'Change email'")}
						/>
						<Button
							title="Change password"
							onPress={() => alert("You pressed 'Change password'")}
						/>
						<Button title="Log Out" onPress={handleLogOut} color="red" />
					</View>
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
