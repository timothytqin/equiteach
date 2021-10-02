import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { theme } from "../theme";

export default function ProgressDots({ style, index, length, size, color }) {
	const styles = StyleSheet.create({
		container: {
			flexDirection: "row",
		},
		circle: {
			width: size,
			height: size,
			borderRadius: size,
			marginHorizontal: size,
			backgroundColor: color ? color : theme.primaryColor,
		},
	});

	const getDots = () => {
		const dots = [];
		for (let i = 0; i < length; i++) {
			if (i == index) {
				dots.push(<View style={{ ...styles.circle, width: 4 * size }} />);
			} else {
				dots.push(<View style={styles.circle} />);
			}
		}
		return dots;
	};

	return <View style={{ ...styles.container, ...style }}>{getDots()}</View>;
}
