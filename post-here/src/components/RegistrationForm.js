import React from 'react';
import {withFormik, Form, Field} from 'formik';
import axios from 'axios';
import * as Yup from 'yup';
import styled from 'styled-components';

const FormWrapper = styled.div`

width: 50%;
margin: auto;
height: 50vh;

`





const UserForm = ({errors, touched}) => {

    return (
        <FormWrapper>
        <Form className='form'>
            <Field type='text' name='username' placeholder='Create Username'/>
            {touched.username && errors.username && (
                <p>{errors.username}</p>
            )}
            <Field type='text' name='fname' placeholder='First Name'/>
            {touched.fname && errors.fname && (
                <p>{errors.fname}</p>
            )}
            <Field type='text' name='lname' placeholder='Last Name'/>
            {touched.lname && errors.lname && (
                <p>{errors.lname}</p>
            )}
            <Field type='email' name='email' placeholder='Email'/>
            {touched.email && errors.email && (
                <p>{errors.email}</p>
            )}
            <Field type='password' name='password' placeholder='Password'/>
            {touched.password && errors.password && (
                <p>{errors.password}</p>
            )}
    
            <button type='submit'>Register</button>
        </Form>
        </FormWrapper>
        
        
    )
}



const RegistrationForm = withFormik({
    mapPropsToValues({username, fname, lname, email, password}) {
        return{
            username: username || '',
            fname: fname || '',
            lname: lname || '',
            email: email || '',
            password: password || ''
        }
    },

    validationSchema: Yup.object().shape({
        username: Yup.string().required(),
        fname: Yup.string().required(),
        lname: Yup.string().required(),
        email: Yup.string().email().required(),
        password: Yup.string().min(6).max(16).required()
    }),

    handleSubmit(values, {setStatus, resetForm}) {
        axios
          .post("https://reqres.in/api/users", values)
          .then(res => {
            setStatus(res.data);
            console.log('Got a response: ',res);
            
          })
          .catch(err => console.log(err.response))
          .finally(resetForm())
        }     
})(UserForm);





export default RegistrationForm;