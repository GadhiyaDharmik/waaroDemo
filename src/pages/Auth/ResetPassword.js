import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./auth.css";
import resetpassword from "../../asset/Auth/resetpass.svg";
import axiosMain from "../utils/axiosMain";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

// Validation Schema using Yup
const validationSchema = Yup.object({
  password: Yup.string()
    .min(8, "Password must be at least 8 characters long")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords do not match")
    .required("Confirm Password is required"),
});

function ResetPassword() {
  const { state } = useLocation();
  const email = state?.key;
  const navigate = useNavigate();

  return (
    <div className="container-reset-pass">
      <div className="illustration-reset-pass">
        <img src={resetpassword} alt="Reset password illustration" />
      </div>

      <div className="form-container-reset-pass">
        <h1 className="title-reset-pass">Reset Password</h1>
        <p className="description-reset-pass">
          Create a strong and unique password for your account.
        </p>

        {/* Formik Component */}
        <Formik
          initialValues={{ password: "", confirmPassword: "" }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log("Password reset submitted:", values);
            axiosMain
              .post("/change-password", {
                email,
                newPassword: values.password,
              })
              .then((res) => {
                if (res.statusCode === 200) {
                  toast.success(res.message);
                  navigate("/login");
                } else {
                  toast.error(res.message);
                }
              });
          }}
        >
          {({ isSubmitting }) => (
            <Form className="form">
              {/* Password Field */}
              <div>
                <Field
                  type="password"
                  name="password"
                  placeholder="Enter New Password"
                  className="input-reset-pass"
                />
                <ErrorMessage name="password" component="p" className="error" />
              </div>

              {/* Confirm Password Field */}
              <div>
                <Field
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  className="input-reset-pass"
                />
                <ErrorMessage
                  name="confirmPassword"
                  component="p"
                  className="error"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="button-reset-pass"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Processing..." : "Continue"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default ResetPassword;
