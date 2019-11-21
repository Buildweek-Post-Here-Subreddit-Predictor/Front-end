import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import { connect } from "react-redux";

import { loginUser } from "../actions/login";

const FormWrapper = styled.div`
  width: 50%;
  margin: auto;
  height: 50vh;
`;
const InputField = styled.input`
  background: whitesmoke;
  border: 1px solid steelblue;
  border-radius: 3px;
  color: steelblue;
`;
const Required = styled.p`
  color: red;
`;

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
