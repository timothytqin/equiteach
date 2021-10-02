import React from "react";
import { ScrollView, StyleSheet, View, Image, Text } from "react-native";
import { useFonts } from 'expo-font';
import Container from "../components/Container";
import { useNavigation } from '@react-navigation/native';
import tutor from "../assets/tutor.png";
import pfp from '../assets/pfp.png';
import CustomButton from "../components/CustomButton";
import { theme } from "../theme";
import CustomText from "../components/CustomText";
import Card from "../components/Card";
import { Icon } from "react-native-elements";

export default function Profile() {

	const [loaded] = useFonts({
		A: require('../assets/A.ttf'),
		F: require('../assets/F.ttf')
	  });
	  
	  if (!loaded) {
		return null;
	  }
	const navigation = useNavigation();

	const user = {
		name: "John Doe",
		subjects: [
			"Calculus I",
			"Calculus II",
			"Physics",
			"Chemistry",
			"Programming",
		],
		languages: ["English",
			"Spanish"]
	};
	return (
		<Container>
			<ScrollView
				contentContainerStyle={{ paddingHorizontal: 30, paddingVertical: 80 }}
			>
				<View style={{ alignItems: "center" }}>
					<Image
						source={{uri:'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80'}}
						style={{ width: 100, height: 100, borderRadius: 100 }}
					/>
				</View>
				<Text style={{fontFamily:'A',fontSize:30, textAlign:'center', color:theme.grey}}>{user.name}</Text>
				<View
					style={{
						flexDirection: "row",
						flexWrap: "wrap",
						justifyContent: "center",
						marginVertical: 1,
					}}
				>
					{user.languages.map((language) => (
						<CustomButton text={language} buttonStyle={{ margin: 2.5 }} />
					))}
					
					
					
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
					<View
						style={{ flexDirection: "row", justifyContent: "space-between" }}
					>
						<CustomButton
						onPress={()=>navigation.navigate('FindTutor')}
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
							style={{ width: 170, height: 100, resizeMode:'contain', position:'absolute', right:0, zIndex:2, top:-40 }}
						/>
					</View>
				</Card>
				<CustomText
					value="History"
					size={25}
					bold
					style={{ marginVertical: 20 }}
				/>
				<View style={styles.historyItem}></View>
				<View style={styles.historyItem}></View>
				<View style={styles.historyItem}></View>
			</ScrollView>
			<View style={{borderTopLeftRadius:20, borderTopRightRadius:20, paddingVertical:20, backgroundColor:"#E9E9F0", flexDirection:'row', justifyContent:'space-around'}}>
				<Icon name="home" type="ionicon" color="#7398C5"></Icon>
				<Icon name="head-question" type="material-community" color="#FFF"></Icon>
				<Icon name="user-alt" type="font-awesome-5" color="#FFF"></Icon>
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
