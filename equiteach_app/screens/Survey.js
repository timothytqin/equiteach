import React from "react";
import { ScrollView, StyleSheet, View, Image } from "react-native";
import Container from "../components/Container";
import pfp from "../assets/pfp.png";
import CustomButton from "../components/CustomButton";
import { theme } from "../theme";
import CustomText from "../components/CustomText";
import Card from "../components/Card";
import Ratings from "../components/Ratings";

export default function Survey() {
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
					value={user.name}
					size={36}
					color={theme.white}
					center
					bold
				/>
				<View style={{ alignItems: "center", marginVertical: 20 }}>
					<Image
						source={pfp}
						style={{ width: 100, height: 100, borderRadius: 100 }}
					/>
				</View>
				<CustomText
					value="Lorem ipsum dolor sit amet, consectetur  adipiscing elit, sed do eiusmod tempor  incididunt ut labore et dolore magna"
					size={16}
					color={theme.white}
					center
				/>
				<View style={{ marginVertical: 10 }}>
					<CustomText value="Expertise" size={16} bold />
					<View
						style={{
							flexDirection: "row",
							flexWrap: "wrap",
							marginVertical: 30,
						}}
					>
						{user.subjects.map((subject) => (
							<CustomButton text={subject} buttonStyle={{ margin: 5 }} />
						))}
					</View>
				</View>
				<View style={{ marginVertical: 10 }}>
					<CustomText
						value="Teaching Style"
						size={16}
						color={theme.white}
						bold
					/>
					<Ratings ratings={user.teachingStyles} />
				</View>
				<View style={{ marginVertical: 10 }}>
					<CustomText
						value="Estimated Cost"
						size={16}
						color={theme.white}
						bold
					/>
					<CustomText
						value={`$${parseFloat(user.estimatedCost).toFixed(2)}`}
						size={16}
						color={theme.white}
					/>
				</View>
				<View
					style={{
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "space-between",
					}}
				>
					<View
						style={{
							justifyContent: "center",
							alignItems: "center",
							height: 70,
							width: 70,
							borderRadius: 70,
							backgroundColor: theme.white,
						}}
					/>
					<View
						style={{
							justifyContent: "center",
							alignItems: "center",
							height: 150,
							width: 150,
							borderRadius: 150,
							borderWidth: 5,
							borderColor: theme.white,
						}}
					>
						<CustomText value="63%" size={16} color={theme.white} bold />
						<CustomText
							value="compatibility"
							size={16}
							color={theme.white}
							bold
						/>
					</View>
					<View
						style={{
							justifyContent: "center",
							alignItems: "center",
							height: 70,
							width: 70,
							borderRadius: 70,
							backgroundColor: theme.white,
						}}
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
});
