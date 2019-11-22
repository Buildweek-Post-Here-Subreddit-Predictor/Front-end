import React from "react";
import { withFormik, Form, Field } from "formik";
import { connect } from "react-redux";
import { predict } from "../actions/predict";

const Post = ({ errors, touched }) => {
  return (
    <Form>
      {/* <Field name='title' placeholder='Post Title'/><br/> */}
      <Field
        as="textarea"
        rows="7"
        cols="50"
        name="post"
        placeholder="Create Post"
      />
      <br />
      <button type="submit">Post</button>
    </Form>
  );
};

const PostForm = withFormik({
  mapPropsToValues({ post, title }) {
    return {
      // title: title || '',
      article: post || ""
    };
  },

  handleSubmit(values, { props, resetForm }) {
    console.log(values);
    props.predict(values);
    resetForm();
  }
})(Post);

export default connect(null, { predict })(PostForm);
