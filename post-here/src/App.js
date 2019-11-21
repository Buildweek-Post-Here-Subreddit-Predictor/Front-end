import React from "react";
import { Route } from "react-router-dom";

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
      <Route exact path="/registration" component={RegistrationForm} />
      <Route exact path="/login" component={LoginForm} />
      <Route exact path="/post" component={PostForm} />
      <Route exact path="/edit" component={EditForm} />
    </div>
  );
}
export default App;
