import React, { useState, useRef } from "react";
import "./auth.css";
import otpimg from "../../asset/Auth/verific.svg";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import axiosMain from "../utils/axiosMain";
import { toast } from "react-toastify";

function OTPVerification() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef([]);
  const navigate = useNavigate();
  // const { email } = useParams();
  const { state } = useLocation();
  const email = state?.key;
  const handleChange = (index, value) => {
    if (isNaN(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;

    setOtp(newOtp);

    // Move to next input if value is entered
    if (value !== "" && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      // Move to previous input on backspace if current input is empty
      inputRefs.current[index - 1].focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").slice(0, 6);
    const digits = pastedData.split("").filter((char) => !isNaN(char));

    const newOtp = [...otp];
    digits.forEach((digit, index) => {
      if (index < 6) newOtp[index] = digit;
    });
    setOtp(newOtp);

    // Focus last filled input or first empty input
    const lastIndex = Math.min(digits.length, 6) - 1;
    if (lastIndex >= 0) {
      inputRefs.current[lastIndex].focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const otpString = otp.join("");
    console.log("Submitted OTP:", otpString);

    axiosMain
      .post("/verify-otp", { email, otp: otpString })
      .then((res) => {
        console.log(res);
        if (res.statueCode === 200) {
          toast.success(res.message);
          // navigate("/otp/" ); // Navigate to OTP page
          navigate("/Reset-password", { state: { key: email } }); // Navigate to OTP page
        } else {
          toast.error(res.message);
        }
      })
      .catch((err) => console.log(err));

    // navigate("/login");
    // Handle OTP verification here
  };
  const handleImageClick = () => {
    navigate("/"); // Navigate to landing page
  };

  return (
    <div className="container-otp">
      <div className="illustration-otp">
        <img
          src={otpimg}
          alt="OTP verification illustration"
          style={{ width: "100%", height: "auto" }}
          onClick={handleImageClick} // Add onClick event
        />
      </div>

      <div className="form-container-otp">
        <h1 className="title-otp">OTP Verification</h1>
        <p className="description-otp">
          Enter the 6 digit OTP that you received on your email or phone.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="otp-container-otp">
            {otp.map((digit, index) => (
              <input
                key={index}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                onPaste={handlePaste}
                ref={(el) => (inputRefs.current[index] = el)}
                className="otp-input"
                // required
              />
            ))}
          </div>

          <button type="submit" className="button-otp">
            Continue
          </button>
        </form>
      </div>
    </div>
  );
}

export default OTPVerification;
