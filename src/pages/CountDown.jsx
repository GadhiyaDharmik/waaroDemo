// src/components/CountDown.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../asset/logo.svg";
import hero from "../asset/Group 39864.png";
import axiosMain from "./utils/axiosMain";
import {
  Container,
  Row,
  Col,
  Button,
  Navbar,
  Image,
  Card,
} from "react-bootstrap";
import { Menu, MenuItem } from "@mui/material";
import profilePicture from "../asset/profilePicture.png";
import "./CountDown.css";

export default function CountDown() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (e) => setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const targetDate = new Date("2025-06-30T00:00:00");
  const calcTimeLeft = () => {
    const diff = +targetDate - +new Date();
    if (diff <= 0) return { hours: 0, minutes: 0, seconds: 0 };
    const sec = Math.floor(diff / 1000);
    return {
      hours: Math.floor(sec / 3600),
      minutes: Math.floor((sec % 3600) / 60),
      seconds: sec % 60,
    };
  };

  const [timeLeft, setTimeLeft] = useState(calcTimeLeft());
  const [regs, setRegs] = useState(3479);
  const [showProfile, setShowProfile] = useState(false);
  const [showSubscribe, setShowSubscribe] = useState(false);

  useEffect(() => {
    setShowProfile(!!localStorage.getItem("token"));

    axiosMain
      .get("/all-user")
      .then((res) => {
        if (res.success) {
          setRegs((r) => r + res.data.length);
          setShowSubscribe(true);
        }
      })
      .catch(console.error);

    const timer = setInterval(() => setTimeLeft(calcTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white min-vh-100 d-flex flex-column ">
      {/* Navbar */}
      <Navbar
        bg="light"
        className="px-4 py-3"
        style={{ boxShadow: "0 10px 10px -10px rgba(33,35,38,0.1)" }}
      >
        <Image src={logo} height="40" alt="Waaro" />
        {showProfile ? (
          <>
            {/* Avatar */}

            <Button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              className="bg-transparent border-0 ms-auto"
            >
              <div className="d-flex align-items-center gap-3 flex-w rap justify-content-end">
                {/* Desktop User Info */}
                <div className="d-none d-md-block text-end">
                  <h6 className="mb-0 fw-semibold text-nowrap text-dark">
                    {JSON.parse(localStorage.getItem("userDetail"))?.user?.name}
                  </h6>
                  <p className="mb-0 text-secondary small text-nowrap">
                    User ID: GJ01AB
                    {JSON.parse(
                      localStorage.getItem("userDetail")
                    )?.user?._id?.slice(0, 4) || "N/A"}
                  </p>
                </div>

                {/* Avatar */}
                <div>
                  <img
                    src={profilePicture}
                    alt="User"
                    className="rounded-circle"
                    style={{
                      width: "45px",
                      height: "45px",
                      backgroundColor: "#FFCA28",
                      padding: "5px",
                      objectFit: "contain",
                    }}
                  />
                </div>
              </div>
            </Button>

            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              {/* Mobile-only user details */}
              <div className="d-block d-md-none px-3 pt-2 pb-2 text-center">
                <div className="d-flex justify-content-center">
                  <img
                    src={profilePicture}
                    alt="User"
                    className="rounded-circle mb-2"
                    style={{
                      width: "60px",
                      height: "60px",
                      objectFit: "cover",
                    }}
                  />
                </div>

                <div>
                  <h6 className="mb-0">
                    {JSON.parse(localStorage.getItem("userDetail"))?.user?.name}
                  </h6>
                  <p className="text-muted small mb-0">
                    User ID: GJ01AB
                    {JSON.parse(
                      localStorage.getItem("userDetail")
                    )?.user?._id?.slice(0, 4) || "N/A"}
                  </p>
                </div>
                <hr className="my-2" />
              </div>

              <MenuItem
                onClick={() => {
                  navigate("/dashboard");
                  handleClose();
                }}
                style={{ fontSize: "16px" }}
              >
                Go To Dashboard
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleClose();
                  localStorage.clear();
                  setShowProfile(false);
                }}
                style={{ fontSize: "16px" }}
              >
                Logout
              </MenuItem>
            </Menu>
          </>
        ) : (
          <Button
            variant="link"
            className="login-btn ms-auto ms-md-auto"
            onClick={() => navigate("/login")}
          >
            Login
          </Button>
        )}
      </Navbar>

      {/* Hero & Countdown */}
      <Container className="py-5 flex-grow-1">
        <Row className="align-items-center px-4">
          {/* Image first on xs, second on md */}
          <Col
            xs={12}
            md={6}
            className="order-1 order-md-2 text-center mb-4 mb-md-0"
          >
            <Image src={hero} alt="Business Growth" fluid />
          </Col>

          {/* Text second on xs, first on md */}
          <Col
            xs={12}
            md={6}
            className="order-2 order-md-1 text-center text-md-start"
          >
            <h1 className="display-4 mb-2">Welcome</h1>
            <h2 className="h4 mb-1">
              To <span className="text-warning">“WAARO”</span> your all-in-one
              hub for
            </h2>
            <h3 className="fw-bold mb-4" style={{ fontSize: "42px" }}>
              Powerful Business Growth
            </h3>

            <Button
              variant="warning"
              className="rounded-md px-4 py-2 mb-4 fs-4 text-dark w-2xs w-md-2xs"
              onClick={() => navigate("/login")}
            >
              Subscribe FREE!
            </Button>

            <p className="hero-subtext mb-4 text-[#0D1619]">
              Get 90 days of premium marketing tools.&nbsp;
              <span className="hero-highlight">zero cost</span> Full Access
            </p>

            {/* Timer */}
            <div className="d-flex flex-wrap justify-content-center justify-content-md-start gap-2 mb-4">
              {["hours", "minutes", "seconds"].map((unit) => {
                const label = unit.replace(/s$/, "");
                const cap = label.charAt(0).toUpperCase() + label.slice(1);

                return (
                  <div
                    key={unit}
                    className="d-flex flex-column align-items-center"
                  >
                    {/* the yellow box */}
                    <Card bg="warning" text="dark" className="timer-card">
                      <Card.Body className="d-flex justify-content-center align-items-center p-0">
                        <span className="fs-2 mb-0">
                          {String(timeLeft[unit]).padStart(2, "0")}
                        </span>
                      </Card.Body>
                    </Card>

                    {/* the label below */}
                    <span className="cap-text mt-1">{cap}</span>
                  </div>
                );
              })}
            </div>

            {/* Registration Count */}
            {showSubscribe && (
              <>
                <div className="d-flex justify-content-center justify-content-md-start mb-1">
                  <div
                    className="bg-warning text-dark py-2 px-4 user-count"
                    style={{ borderRadius: "15px" }}
                  >
                    <span className="fs-3 fw-bold">{regs}</span>
                  </div>
                </div>
                <div
                  className="text-center text-md-start"
                  style={{ fontSize: "16px", letterSpacing: "0.1rem" }}
                >
                  <p className="mb-0 fw-semibold">Successful Registration</p>
                  <small className="text-secondary">
                    India's Best B2B Marketplace
                  </small>
                </div>
              </>
            )}
          </Col>
        </Row>
      </Container>

      {/* Footer */}
      <footer
        className="text-center py-4"
        style={{ boxShadow: "0 -10px 10px -10px rgba(33,35,38,0.1)" }}
      >
        <small className="text-muted">Copyright © 2025 Powered By Waaro</small>
      </footer>
    </div>
  );
}
