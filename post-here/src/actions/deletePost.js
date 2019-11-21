import axiosWithAuth from "../axios";

// register action types
export const START_DELETE = "START_DELETE";
export const DELETE_SUCCESS = "DELETE_SUCCESS";
export const DELETE_FAILURE = "DELETE_FAILURE";

export const save = id => dispatch => {
  dispatch({ type: START_DELETE });
  console.log(id);
  axiosWithAuth()
    .post(
      "https://cors-anywhere.herokuapp.com/https://post-here-api-apathyhill.herokuapp.com/delete_prediction",
      id
    ) //needed the CORS proxy to get it to work
    .then(res => {
      dispatch({ type: DELETE_SUCCESS, payload: res.data });

      console.log("Full Reg response: ", res);
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: DELETE_FAILURE, payload: err });
    });
};
