import axiosWithAuth from "../axios";

// register action types
export const START_EDITING = "START_EDITING";
export const EDITING_SUCCESS = "EDITING_SUCCESS";
export const EDITING_FAILURE = "EDITING_FAILURE";

export const editPost = values => dispatch => {
  dispatch({ type: START_EDITING });
  console.log(values);
  axiosWithAuth()
    .put(
      "https://cors-anywhere.herokuapp.com/https://post-here-api-apathyhill.herokuapp.com/update_predict",
      values
    ) //needed the CORS proxy to get it to work
    .then(res => {
      dispatch({ type: EDITING_SUCCESS, payload: res.data });

      console.log("Editing response: ", res);
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: EDITING_FAILURE, payload: err });
    });
};
