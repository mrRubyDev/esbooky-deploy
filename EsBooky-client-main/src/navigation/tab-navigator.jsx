import React, { useEffect, useState } from "react";
import { StyleSheet, View, Image, Text } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeStack from "../navigation/home-navigator";
import AccountStack from "../navigation/account-navigator";
import SquadStack from "../navigation/squad-navigator";
import Lists from "../screens/lists";

const Tab = createBottomTabNavigator();

const TabNav = () => {
	return (
		<Tab.Navigator tabBarOptions={{ showLabel: false }}>
			<Tab.Screen
				component={HomeStack}
				name="Home"
				options={{
					tabBarIcon: ({ focused }) => (
						<View style={styles.elements}>
							{focused ? (
								<Image
									source={require("../../assets/Icons/home-red.png")}
									style={{ width: 25, height: 25 }}
								/>
							) : (
								<Image
									source={require("../../assets/Icons/home.png")}
									style={{ width: 25, height: 25 }}
								/>
							)}

							<Text
								style={{
									color: focused ? "#FF267C" : "#BDBDBD",
									fontSize: 12,
									fontWeight: focused ? "500" : "normal",
								}}
							>
								Home
							</Text>
						</View>
					),
				}}
			/>

			<Tab.Screen
				component={Lists}
				name="My Lists"
				options={{
					tabBarIcon: ({ focused }) => (
						<View style={styles.elements}>
							{focused ? (
								<Image
									source={require("../../assets/Icons/heart-red.png")}
									style={{ width: 25, height: 25 }}
								/>
							) : (
								<Image
									source={require("../../assets/Icons/heart.png")}
									style={{ width: 25, height: 25 }}
								/>
							)}
							<Text
								style={{
									color: focused ? "#FF267C" : "#BDBDBD",
									fontSize: 12,
									fontWeight: focused ? "500" : "normal",
								}}
							>
								My Lists
							</Text>
						</View>
					),
				}}
			/>

			{/* <Tab.Screen
				name="Squad"
				component={SquadStack}
				options={{
					tabBarIcon: ({ focused }) => (
						<View style={styles.elements}>
							{focused ? (
								<Image
									source={require("../../assets/Icons/squad-red.png")}
									style={{ width: 25, height: 25 }}
								/>
							) : (
								<Image
									source={require("../../assets/Icons/squad.png")}
									style={{ width: 25, height: 25 }}
								/>
							)}
							<Text
								style={{
									color: focused ? "#FF267C" : "#BDBDBD",
									fontSize: 12,
									fontWeight: focused ? "500" : "normal",
								}}
							>
								Squad
							</Text>
						</View>
					),
				}}
			/> */}
			<Tab.Screen
				name="Account"
				component={AccountStack}
				options={{
					tabBarIcon: ({ focused }) => (
						<View style={styles.elements}>
							{focused ? (
								<Image
									source={require("../../assets/Icons/profile-red.png")}
									style={{ width: 25, height: 25 }}
								/>
							) : (
								<Image
									source={require("../../assets/Icons/profile.png")}
									style={{ width: 25, height: 25 }}
								/>
							)}
							<Text
								style={{
									color: focused ? "#FF267C" : "#BDBDBD",
									fontSize: 12,
									fontWeight: focused ? "500" : "normal",
								}}
							>
								Account
							</Text>
						</View>
					),
				}}
			/>
		</Tab.Navigator>
	);
};

const styles = StyleSheet.create({
	nav: {
		color: "white",
	},
	elements: {
		alignItems: "center",
		justifyContent: "center",
	},
});

export default TabNav;
