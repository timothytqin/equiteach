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
import api from "../api/backendApi";
import { useDispatch } from "react-redux";
import { signin } from "../actions/authActions";

export default function Feedback({ route }) {
	const { tutor, duration } = route.params;
	const user = useSelector((state) => state.auth.user);

	const navigation = useNavigation();
	const dispatch = useDispatch();

	const teaching = { Authority: 0, Coach: 0, Activity: 0, Delegator: 0 };

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
						source={{ uri: tutor.avatar }}
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
						value={`How knowledgable was ${tutor.name}?`}
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
						value={`How would you describe ${tutor.name}'s teaching style?`}
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
							const session = { ...route.params };
							session["session"] = {
								...session["session"],
								rating: numStars,
								teaching,
							};

							const data = {
								...session["session"],
								student: user.PK,
								tutor: session.tutor.PK,
								cost: session.tutor.base_cpm * session.session.duration,
							};
							api.post(`/addSession`, data).then((res) => {
								api
									.post(`/updateTutorInfo`, {
										...data,
										teaching_styles: Object.values(data.teaching),
									})
									.then(() => {
										dispatch(
											signin({ email: user.PK, navigation: navigation })
										);
									});
							});
							navigation.navigate("SessionDetails", {
								session: {
									avatar: session.tutor.avatar,
									cpm: session.tutor.base_cpm,
									cost: session.tutor.base_cpm * data.duration,
									subject: data.subject,
									duration: data.duration,
								},
							});
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
