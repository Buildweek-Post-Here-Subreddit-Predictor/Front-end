import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { predictReducer } from "./predictReducer";
import { saveReducer } from "./saveReducer";
import { deleteReducer } from "./deleteReducer";
import { editReducer } from "./editReducer";

export default combineReducers({
  userReducer,
  predictReducer,
  saveReducer,
  editReducer,
  deleteReducer
});
