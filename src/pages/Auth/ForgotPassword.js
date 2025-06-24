import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./auth.css";
import loginPageImg from "../../asset/Auth/forgotpaas.svg";
import { useNavigate, useParams } from "react-router-dom";
import axiosMain from "../utils/axiosMain";
import { toast } from "react-toastify";

function ForgotPassword() {
  const navigate = useNavigate();

  // Formik initialization
  const formik = useFormik({
    initialValues: {
      key: "", // Accepts both email and phone number
    },
    validationSchema: Yup.object({
      key: Yup.string()
        .test(
          "is-email-or-phone",
          "Enter a valid email or phone number (e.g., +91XXXXXXXXXX or example@mail.com)",
          (value) =>
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || // Email validation
            /^(\+?\d{1,4})?\d{10}$/.test(value) // Phone number validation (with optional country code)
        )
        .required("This field is required"),
    }),
    onSubmit: (values) => {
      console.log("Password reset requested for:", values.key);

      axiosMain
        .post("/forgot-password", { key: values.key }) // Pass key instead of email
        .then((res) => {
          if (res.statueCode===200) {
            toast.success(res.message);
            navigate("/otp" , { state: { key: values.key } }); // Navigate to OTP page
          } else {
            toast.error(res.message);
          }
        })
        .catch((err) => console.log(err));
    },
  });

  return (
    <div className="login-container">
      <div className="login-wrapper">
        <div className="illustration-forgot">
          <img
            src={loginPageImg}
            alt="Forgot password illustration"
            style={{ width: "100%", height: "auto" }}
          />
        </div>

        <div className="form-container-forgot">
          <h1 className="title-forgot">Forgot Password?</h1>
          <p className="description-forgot">
            Please enter your email or phone number and we will send you an OTP
            to reset your password.
          </p>

          <form onSubmit={formik.handleSubmit}>
            <div className="input-group">
              <div>
                <input
                  type="text"
                  name="key"
                  placeholder="Enter Email or Phone Number"
                  value={formik.values.key}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="input-forgot"
                  aria-label="Email or phone number"
                />
                {formik.touched.key && formik.errors.key && (
                  <div className="error">{formik.errors.key}</div>
                )}
              </div>
            </div>

            <button
              type="submit"
              className="button-forgot"
              disabled={!formik.isValid || formik.isSubmitting}
            >
              Continue
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
