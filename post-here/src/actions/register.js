import axios from "axios";

// register action types
export const START_REGISTER = "START_REGISTER";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

export const registerUser = () => dispatch => {
  dispatch({ type: START_REGISTER });
  // axios.post()
  //     .then(res => {
  //         console.log(res);
  //     })
  //     .catch(err => {
  //         console.log(err);
  // })
};
