import React from "react";
import { Text } from "react-native";

import { theme } from "../theme";
import { useSelector } from "react-redux";

export default function CustomText({
	bold,
	color,
	size,
	value,
	style,
	center,
	underline,
}) {
	return (
		<Text
			style={{
				fontWeight: bold ? "bold" : "normal",
				color: color ? color : theme.primaryColor,
				fontSize: size ? size : 16,
				textAlign: center ? "center" : "left",
				textDecorationLine: underline ? "underline" : "none",
				...style,
			}}
		>
			{value}
		</Text>
	);
}
