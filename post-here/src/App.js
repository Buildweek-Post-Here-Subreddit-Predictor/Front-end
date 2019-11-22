import React from "react";
import { Route } from "react-router-dom";

import PrivateRoute from "./private-route";
import Nav from "./components/Nav";
import RegistrationForm from "./components/RegistrationForm";
import LoginForm from "./components/LoginForm";
import PostForm from "./components/PostForm";
import EditForm from "./components/EditForm";
import "./App.css";

// API => https://github.com/apathyhill/Post-Here-API/tree/heroku

function App() {
  return (
    <div className="App">
      <Route path="/" component={Nav} />
      <Route exact path="/profile" />
      <Route exact path="/registration" component={RegistrationForm} />
      <Route exact path="/login" component={LoginForm} />
      <PrivateRoute exact path="/post" component={PostForm} />
      <PrivateRoute exact path="/edit" component={EditForm} />
    </div>
  );
}
export default App;
