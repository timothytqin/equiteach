import React from "react";
import { View, Image, Text } from "react-native";
import logo from "../assets/logo_light.png";
import CustomText from "../components/CustomText";
import { theme } from "../theme";

export default function Loading() {
	return (
		<View
			style={{
				flex: 1,
				padding: 50,
				backgroundColor: theme.primaryColor,
			}}
		>
			<View style={{ alignItems: "center", marginTop: 120 }}>
				<Image
					source={logo}
					style={{ width: 160, height: 160, marginVertical: 30 }}
				/>
				<CustomText
					value="equiteach"
					color={theme.white}
					size={64}
					center
					bold
				/>
			</View>
		</View>
	);
}
