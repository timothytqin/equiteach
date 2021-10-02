import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { theme } from "../theme";

export default function Card({ style, children }) {
	return <View style={{ ...styles.container, ...style }}>{children}</View>;
}
const styles = StyleSheet.create({
	container: {
		width: "100%",
		borderRadius: 8,
		backgroundColor: theme.primaryColor,
		padding: 20,
	},
});
