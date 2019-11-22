import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <div className='navWrapper'>
      <nav>
        <NavLink className='NavLink' to="/">Home</NavLink>
        <NavLink className='NavLink' to="/registration">Register</NavLink>
        <NavLink className='NavLink' to="/login">Login</NavLink>
        <NavLink className='NavLink' to="/post">Post</NavLink>
        <NavLink className='NavLink' to="/edit">Edit</NavLink>
        {/* <SearchForm/> */}
      </nav>
    </div>
  );
}
