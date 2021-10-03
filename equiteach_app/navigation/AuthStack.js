import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Features from "../screens/Features";
import Login from "../screens/Login";
const Stack = createStackNavigator();

export default function AuthStackNavigator({ navigation }) {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Features"
				component={Features}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="Login"
				component={Login}
				options={{ headerShown: false }}
			/>
		</Stack.Navigator>
	);
}
