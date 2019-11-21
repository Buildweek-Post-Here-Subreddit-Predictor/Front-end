import React from 'react';
import {Route, NavLink} from 'react-router-dom';

import RegistrationForm from './RegistrationForm';
import LoginForm from './LoginForm';
import PostForm from './PostForm';
import EditForm from './EditForm';


export default function Nav() {
  return (
    <div>
    <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/post'>Post</NavLink>
        <NavLink to='/edit'>Edit</NavLink>
        <NavLink to='/registration'>Register</NavLink>
        <NavLink to='/login'>Login</NavLink>
        {/* <SearchForm/> */}
    </nav>
    
    <Route path='/registration' component={RegistrationForm}/>
    <Route path='/login' component={LoginForm}/>
    <Route path='/post' component={PostForm}/>
    <Route path='/edit' component={EditForm}/>
    </div>
  );
}
