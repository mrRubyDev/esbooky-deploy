import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/home";
import roomDetails from "../screens/roomDetails";
import { useDispatch, useSelector } from "react-redux";
import { select_id, select_genre, fetch_rooms } from "../redux/actions";

const Stack = createStackNavigator();

export default function HomeStack() {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen name="Home" component={Home} />
			<Stack.Screen name="roomDetails" component={roomDetails} />
		</Stack.Navigator>
	);
}
