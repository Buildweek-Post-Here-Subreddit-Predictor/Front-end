const initialState = {
  credentials: {
    username: "",
    password: ""
  },
  isLoggedIn: false
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
