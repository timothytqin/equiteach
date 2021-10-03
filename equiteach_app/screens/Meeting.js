import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Container from "../components/Container";
import CustomText from "../components/CustomText";
import { useNavigation } from "@react-navigation/native";
import Recorder from "../components/Recorder";
import CustomButton from "../components/CustomButton";
import { theme } from "../theme";
import CustomCamera from "../components/Camera";

export default function Meeting({ route }) {
	const { tutor } = route.params;

	const [startTime, setStartTime] = useState();
	useEffect(() => {
		console.log(`Start Time: ${new Date().getTime()}`);
		setStartTime(new Date().getTime());
	}, []);

	const navigation = useNavigation();
	return (
		<Container style={{ flex: 1, justifyContent: "flex-end" }}>
			<View style={{ flex: 1 }}>
				<CustomCamera />
			</View>
			<View
				style={{
					flexDirection: "row",
					justifyContent: "space-around",
					marginVertical: 20,
				}}
			>
				<Recorder style={styles.button} />
				<CustomButton
					text="End Call"
					buttonStyle={{
						backgroundColor: "#f00",
						borderWidth: 0,
						...styles.button,
					}}
					textStyle={{ color: theme.white }}
					onPress={() => {
						console.log(`End Time: ${new Date().getTime()}`);
						const timedelta = new Date().getTime() - startTime;
						console.log(`Time Elapsed: ${timedelta}`);
						const params = { ...route.params };
						params["session"].duration = Math.ceil(timedelta / 1000 / 60);
						navigation.navigate("Feedback", params);
					}}
				/>
			</View>
		</Container>
	);
}
const styles = StyleSheet.create({
	button: {
		width: "40%",
	},
});
