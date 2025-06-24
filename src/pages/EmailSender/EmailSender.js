import {
  Avatar,
  Button as MUIButton,
  Card as MUICard,
  CardContent,
  Typography,
  Grid,
  TextField,
  InputBase,
  Box,
} from "@mui/material";
import {
  Search,
  Home,
  Database,
  Send,
  MessageSquare,
  Settings,
  LogOut,
  ShoppingCart,
  Fullscreen,
} from "lucide-react";
import { Button } from "react-bootstrap"; // For React Bootstrap Buttons
import { MdOutlineAddBox } from "react-icons/md";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "../../asset/shopping-cart.png";
import { Navigate, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import axiosMain from "../utils/axiosMain";
import { toast } from "react-toastify";

import { useState } from "react"; // Add this import

function EmailSender() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      mobile: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      mobile: Yup.string()
        .matches(/^\d{10}$/, "Mobile number must be 10 digits")
        .required("Mobile number is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      message: Yup.string().required("Message is required"),
    }),
    onSubmit: (values) => {
      console.log("Form values:", values);
      alert("Inquiry submitted successfully!");
      formik.resetForm();
      axiosMain
        .post("/inquiry", { mobileNumber: values.mobile, ...values })
        .then((res) => {
          if (res.success) {
            toast.success(res.message);
          } else {
            toast.error(res.message);
          }
        })
        .catch((err) => console.log(err));
    },
  });
  // Sample data for cards
  const cards = Array(12).fill({
    title: "Doctor & Hospital",
    subtitle: "Salon & Beauty Parlour",
  });

  function handleSave() {
    setIsSubmitted(true);
  }

  return (
    <div className="min-h-screen bg-[#F3F2FF] flex" style={{ flexGrow: 1 }}>
      {/* Main Content */}
      <main style={{ flexGrow: 1, height: "100%" }}>
        {/* <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "32px",
            }}
          >
            <Typography variant="h5" fontWeight="bold">
              Dashboard / All Category
            </Typography>
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <MUIButton variant="outlined" startIcon={<ShoppingCart />}>
                <div
                  style={{
                    position: "absolute",
                    top: "-4px",
                    right: "-4px",
                    backgroundColor: "red",
                    color: "white",
                    borderRadius: "50%",
                    width: "16px",
                    height: "16px",
                    fontSize: "12px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  1
                </div>
              </MUIButton>
              <Avatar src="https://github.com/shadcn.png" alt="CN" />
            </div>
          </div> */}

        {/* <div style={{ position: "relative", marginBottom: "32px" }}> */}

        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <Typography
              variant="h6"
              style={{
                fontFamily: "Inter",
                fontWeight: "700",
                fontSize: "24px",
                lineHeight: "29.05px",
                letterSpacing: "0%",
                color: "#fabb18",
                fontWeight: "500",
                padding: ".5rem",
              }}
            >
              {isSubmitted ? `Verify | ${name} ${email}` : `New Sender`}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className="text-end">
            <MUIButton
              variant="contained"
              //   startIcon={<ShoppingCartIcon />}
              sx={{
                backgroundColor: "#000000",
                color: "white",
                borderRadius: "15px",
                textTransform: "none",
                fontSize: "1rem",
                // padding: "1rem 2.5rem",
                "&:hover": {
                  backgroundColor: "#5B4DC9",
                },
              }}
              onClick={() => navigate("/cart")}
            >
              <div sx={{ color: "white" }} className="me-2">
                <img src={ShoppingCartIcon} alt="logo" />
              </div>
              Your Campion
            </MUIButton>
          </Grid>
        </Grid>

        <Box
           sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start", // ⬅️ Ensures left alignment
            borderRadius: "15px",
            padding: "1rem",
            backgroundColor: "white",
            width: "100%",
            marginTop: "1rem",
            flexGrow: 1,
            height: "100%",
          }}
        >
          {isSubmitted ? (
            <Verify />
          ) : (
            <form onSubmit={formik.handleSubmit} style={{ width: "100%" }}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your Name"
                  className={`form-control w-50 ${
                    formik.touched.name && formik.errors.name
                      ? "is-invalid"
                      : ""
                  }`}
                  style={{
                    border: "2px solid #fabb18", // Add blue border
                    borderRadius: "5px", // Optional rounded corners
                    padding: "8px", // Adjust padding for better styling
                    outline: "none", // Remove default focus outline
                  }}
                  value={formik.values.name}
                  onChange={(e) => {
                    formik.setFieldValue("name", e.target.value);
                    setName(e.target.value);
                  }} // Manually updating Formik state
                />
                {formik.touched.name && formik.errors.name ? (
                  <div className="invalid-feedback">{formik.errors.name}</div>
                ) : null}
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  style={{
                    border: "2px solid #fabb18", // Add blue border
                    borderRadius: "5px", // Optional rounded corners
                    padding: "8px", // Adjust padding for better styling
                    outline: "none", // Remove default focus outline
                    width: "50%"
                  }}
                  placeholder="Enter your Email"
                  className="form-control"
                  onChange={(e) => {
                    formik.setFieldValue("email", e.target.value);
                    setEmail(e.target.value);
                  }} // ✅ Correctly links to Formik's state
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="invalid-feedback">{formik.errors.email}</div>
                ) : null}
              </div>

              <div className="btn-toolbar" style={{ gap: "20px" }}>
                <div
                  className="btn-group mr-2"
                  role="group"
                  aria-label="First group"
                >
                  <Button
                    variant="primary"
                    
                    style={{ background: "#000000" }}
                    type="submit"
                    onClick={handleSave}
                  >
                    Save
                  </Button>
                </div>
                <div
                  className="btn-group mr-2"
                  role="group"
                  aria-label="First group"
                >
                  <Button
                    variant="primary"
                    style={{ background: "#000000" }}
                    type="button"
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            </form>
          )}
        </Box>

        {/* </div> */}
      </main>
    </div>
  );
}

function Verify() {
  return (
    <div
      style={{
        width: "50%",
        textAlign: "left",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start", // ⬅️ Ensures content is aligned to the start
      }}
    >
      <Typography>
        To use this sender, your email address must be verified. We have sent
        you a verification code by email.
      </Typography>
      <Typography>
        If you have not received the verification code, click the{" "}
        <strong>Resend verification code button.</strong>
      </Typography>

      <Button
        variant="primary"
        className="mt-3"
        style={{ background: "#000000" }}
      >
        Resend verification code (59s)
      </Button>

      {/* <div className="d-flex mt-3" style={{ gap: "10px" }}>
        {[...Array(6)].map((_, index) => (
          <input
            key={index}
            type="text"
            className="otp-box"
            maxLength={1}
            style={{
              width: "40px",
              textAlign: "center",
              border: "2px solid #fabb18",
              borderRadius: "5px",
            }}
          />
        ))}
      </div> */}

      <div className="otp-container-otp mt-3">
            {[...Array(6)].map((digit, index) => (
              <input
                key={index}
                type="text"
                maxLength={1}
                value={digit}
                // onChange={(e) => handleChange(index, e.target.value)}
                // onKeyDown={(e) => handleKeyDown(index, e)}
                // onPaste={handlePaste}
                // ref={(el) => (inputRefs.current[index] = el)}
                className="otp-input"
                // required
              />
            ))}
          </div>

      <div className="btn-toolbar mt-3" style={{ gap: "20px" }}>
        <Button variant="primary" style={{ background: "#000000" }}>
          Verify
        </Button>
        <Button variant="secondary" style={{ background: "#000000" }}>
          I will do it later
        </Button>
      </div>
    </div>
  );
}


export default EmailSender;
