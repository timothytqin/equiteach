import React from "react";
import { SafeAreaView, StyleSheet, ScrollView, Text } from "react-native";
import { theme } from "../theme";

export default function Container({ style, children }) {
	return (
		<SafeAreaView style={{ ...styles.container }}>
			<ScrollView
				style={{ paddingHorizontal: 20, paddingVertical: 10 }}
				contentContainerStyle={{ ...style }}
			>
				{children}
			</ScrollView>
		</SafeAreaView>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: theme.white,
		padding: 5,
	},
});
