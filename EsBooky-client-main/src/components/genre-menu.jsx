import React, { useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	ScrollView,
	Image,
	TouchableOpacity,
} from "react-native";

const DATA = [
	{
		id: "0",
		name: "All",
		icon: require("../../assets/Icons/all.png"),
		iconRed: require("../../assets/Icons/all-red.png"),
	},
	{
		id: "1",
		name: "Action",
		icon: require("../../assets/Icons/action.png"),
		iconRed: require("../../assets/Icons/action-red.png"),
	},
	{
		id: "2",
		name: "Horror",
		icon: require("../../assets/Icons/horror.png"),
		iconRed: require("../../assets/Icons/horror-red.png"),
	},
	{
		id: "3",
		name: "Adventure",
		icon: require("../../assets/Icons/adventure.png"),
		iconRed: require("../../assets/Icons/adventure-red.png"),
	},
	{
		id: "4",
		name: "SciFi",
		icon: require("../../assets/Icons/scifi.png"),
		iconRed: require("../../assets/Icons/scifi-red.png"),
	},
	{
		id: "5",
		name: "Fantasy",
		icon: require("../../assets/Icons/fantasy.png"),
		iconRed: require("../../assets/Icons/fantasy-red.png"),
	},
	{
		id: "6",
		name: "Mystery",
		icon: require("../../assets/Icons/mystery.png"),
		iconRed: require("../../assets/Icons/mystery-red.png"),
	},
];

export default function GenreMenu({ handler, genreSelected }) {
	const [currGenre, setCurrGenre] = useState("All");

	const handleGenreChange = genre => {
		if (currGenre === genre) {
			handler("All");
			setCurrGenre("All");
		} else {
			handler(genre);
			setCurrGenre(genre);
		}
	};
	return (
		<View>
			<ScrollView horizontal showsHorizontalScrollIndicator={false}>
				{DATA.map((item, index) => (
					<TouchableOpacity
						style={styles.element}
						key={index}
						onPress={() => handleGenreChange(item.name)}
					>
						<Image
							source={currGenre !== item.name ? item.icon : item.iconRed}
							style={styles.img}
						/>
						<Text
							style={
								currGenre === item.name ? styles.titleSelected : styles.title
							}
						>
							{item.name}
						</Text>
					</TouchableOpacity>
				))}
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	title: {
		fontSize: 14,
		color: "#BDBDBD",
	},
	titleSelected: {
		fontSize: 14,
		color: "#BDBDBD",
		color: "#FF267C",
	},
	img: {
		height: 40,
		width: 40,
	},
	imgSelected: {
		height: 40,
		width: 40,
	},
	element: {
		justifyContent: "flex-start",
		alignItems: "center",
		width: 90,
		margin: 1,
	},
});
