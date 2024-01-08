import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { Title } from "./Header";
import {useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();  
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={Yup.object({
        email: Yup.string().email("Invalid email address").required("Required"),
        password: Yup.string()
          .max(8, "Must be 15 characters or less")
          .required("Required"),
      })}
      onSubmit={(values,{resetForm}) => {
          localStorage.setItem("loginData", JSON.stringify(values));
          //alert(JSON.stringify(values));
          resetForm({values:""});
          navigate("/");
      }}
    >
      {(formik) => (
        <div className="loginContainer">
          <Title/>
          <div className="loginForm">
          <div className="headerTitle">
            <h2>Login</h2>
          </div>
            <form onSubmit={formik.handleSubmit}>
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                type="email"
                {...formik.getFieldProps("email")}
              />
              {formik.touched.email && formik.errors.email ? (
                <div>{formik.errors.email}</div>
              ) : null}
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="text"
                {...formik.getFieldProps("password")}
              />
              {formik.touched.password && formik.errors.password ? (
                <div>{formik.errors.password}</div>
              ) : null}
              <button type="submit" className="submitbtn">Submit</button>
            </form>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default Login;
