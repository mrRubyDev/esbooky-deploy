import React, { useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	Image,
	TextInput,
	Keyboard,
	TouchableWithoutFeedback,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-navigation";
import { useDispatch } from "react-redux";
import { create_new_user, set_user_info } from "../../redux/actions";

const DismissKeyboard = ({ children }) => (
	<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
		{children}
	</TouchableWithoutFeedback>
);

export default function SingUp({ navigation }) {
	const [email, setEmail] = useState("");
	const [name, setName] = useState("");
	const [pass, setPass] = useState("");
	const [pass2, setPass2] = useState("");

	const dispatch = useDispatch();

	const doubleCheckPassword = () => {
		console.log(name, pass, email);
		if (!name.length || !pass.length || pass !== pass2) {
			alert("Incorrect info, please check again!");
		} else {
			dispatch(create_new_user(name, email, pass));
			dispatch(set_user_info(email, pass));
			navigation.navigate("logIn");
		}
	};

	return (
		<SafeAreaView style={styles.container}>
			<DismissKeyboard>
				<View style={styles.marginContainer}>
					<View
						style={styles.insideContainer}
						onPress={() => Keyboard.dismiss()}
					>
						<Image
							source={require("../../../assets/logo-no-bck.png")}
							style={styles.logoImg}
						/>
						<View style={{ marginTop: 20 }}>
							<TextInput
								value={name}
								onChangeText={text => setName(text)}
								style={styles.input}
								placeholder="Name"
							></TextInput>
							<TextInput
								value={email}
								onChangeText={text => setEmail(text)}
								autoCapitalize="none"
								style={styles.input}
								placeholder="Enter email"
							/>
							<TextInput
								value={pass}
								onChangeText={text => setPass(text)}
								autoCapitalize="none"
								style={styles.input}
								placeholder="Enter password"
								secureTextEntry={true}
							/>
							<TextInput
								value={pass2}
								onChangeText={text => setPass2(text)}
								autoCapitalize="none"
								style={styles.input}
								placeholder="Repeat password"
								secureTextEntry={true}
							/>
							<View style={{ marginTop: 150 }}>
								<TouchableOpacity
									style={styles.loginBtn}
									onPress={doubleCheckPassword}
								>
									<Text style={{ color: "white" }}>Sign Up</Text>
								</TouchableOpacity>
								<TouchableOpacity
									style={styles.signUpBtn}
									onPress={() => navigation.navigate("logIn")}
								>
									<Text>Cancel</Text>
								</TouchableOpacity>
							</View>
						</View>
					</View>
				</View>
			</DismissKeyboard>
		</SafeAreaView>
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
	},
	closeIcon: {
		height: 30,
		width: 30,
	},
	insideContainer: {
		padding: 20,
		height: "100%",
		width: "95%",
		alignItems: "center",
	},
	logoImg: {
		height: 200,
		width: 200,
		marginBottom: 30,
	},
	input: {
		width: 300,
		height: 44,
		borderWidth: 1,
		borderColor: "#828282",
		borderRadius: 3,
		marginTop: 12,
		padding: 10,
	},
	loginBtn: {
		alignSelf: "center",
		width: 300,
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
