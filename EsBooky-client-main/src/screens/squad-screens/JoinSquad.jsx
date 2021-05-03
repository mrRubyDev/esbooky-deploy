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
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { add_user_to_squad, get_user_squad } from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import { addUserToSquad } from "../../../apiService";
export default function JoinSquad({ navigation }) {
	const [squadId, setSquadId] = useState("");
	const dispatch = useDispatch();
	const user = useSelector(state => state.user);

	const addToSquad = () => {
		addUserToSquad(squadId, user.id);
		dispatch(get_user_squad(user.id));
		navigation.navigate("Squad");
	};

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.marginContainer}>
				<View
					style={{
						height: 40,
						alignItems: "flex-start",
						justifyContent: "flex-start",
						flexDirection: "row",
					}}
				>
					<TouchableOpacity onPress={() => navigation.navigate("Squad")}>
						<Text
							style={{
								fontSize: 20,
								marginRight: 20,
								marginTop: 5,
								color: "#FF267C",
							}}
						>
							{"< Back"}
						</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.globalContainer}>
					<Text style={{ fontSize: 18 }}>Please enter squad ID: </Text>

					<TextInput
						value={squadId}
						onChangeText={text => setSquadId(text)}
						autoCapitalize="none"
						style={styles.input}
						placeholder="Enter squad code"
						onSubmitEditing={addToSquad}
					/>
					<TouchableOpacity style={styles.joinBtn} onPress={addToSquad}>
						<Text style={{ color: "white" }}>Join</Text>
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
	globalContainer: {
		height: "90%",
		alignItems: "center",
		justifyContent: "center",
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
	joinBtn: {
		marginTop: 25,
		alignSelf: "center",
		width: 250,
		justifyContent: "center",
		alignItems: "center",
		paddingVertical: 15,
		backgroundColor: "#FF267C",
	},
});

{
	/* <Image
        source={ghostFace}
        fadeDuration={0}
        style={styles.genreMenuImg}
      /> */
}
