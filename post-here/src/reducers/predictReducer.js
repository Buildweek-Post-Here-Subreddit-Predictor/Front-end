import {
  START_PREDICT,
  PREDICT_SUCCESS,
  PREDICT_FAILURE
} from "../actions/predict";

const initialState = {
  prediction: {
    article: "",
    subreddit: ""
  },
  isFetching: false,
  error: ""
};

export const predictReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_PREDICT:
      return {
        ...state,
        isFetching: true,
        error: ""
      };
    case PREDICT_SUCCESS: {
      console.log("reducer: ", action.payload);
      return {
        ...state,
        isFetching: false,
        prediction: action.payload,
        error: ""
      };
    }
    case PREDICT_FAILURE: {
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    }
    default:
      return state;
  }
};
