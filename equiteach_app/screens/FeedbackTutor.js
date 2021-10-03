import React, { useState } from "react";
import { ScrollView, StyleSheet, View, Image, Text } from "react-native";
import Container from "../components/Container";
import pfp from "../assets/pfp.png";
import CustomButton from "../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { theme } from "../theme";
import CustomText from "../components/CustomText";
import Card from "../components/Card";
import Ratings from "../components/Ratings";
import StarSelector from "../components/StarSelector";
import Slider from "@react-native-community/slider";
import { useSelector } from "react-redux";

export default function FeedbackTutor({ route }) {
	const { tutor, duration } = route.params;
	const navigation = useNavigation();
	const teaching = { Authority: 0, Coach: 0, Activity: 0, Delegator: 0 };

	const [user, setUser] = useState({
        "GS1_PK": "Tutor#1",
        "secondary_languages": [
            "Chinese"
        ],
        "avatar": "https://d5t4h5a9.rocketcdn.me/wp-content/uploads/2020/11/Professional-Headshot-Poses-Blog-Post.jpg",
        "rating": 20,
        "subjects": [
            "Algorithm",
            "Calculus",
            "Physics",
            "Chemistry"
        ],
        "name": "Steve Han",
        "num_sessions": 3,
        "primary_language": "English",
        "languages": [
            "English",
            "Chinese"
        ],
        "SK": "Tutor#stevehan",
        "teaching_styles": [
            0.3560522178396504,
            0.3580224049680239,
            0.17777983552877852,
            0.1081455416635472
        ],
        "PK": "stevehan",
        "base_cpm": 0.5
    });

	const [student, setStudent] = useState({
		"body": {
			"secondary_languages": [
				"Chinese"
			],
			"avatar": "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
			"rating": 20,
			"subjects": [
				"Algorithm",
				"Calculus I",
				"Calculus II"
			],
			"name": "Timothy Qin",
			"gender": "male",
			"discount": 0,
			"num_sessions": 3,
			"primary_language": "English",
			"race": "Asian",
			"learning_styles": [
				0.4509260768019119,
				0.45432078648633967,
				0.05879637173428928,
				0.03595676497745913
			],
			"natural_disaster": false,
			"SK": "Student#timqin",
			"PK": "timqin",
			"age": "20"
		}
	})

	const [numStars, setNumStars] = useState(0);
	return (
		<Container style={{ flex: 1 }}>
			<Card style={{ flex: 1 }}>
				<CustomText
					value={tutor.name}
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
						source={{ uri: user.avatar }}
						style={{ width: 100, height: 100, borderRadius: 100 }}
					/>
					<Image
						source={{ uri: student.body.avatar }}
						style={{ width: 100, height: 100, borderRadius: 100 }}
					/>
				</View>
				<CustomText
					value="Tell us about your experience. This will help us improve our algorithm."
					size={16}
					color={theme.white}
					center
				/>


				<View style={{ marginVertical: 10 }}>
					<CustomText
						value={`How would you describe ${student.body.name}'s learning style?`}
						size={16}
						color={theme.white}
						bold
					/>

					{Object.keys(teaching).map((teach) => (
						<View
							style={{ flexDirection: "row", justifyContent: "space-between" }}
						>
							<Text
								style={{
									fontFamily: "F",
									color: "#FFF",
									textAlignVertical: "center",
								}}
							>
								{teach}
							</Text>
							<Slider
								style={{ width: 200, height: 40 }}
								minimumValue={0}
								thumbTintColor="#FFF"
								maximumValue={5}
								step={1}
								value={teaching[teach]}
								onValueChange={(e) => {
									teaching[teach] = e;
								}}
								minimumTrackTintColor="#FFFFFF"
								maximumTrackTintColor="#000000"
							/>
						</View>
					))}
				</View>
				<View style={{ flex: 1, justifyContent: "flex-end" }}>
					<CustomButton
						onPress={() => {
							console.log(numStars);
							console.log(teaching);
							// navigation.navigate("SessionDetails");
						}}
						text="Submit"
						buttonStyle={{ backgroundColor: theme.darkGrey }}
						textStyle={{ color: theme.white }}
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
