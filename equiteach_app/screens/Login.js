import React, { useState } from "react";
import { StyleSheet, View, Image, TextInput } from "react-native";
import Container from "../components/Container";
import { useNavigation } from "@react-navigation/native";
import logo from "../assets/logo_dark.png";
import CustomText from "../components/CustomText";
import { theme } from "../theme";
import CustomButton from "../components/CustomButton";
import { useDispatch } from "react-redux";
import { signin } from "../actions/authActions";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Login() {
	const navigation = useNavigation();
	const dispatch = useDispatch();
	const [username, setUsername] = useState("");
	const handleLogin = () => {
		dispatch(signin({ email: username, navigation: navigation }));
	};
	return (
		<Container style={{ flex: 1 }}>
			<View
				style={{
					flex: 1,
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<View style={{ paddingHorizontal: 50 }}>
					<Image source={logo} style={{ width: 60, height: 60 }} />
					<CustomText value="Login as a student" size={25} bold />
					<CustomText
						value="Welcome back! Please login to connect with tutors around you"
						size={16}
						color={theme.grey}
					/>
					<View style={{ marginVertical: 50 }}>
						<TextInput
							style={styles.input}
							placeholder="Email"
							value={username}
							onChangeText={setUsername}
							autoCapitalize={false}
						/>
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
						onPress={handleLogin}
					/>
					<TouchableOpacity onPress={()=>navigation.navigate('LoginTutor')} ><View style={{ flexDirection: "row", justifyContent: "center" }}>
						<CustomText value="Are you a " />
						<CustomText value="tutor" bold />
						<CustomText value="? Login here" />
					</View></TouchableOpacity>
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
