import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Camera } from 'expo-camera';
import LottieView from "lottie-react-native";
import { Icon } from 'react-native-elements';
import { navigationRef } from '../RootNavigation';
import { useNavigation } from "@react-navigation/native";


export default function TutorCall() {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  let animation = React.createRef();
  const navigation = useNavigation();



  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
      animation.current.play();
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>Need permission</Text>;
  }
  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
            <Text style={styles.text}> Flip </Text>
          </TouchableOpacity>
        </View>
      </Camera>
      
      <View style={{flexDirection:'row', justifyContent:'space-between'}}>
      <LottieView
						ref={animation}
						loop={true}
						style={{
							width: 100,
							height: 100,
						}}
						source={require('../assets/audio.json')}
					/>
                    <LottieView
						ref={animation}
						loop={true}
						style={{
							width: 100,
							height: 100,
						}}
						source={require('../assets/audio3.json')}
					/></View>
                    
            <View style={{position:'absolute', bottom:40}}><View style={{flexDirection:'row', justifyContent:'space-between', width:'70%', alignSelf:'center'}}>
                <Icon name="mic"></Icon>
                <Icon name="video" type="feather"></Icon>
                <Icon onPress={()=>navigation.navigate('FeedbackTutor',{tutor:'John',duration:10})} name="call-end"></Icon>
            </View></View>
            <Text onPress={()=>animation.current.play()}>X</Text>
            <Image source={{uri:'https://www.wittenberg.edu/sites/default/files/2021-08/nouser_0.jpg'}} 
                    style={{zIndex:3, position:'absolute', bottom:150, height:200, width:200, alignSelf:'center'}}></Image>
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    camera: {
      flex: 0.75,
    },
    buttonContainer: {
      flex: 1,
      backgroundColor: 'transparent',
      flexDirection: 'row',
      margin: 20,
    },
    button: {
      flex: 0.1,
      alignSelf: 'flex-end',
      alignItems: 'center',
    },
    text: {
      fontSize: 18,
      color: 'white',
    },
  });
