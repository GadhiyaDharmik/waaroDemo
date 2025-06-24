import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import axiosMain from "../utils/axiosMain";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./auth.css";
import loginPageImg from "../../asset/Auth/login.svg";
import Datashoperlogo from "../../asset/logo.svg";

function Login() {
  const navigate = useNavigate();

  // Initialize Toast
  // toast.configure();

  // Formik initialization
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid ema il address")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    }),
    onSubmit: (values) => {
      const { email, password } = values;

      axiosMain
        .post("/signin", { email, password })
        .then((res) => {
          debugger;
          if (res.success) {
            // Store token in localStorage
            localStorage.setItem("userDetail", JSON.stringify(res.data));
            localStorage.setItem("token", res.data.token);
            // Show success toast
            toast.success("Login successful!");

            // Navigate to dashboard
            navigate("/landing");
            // navigate("/");
          } else {
            // Show error toast
            toast.error(res.message || "Login failed");
          }
        })
        .catch((err) => {
          toast.error(err.response?.data?.message || "Something went wrong");
        });
    },
  });
  const handleImageClick = () => {
    navigate("/landing"); // Navigate to landing page
  };

  return (
    <div className="login-container">
      <div className="login-wrapper">
        {/* Left side - Illustration */}
        <div className="illustration-container">
          <img
            src={loginPageImg}
            alt="Login illustration"
            style={{ width: "100%", height: "auto" }}
          />
        </div>

        {/* Right side - Login Form */}
        <div className="form-container">
          <div className="logo-container">
            <div className="logo-text">
              <img
                src={Datashoperlogo}
                alt="Datashoperlogo"
                style={{ width: "100%", height: "auto" }}
                onClick={handleImageClick} // Add onClick event
              />
            </div>
          </div>

          <form onSubmit={formik.handleSubmit} className="form">
            <div className="input-group">
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                required
                className="input"
              />
              {formik.touched.email && formik.errors.email && (
                <div className="error">{formik.errors.email}</div>
              )}
            </div>
            <div className="input-group">
              <input
                type="password"
                name="password"
                placeholder="Enter Your Password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                required
                className="input"
              />
              {formik.touched.password && formik.errors.password && (
                <div className="error">{formik.errors.password}</div>
              )}
            </div>

            <Link to="/forgot-password" className="forgot-password">
              Forgot Password?
            </Link>

            <button type="submit" className="login-button">
              Login
            </button>
          </form>

          <div className="signup-text">
            {"Don't have an account? "}
            <Link to="/signup" className="signup-link">
              Create an account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
