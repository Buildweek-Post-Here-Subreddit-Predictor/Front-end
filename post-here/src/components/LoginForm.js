import React from 'react';
import {withFormik, Form, Field} from 'formik';
import * as Yup from 'yup';

const Login = (values) => {
    return(
        <div className='loginForm'>
            <Form>
                <Field type='text' name='username' placeholder='username'/>
                <Field type='password' name='password' placeholder='password'/>
                <button type='submit'>Enter</button>
            </Form>
        </div>
    )
}



const LoginForm = withFormik({
    mapPropsToValues({username, password}) {
        return{
            username: username || '',
            password: password || ''
        }
    },

    handleSubmit: (values, {setSubmitting}) => {
        console.log(
            {
            submittedUsername: values.username,
            submittedPassword: values.password
            })
    },

    validationSchema: Yup.object().shape({
        username: Yup.string().required(),
        password: Yup.string().required()
    })
})(Login);

export default LoginForm;
