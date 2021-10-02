import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "../screens/Welcome";
import Loading from "../screens/Loading";
import Features from "../screens/Features";
import Login from "../screens/Login";
import Profile from "../screens/Profile";
import FindTutor from "../screens/FindTutor";
import Survey from "../screens/Survey";
import Feedback from "../screens/Feedback";
import SessionDetails from "../screens/SessionDetails";
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
