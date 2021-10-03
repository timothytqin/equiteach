import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SimpleLineIcons } from "@expo/vector-icons";
import Profile from "../screens/Profile";
import ProfileStackNavigator from "./ProfileStack";

const Tab = createBottomTabNavigator();

export default function RootBottomNavigator() {
	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused, color, size }) => {
					let iconName;

					switch (route.name) {
						case "ProfileStack":
							iconName = "home";
							break;
					}

					return <SimpleLineIcons name={iconName} size={size} color={color} />;
				},
				lazy: false,
			})}
			tabBarOptions={{
				activeTintColor: "#69f",
				inactiveTintColor: "#666",
				labelStyle: {
					fontWeight: "bold",
				},
				style: {
					shadowColor: "#3084FF",
					shadowOpacity: 0.15,
					shadowRadius: 20,
					backgroundColor: "#fff",
					borderTopWidth: 0,
				},
			}}
		>
			<Tab.Screen
				name="ProfileStack"
				component={ProfileStackNavigator}
				options={{
					tabBarLabel: "",
				}}
			/>
		</Tab.Navigator>
	);
}
