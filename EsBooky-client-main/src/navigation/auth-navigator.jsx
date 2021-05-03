import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import LogIn from "../screens/auth-screens/login-screen";
import SignUp from "../screens/auth-screens/signup-screen";

const Stack = createStackNavigator();

export default function AuthStack({ handler }) {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen
				name="logIn"
				component={LogIn}
				initialParams={{ handler: handler }}
			/>
			<Stack.Screen name="signUp" component={SignUp} />
		</Stack.Navigator>
	);
}
