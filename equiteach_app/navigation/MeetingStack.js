import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import FindTutor from "../screens/FindTutor";
import Match from "../screens/Match";

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
				name="Match"
				component={Match}
				options={{ headerShown: false }}
			/>
		</Stack.Navigator>
	);
}
