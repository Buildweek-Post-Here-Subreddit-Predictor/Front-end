import axiosWithAuth from "../axios";

// register action types
export const START_PREDICT = "START_PREDICT";
export const PREDICT_SUCCESS = "PREDICT_SUCCESS";
export const PREDICT_FAILURE = "PREDICT_FAILURE";

export const predict = values => dispatch => {
  dispatch({ type: START_PREDICT });
  console.log(values);
  axiosWithAuth()
    .post(
      "https://cors-anywhere.herokuapp.com/https://post-here-api-apathyhill.herokuapp.com/predict",
      values
    ) //needed the CORS proxy to get it to work
    .then(res => {
      dispatch({ type: PREDICT_SUCCESS, payload: res.data.prediction });

      console.log("Registration response: ", res.config.data);
      console.log("Full Reg response: ", res);
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: PREDICT_FAILURE, payload: err });
    });
};
