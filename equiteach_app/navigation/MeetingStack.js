import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import FindTutor from "../screens/FindTutor";
import Survey from "../screens/Survey";

const Stack = createStackNavigator();

export default function MeetingStackNavigator({ navigation }) {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="FindTutor"
				component={FindTutor}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="Survey"
				component={Survey}
				options={{ headerShown: false }}
			/>
		</Stack.Navigator>
	);
}
