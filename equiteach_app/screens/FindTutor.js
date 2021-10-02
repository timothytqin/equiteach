import React from "react";
import { ScrollView, StyleSheet, View, Image, TextInput } from "react-native";
import Container from "../components/Container";
import pfp from "../assets/pfp.png";
import CustomButton from "../components/CustomButton";
import { theme } from "../theme";
import CustomText from "../components/CustomText";
import Card from "../components/Card";

export default function FindTutor() {
	return (
		<Container>
			<View style={{ padding: 40 }}>
				<Card>
					<CustomText value="Find a tutor" color={theme.white} size={32} bold />
					<CustomText
						value="Lorem ipsum dolor sit amet, consectetur  adipiscing elit, sed do eiusmod tempor  incididunt ut labore et dolore magna"
						color={theme.white}
						size={24}
					/>
					<View style={styles.entry}>
						<CustomText value="Subject" color={theme.white} bold />
						<TextInput style={styles.input} />
					</View>
					<View style={styles.entry}>
						<CustomText value="Topic(s)" color={theme.white} bold />
						<TextInput style={styles.input} />
					</View>
					<View style={styles.entry}>
						<CustomText value="Duration" color={theme.white} bold />
						<TextInput style={styles.input} />
					</View>
					<View style={{ alignItems: "center", marginVertical: 80 }}>
						<Image
							source={pfp}
							style={{ width: 100, height: 100, borderRadius: 100 }}
						/>
					</View>
					<CustomButton
						text="Search"
						buttonStyle={{ backgroundColor: theme.darkGrey }}
						textStyle={{ color: theme.white }}
					/>
				</Card>
			</View>
		</Container>
	);
}
const styles = StyleSheet.create({
	input: {
		borderRadius: 8,
		paddingVertical: 20,
		paddingHorizontal: 20,
		marginVertical: 5,
		backgroundColor: theme.white,
	},
	entry: {
		marginVertical: 10,
	},
});
