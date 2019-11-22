import {
  START_DELETE,
  DELETE_SUCCESS,
  DELETE_FAILURE
} from "../actions/deletePost";

const initialState = {
  post: {},
  isFetching: false,
  error: ""
};

export const deleteReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_DELETE:
      return {
        ...state,
        isFetching: true,
        error: ""
      };
    case DELETE_SUCCESS:
      return {
        ...state,
        post: action.payload,
        isFetching: false,
        error: ""
      };
    case DELETE_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    default:
      return state;
  }
};
