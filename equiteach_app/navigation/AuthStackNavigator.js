import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "../screens/Welcome";
import Loading from "../screens/Loading";
import Features from "../screens/Features";
import Login from "../screens/Login";

const Stack = createStackNavigator();

export default function ChatStackNavigator({ navigation }) {
	return (
		<Stack.Navigator>
			{/* <Stack.Screen
				name="Loading"
				component={Loading}
				options={{ headerShown: false }}
			/> */}
			{/* <Stack.Screen
				name="Features"
				component={Features}
				options={{ headerShown: false }}
			/> */}
			<Stack.Screen
				name="Login"
				component={Login}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="Welcome"
				component={Welcome}
				options={{ headerShown: false }}
			/>
		</Stack.Navigator>
	);
}
