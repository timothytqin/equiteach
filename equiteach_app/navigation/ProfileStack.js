import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Profile from "../screens/Profile";
import FindTutor from "../screens/FindTutor";
import SessionDetails from "../screens/SessionDetails";
import StudentProfile from "../screens/StudentProfile";
import Survey from "../screens/Survey";

const Stack = createStackNavigator();

export default function ProfileStackNavigator({ navigation }) {
	return (
		<Stack.Navigator>
			{/* <Stack.Screen
				name="StudentProfile"
				component={StudentProfile}
				options={{ headerShown: false }}
			/> */}
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
