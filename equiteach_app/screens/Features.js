import React, { useState, useEffect, useRef, createRef } from "react";
import { StyleSheet, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import LottieView from "lottie-react-native";
import Container from "../components/Container";
import CustomText from "../components/CustomText";
import ProgressDots from "../components/ProgressDots";
import { theme } from "../theme";
import CustomButton from "../components/CustomButton";

export default function Features() {
	const navigation = useNavigation();
	const [pageNumber, setPageNumber] = useState(0);
	let animation = React.createRef();
	useEffect(() => {
		animation.current.play();
	}, []);

	const pages = [
		{
			title: "On-Demand Tutor Match",
			description:
				"Equitable access to on-demand tutoring for underprevilidged students based on learning and teaching styles",
			img: require("../assets/1.json"),
		},
		{
			title: "Micropayments and Scholarships",
			description:
				"Uber meets tutoring using micropayments and generous scholarships provided by corporations seeking to improve their ESG rating",
			img: require("../assets/2.json"),
		},
		{
			title: "AI Generated Quiz",
			description:
				"Automated transcription of tutoring sessions followed by AI powered quizzes",
			img: require("../assets/3.json"),
		},
	];

	return (
		<Container style={{ flex: 1 }}>
			<View style={{ flex: 1, justifyContent: "flex-end" }}>
				<View
					style={{
						// flex: 1,
						alignItems: "center",
						paddingHorizontal: 40,
						justifyContent: "flex-end",
					}}
				>
					<LottieView
						ref={animation}
						loop={true}
						style={{
							width: 400,
							height: 350,
						}}
						source={pages[pageNumber].img}
					/>
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
				</View>
				<View
					style={{
						alignItems: "center",
						justifyContent: "flex-end",
					}}
				>
					<ProgressDots
						index={pageNumber}
						length={pages.length}
						style={{ marginTop: 120 }}
						size={10}
					/>
				</View>
				<View
					style={{
						flex: 1,
						alignItems: "center",
						justifyContent: "flex-end",
						marginBottom: 20,
					}}
				>
					<CustomButton
						text="Skip"
						inverted
						onPress={() => {
							if (pageNumber == pages.length - 1) navigation.navigate("Login");
							setPageNumber((pageNumber + 1) % pages.length);
							animation.current.play();
						}}
						buttonStyle={{ borderRadius: 50, width: "50%" }}
					/>
				</View>
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
