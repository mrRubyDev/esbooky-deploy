import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
	StyleSheet,
	Text,
	View,
	Image,
	SafeAreaView,
	Modal,
} from "react-native";

import UserSquadElement from "../../components/user-squad";
import { useDispatch, useSelector } from "react-redux";
import { delete_user_from_squad, get_user_squad } from "../../redux/actions";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function MySquad({ navigation }) {
	const squad = useSelector(state => state.squad);
	const user = useSelector(state => state.user);

	const noSquadsRender = (
		<View>
			<View
				style={{
					height: 40,
					alignItems: "flex-start",
					justifyContent: "flex-end",
					flexDirection: "row",
				}}
			>
				<TouchableOpacity onPress={() => navigation.navigate("AddSquad")}>
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
			<View
				style={{
					alignSelf: "center",
					justifyContent: "center",
					alignItems: "center",
					height: "90%",
					width: "70%",
				}}
			>
				<Text stlye={{ color: "#BDBDBD", fontSize: 20 }}>
					No squads registered.
				</Text>
				<Text
					style={{
						color: "#FF267C",
						fontSize: 18,
						marginTop: 5,
						textAlign: "center",
					}}
				>
					Please add one by clicking on the "+" button.
				</Text>
			</View>
		</View>
	);

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.marginContainer}>
				{squad ? (
					<UserSquadElement squad={squad} userId={user.id} />
				) : (
					noSquadsRender
				)}
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
