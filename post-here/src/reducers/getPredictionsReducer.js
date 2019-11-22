import {
  START_FETCHING,
  FETCHING_SUCCESS,
  FETCHING_FAILURE
} from "../actions/fetchProfile";

const initialState = {
  predictions: [],
  isFetching: false,
  error: ""
};

export const getPredictionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_FETCHING:
      return {
        ...state,
        isFetching: true,
        error: ""
      };
    case FETCHING_SUCCESS:
      return {
        ...state,
        predictions: action.payload,
        isFetching: false,
        error: ""
      };
    case FETCHING_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    default:
      return state;
  }
};
