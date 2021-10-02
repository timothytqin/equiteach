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

export default function Feedback() {
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

	const [numStars, setNumStars] = useState(0);
	return (
		<Container style={{ paddingHorizontal: 30, paddingVertical: 80 }}>
			<Card>
				<CustomText
					value={user.name}
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
				<CustomText
					value="Tell us about your experience. This will help us improve our algorithm."
					size={16}
					color={theme.white}
					center
				/>

				<View style={{ marginVertical: 50 }}>
					<CustomText
						value={`How knowledgable was ${user.name}?`}
						size={16}
						color={theme.white}
						bold
					/>
					<StarSelector
						numStars={numStars}
						setNumStars={setNumStars}
						size={32}
					/>
				</View>

				<View style={{ marginVertical: 10 }}>
					<CustomText
						value={`How would you describe ${user.name}'s teaching style?`}
						size={16}
						color={theme.white}
						bold
					/>
					<Ratings ratings={user.teachingStyles} />
				</View>
				<CustomButton
					text="Submit"
					buttonStyle={{ backgroundColor: theme.darkGrey }}
					textStyle={{ color: theme.white }}
				/>
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
});
