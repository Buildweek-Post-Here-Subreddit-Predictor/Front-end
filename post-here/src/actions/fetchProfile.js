import axiosWithAuth from "../axios";

export const START_FETCHING = "START_FETCHING";
export const FETCHING_SUCCESS = "FETCHING_SUCCESS";
export const FETCHING_FAILURE = "FETCHING_FAILURE";

export const fetchProfile = () => dispatch => {
  dispatch({ type: START_FETCHING });
  console.log("running...");
  axiosWithAuth()
    .get(
      "https://cors-anywhere.herokuapp.com/https://post-here-api-apathyhill.herokuapp.com/get_predictions"
    )
    .then(res => {
      dispatch({ type: FETCHING_SUCCESS, payload: res.data.posts });
      console.log(res);
    })
    .catch(err => {
      dispatch({ type: FETCHING_FAILURE, payload: err });
    });
};
