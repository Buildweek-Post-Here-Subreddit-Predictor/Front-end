import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import { connect } from "react-redux";

import { editPost } from "../actions/editPost";
import SearchForm from "./SearchForm";

const Edit = () => {
  return (
    <div>
      <SearchForm />
      <Form>
        {/* <Field name='editTitle'/><br/> */}
        <Field as="textarea" rows="7" cols="50" name="editPost" />
        <br />
        <button type="submit">Done</button>
      </Form>
    </div>
  );
};

const EditForm = withFormik({
  mapPropsToValues({ editPost, editTitle }) {
    return {
      // editTitle: editTitle || '',
      editPost: editPost || ""
    };
  },

  handleSubmit(values, { props, resetForm }) {
    props.editPost(values);
    resetForm();
  }
})(Edit);

export default connect(null, { editPost })(EditForm);
