import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import StudentProfile from "../screens/StudentProfile";

const Stack = createStackNavigator();

export default function ProfileStackNavigator({ navigation }) {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="StudentProfile"
				component={StudentProfile}
				options={{ headerShown: false }}
			/>
		</Stack.Navigator>
	);
}
