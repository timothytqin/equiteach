import React from "react";
import { View, Text } from "react-native";
import { theme } from "../theme";
import CustomText from "./CustomText";

export default function Ratings({ ratings }) {
	const getRatings = () => {
		const ratingsList = [];
		for (const rating in ratings) {
			ratingsList.push(
				<View style={{ alignItems: "center", flexDirection: "row" }}>
					<CustomText value={`${rating}    `} color={theme.white} />
					<View
						style={{
							height: 3,
							width: `${ratings[rating] * 18}%`,
							backgroundColor: theme.white,
						}}
					/>
				</View>
			);
		}
		return ratingsList;
	};

	return <View>{getRatings()}</View>;
}
