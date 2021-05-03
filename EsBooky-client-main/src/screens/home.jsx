// import 'react-native-gesture-handler';
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	FlatList,
	TouchableOpacity,
	Button,
} from "react-native";

import { useScrollToTop } from "@react-navigation/native";

import { SearchBar } from "react-native-elements";

import {
	select_id,
	add_saved_list,
	fetch_rooms,
	get_user_squad,
} from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";

import GlobalTitles from "../components/global-titles";
// import SearchBar from "../components/searchbar";
import GenreMenu from "../components/genre-menu";
import Location from "../components/location";
import RoomElementHome from "../components/roomElementHome";

import {
	ScrollView,
	TouchableWithoutFeedback,
} from "react-native-gesture-handler";

const TITLES = [
	"Let's find your next adventure 🤟🏼",
	"Are you ready for the action? 🕵🏽 ",
	"Find the best escapes in town 🔝🔝",
];

const title = TITLES[Math.round(Math.random() * (TITLES.length - 1))];

export default function Home({ navigation }) {
	const dispatch = useDispatch();
	const [genreFilter, setGenreFilter] = useState("All");
	const [filteredRooms, setFilteredRooms] = useState();
	const rooms = useSelector(state => state.rooms);
	const favorites = useSelector(state => state.user.fav_list);
	const user = useSelector(state => state.user);

	// Scroll to top on tab press
	const ref = React.useRef(null);
	useScrollToTop(ref);

	// Get the room data and send it to redux.
	useEffect(() => {
		dispatch(fetch_rooms());
	}, []);

	//This useEffect is used to filter the rooms when genre is clicked.
	useEffect(() => {
		handleFilterChange();
	}, [genreFilter]);

	//Send selected room id to redux and navigate to room details screen.
	const selectRoomHandler = id => {
		dispatch(select_id(id));
		navigation.navigate("roomDetails");
	};

	// Get user squad info to redux
	useEffect(() => {
		if (user.id) {
			dispatch(get_user_squad(user.id));
		}
	}, [user]);

	// If the genre selected is different than all, filter the rooms, else display all.
	const handleFilterChange = () => {
		if (genreFilter !== "All") {
			const res = rooms.filter(room => room.genres.includes(genreFilter));
			setFilteredRooms(res);
		} else {
			setFilteredRooms();
		}
	};

	const selectGenreHandler = genre => {
		if (genre === genreFilter) {
			setGenreFilter("All");
		} else {
			setGenreFilter(genre);
		}
	};

	const handleAddToFavorites = roomId => {
		if (!user.fav_list.includes(roomId))
			dispatch(add_saved_list(roomId, user.id));
	};

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.marginContainer}>
				<Location />
				<GlobalTitles title={title} />
				{/* <SearchBar handleChange={handleChange} /> */}
				{/* <SearchBar
					placeholder="Try typing a name..."
					lightTheme
					round
					onChangeText={search => updateSearch(search)}
					autoCorrect={false}
				/> */}
				<View style={styles.genreMenuContainer}>
					<GenreMenu handler={selectGenreHandler} genreSelected={genreFilter} />
				</View>
				{/* <ScrollView ref={ref}> */}
				{favorites ? (
					<FlatList
						style={{
							flex: 1,
						}}
						showsVerticalScrollIndicator={false}
						bounces={false}
						data={filteredRooms ? filteredRooms : rooms}
						keyExtractor={item => item._id.toString()}
						renderItem={({ item, index }) => (
							<TouchableOpacity
								onPress={() => selectRoomHandler(item._id)}
								key={index}
							>
								<RoomElementHome
									room={item}
									key={index}
									handleAddToFav={handleAddToFavorites}
									isFavorite={favorites.includes(item._id) ? true : false}
								/>
							</TouchableOpacity>
						)}
					/>
				) : (
					<Text></Text>
				)}

				{/* </ScrollView> */}
			</View>
			<StatusBar style="auto" />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
	marginContainer: {
		marginRight: "3%",
		marginLeft: "3%",
		marginTop: "1%",
		height: "100%",
	},
	genreMenuContainer: {
		marginHorizontal: "3%",
		marginVertical: "3%",
	},
	pressed: { color: "#FF267C" },
	clean: { color: "#828282" },
});
