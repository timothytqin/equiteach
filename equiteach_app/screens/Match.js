import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View, Image } from "react-native";
import Container from "../components/Container";
import pfp from "../assets/pfp.png";
import CustomButton from "../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { theme } from "../theme";
import CustomText from "../components/CustomText";
import Card from "../components/Card";
import Ratings from "../components/Ratings";
import { Icon } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import api from "../api/backendApi";

export default function Match({ route }) {
	const tutorDetails = route.params.tutor.qs[0];
	const { topics, duration } = route.params;

	const [tutor, setTutor] = useState();
	useEffect(() => {
		const url = `/getUserInfo?username=${tutorDetails.tutor}`;
		console.log(`Naving to ${url}`);
		api.get(`/getUserInfo?username=${tutorDetails.tutor}`).then((res) => {
			console.log(res.data);
			setTutor(res.data.body);
		});
	}, []);
	const navigation = useNavigation();
	return (
		<Container style={{ flex: 1 }}>
			{tutor && (
				<Card back>
					<CustomText
						value={tutor.name}
						size={36}
						color={theme.white}
						center
						bold
					/>
					<View style={{ alignItems: "center", marginVertical: 10 }}>
						<Image
							source={{ uri: tutor.avatar }}
							style={{ width: 100, height: 100, borderRadius: 100 }}
						/>
					</View>
					<View
						style={{
							flexDirection: "row",
							flexWrap: "wrap",
							marginVertical: 0,
							alignSelf: "center",
						}}
					>
						{tutor.languages.map((language) => (
							<CustomButton text={language} buttonStyle={{ margin: 5 }} />
						))}
					</View>
					<CustomText
						value="Lorem ipsum dolor sit amet, consectetur  adipiscing elit, sed do eiusmod tempor  incididunt ut labore et dolore magna"
						size={16}
						color={theme.white}
						center
					/>
					<View style={{ marginVertical: 0 }}>
						<CustomText value="Expertise" size={16} color={theme.white} bold />

						<View
							style={{
								flexDirection: "row",
								flexWrap: "wrap",
								marginVertical: 0,
								alignSelf: "center",
							}}
						>
							{tutor.subjects.map((subject) => (
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
						<Ratings
							ratings={tutor.teaching_styles}
							labels={["Authority", "Coach", "Activity", "Delegator"]}
						/>
					</View>
					<View style={{ marginTop: 10 }}>
						<CustomText
							value="Estimated Cost"
							size={16}
							color={theme.white}
							bold
						/>
						<CustomText
							value={`$${parseFloat(tutor.base_cpm).toFixed(2)}`}
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
						<TouchableOpacity onPress={() => navigation.navigate("Feedback")}>
							<View
								style={{
									justifyContent: "center",
									alignItems: "center",
									height: 70,
									width: 70,
									borderRadius: 70,
									backgroundColor: theme.white,
								}}
							>
								<Icon
									name="cross"
									type="entypo"
									color={theme.primaryColor}
									size={28}
								></Icon>
							</View>
						</TouchableOpacity>
						<View
							style={{
								justifyContent: "center",
								alignItems: "center",
								height: 140,
								width: 140,
								borderRadius: 150,
								borderWidth: 5,
								borderColor: theme.white,
							}}
						>
							<CustomText
								value={`${(tutorDetails.score * 100).toFixed(2)}%`}
								size={16}
								color={theme.white}
								bold
							/>
							<CustomText
								value="compatibility"
								size={16}
								color={theme.white}
								bold
							></CustomText>
						</View>
						<TouchableOpacity
							onPress={() => {
								const params = { ...route.params };
								params["tutor"] = { ...params["tutor"], ...tutor };
								navigation.navigate("Meeting", params);
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
							>
								<Icon
									name="check"
									type="entypo"
									color={theme.primaryColor}
								></Icon>
							</View>
						</TouchableOpacity>
					</View>
				</Card>
			)}
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
