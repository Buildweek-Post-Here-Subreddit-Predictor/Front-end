import React, {useState, useEffect} from 'react';
import {withFormik, Form, Field} from 'formik';
import axios from 'axios';

import SearchForm from './SearchForm';
import { FormWrapper, InputArea } from './ComponentStyles';



const Edit = () => {
    return (
        <FormWrapper>
            <SearchForm/>
            <Form>
                <Field as={InputArea} rows='7' cols='50' name='editPost'/><br/>
                <button type='submit'>Done</button>
            </Form>
        </FormWrapper>
        
    )
}

const EditForm = withFormik({
    mapPropsToValues({editPost, editTitle}){
        return {
            editPost: editPost || ''
        }
        
    },

    handleSubmit(value, {resetForm}){
        resetForm();
    }
})(Edit)

export default EditForm