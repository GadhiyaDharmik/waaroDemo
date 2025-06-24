import React, { useEffect, useState } from "react";
import "../asset/style.css";
import landingbanner from "../asset/landingbanner.png";
import landingbanner2 from "../asset/landingbanner2.png";
import landingbanner3 from "../asset/landingbanner3.png";
import Datashoperlogo from "../asset/Datashoperlogo.png";
import advertise from "../asset/status-up-advertise.png";
import img1 from "../asset/img1.png";
import img2 from "../asset/img2.png";
import img3 from "../asset/img3.png";
import img4 from "../asset/img4.png";
import { Link } from "react-router-dom";
import SimpleSlider from "../components/SimpleSlider";
import { Button, Carousel, Modal } from "react-bootstrap";

import { useFormik } from "formik";
import * as Yup from "yup";
import axiosMain from "./utils/axiosMain";
import { toast } from "react-toastify";
import { Skeleton, Stack } from "@mui/material";
import SearchSection from "./Home/SearchSection";

function Landing() {
  const [showModal, setShowModal] = useState(false);
  const [bestseller, setBestseller] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  useEffect(() => {
    // Simulate an API call
    setTimeout(() => {
      setBestseller([
        {
          id: 1,
          description:
            "Can you help translate this site into a foreign language ? Please email us with details if you can help",
          image: img1,
        },
        {
          id: 2,
          description:
            "Can you help translate this site into a foreign language ? Please email us with details if you can help",
          image: img2,
        },
        {
          id: 3,
          description:
            "Can you help translate this site into a foreign language ? Please email us with details if you can help",
          image: img3,
        },
      ]);
      setLoading(false);
    }, 2000); // Simulated delay
  }, []);

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
      handleCloseModal();
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
  const popularProfiles = [
    {
      id: 1,
      description:
        "Can you help translate this site into a foreign language ? Please email us with details if you can help",
      image: img1,
    },
    {
      id: 2,
      description:
        "Can you help translate this site into a foreign language ? Please email us with details if you can help",
      image: img2,
    },
    {
      id: 3,
      description:
        "Can you help translate this site into a foreign language ? Please email us with details if you can help",
      image: img3,
    },
    {
      id: 4,
      description:
        "Can you help translate this site into a foreign language ? Please email us with details if you can help",
      image: img4,
    },
    {
      id: 5,
      description:
        "Can you help translate this site into a foreign language ? Please email us with details if you can help",
      image: img1,
    },
    {
      id: 6,
      description:
        "Can you help translate this site into a foreign language ? Please email us with details if you can help",
      image: img2,
    },
  ];

  const recentProfiles = [
    {
      id: 7,
      description:
        "Can you help translate this site into a foreign language ? Please email us with details if you can help",
      image: img3,
    },
    {
      id: 8,
      description:
        "Can you help translate this site into a foreign language ? Please email us with details if you can help",
      image: img4,
    },
    {
      id: 9,
      description:
        "Can you help translate this site into a foreign language ? Please email us with details if you can help",
      image: img1,
    },
    {
      id: 10,
      description:
        "Can you help translate this site into a foreign language ? Please email us with details if you can help",
      image: img2,
    },
    {
      id: 11,
      description:
        "Can you help translate this site into a foreign language ? Please email us with details if you can help",
      image: img3,
    },
    {
      id: 12,
      description:
        "Can you help translate this site into a foreign language ? Please email us with details if you can help",
      image: img1,
    },
  ];

  return (
    <>
      <header className="header">
        <Link to="/" className="logo">
          <img src={Datashoperlogo} alt="Data Logo" />
        </Link>
        <nav className="nav">
          <img
            src={advertise}
            alt="Advertise Icon"
            className="nav-icon"
            style={{ width: "32px", height: "33px" }}
          />
          Advertise
          <Link to="/login" className="nav-link">
            Login /Sign Up
          </Link>
        </nav>
      </header>
      {/* <div className="container p-0"> */}
      {/* <div className="banner-container ps-3 pe-3">
        <div className="banner">
          <img src={landingbanner} alt="Banner 1" />
        </div>
        <div className="banner">
          <Carousel data-bs-theme="dark">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={landingbanner2}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={landingbanner2}
                alt="Second slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </div> */}

      <SearchSection />
      <div className="section-container">
        {/* Popular Services Section */}
        <section>
          <h2 className="section-title">Popular Services</h2>
          <div className="profiles-grid">
            {popularProfiles.map((profile) => (
              <div key={profile.id} className="profile-card">
                <img
                  src={profile.image || "/placeholder.svg"}
                  alt={profile.description}
                  className="profile-image"
                />
                <div className="profile-info">
                  <div className="profile-name">{profile.description}</div>
                  <button className="profile-button" onClick={handleOpenModal}>
                    Inquiry
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Recent Activity Section */}
        <section>
          <h2 className="section-title">Recent Activity</h2>
          <div className="profiles-grid">
            {recentProfiles.map((profile) => (
              <div key={profile.id} className="profile-card">
                <img
                  src={profile.image || "/placeholder.svg"}
                  alt={profile.name}
                  className="profile-image"
                />
                <div className="profile-info">
                  <div className="profile-name">{profile.description}</div>
                  <button className="profile-button" onClick={handleOpenModal}>
                    Inquiry
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="row">
          <div className="col-md-6 col-sm-12 col-xs-12">
            {/* Best Seller Section */}
            <section>
              <h2 className="section-title">Best Seller</h2>
              <div className="profiles-grid">
                {loading ? (
                  <>
                    <div className="profile-card">
                      <Skeleton
                        variant="rectangular"
                        sx={{
                          fontSize: "1rem",
                          width: "100%",
                          margin: "auto",
                        }}
                        height={165}
                        className="profile-image"
                      />
                      <div className="profile-info">
                        <Skeleton
                          variant="text"
                          height={94}
                          sx={{
                            fontSize: "1rem",
                            width: "100%",
                            margin: "auto",
                          }}
                        />
                        <Skeleton
                          variant="rounded"
                          sx={{
                            fontSize: "1rem",
                            width: "100%",
                            margin: "auto",
                          }}
                          height={40}
                        />
                      </div>
                    </div>
                    <div className="profile-card">
                      <Skeleton
                        variant="rectangular"
                        sx={{
                          fontSize: "1rem",
                          width: "100%",
                          margin: "auto",
                        }}
                        height={165}
                        className="profile-image"
                      />
                      <div className="profile-info">
                        <Skeleton
                          variant="text"
                          height={94}
                          sx={{
                            fontSize: "1rem",
                            width: "100%",
                            margin: "auto",
                          }}
                        />
                        <Skeleton
                          variant="rounded"
                          sx={{
                            fontSize: "1rem",
                            width: "100%",
                            margin: "auto",
                          }}
                          height={40}
                        />
                      </div>
                    </div>
                    <div className="profile-card">
                      <Skeleton
                        variant="rectangular"
                        sx={{
                          fontSize: "1rem",
                          width: "100%",
                          margin: "auto",
                        }}
                        height={165}
                        className="profile-image"
                      />
                      <div className="profile-info">
                        <Skeleton
                          variant="text"
                          height={94}
                          sx={{
                            fontSize: "1rem",
                            width: "100%",
                            margin: "auto",
                          }}
                        />
                        <Skeleton
                          variant="rounded"
                          sx={{
                            fontSize: "1rem",
                            width: "100%",
                            margin: "auto",
                          }}
                          height={40}
                        />
                      </div>
                    </div>
                  </>
                ) : (
                  bestseller.map((profile) => (
                    <div key={profile.id} className="profile-card">
                      <img
                        src={profile.image || "/placeholder.svg"}
                        alt={profile.description}
                        className="profile-image"
                      />
                      <div className="profile-info">
                        <div className="profile-name">
                          {profile.description}
                        </div>
                        <button
                          className="profile-button"
                          onClick={handleOpenModal}
                        >
                          Inquiry
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </section>
          </div>

          {/* Banner Section */}
          <div className="col-md-6 col-sm-12 col-xs-12 banner">
            {/* <SimpleSlider image={landingbanner2} /> */}
            <Carousel data-bs-theme="dark">
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={landingbanner2}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={landingbanner2}
                  alt="Second slide"
                />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
      {/* </div> */}

      {/* Inquiry Modal */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Inquiry Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={formik.handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                id="name"
                className={`form-control ${
                  formik.touched.name && formik.errors.name ? "is-invalid" : ""
                }`}
                {...formik.getFieldProps("name")}
              />
              {formik.touched.name && formik.errors.name ? (
                <div className="invalid-feedback">{formik.errors.name}</div>
              ) : null}
            </div>

            <div className="mb-3">
              <label htmlFor="mobile" className="form-label">
                Mobile Number
              </label>
              <input
                type="text"
                id="mobile"
                className={`form-control ${
                  formik.touched.mobile && formik.errors.mobile
                    ? "is-invalid"
                    : ""
                }`}
                {...formik.getFieldProps("mobile")}
              />
              {formik.touched.mobile && formik.errors.mobile ? (
                <div className="invalid-feedback">{formik.errors.mobile}</div>
              ) : null}
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                id="email"
                className={`form-control ${
                  formik.touched.email && formik.errors.email
                    ? "is-invalid"
                    : ""
                }`}
                {...formik.getFieldProps("email")}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="invalid-feedback">{formik.errors.email}</div>
              ) : null}
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                id="message"
                className={`form-control ${
                  formik.touched.message && formik.errors.message
                    ? "is-invalid"
                    : ""
                }`}
                rows="3"
                {...formik.getFieldProps("message")}
              ></textarea>
              {formik.touched.message && formik.errors.message ? (
                <div className="invalid-feedback">{formik.errors.message}</div>
              ) : null}
            </div>

            <Button variant="primary" type="submit">
              Submit Inquiry
            </Button>
          </form>
        </Modal.Body>
      </Modal>
      <footer className="footer">
        <div>Copyright 2025 v0. All Rights Reserved.</div>
        <div>Terms & Conditions</div>
      </footer>
    </>
  );
}

export default Landing;
