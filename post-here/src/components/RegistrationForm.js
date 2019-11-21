import React from 'react';
import {withFormik, Form, Field} from 'formik';
import axios from 'axios';
import * as Yup from 'yup';
import {FormWrapper, InputField, Required} from './ComponentStyles'







const UserForm = ({errors, touched}) => {

    return (
        <FormWrapper>
        <Form className='form'>
            <Field type='text' as={InputField} name='username' placeholder='Create Username'/>
            {touched.username && errors.username && (
                <Required>{errors.username}</Required>
            )}
            <Field type='text' as={InputField} name='fname' placeholder='First Name'/>
            {touched.fname && errors.fname && (
                <Required>{errors.fname}</Required>
            )}
            <Field type='text' as={InputField} name='lname' placeholder='Last Name'/>
            {touched.lname && errors.lname && (
                <Required>{errors.lname}</Required>
            )}
            <Field type='email' as={InputField} name='email' placeholder='Email'/>
            {touched.email && errors.email && (
                <Required>{errors.email}</Required>
            )}
            <Field type='password' as={InputField} name='password' placeholder='Password'/>
            {touched.password && errors.password && (
                <Required>{errors.password}</Required>
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
          .post("https://cors-anywhere.herokuapp.com/https://post-here-api-apathyhill.herokuapp.com/register", values) //needed the CORS proxy to get it to work
          .then(res => {
            setStatus(res);
            console.log('Registration response: ',res);
            
          })
          .catch(err => console.log(err.response))
          .finally(resetForm())
        }     
})(UserForm);





export default RegistrationForm;