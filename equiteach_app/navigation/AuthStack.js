import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Features from "../screens/Features";
import Login from "../screens/Login";
import LoginTutor from "../screens/LoginTutor";
import TutorProfile from "../screens/TutorProfile";
import TutorInfo from "../screens/TutorInfo";
import TutorCall from "../screens/TutorCall";
import FeedbackTutor from "../screens/FeedbackTutor";
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
			<Stack.Screen
				name="LoginTutor"
				component={LoginTutor}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="TutorProfile"
				component={TutorProfile}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="TutorInfo"
				component={TutorInfo}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="TutorCall"
				component={TutorCall}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="FeedbackTutor"
				component={FeedbackTutor}
				options={{ headerShown: false }}
			/>
		</Stack.Navigator>
	);
}
