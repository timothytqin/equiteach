import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { theme } from "../theme";

export default function StarSelector({ numStars = 0, setNumStars, size }) {
	const getStars = () => {
		const stars = [];
		for (let i = 1; i <= 5; i++) {
			if (i > numStars) {
				stars.push(
					<TouchableOpacity onPress={() => setNumStars(i)}>
						<AntDesign
							name="staro"
							size={size ? size : 24}
							color={theme.white}
						/>
					</TouchableOpacity>
				);
			} else {
				stars.push(
					<TouchableOpacity onPress={() => setNumStars(i)}>
						<AntDesign
							name="star"
							size={size ? size : 24}
							color={theme.yellow}
						/>
					</TouchableOpacity>
				);
			}
		}
		return stars;
	};

	return <View style={{ flexDirection: "row" }}>{getStars()}</View>;
}
