import React from "react";
import { StatusBar } from "expo-status-bar";
import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	TouchableOpacity,
} from "react-native";

import AccountElement from "../components/account-element";
import { useDispatch, useSelector } from "react-redux";
import { log_out_user, set_log_out } from "../redux/actions";
export default function Account({ navigation }) {
	const dispatch = useDispatch();
	const handleLogOut = () => {
		dispatch(log_out_user());
		dispatch(set_log_out());
	};

	const navigationHandler = name => {
		navigation.navigate(name);
	};

	return (
		<SafeAreaView>
			<View style={styles.marginContainer}>
				<Text style={styles.name}>Mateo Rubinstein</Text>
				<TouchableOpacity style={styles.logOutButton} onPress={handleLogOut}>
					<Text style={styles.logOutText}>Log Out</Text>
				</TouchableOpacity>
				<TouchableOpacity>
					<AccountElement
						name="Account"
						navHandler={navigationHandler}
						imgPath={require("../../assets/Icons/about.png")}
					/>
				</TouchableOpacity>
				{/* <TouchableOpacity>
					<AccountElement
						name="Settings"
						navHandler={navigationHandler}
						imgPath={require("../../assets/Icons/settings.png")}
					/>
				</TouchableOpacity> */}

				<View style={styles.bottomElements}>
					<TouchableOpacity>
						<AccountElement
							name="Security measures"
							navName="Security"
							bottomTab={true}
							navHandler={navigationHandler}
							imgPath={require("../../assets/Icons/health.png")}
						/>
					</TouchableOpacity>
					<TouchableOpacity>
						<AccountElement
							name="About"
							bottomTab={true}
							navHandler={navigationHandler}
							imgPath={require("../../assets/Icons/about.png")}
						/>
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
	marginContainer: {
		marginHorizontal: "3%",
		padding: 8,
	},
	name: {
		fontSize: 30,
		fontWeight: "500",
	},
	logOutButton: {
		marginVertical: 7,
	},
	logOutText: {
		color: "#FF267C",
	},
	bottomElements: {
		marginTop: 450,
	},
});
