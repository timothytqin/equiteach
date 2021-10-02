import React from "react";
import { ScrollView, StyleSheet, View, Image } from "react-native";
import Container from "../components/Container";
import pfp from "../assets/pfp.png";
import CustomButton from "../components/CustomButton";
import { theme } from "../theme";
import CustomText from "../components/CustomText";
import Card from "../components/Card";

export default function Profile() {
	const user = {
		name: "John Doe",
		subjects: [
			"Calculus I",
			"Calculus II",
			"Physics",
			"Chemistry",
			"Programming",
		],
	};
	return (
		<Container>
			<ScrollView
				contentContainerStyle={{ paddingHorizontal: 30, paddingVertical: 80 }}
			>
				<View style={{ alignItems: "center" }}>
					<Image
						source={pfp}
						style={{ width: 100, height: 100, borderRadius: 100 }}
					/>
				</View>
				<View
					style={{
						flexDirection: "row",
						flexWrap: "wrap",
						justifyContent: "center",
						marginVertical: 30,
					}}
				>
					{user.subjects.map((subject) => (
						<CustomButton text={subject} inverted buttonStyle={{ margin: 5 }} />
					))}
				</View>
				<Card>
					<CustomText
						value="Connect with a tutor right away"
						color={theme.white}
						size={32}
						bold
					/>
					<View
						style={{ flexDirection: "row", justifyContent: "space-between" }}
					>
						<CustomButton
							text="Get Started"
							buttonStyle={{
								marginVertical: 30,
								width: "50%",
								backgroundColor: theme.darkGrey,
							}}
							textStyle={{ color: theme.white }}
						/>
						<Image
							source={pfp}
							style={{ width: 100, height: 100, borderRadius: 100 }}
						/>
					</View>
				</Card>
				<CustomText
					value="History"
					size={36}
					bold
					style={{ marginVertical: 20 }}
				/>
				<View style={styles.historyItem}></View>
				<View style={styles.historyItem}></View>
				<View style={styles.historyItem}></View>
			</ScrollView>
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
