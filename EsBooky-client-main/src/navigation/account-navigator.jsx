import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Account from "../screens/account";
import About from "../screens/account-screens/about";
import AccountScreen from "../screens/account-screens/account-screen";
import Security from "../screens/account-screens/secruity-measures";
import Settings from "../screens/account-screens/settings-screen";
import Wallet from "../screens/account-screens/wallet-screen";
const Stack = createStackNavigator();

export default function AccountStack() {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen name="AccountScreen" component={Account} />
			<Stack.Screen name="Account" component={AccountScreen} />
			<Stack.Screen name="Settings" component={Settings} />
			<Stack.Screen name="Security" component={Security} />
			<Stack.Screen name="About" component={About} />
		</Stack.Navigator>
	);
}
