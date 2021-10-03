import React from "react";
import { View, Text } from "react-native";
import { theme } from "../theme";
import CustomText from "./CustomText";

export default function Ratings({ ratings, labels }) {
	const getRatings = () => {
		const ratingsList = [];
		for (let i = 0; i < ratings.length; i++) {
			ratingsList.push(
				<View
					style={{
						alignItems: "center",
						flexDirection: "row",
						justifyContent: "space-between",
					}}
				>
					<View style={{ flex: 1 }}>
						<CustomText value={`${labels[i]}`} color={theme.white} />
					</View>
					<View style={{ flex: 3 }}>
						<View
							style={{
								height: 3,
								width: `${ratings[i] * 100}%`,
								backgroundColor: theme.white,
							}}
						/>
					</View>
				</View>
			);
		}
		return ratingsList;
	};

	return <View>{getRatings()}</View>;
}
