import React from 'react';
import {withFormik, Form, Field } from 'formik';
import axios from 'axios';

const Post = ({errors, touched}) => {
    return(
        <Form>
            <Field name='title' placeholder='Post Title'/><br/>
            <Field as='textarea' rows='7' cols='50' name='post' placeholder='Create Post'/><br/>
            <button type='submit'>Post</button>
        </Form>
    )
}

const PostForm = withFormik({
    mapPropsToValues({post, title}) {
        return{
            title: title || '',
            post: post || ''
        }
    },

    handleSubmit(values, {setStatus, resetForm}) {
        axios
        .post('', values)
        .then((res)=>{
            setStatus(res.data)
            console.log('PostForm response', res.data)
        })
        .catch(err => console.log(err.response))
        .finally(resetForm())
    }
})(Post)

export default PostForm;
