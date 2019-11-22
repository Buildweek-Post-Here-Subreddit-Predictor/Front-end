import axiosWithAuth from "../axios";

// register action types
export const START_SAVE = "START_SAVE";
export const SAVE_SUCCESS = "SAVE_SUCCESS";
export const SAVE_FAILURE = "SAVE_FAILURE";

export const savePost = (e, post) => dispatch => {
  dispatch({ type: START_SAVE });
  console.log("post1", post);
  axiosWithAuth()
    .post(
      "https://cors-anywhere.herokuapp.com/https://post-here-api-apathyhill.herokuapp.com/add_prediction",
      post
    ) //needed the CORS proxy to get it to work
    .then(res => {
      console.log("post2", post);
      dispatch({ type: SAVE_SUCCESS, payload: res.data });

      console.log("Save response: ", res);
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: SAVE_FAILURE, payload: err });
    });
};
