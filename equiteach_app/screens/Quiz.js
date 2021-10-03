import React, { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Image,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
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
import api from "../api/backendApi";
import FlipCard from "react-native-flip-card";
import Axios from "axios";

export default function Quiz() {
  const [quiz, setQuiz] = useState([]);
  const [text, setText] = useState([]);
  const [loaded] = useFonts({
    A: require("../assets/A.ttf"),
    F: require("../assets/F.ttf"),
  });

  useEffect(() => {
    Axios.get("http://8668-12-201-46-242.ngrok.io/")
      .then((response) => {
        setQuiz(response.data.quiz);
        setText(response.data.request.text);
      })
      .catch((err) => console.log(err));
    // fetch("http://8668-12-201-46-242.ngrok.io")
    //   .then((response) => {
    //     console.log("done");
    //     console.log(response);
    //     setQuiz(response);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }, []);

  //   const quiz = [
  //     {
  //       answer: "pairs of people",
  //       question: "What is a graph a collection of?",
  //     },
  //     {
  //       answer: "Mirroring",
  //       question: "What is the most common method for visualizing graphs?",
  //     },
  //     {
  //       answer: "edges or arcs",
  //       question: "What are the underlying objects being paired?",
  //     },
  //   ];

  if (!loaded) {
    return null;
  }

  return (
    <Container>
      <Text
        style={{
          fontFamily: "A",
          fontSize: 30,
          textAlign: "center",
          color: theme.grey,
        }}
      >
        Quiz
      </Text>
      <View>
        <CustomText
          value="Questions"
          size={25}
          bold
          style={{ marginTop: 20 }}
        />
        <FlatList
          data={quiz}
          renderItem={({ item, index }) => (
            <FlipCard
              style={{
                marginVertical: 10,
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: theme.primaryColor,
                padding: 20,
                borderRadius: "10px",
              }}
            >
              <View style={{ marginRight: 20 }}>
                <CustomText
                  value={item.question}
                  color={theme.white}
                  bold
                ></CustomText>
              </View>
              <View style={{ marginRight: 20 }}>
                <CustomText
                  value={item.answer}
                  color={theme.white}
                  bold
                ></CustomText>
              </View>
            </FlipCard>
          )}
        />
      </View>
      <CustomText value="Transcript" size={25} bold style={{ marginTop: 20 }} />
      <CustomText value={text} size={18} style={{ marginTop: 20 }} />
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
