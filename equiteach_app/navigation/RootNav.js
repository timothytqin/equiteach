import React from "react";
import AuthStackNavigator from "./AuthStackNavigator";
import RootBottomNavigator from "./RootBottomNavigator";
import { navigationRef } from "../RootNavigation";
import { useSelector } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";

export default () => {
	const user = useSelector((state) => state.auth.user);
	console.log(user);
	return (
		<NavigationContainer ref={navigationRef}>
			{user ? <RootBottomNavigator /> : <AuthStackNavigator />}
		</NavigationContainer>
	);
};
