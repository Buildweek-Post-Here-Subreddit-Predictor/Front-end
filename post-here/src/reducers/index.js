import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { predictReducer } from "./predictReducer";

export default combineReducers({
  userReducer,
  predictReducer
});
