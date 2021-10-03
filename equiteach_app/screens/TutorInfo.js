import React,{useEffect, useState} from "react";
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
import Slider from "@react-native-community/slider";
import { FlatList } from "react-native-gesture-handler";
import api from "../api/backendApi";


export default function TutorInfo({navigation, route}) {
  const [loaded] = useFonts({
    A: require("../assets/A.ttf"),
    F: require("../assets/F.ttf"),
  });

  const {username} = route.params;



  useEffect(() => {
    api.get(`/getUserInfo?username=${username}`).then(async (res) => {
      console.log("User Info:",res.data.body)
			
			console.log(res.data.body);
		});
  },[]);

  //const user = useSelector((state) => state.auth.user);
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

  const [user, setUser] = useState({
        "GS1_PK": "Tutor#1",
        "secondary_languages": [
            "Chinese"
        ],
        "avatar": "https://d5t4h5a9.rocketcdn.me/wp-content/uploads/2020/11/Professional-Headshot-Poses-Blog-Post.jpg",
        "rating": 69,
        "subjects": [
            "Algorithm",
            "Calculus",
            "Physics",
            "Chemistry"
        ],
        "name": "Steve Han",
        "num_sessions": 15,
        "primary_language": "English",
        "languages": [
            "English",
            "Chinese"
        ],
        "SK": "Tutor#stevehan",
        "teaching_styles": [
            0.32310732097958506,
            0.32304223106485075,
            0.3230987975971899,
            0.030751650358374304
        ],
        "PK": "stevehan",
        "base_cpm": 0.5
    })
  const demographic = {'ethnicity':'Asian','location':'Plano,TX','gender':'Male','income':'50000'}
  var i = 0;
  var teaching = [['Authority',user.teaching_styles[0]],['Coach',user.teaching_styles[1]],['Activity',user.teaching_styles[2]],['Delegator',user.teaching_styles[3]]];
  
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
        >
          {user.name}
        </Text>
      
                
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            marginVertical: 10,
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
        <Text style={{fontFamily:'A', fontSize:18, color:theme.primaryColor}}>Teaching Styles</Text>
        {teaching.map((teach) => (
            <View style={{flexDirection:'row', justifyContent:'space-between'}}><Text style={{fontFamily:'F', textAlignVertical:'center', color:theme.primaryColor}}>{teach[0]}</Text>
            <Slider
                style={{ width: 200, height: 40 }}
                minimumValue={0}
                thumbTintColor={theme.primaryColor}
                maximumValue={1}
                value={teach[1]}
                disabled
                minimumTrackTintColor={theme.primaryColor}
                maximumTrackTintColor={theme.primaryColor}
            /></View>

          ))}
        
        <View>        
        </View>
  
       
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
