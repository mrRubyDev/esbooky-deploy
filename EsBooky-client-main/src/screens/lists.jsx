import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";

import { useSelector } from "react-redux";
import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	TouchableOpacity,
} from "react-native";

import SavedList from "../components/savedList";
import CompletedList from "../components/completedList";

export default function Lists() {
	const compList = useSelector(state => state.user.completed_list);
	const [pressed, setPressed] = useState("saved");
	const userId = useSelector(state => state.user.id);

	const handleSavedStyle = () => {
		if (pressed === "saved") {
			setPressed("completed");
			// setListToRender(completed);
		}
	};

	const handleCompletedStyle = () => {
		if (pressed === "completed") {
			setPressed("saved");
			// setListToRender(saved);
		}
	};

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.marginContainer}>
				<View style={styles.topElements}>
					<View style={styles.listSelectorContainer}>
						<View style={styles.listSelector}>
							<TouchableOpacity
								style={styles.selectorElement}
								onPress={handleCompletedStyle}
							>
								<Text
									style={pressed === "saved" ? styles.pressed : styles.clean}
								>
									Saved
								</Text>
							</TouchableOpacity>
							<TouchableOpacity
								style={styles.selectorElement}
								onPress={handleSavedStyle}
							>
								<Text
									style={pressed === "saved" ? styles.clean : styles.pressed}
								>
									Completed
								</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
				{pressed === "saved" ? (
					<SavedList userId={userId} />
				) : (
					<CompletedList list={compList} userId={userId} />
				)}
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		height: 780,
	},
	marginContainer: {
		marginHorizontal: "3%",
		height: 780,
	},
	topElements: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		height: "6%",
	},
	listSelectorContainer: {
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 20,
		height: "100%",
	},
	buttonContainer: {
		alignItems: "center",
		height: "100%",
		justifyContent: "center",
		alignSelf: "flex-end",
		zIndex: 1000,
	},
	listSelector: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 20,
	},
	selectorElement: {
		padding: 10,
		width: "40%",
		justifyContent: "center",
		alignItems: "center",
	},
	addNewBtn: {
		fontSize: 30,
		color: "#147EFB",
	},
	pressed: { color: "#FF267C", fontSize: 17 },
	clean: { color: "#828282", fontSize: 17 },
});
