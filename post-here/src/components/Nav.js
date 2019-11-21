import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/registration">Register</NavLink>
        <NavLink to="/login">Login</NavLink>
      </nav>
    </div>
  );
}
