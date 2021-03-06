import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import StudentProfile from "../screens/StudentProfile";
import TutorProfile from "../screens/TutorProfile";

const Stack = createStackNavigator();

export default function ProfileStackNavigator({ navigation }) {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="StudentProfile"
				component={StudentProfile}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="TutorProfile"
				component={TutorProfile}
				options={{ headerShown: false }}
			/>
		</Stack.Navigator>
	);
}
