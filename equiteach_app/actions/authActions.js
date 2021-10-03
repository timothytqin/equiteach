import api from "../api/backendApi";
import AsyncStorage from "@react-native-community/async-storage";
import { navigate } from "../RootNavigation";

const signup =
  ({ email, password }) =>
  async (dispatch) => {
    try {
      const response = await api.post("/signup", { email, password });
      await AsyncStorage.setItem("token", response.data.token);
      await AsyncStorage.setItem("username", email);
      dispatch({
        type: "signin",
        payload: response.data.token,
        username: email,
      });
    } catch (err) {
      dispatch({
        type: "add_error",
        payload: "Somthing went wrong with sign up",
      });
    }
  };
const signin =
  ({ email, navigation }) =>
  async (dispatch) => {
    console.log("here");
    try {
      const response = await api.get("/getUserInfo?username=" + email);
      dispatch({
        type: "signin",
        payload: response.data.body,
      });
      var userData  = response.data.body.SK.split("#");
      console.log(userData[0])
      if(userData[0]=='Student'){
      navigation.navigate("Profile");
      }
      else{
        navigation.navigate("TutorProfile")
      }
    } catch (err) {
      dispatch({
        type: "add_error",
        payload: "Somthing went wrong with sign in",
      });
    }
  };

  const signintutor =
  ({ email, navigation }) =>
  async (dispatch) => {
    console.log("Tutor");
    try {
      const response = await api.get("/getUserInfo?username=" + email);
      dispatch({
        type: "signintutor",
        payload: response.data.body,
      });
      var userData  = response.data.body.SK.split("#");
      console.log(userData[0])
      if(userData[0]=='Tutor'){
      navigation.navigate("TutorProfile");
      }
    
    } catch (err) {
      dispatch({
        type: "add_error",
        payload: "Somthing went wrong with sign in",
      });
    }
  };

const tryLocalSignin = () => async (dispatch) => {
  console.log("triggered")
  const token = await AsyncStorage.getItem("token");
  const username = await AsyncStorage.getItem("username");
  const pfp = await AsyncStorage.getItem("pfp");
  if (token) {
    dispatch({ type: "signin", payload: token, username, pfp });
  } else {
    navigate("Login");
  }
};

export { signin, signup, tryLocalSignin, signintutor };
