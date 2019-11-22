import React from "react";
import { withFormik, Form, Field } from "formik";
import { connect } from "react-redux";
import { predict } from "../actions/predict";
import {FormWrapper, InputArea} from './ComponentStyles';
import PredictionCard from "./PredictionCard";


const Post = ({ errors, touched }) => {
  return (
    <FormWrapper>
    <Form className='Form'>
      
      <Field
        as={InputArea}
        rows="7"
        cols="50"
        name="post"
        placeholder="Create Post"
      />
      <br />
      <button type="submit">Suggestions</button>
      <PredictionCard/>
    </Form>
    </FormWrapper>
  );
  
};

const PostForm = withFormik({
  mapPropsToValues({ post }) {
    return {
      // title: title || '',
      article: post || ""
    };
  },

  handleSubmit( values, { props, resetForm }) {
    
    props.predict(values)
    
    resetForm();
  }
})(Post);

export default connect(null, { predict })(PostForm);
