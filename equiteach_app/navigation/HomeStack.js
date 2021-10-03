import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import SessionDetails from "../screens/SessionDetails";
import Quiz from "../screens/Quiz";

const Stack = createStackNavigator();

export default function ProfileNavigator({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
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
