import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Profile from "../screens/Profile";
import SessionDetails from "../screens/SessionDetails";

const Stack = createStackNavigator();

export default function ProfileNavigator({ navigation }) {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Profile"
				component={Profile}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="SessionDetails"
				component={SessionDetails}
				options={{ headerShown: false }}
			/>
		</Stack.Navigator>
	);
}
