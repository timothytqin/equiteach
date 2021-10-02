import React, { useState } from "react";
import { ScrollView, StyleSheet, View, Image, Text } from "react-native";
import Container from "../components/Container";
import pfp from "../assets/pfp.png";
import CustomButton from "../components/CustomButton";
import { useNavigation } from '@react-navigation/native';
import { theme } from "../theme";
import CustomText from "../components/CustomText";
import Card from "../components/Card";
import Ratings from "../components/Ratings";
import StarSelector from "../components/StarSelector";
import Slider from '@react-native-community/slider';


export default function Feedback() {
	const user = {
		name: "John Doe",
		subjects: ["Calculus I", "Calculus II"],
		teachingStyles: [
			["Authority",0],
			["Coach", 0],
			["Activity", 0],
			["Delegator", 0]
		],
		estimatedCost: 5.55,
	};
	const navigation = useNavigation();
	let teaching = {"Authority":0,"Coach":0,"Activity":0,"Delegator":0};

	const [numStars, setNumStars] = useState(0);
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
				<View
					style={{
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "space-evenly",
						marginVertical: 20,
					}}
				>
					<Image
						source={pfp}
						style={{ width: 100, height: 100, borderRadius: 100 }}
					/>
					<Image
						source={pfp}
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
						value={`How knowledgable was ${user.name}?`}
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
						value={`How would you describe ${user.name}'s teaching style?`}
						size={16}
						color={theme.white}
						bold
					/>
					
					{user.teachingStyles.map((teach) => (
							<View style={{flexDirection:'row', justifyContent:'space-between'}}><Text style={{fontFamily:'F', color:"#FFF", textAlignVertical:'center'}}>{teach[0].toString()}</Text>
							<Slider
						style={{width: 200, height: 40}}
						minimumValue={0}
						thumbTintColor="#FFF"
						maximumValue={5}
						step={1}
						value={teaching[teach]}
						onValueChange={(e)=>{teaching[teach[0]]=e; console.log(teaching)}}
						minimumTrackTintColor="#FFFFFF"
						maximumTrackTintColor="#000000"
					/></View>
							
						))}
					
					
				</View>
				<CustomButton

					onPress={()=>navigation.navigate('SessionDetails')}
					text="Submit"
					buttonStyle={{ backgroundColor: theme.darkGrey }}
					textStyle={{ color: theme.white }}
				/>
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
