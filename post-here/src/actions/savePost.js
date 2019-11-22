import axiosWithAuth from "../axios";

// register action types
export const START_SAVE = "START_SAVE";
export const SAVE_SUCCESS = "SAVE_SUCCESS";
export const SAVE_FAILURE = "SAVE_FAILURE";

export const savePost = (e, values) => dispatch => {
  dispatch({ type: START_SAVE });
  console.log("values", values);
  axiosWithAuth()
    .post(
      "https://cors-anywhere.herokuapp.com/https://post-here-api-apathyhill.herokuapp.com/add_prediction",
      values
    ) //needed the CORS proxy to get it to work
    .then(res => {
      console.log("values2", values);
      dispatch({ type: SAVE_SUCCESS, payload: res.data });

      console.log("Save response: ", res);
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: SAVE_FAILURE, payload: err });
    });
};
