import React from "react";
import { View, Image } from "react-native";
import logo from "../assets/logo_dark.png";
import CustomButton from "../components/CustomButton";
import { theme } from "../theme";

export default function Welcome() {
	return (
		<View
			style={{
				flex: 1,
				padding: 50,
				backgroundColor: theme.white,
			}}
		>
			<View
				style={{ flex: 1, alignItems: "center", justifyContent: "flex-end" }}
			>
				<Image source={logo} style={{ width: 100, height: 100 }} />
			</View>
			<View style={{ flex: 1, paddingVertical: 80 }}>
				<CustomButton
					text="Register"
					inverted
					onPress={() => {
						console.log("Register");
					}}
				/>
				<CustomButton
					text="Login"
					onPress={() => {
						console.log("Login");
					}}
				/>
			</View>
		</View>
	);
}
