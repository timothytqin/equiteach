import React, { useState } from "react";
import { ScrollView, StyleSheet, View, Image, TextInput } from "react-native";
import { useFonts } from "expo-font";
import Container from "../components/Container";
import { useNavigation } from "@react-navigation/native";
import pfp from "../assets/tutor.png";
import CustomButton from "../components/CustomButton";
import { theme } from "../theme";
import CustomText from "../components/CustomText";
import Card from "../components/Card";
import Axios from "axios";
import { useSelector } from "react-redux";

export default function FindTutor() {
	const [loaded] = useFonts({
		A: require("../assets/A.ttf"),
		F: require("../assets/F.ttf"),
	});
	const user = useSelector((state) => state.auth.user);

	const [subject, setSubject] = useState("");
	const [topics, setTopics] = useState("");
	const [duration, setDuration] = useState("");

	const searchTutor = async () => {
		const url = `https://kmg6zel2gh.execute-api.us-east-2.amazonaws.com/default/equitutormatch?student=${user.PK}&subject=${subject}`;
		console.log(`Searching at ${url}`);
		return await Axios.get(url).then((res) => res.data);
	};

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
					<TextInput
						style={styles.input}
						value={subject}
						onChangeText={setSubject}
					/>
				</View>
				<View style={styles.entry}>
					<CustomText value="Topic(s)" size={10} color={theme.white} bold />
					<TextInput
						multiline
						numberOfLines={5}
						style={styles.input}
						value={topics}
						onChangeText={setTopics}
					/>
				</View>
				<View style={styles.entry}>
					<CustomText value="Duration" size={10} color={theme.white} bold />
					<TextInput
						style={styles.input}
						placeholder="mins"
						value={duration}
						onChangeText={setDuration}
					/>
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
					onPress={async () => {
						const tutor = await searchTutor();
						navigation.navigate("Match", {
							tutor,
							session: { predictedDuration: duration, topics, subject },
						});
					}}
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
