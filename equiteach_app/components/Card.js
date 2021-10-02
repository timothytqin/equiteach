import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { theme } from "../theme";

export default function Card({ style, children, disabled = true, onPress }) {
	return (
		<TouchableOpacity
			style={{ ...styles.container, ...style }}
			onPress={onPress}
			disabled={disabled}
		>
			{children}
		</TouchableOpacity>
	);
}
const styles = StyleSheet.create({
	container: {
		width: "100%",
		borderRadius: 8,
		backgroundColor: theme.primaryColor,
		padding: 30,
	},
});
