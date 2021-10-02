import React from "react";
import { ScrollView, StyleSheet, View, Image, TextInput } from "react-native";
import { useFonts } from "expo-font";
import Container from "../components/Container";
import { useNavigation } from "@react-navigation/native";
import pfp from "../assets/tutor.png";
import CustomButton from "../components/CustomButton";
import { theme } from "../theme";
import CustomText from "../components/CustomText";
import Card from "../components/Card";

export default function FindTutor() {
	const [loaded] = useFonts({
		A: require("../assets/A.ttf"),
		F: require("../assets/F.ttf"),
	});

	if (!loaded) {
		return null;
	}
	const navigation = useNavigation();
	return (
		<Container style={{ flex: 1 }}>
			<Card style={{ flex: 1 }}>
				<CustomText value="Find a tutor" color={theme.white} size={20} bold />
				<CustomText
					value="Lorem ipsum dolor sit amet, consectetur  adipiscing elit, sed do eiusmod tempor  incididunt ut labore et dolore magna"
					color={theme.white}
					size={16}
				/>
				<View style={styles.entry}>
					<CustomText value="Subject" size={10} color={theme.white} bold />
					<TextInput style={styles.input} />
				</View>
				<View style={styles.entry}>
					<CustomText value="Topic(s)" size={10} color={theme.white} bold />
					<TextInput multiline numberOfLines={5} style={styles.input} />
				</View>
				<View style={styles.entry}>
					<CustomText value="Duration" size={10} color={theme.white} bold />
					<TextInput style={styles.input} placeholder="mins" />
				</View>
				<View
					style={{
						flex: 1,
						alignItems: "center",
						marginBottom: 50,
						justifyContent: "flex-end",
					}}
				>
					<Image
						source={pfp}
						style={{ width: 300, height: 100, resizeMode: "contain" }}
					/>
				</View>
				<CustomButton
					onPress={() => navigation.navigate("Survey")}
					text="Search"
					buttonStyle={{ backgroundColor: theme.darkGrey }}
					textStyle={{ color: theme.white }}
				/>
			</Card>
		</Container>
	);
}
const styles = StyleSheet.create({
	input: {
		borderRadius: 8,
		paddingVertical: 10,
		paddingHorizontal: 20,
		marginVertical: 5,
		backgroundColor: theme.white,
	},
	entry: {
		marginVertical: 10,
	},
});
