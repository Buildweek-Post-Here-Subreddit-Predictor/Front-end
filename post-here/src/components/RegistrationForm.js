import React, {useState, useEffect} from 'react';
import {withFormik, Form, Field} from 'formik';
import axios from 'axios';
import * as Yup from 'yup';


const UserForm = ({errors, touched, status}) => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        status && setUsers(users => [...users, status]);
    }, [status]);

    return (
        <div className='registrationForm'>
        <Form>
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

        {users.map(user => (
            <ul key={user.id}>
                <li>UserName: {user.username}</li>
                <li>Name: {user.fname} {user.lname}</li>
                <li>Email: {user.email}</li>
            </ul>
        ))}
        </div>
        
        
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
        email: Yup.string().required(),
        password: Yup.string().required()
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