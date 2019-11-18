import React from 'react';
import {withFormik, Form, Field} from 'formik';
import * as Yup from 'yup';

const LoginForm = (values) => {
    return(
        <div className='loginForm'>
            <Form>
                <Field type='text' name='username' placeholder='username'/>
                <Field type='text' name='password' placeholder='password'/>
                <button type='submit'>Enter</button>
            </Form>
        </div>
    )
}


const FormikLogin = withFormik({
    handleSubmit: (values, {setSubmitting}) => {
        console.log('Submitted UserName', values.username)
        console.log('Submitted Password', values.password)
    }
})(LoginForm);

export default FormikLogin;
