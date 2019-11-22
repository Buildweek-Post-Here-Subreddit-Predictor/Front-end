import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import { connect } from "react-redux";

import SearchForm from "./SearchForm";
import { FormWrapper, InputArea } from "./ComponentStyles";

import { editPost } from "../actions/editPost";
import SearchForm from "./SearchForm";

const Edit = () => {
  return (
    <FormWrapper>
      <SearchForm />
      <Form>
        <Field as={InputArea} rows="7" cols="50" name="editPost" />
        <br />
        <button type="submit">Done</button>
      </Form>
    </FormWrapper>
  );
};

const EditForm = withFormik({
  mapPropsToValues({ editPost }) {
    return {
      editPost: editPost || ""
    };
  },

  handleSubmit(values, { props, resetForm }) {
    props.editPost(values);
    resetForm();
  }
})(Edit);

export default connect(null, { editPost })(EditForm);
