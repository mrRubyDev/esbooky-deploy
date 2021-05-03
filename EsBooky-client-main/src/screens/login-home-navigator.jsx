import React, { useState, useEffect } from "react";

import { NavigationContainer } from "@react-navigation/native";
import TabNav from "../navigation/tab-navigator";
import AuthStack from "../navigation/auth-navigator";
import { useSelector, useDispatch } from "react-redux";

export default function LoginHome() {
	// const [loggedIn, setLoggedIn] = useState(useSelector(state => state.login));

	// const handleLogPressed = () => {
	// 	console.log("Working handler in loginhome");
	// 	// setLoggedIn(useSelector(state => state.login));
	// };
	return (
		<NavigationContainer>
			<AuthStack />
		</NavigationContainer>
	);
}
