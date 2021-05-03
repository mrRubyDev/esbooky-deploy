import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/home";
import roomDetails from "../screens/roomDetails";

const Stack = createStackNavigator();

export default function HomeStack() {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen name="Saved" component={savedList} />
			<Stack.Screen name="completed" component={completedList} />
		</Stack.Navigator>
	);
}
