import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
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
      onSubmit={(values, { resetForm }) => {
        localStorage.setItem("loginData", JSON.stringify(values));
        //alert(JSON.stringify(values));
        resetForm({ values: "" });
        navigate("/");
      }}
    >
      {(formik) => (
        <div className="loginContainer">
          <div className="logo-container text-white text-xl font-semibold mb-5 bg-red-300 py-5 px-5 flex justify-center items-center">
            <Link to="/">Food Zone</Link>
          </div>
          <div className="loginForm w-4/12 mt-12 mx-auto bg-slate-300 rounded-lg shadow-md p-5">
            <div className="headerTitle text-center p-2">
              <h2 className="text-xl">Login</h2>
            </div>
            <form onSubmit={formik.handleSubmit} className="flex flex-col mt-2 py-8 mx-auto">
              <label htmlFor="email" className="pb-2">Email Address</label>
              <input
                id="email"
                type="email"
                className="mb-2 w-full border-0 p-2 rounded-md"
                {...formik.getFieldProps("email")}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-red-600">{formik.errors.email}</div>
              ) : null}
              <label htmlFor="password" className="pb-2">Password</label>
              <input
                id="password"
                type="text"
                className="mb-2 w-full border-0 p-2 rounded-md"
                {...formik.getFieldProps("password")}
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="text-red-600">{formik.errors.password}</div>
              ) : null}
              <button type="submit" className="p-2 w-1/4 mt-4 submitbtn bg-orange-300 rounded-md">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default Login;
