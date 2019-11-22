import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import {FormWrapper, InputField, Required} from './ComponentStyles';


import { loginUser } from "../actions/login";


const Login = ({ errors, touched }) => {
  return (
    <FormWrapper>
      <Form className="form">
        <Field
          type="text"
          as={InputField}
          name="username"
          placeholder="Username"
        />
        {touched.username && errors.username && (
          <Required>{errors.username}</Required>
        )}

        <Field
          type="password"
          as={InputField}
          name="password"
          placeholder="Password"
        />
        {touched.password && errors.password && (
          <Required>{errors.password}</Required>
        )}

        <button type="submit">Enter</button>
      </Form>
    </FormWrapper>
  );
};

const LoginForm = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password || ""
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string().required(),
    password: Yup.string().required()
  }),

  handleSubmit(values, { props, resetForm }) {
    props.loginUser(values);
    resetForm();
  }
})(Login);

export default connect(null, { loginUser })(LoginForm);
