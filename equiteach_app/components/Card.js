import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { theme } from "../theme";
import { useNavigation } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";

export default function Card({
	style,
	children,
	disabled = true,
	onPress,
	back,
}) {
	const navigation = useNavigation();
	return (
		<TouchableOpacity
			style={{ ...styles.container, ...style }}
			onPress={onPress}
			disabled={disabled}
		>
			{back && (
				<TouchableOpacity onPress={() => navigation.goBack()}>
					<Entypo name="chevron-left" size={36} color={theme.white} />
				</TouchableOpacity>
			)}
			{children}
		</TouchableOpacity>
	);
}
const styles = StyleSheet.create({
	container: {
		width: "100%",
		borderRadius: 8,
		backgroundColor: theme.primaryColor,
		padding: 25,
	},
});
