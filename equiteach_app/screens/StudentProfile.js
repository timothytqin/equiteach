import React from "react";
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


export default function StudentProfile() {
  const [loaded] = useFonts({
    A: require("../assets/A.ttf"),
    F: require("../assets/F.ttf"),
  });

  const navigation = useNavigation();

  const user = useSelector((state) => state.auth.user);
  console.log(user);
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
  const demographic = {'ethnicity':'Asian','location':'Plano,TX','gender':'Male','income':'50000'}
  var i = 0;
  var learning = [['Visual',user.learning_styles[0]],['Auditory',user.learning_styles[1]],['Kinesthetic',user.learning_styles[2]],['Reading/Writing',user.learning_styles[3]]];
  
  if (!loaded) {
    return null;
  }
  return (
    <Container>
      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 30, paddingVertical: 80 }}
      >
        <View style={{ alignItems: "center" }}>
          <mage
            source={{
              uri: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
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
        <Text style={{textAlign:'center', fontFamily:'F', color:theme.grey, textAlignVertical:'center'}}>{user.gender == 'male' ? 'Male' : 'Female'}, {user.age}</Text>
        <View style={{flexDirection:'row', alignSelf:'center', marginTop:'5%'}}>
                <Icon name="location-sharp" type="ionicon" color={theme.grey}></Icon>
                <Text style={{textAlign:'center', fontFamily:'F', color:theme.grey, textAlignVertical:'center'}}>{demographic.location}</Text>
        </View>
                
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
        <Text style={{fontFamily:'A', fontSize:18, color:theme.primaryColor}}>Learning Styles</Text>
        {learning.map((learn) => (
            <View style={{flexDirection:'row', justifyContent:'space-between'}}><Text style={{fontFamily:'F', textAlignVertical:'center', color:theme.primaryColor}}>{learn[0]}</Text>
            <Slider
                style={{ width: 200, height: 40 }}
                minimumValue={0}
                thumbTintColor={theme.primaryColor}
                maximumValue={1}
                value={learn[1]}
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
