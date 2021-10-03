import { combineReducers } from "redux";
import StockReducer from "./StockReducer";

const initialState = { error: "", token: null, username: "", pfp: "" };

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "signin":
      return {
        error: "",
        user: action.payload,
      };
      case "signintutor":
      return {
        error: "",
        user: action.payload,
      };
    case "add_error":
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default combineReducers({
  auth: authReducer,
  stock: StockReducer,
});
