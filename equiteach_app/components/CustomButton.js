import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { theme } from "../theme";

export default function CustomButton({
	text,
	buttonStyle,
	textStyle,
	onPress,
	inverted = false,
}) {
	const styles = StyleSheet.create({
		button: {
			borderWidth: 2,
			borderRadius: 8,
			paddingVertical: 10,
			paddingHorizontal: 10,
			backgroundColor: inverted ? theme.primaryColor : theme.white,
			borderColor: inverted ? theme.primaryColor : theme.primaryColor,
			elevation:1
		},
		buttonText: {
			color: inverted ? theme.white : theme.primaryColor,
			fontWeight: "bold",
			textTransform: "uppercase",
			fontSize: 12,
			textAlign: "center",
			textAlignVertical:'center',
			fontFamily: 'F',
		},
	});
	return (
		<TouchableOpacity
			onPress={onPress}
			style={{ ...styles.button, ...buttonStyle }}
		>
			<View>
				<Text style={{ ...styles.buttonText, ...textStyle }}>{text}</Text>
			</View>
		</TouchableOpacity>
	);
}
