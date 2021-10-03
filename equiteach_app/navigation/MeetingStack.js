import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import FindTutor from "../screens/FindTutor";
import Match from "../screens/Match";
import Meeting from "../screens/Meeting";
import Feedback from "../screens/Feedback";

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
			<Stack.Screen
				name="Meeting"
				component={Meeting}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="Feedback"
				component={Feedback}
				options={{ headerShown: false }}
			/>
		</Stack.Navigator>
	);
}
