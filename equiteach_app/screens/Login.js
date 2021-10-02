import React from "react";
import { StyleSheet, View, Image, TextInput } from "react-native";
import Container from "../components/Container";
import { useNavigation } from '@react-navigation/native';
import logo from "../assets/logo_dark.png";
import CustomText from "../components/CustomText";
import { theme } from "../theme";
import CustomButton from "../components/CustomButton";

export default function Login() {
	const navigation = useNavigation();
	return (
		<Container style={{ alignItems: "center", justifyContent: "center" }}>
			<View style={{ paddingHorizontal: 50 }}>
				<Image source={logo} style={{ width: 60, height: 60 }} />
				<CustomText value="Login as a student" size={25} bold />
				<CustomText
					value="Lorem ipsum dolor sit amet, consectetur  adipiscing elit, sed do eiusmod tempor  incididunt ut labore et dolore magna"
					size={16}
					color={theme.grey}
				/>
				<View style={{ marginVertical: 50 }}>
					<TextInput style={styles.input} placeholder="Email" />
					<TextInput
						style={styles.input}
						placeholder="Password"
						secureTextEntry
					/>
				</View>
				<CustomButton
					text="Login"
					inverted
					buttonStyle={{ marginVertical: 80 }}
					onPress={()=>navigation.navigate('Profile')}
				/>
				<View style={{ flexDirection: "row", justifyContent: "center" }}>
					<CustomText value="Are you a " />
					<CustomText value="tutor" bold />
					<CustomText value="? Login here" />
				</View>
			</View>
		</Container>
	);
}
const styles = StyleSheet.create({
	input: {
		borderWidth: 1,
		borderColor: theme.primaryColor,
		borderRadius: 8,
		paddingVertical: 10,
		paddingHorizontal: 20,
		marginVertical: 5,
	},
});
