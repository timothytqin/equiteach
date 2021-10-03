import React, { useEffect, useState } from "react";
import {
	ScrollView,
	StyleSheet,
	View,
	Image,
	Text,
	FlatList,
} from "react-native";
import { useFonts } from "expo-font";
import Container from "../components/Container";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from "@react-navigation/native";
import tutor from "../assets/tutor.png";
import pfp from "../assets/pfp.png";
import CustomButton from "../components/CustomButton";
import { theme } from "../theme";
import CustomText from "../components/CustomText";
import Card from "../components/Card";
import { Icon } from "react-native-elements";
import { useSelector } from "react-redux";
import api from "../api/backendApi";


export default function Profile({navigation}) {
	const [loaded] = useFonts({
		A: require("../assets/A.ttf"),
		F: require("../assets/F.ttf"),
	});

	const user = useSelector((state) => state.auth.user);

	const [sessionHistory, setSessionHistory] = useState([]);

	useEffect(() => {
		api.get(`/getStudentSessions?username=${user.PK}`).then(async (res) => {
			const history = [];
			for (const session of res.data.body) {
				const avatar = await api
					.get(`/getUserInfo?username=${session.PK}`)
					.then((res) => res.data.body.avatar);
				history.push({ ...session, avatar });
			}
			setSessionHistory(history);
			console.log(history);
		});
	}, []);

	if (!loaded) {
		return null;
	}
	return (
		<Container>
			<View style={{ alignItems: "center" }}>
				<Image
					source={{
						uri: user.avatar,
					}}
					style={{ width: 100, height: 100, borderRadius: 100 }}
				/>
			</View>
			<Text
				style={{
					fontFamily: "A",
					fontSize: 30,
					textAlign: "center",
					color: theme.grey,
				}}
			>
				{user.name}
			</Text>
			<View
				style={{
					flexDirection: "row",
					flexWrap: "wrap",
					justifyContent: "center",
					marginVertical: 1,
				}}
			>
				{[user.primary_language, ...user.secondary_languages].map(
					(language) => (
						<CustomButton text={language} buttonStyle={{ margin: 2.5 }} />
					)
				)}
			</View>
			<View
				style={{
					flexDirection: "row",
					flexWrap: "wrap",
					justifyContent: "center",
					marginVertical: 10,
				}}
			>
				{user.subjects.map((subject) => (
					<CustomButton text={subject} inverted buttonStyle={{ margin: 2.5 }} />
				))}
			</View>
			<Card>
				<CustomText
					value="Connect with a tutor right away"
					color={theme.white}
					size={26}
					bold
				/>
				<View style={{ flexDirection: "row", justifyContent: "space-between" }}>
					<CustomButton
						onPress={() => navigation.navigate("FindTutor")}
						text="Get Started"
						buttonStyle={{
							marginVertical: 10,
							width: "40%",
							backgroundColor: theme.darkGrey,
						}}
						textStyle={{ color: theme.white }}
					/>
					<Image
						source={tutor}
						style={{
							width: 170,
							height: 100,
							resizeMode: "contain",
							position: "absolute",
							right: 0,
							zIndex: 2,
							top: -40,
						}}
					/>
				</View>
			</Card>
			<View>
				<CustomText value="History" size={25} bold style={{ marginTop: 20 }} />
				<FlatList
					data={sessionHistory}
					renderItem={({ item, index }) => (
						<Card
							disabled={false}
							onPress={() => {
								navigation.navigate("SessionDetails", { session: item });
							}}
							style={{
								marginVertical: 10,
								flexDirection: "row",
								alignItems: "center",
							}}
						>
							<View style={{ marginRight: 20 }}>
								<Image
									source={{
										uri: item.avatar,
									}}
									style={{ width: 60, height: 60, borderRadius: 100 }}
								/>
							</View>
							<View>
								<CustomText value={item.SK} color={theme.white} bold />
								<CustomText
									value={`Cost: $${(item.cpm * item.duration).toFixed(2)}`}
									color={theme.white}
								/>
								<CustomText
									value={`Subject: Programming`}
									color={theme.white}
								/>
							</View>
						</Card>
					)}
				/>
			</View>
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
