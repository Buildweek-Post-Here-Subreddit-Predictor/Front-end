import {
  START_EDITING,
  EDITING_SUCCESS,
  EDITING_FAILURE
} from "../actions/editPost";

const initialState = {
  post: {},
  isFetching: false,
  error: ""
};

export const editReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_EDITING:
      return {
        ...state,
        isFetching: true,
        error: ""
      };
    case EDITING_SUCCESS:
      return {
        ...state,
        post: action.payload,
        isFetching: false,
        error: ""
      };
    case EDITING_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    default:
      return state;
  }
};
