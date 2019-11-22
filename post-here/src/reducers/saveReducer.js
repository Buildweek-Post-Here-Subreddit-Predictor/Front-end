import { START_SAVE, SAVE_SUCCESS, SAVE_FAILURE } from "../actions/savePost";

const initialState = {
  post: {
    article: "",
    subreddit: ""
  },
  isFetching: false,
  error: ""
};

export const saveReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_SAVE:
      return {
        ...state,
        isFetching: true,
        error: ""
      };
    case SAVE_SUCCESS:
      return {
        ...state,
        post: action.payload,
        isFetching: false,
        error: ""
      };
    case SAVE_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    default:
      return state;
  }
};
