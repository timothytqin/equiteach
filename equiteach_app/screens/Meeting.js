import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Container from "../components/Container";
import CustomText from "../components/CustomText";
import { useNavigation } from "@react-navigation/native";
import Recorder from "../components/Recorder";

export default function Meeting({ route }) {
  const { tutor } = route.params;

  const [startTime, setStartTime] = useState();
  useEffect(() => {
    console.log(`Start Time: ${new Date().getTime()}`);
    setStartTime(new Date().getTime());
  }, []);

  const navigation = useNavigation();
  return (
    <Container
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <TouchableOpacity
        onPress={() => {
          console.log(`End Time: ${new Date().getTime()}`);
          const timedelta = new Date().getTime() - startTime;
          console.log(`Time Elapsed: ${timedelta}`);
          const params = { ...route.params };
          params["session"].duration = Math.ceil(timedelta / 1000 / 60);
          navigation.navigate("Feedback", params);
        }}
      >
        <CustomText value="End Call" />
      </TouchableOpacity>
      <Recorder />
    </Container>
  );
}
