import axiosWithAuth from "../axios";

export const START_FETCHING = "START_FETCHING";
export const FETCHING_SUCCESS = "FETCHING_SUCCESS";
export const FETCHING_FAILURE = "FETCHING_FAILURE";

export const fetchProfile = () => dispatch => {
  dispatch({ type: START_FETCHING });
  axiosWithAuth()
    .get(
      "https://cors-anywhere.herokuapp.com/https://post-here-api-apathyhill.herokuapp.com/get_predictions"
    )
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    });
};
