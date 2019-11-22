import axios from "axios";

// register action types
export const START_LOGIN = "START_LOGIN";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const loginUser = (values, props) => dispatch => {
  dispatch({ type: START_LOGIN });
  axios
    .post(
      "https://cors-anywhere.herokuapp.com/https://post-here-api-apathyhill.herokuapp.com/login",
      values
    ) //needed the CORS proxy to get it to work
    .then(res => {
      dispatch({ type: LOGIN_SUCCESS, payload: res.config.data });

      console.log("Login response: ", res.config.data);
      console.log("Login response: ", res);

      const token = sessionStorage.setItem("token", res.data);
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: LOGIN_FAILURE, payload: err });
    });
};
