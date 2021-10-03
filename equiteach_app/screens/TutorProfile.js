import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View, Image, Text } from "react-native";
import { useFonts } from "expo-font";
import Container from "../components/Container";
import { useNavigation } from "@react-navigation/native";
import tutor from "../assets/tutor.png";
import pfp from "../assets/pfp.png";
import CustomButton from "../components/CustomButton";
import { theme } from "../theme";
import CustomText from "../components/CustomText";
import Card from "../components/Card";
import { Icon } from "react-native-elements";
import { useSelector } from "react-redux";
import { FlatList } from "react-native-gesture-handler";
import api from "../api/backendApi";


export default function TutorProfile({navigation, route}) {
  const [loaded] = useFonts({
    A: require("../assets/A.ttf"),
    F: require("../assets/F.ttf"),
  });

  const {username} = route.params;
  const [sessionHistory, setSessionHistory] = useState([{
    "GS1_PK": "Session#timqin",
    "PK": "stevehan",
    "SK": "Session#1633199349350",
    "avatar": "https://d5t4h5a9.rocketcdn.me/wp-content/uploads/2020/11/Professional-Headshot-Poses-Blog-Post.jpg",
    "cpm": 0.71,
    "duration": 20,
    "student_satisfaction": 5,
    "tutor_satisfaction": 5,
  },]);

  
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

  const _getUserInfo = async () => {
    try {
      const response = await api.get("/getUserInfo?username=" + username);
      console.log("User Info:",response);
      setUser(response.data.body);
    
    } catch (err) {
    }
  }

  useEffect(() => {
    _getUserInfo();
    api.get(`/getTutorSessions?username=${user.PK}`).then(async (res) => {
      console.log("Sessions:",res.data.body)
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
  },[]);


  //console.log(user);
  // const user = {
  // 	name: "John Doe",
  // 	subjects: [
  // 		"Calculus I",
  // 		"Calculus II",
  // 		"Physics",
  // 		"Chemistry",
  // 		"Programming",
  // 	],
  // 	languages: ["English",
  // 		"Spanish"]
  // };
  if (!loaded) {
    return null;
  }
  return (
    <Container>
      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 30, paddingVertical: 80 }}
      >
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
          onPress={()=>navigation.navigate('TutorInfo',{username:username})}
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
            <CustomButton
              text={subject}
              inverted
              buttonStyle={{ margin: 2.5 }}
            />
          ))}
        </View>


        <FlatList
					data={sessionHistory}
					renderItem={({ item, index }) => (
						<Card
							disabled={false}
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
									value={`Earnings: $${(item.cpm ? item.cpm:item.cost * item.duration).toFixed(2)}`}
									color={theme.white}
								/>
								<CustomText
									value={`Duration: ${item.duration} mins`}
									color={theme.white}
								/>
							</View>
						</Card>
					)}
				/>
        
      
      </ScrollView>
    
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
