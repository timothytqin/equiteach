import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { theme } from "../theme";

export default function Container({ style, children }) {
	return <View style={{ ...styles.container, ...style }}>{children}</View>;
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: theme.white,
	},
});
