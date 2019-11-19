import React from 'react';
import {withFormik, Form, Field} from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components'

const FormWrapper = styled.div`

width: 50%;
margin: auto;
height: 50vh;

`

const Login = (errors, touched) => {

    return(
        <FormWrapper>
            <Form className='form'>
                <Field type='text' name='username' placeholder='Username'/>
                {touched.username && errors.username && (
                <p>{errors.username}</p>
                )}

                <Field type='password' name='password' placeholder='Password'/>
                {touched.password && errors.password && (
                <p>{errors.password}</p>
                )}
                <button type='submit'>Enter</button>
            </Form>
        </FormWrapper>
    )
}



const LoginForm = withFormik({
    mapPropsToValues({username, password}) {
        return{
            username: username || '',
            password: password || ''
        }
    },

    validationSchema: Yup.object().shape({
        username: Yup.string().required(),
        password: Yup.string().required()
    }),

    handleSubmit: (values, {resetForm}) => {
        console.log(
            {
            submittedUsername: values.username,
            submittedPassword: values.password
            })
        return(
            resetForm()
        )
    }

})(Login);

export default LoginForm;
