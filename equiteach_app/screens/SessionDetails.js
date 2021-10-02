import React, { useState } from "react";
import { ScrollView, StyleSheet, View, Image } from "react-native";
import Container from "../components/Container";
import pfp from "../assets/pfp.png";
import CustomButton from "../components/CustomButton";
import { theme } from "../theme";
import CustomText from "../components/CustomText";
import Card from "../components/Card";
import Ratings from "../components/Ratings";
import StarSelector from "../components/StarSelector";

export default function SessionDetails() {
	const user = {
		name: "John Doe",
		subjects: ["Calculus I", "Calculus II"],
		teachingStyles: {
			A: 5,
			B: 3,
			C: 2,
			D: 4,
		},
		estimatedCost: 5.55,
	};

	return (
		<Container style={{ paddingHorizontal: 30, paddingVertical: 80 }}>
			<Card>
				<CustomText
					value="Session Details"
					size={36}
					color={theme.white}
					center
					bold
				/>
				<View
					style={{
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "space-evenly",
						marginVertical: 20,
					}}
				>
					<Image
						source={pfp}
						style={{ width: 100, height: 100, borderRadius: 100 }}
					/>
					<Image
						source={pfp}
						style={{ width: 100, height: 100, borderRadius: 100 }}
					/>
				</View>
				<View style={styles.row}>
					<View style={{ flex: 1, alignItems: "center" }}>
						<CustomText value="Subject" color={theme.white} bold />
					</View>
					<View style={{ flex: 1, alignItems: "center" }}>
						<CustomButton text="Programming" />
					</View>
				</View>
				<View style={styles.row}>
					<View style={{ flex: 1, alignItems: "center" }}>
						<CustomText value="Duration" color={theme.white} bold />
					</View>
					<View style={{ flex: 1, alignItems: "center" }}>
						<CustomText value="10 mins" color={theme.white} />
					</View>
				</View>
				<View style={styles.row}>
					<View style={{ flex: 1, alignItems: "center" }}>
						<CustomText value="Cost" color={theme.white} bold />
					</View>
					<View style={{ flex: 1, alignItems: "center" }}>
						<CustomText value="$5.55" color={theme.white} />
					</View>
				</View>
				<View style={{}}>
					<CustomText value="Cost" color={theme.white} bold />
					<CustomText
						value="Lorem ipsum dolor sit amet, consectetur  adipiscing elit, sed do eiusmod tempor  incididunt ut labore et dolore magna"
						color={theme.white}
					/>
				</View>
			</Card>
		</Container>
	);
}
const styles = StyleSheet.create({
	historyItem: {
		width: "100%",
		backgroundColor: theme.primaryColor,
		borderRadius: 8,
		padding: 20,
		height: 100,
		marginVertical: 10,
	},
	row: {
		flexDirection: "row",
		alignItems: "center",
		marginVertical: 50,
	},
});
