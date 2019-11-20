import React from 'react';
import {Route, NavLink} from 'react-router-dom';

import RegistrationForm from './RegistrationForm';
import LoginForm from './LoginForm';


export default function Nav() {

    return(
    <div>
    <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/registration'>Register</NavLink>
        <NavLink to='/login'>Login</NavLink>
    </nav>
    
    <Route path='/registration' component={RegistrationForm}/>
    <Route path='/login' component={LoginForm}/>
    </div>
    
    )
    
    
}