import axios from "axios";

// register action types
export const START_REGISTER = "START_REGISTER";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

export const registerUser = values => dispatch => {
  dispatch({ type: START_REGISTER });
  console.log(values);
  axios
    .post(
      "https://cors-anywhere.herokuapp.com/https://post-here-api-apathyhill.herokuapp.com/register",
      values
    ) //needed the CORS proxy to get it to work
    .then(res => {
      dispatch({ type: REGISTER_SUCCESS, payload: res.config.data });

      console.log("Registration response: ", res.config.data);
      console.log("Full Reg response: ", res);
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: REGISTER_FAILURE, payload: err });
    });
};
