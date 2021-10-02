import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import Container from "../components/Container";
import CustomText from "../components/CustomText";
import ProgressDots from "../components/ProgressDots";
import { theme } from "../theme";

export default function Features() {
	const pages = [
		{
			title: "On-Demand Tutor Match",
			description:
				"Lorem ipsum dolor sit amet, consectetur  adipiscing elit, sed do eiusmod tempor  incididunt ut labore et dolore magna",
		},
		{
			title: "Micropayments",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna",
		},
		{
			title: "Feature 3",
			description:
				"Lorem ipsum dolor sit amet, consectetur  adipiscing elit, sed do eiusmod tempor  incididunt ut labore et dolore magna",
		},
	];
	const [pageNumber, setPageNumber] = useState(0);

	useEffect(() => {
		setInterval(() => setPageNumber((pageNumber + 1) % pages.length), 5000);
	}, []);
	return (
		<Container style={{ justifyContent: "center" }}>
			<View style={{ alignItems: "center", paddingHorizontal: 40 }}>
				<View style={styles.img} />
				<CustomText
					value={pages[pageNumber].title}
					style={{ marginBottom: 10 }}
					size={32}
					center
					bold
				/>
				<CustomText
					value={pages[pageNumber].description}
					color={theme.black}
					center
				/>
				<ProgressDots
					style={{ marginTop: 120 }}
					index={pageNumber}
					length={pages.length}
					size={10}
				/>
			</View>
		</Container>
	);
}
const styles = StyleSheet.create({
	img: {
		width: 120,
		height: 120,
		backgroundColor: theme.primaryColor,
		marginBottom: 80,
	},
});
