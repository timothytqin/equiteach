import React, { useState, useEffect, useRef, createRef } from "react";
import { StyleSheet, View, Text } from "react-native";
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import Container from "../components/Container";
import CustomText from "../components/CustomText";
import ProgressDots from "../components/ProgressDots";
import { theme } from "../theme";


export default function Features() {
	const navigation = useNavigation();
	const [pageNumber, setPageNumber] = useState(0);
	let animation = React.createRef();
	useEffect(() => {
		animation.current.play()
	}, []);

	const pages = [
		{
			title: "On-Demand Tutor Match",
			description:
				"Lorem ipsum dolor sit amet, consectetur  adipiscing elit, sed do eiusmod tempor  incididunt ut labore et dolore magna",
			img: require('../assets/1.json')
		},
		{
			title: "Micropayments",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna",
			img: require('../assets/2.json')
		},
		{
			title: "Feature 3",
			description:
				"Lorem ipsum dolor sit amet, consectetur  adipiscing elit, sed do eiusmod tempor  incididunt ut labore et dolore magna",
			img: require('../assets/3.json')
		},
	];

	
	return (
		<Container style={{ justifyContent: "center" }}>
			<View style={{ alignItems: "center", paddingHorizontal: 40 }}>
			<LottieView
                ref={animation}
                loop={true}
                style={{
                   width: 400,
                   height: 350
                }}
                source={pages[pageNumber].img}
           />
				<CustomText
					value={pages[pageNumber].title}
					style={{ marginBottom: 10 }}
					size={32}
					center
					bold
				/>
				<CustomText
					value={pages[pageNumber].description}
					color={theme.black}
					center
				/>
				<ProgressDots
					style={{ marginTop: 120 }}
					index={pageNumber}
					length={pages.length}
					size={10}
				/>
			</View>
			<Text onPress={()=>{setPageNumber((pageNumber + 1) % pages.length);animation.current.play();}} style={{textAlign:'center'}}>X</Text>
			{pageNumber==2 && <Text onPress={()=>navigation.navigate('Login')}>X</Text>}
		</Container>
	);
}
const styles = StyleSheet.create({
	img: {
		width: 120,
		height: 120,
		backgroundColor: theme.primaryColor,
		marginBottom: 80,
	},
});
