import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { useDispatch, useSelector } from "react-redux";
import { set_user_info } from "../../redux/actions";

import TabNav from "../../navigation/tab-navigator";

export default function LogIn({ navigation }) {
	const [email, setEmail] = useState("");
	const [pass, setPass] = useState("");

	const logged = useSelector(state => state.login);

	useEffect(() => {
		if (logged === "error") alert("Wrong credentials!");
	}, [logged]);

	const dispatch = useDispatch();

	const checkUser = async () => {
		dispatch(set_user_info(email, pass));
		setTimeout(() => {
			setPass("");
			setEmail("");
		}, 1000);
	};

	return logged !== true ? (
		<View style={styles.container}>
			<View style={styles.marginContainer}>
				<View style={styles.insideContainer}>
					<Image
						source={require("../../../assets/logo-no-bck.png")}
						style={styles.logoImg}
					/>
					<View style={{ marginTop: -40 }}>
						<View>
							<TextInput
								value={email}
								onChangeText={text => setEmail(text)}
								autoCapitalize="none"
								style={styles.input}
								placeholder="Email"
							></TextInput>
						</View>
						<TextInput
							value={pass}
							onChangeText={text => setPass(text)}
							autoCapitalize="none"
							style={styles.input}
							placeholder="Password"
							secureTextEntry={true}
							onSubmitEditing={checkUser}
						></TextInput>
						<TouchableOpacity style={styles.loginBtn} onPress={checkUser}>
							<Text style={{ color: "white" }}>Log In</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={styles.signUpBtn}
							onPress={() => navigation.navigate("signUp")}
						>
							<Text>Sign Up</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</View>
	) : (
		<TabNav />
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
	},
	marginContainer: {
		marginHorizontal: "10%",
		marginTop: "30%",
		marginBottom: "30%",
		height: "100%",
		alignItems: "center",
		color: "white",
		alignItems: "center",
	},
	insideContainer: {
		padding: 20,
		height: "100%",
		width: "95%",
		justifyContent: "center",
		alignItems: "center",
	},
	logoImg: {
		marginTop: -80,
		height: 240,
		width: 400,
		marginBottom: 30,
	},
	input: {
		width: 250,
		height: 44,
		borderWidth: 1,
		borderColor: "#828282",
		borderRadius: 3,
		marginTop: 8,
		padding: 10,
	},
	loginBtn: {
		marginTop: 35,
		alignSelf: "center",
		width: "80%",
		justifyContent: "center",
		alignItems: "center",
		paddingVertical: 15,
		backgroundColor: "#FF267C",
	},
	signUpBtn: {
		marginTop: 10,
		alignSelf: "center",
		width: "70%",
		justifyContent: "center",
		alignItems: "center",
		paddingVertical: 15,
	},
});
