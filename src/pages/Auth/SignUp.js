import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Datashoperlogo from "../../asset/logo.svg";
import axiosMain from "../utils/axiosMain";
import loginPageImg from "../../asset/Auth/signup.svg";

import "./auth.css";

// Validation Schema using Yup
const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  mobile: Yup.string()
    .matches(/^[0-9]{10}$/, "Mobile number must be exactly 10 digits")
    .required("Mobile number is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
  terms: Yup.boolean().oneOf([true], "You must accept the Terms & Conditions"),
});

function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (values, { setSubmitting }) => {
    try {
      const response = await axiosMain.post("/signup", values);
      console.log(response);
      if (response.success) {
        toast.success("User registered successfully!");
        navigate("/login"); // Redirect to login page
      } else {
        toast.error(response.message || "Something went wrong!");
      }
    } catch (error) {
      toast.error(error?.data?.message || "Error signing up!");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="login-container">
      {/* Left side - Illustration */}

      <div className="login-wrapper">
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
              />
            </div>
          </div>

          <Formik
            initialValues={{
              name: "",
              email: "",
              mobile: "",
              password: "",
              confirmPassword: "",
              terms: false,
            }}
            validationSchema={validationSchema}
            onSubmit={handleSignup}
          >
            {({ isSubmitting }) => (
              <Form className="form">
                <div>
                  <Field
                    type="text"
                    name="name"
                    placeholder="Enter Your Name"
                    className="input"
                  />
                  <ErrorMessage name="name" component="div" className="error" />
                </div>

                <div>
                  <Field
                    type="email"
                    name="email"
                    placeholder="Enter Your Email"
                    className="input"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="error"
                  />
                </div>

                <div>
                  <Field
                    type="text"
                    name="mobile"
                    placeholder="Enter Your Mobile Number"
                    className="input"
                  />
                  <ErrorMessage
                    name="mobile"
                    component="div"
                    className="error"
                  />
                </div>

                <div className="password-wrapper">
                  <Field
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Enter Your Password"
                    className="input with-icon"
                  />
                  <span
                    className="toggle-password-icon"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="error"
                  />
                </div>

                <div className="password-wrapper">
                  <Field
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    placeholder="Confirm Your Password"
                    className="input with-icon"
                  />
                  <span
                    className="toggle-password-icon"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                  <ErrorMessage
                    name="confirmPassword"
                    component="div"
                    className="error"
                  />
                </div>

                <div className="checkbox">
                  <Field type="checkbox" name="terms" id="terms" />
                  <label htmlFor="terms">I accept the Terms & Conditions</label>
                  <ErrorMessage
                    name="terms"
                    component="div"
                    className="error"
                  />
                </div>

                <button
                  type="submit"
                  className="button"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Signing Up..." : "SIGN UP"}
                </button>

                <footer className="footer">
                  Already have an account?{" "}
                  <Link to="/login" className="link">
                    Sign in
                  </Link>
                </footer>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default Signup;
