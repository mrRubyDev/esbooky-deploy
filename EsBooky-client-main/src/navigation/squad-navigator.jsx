import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MySquad from "../screens/squad-screens/mySquad";
import AddSquadMenu from "../screens/squad-screens/addSquadMenu";
import CreateSquad from "../screens/squad-screens/CreateSquad";
import JoinSquad from "../screens/squad-screens/JoinSquad";

const Stack = createStackNavigator();

export default function SquadStack() {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen name="Squad" component={MySquad} />
			<Stack.Screen name="AddSquad" component={AddSquadMenu} />
			<Stack.Screen name="CreateSquad" component={CreateSquad} />
			<Stack.Screen name="JoinSquad" component={JoinSquad} />
		</Stack.Navigator>
	);
}
