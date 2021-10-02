import React from "react";
import { Text } from "react-native";

import { theme } from "../theme";
import { useSelector } from "react-redux";
import { useFonts } from 'expo-font';


export default function CustomText({
	bold,
	color,
	size,
	value,
	style,
	center,
	underline,
}) 

{
	const [loaded] = useFonts({
		A: require('../assets/A.ttf'),
		F: require('../assets/F.ttf')
	  });
	  
	  if (!loaded) {
		return null;
	  }
	
	return (
		<Text
			style={{
				color: color ? color : theme.primaryColor,
				fontSize: size ? size : 16,
				textAlign: center ? "center" : "left",
				textAlignVertical:'center',
				fontFamily: bold ? 'A': 'F',
				textDecorationLine: underline ? "underline" : "none",
				...style,
			}}
		>
			{value}
		</Text>
	);
}
