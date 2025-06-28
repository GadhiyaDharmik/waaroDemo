import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Dashboard.css";

import { FiSearch } from "react-icons/fi";
import { FaPhoneAlt, FaWhatsapp, FaEye } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";

import r1 from "../../asset/Rectangle/Rectangle 34624233.png";
import r2 from "../../asset/Rectangle/Rectangle 34624234.png";
import r3 from "../../asset/Rectangle/Rectangle 34624235.png";
import r4 from "../../asset/Rectangle/Rectangle 34624236.png";
import r5 from "../../asset/Rectangle/Rectangle 34624237.png";
import r6 from "../../asset/Rectangle/Rectangle 34624238.png";
import r7 from "../../asset/Rectangle/Rectangle 34624239.png";
import r8 from "../../asset/Rectangle/Rectangle 34624240.png";

import user1 from "../../asset/Rectangle/User1.png";
import user2 from "../../asset/Rectangle/User2.png";
import user3 from "../../asset/Rectangle/User3.png";
import user4 from "../../asset/Rectangle/User4.png";
import user5 from "../../asset/Rectangle/User5.png";
import user6 from "../../asset/Rectangle/User6.png";
import user7 from "../../asset/Rectangle/User7.png";
import user8 from "../../asset/Rectangle/User8.png";

import google from "../../asset/Rectangle/Chrome.png";
import digitalbusinesscard from "../../asset/Rectangle/digital-business-card.png";
import { CiSearch } from "react-icons/ci";

const priceData = [
  {
    period: "6 Month",
    price: 899,
    features: [
      "Analytics",
      "Lead / Inquiry Management",
      "Email Campaigns",
      "Product Listings",
      "Product Promotions",
      "B2B Connections",
    ],
  },
  {
    period: "Year",
    price: 1499,
    features: [
      "Includes everything in the 6-month plan",
      "Extended Analytics & Insights",
      "Advanced Promotion Tools",
      "Unlimited Product Listings",
    ],
  },
];

const stats = [
  { label: "Connect", count: 105 },
  { label: "Product List", count: 105 },
  { label: "Post", count: 105 },
];

const statsLabels = [
  "Connect",
  "Spread",
  "Like",
  "View",
  "Buy Lead",
  "Close Lead",
  "Generate Lead",
  "Referral",
];

const avatarList = [user1, user2, user3, user4, user5, user6, user7, user8];

const messages = avatarList.map((avatar, i) => ({
  avatar,
  company: `Company Name ${i + 1}`,
  person: "Chetan Patel",
  category: "Category Name",
}));

const gallery = [r1, r2, r3, r4, r5, r6, r7, r8];

export default function Dashboard() {
  const [selectedMessages, setSelectedMessages] = useState([]);
  const [viewMode, setViewMode] = useState("connect");

  const toggleSelect = (index) => {
    setSelectedMessages((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const renderMessages = () => {
    let filteredMessages = [];

    if (viewMode === "connect") {
      filteredMessages = messages;
    } else {
      filteredMessages = selectedMessages.map((i) => messages[i]);
    }

    return filteredMessages.map((m, idx) => {
      const originalIndex = messages.indexOf(m);
      return (
        <div
          key={idx}
          className={`d-flex align-items-center py-2 border-bottom ${
            selectedMessages.includes(originalIndex) ? "bg-light" : ""
          }`}
          onClick={() => viewMode === "connect" && toggleSelect(originalIndex)}
          style={{ cursor: viewMode === "connect" ? "pointer" : "default" }}
        >
          <img
            src={m.avatar}
            alt={m.company}
            className="rounded-circle me-3"
            style={{ width: 40, height: 40, objectFit: "cover" }}
          />
          <div>
            <p className="mb-0 fw-semibold">{m.company}</p>
            <small className="d-block">{m.person}</small>
            <small className="text-secondary">{m.category}</small>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="dashboard">
      {/* Header */}
      <div className="dashboard-header">
        <h1>Today</h1>
        <p>Mon 22, 2021 | 10:00 AM</p>
      </div>

      <div className="row gx-4">
        {/* Left Column */}
        <div className="col-lg-4 d-flex flex-column gap-4">
          {/* Price Card */}
          <div className="price-card card p-4">
            <h2 className="price-title">Price</h2>
            <p className="price-subtitle text-center">
              customers recommend this product
            </p>

            <div className="price-boxes">
              {priceData.map((p, i) => (
                <div key={i} className={`price-box box-${i + 1}`}>
                  <div className="price-content">
                    <span className="price-number">{p.price}</span>
                    <span className="price-unit">Per</span>
                  </div>
                  <div className="price-period">{p.period}</div>
                </div>
              ))}
            </div>

            <div className="price-descriptions">
              {priceData.map((item, i) => (
                <div
                  key={i}
                  className="price-desc d-flex flex-column gap-1 ps-2"
                >
                  {item.features.map((feature, j) => (
                    <div
                      key={j}
                      className="d-flex align-items-start lh-sm"
                      style={{ cursor: "default" }}
                    >
                      <span
                        className="me-2 text-dark"
                        style={{ lineHeight: "1.2" }}
                      >
                        •
                      </span>
                      <span className="text-dark" style={{ lineHeight: "1.4" }}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Stats Grid */}
          <div className="stats-grid card p-4">
            {statsLabels.map((label, i) => (
              <div key={i} className="stat-box">
                <p className="fw-bold">{label}</p>

                {/* Number and description side-by-side like the image */}
                <div className="d-flex align-items-start">
                  <h5 className="fw-bold mb-0 me-2">135</h5>
                  <small className="text-dark">
                    Establish contact with potential clients or partners.
                  </small>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Middle Column */}
        <div className="col-lg-4 d-flex flex-column gap-4">
          <div className="card no-gap p-3 flex-grow-1 d-flex flex-column">
            {/* Search */}
            <div
              className="input-group px-2 mx-auto"
              style={{ maxWidth: "432px" }}
            >
              <span
                className="input-group-text bg-white border border-secondary"
                style={{ borderRadius: "20px 0 0 20px" }}
              >
                <CiSearch />
              </span>
              <input
                type="text"
                className="form-control border border-start-0 border-secondary"
                placeholder="Search in Message"
                style={{ borderRadius: "0 20px 20px 0", boxShadow: "none" }}
              />
            </div>

            {/* Tabs */}
            <div
              className="d-flex align-items-center justify-content-center gap-2 rounded-pill px-3 mx-auto mt-2"
              style={{
                background: "#0000001A",
                padding: "7px",
              }}
            >
              <button
                className={`btn  px-3 py-1 ${
                  viewMode === "connect" ? "btn-warning text-white" : ""
                }`}
                onClick={() => setViewMode("connect")}
              >
                Connect
              </button>
              <button
                className={`btn  px-3 py-1 ${
                  viewMode === "save" ? "btn-warning text-white" : ""
                }`}
                onClick={() => setViewMode("save")}
              >
                Save
              </button>
              <button
                className={`btn  px-3 py-1 ${
                  viewMode === "callAlerts" ? "btn-warning text-white" : ""
                }`}
                onClick={() => setViewMode("callAlerts")}
              >
                Call Alerts
              </button>
            </div>

            {/* Message List */}
            <div className="message-list flex-grow-1 px-3 mt-3">
              {renderMessages()}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="col-lg-4 d-flex flex-column gap-4">
          <div className="business-card">
            <div className="banner-container">
              <img
                src={digitalbusinesscard}
                alt="banner"
                className="banner-img"
              />
            </div>

            <div className="info-row">
              <img src={google} alt="Company Logo" className="company-logo" />
              <div className="info-text">
                <h5 className="company-name">Company name</h5>
                <small className="text-secondary">location</small>
                <br />
                <small className="text-secondary">GST No. :</small>
              </div>
              <FaEye className="eye-icon" />
              <div className="badge-w">
                <span>W</span>
              </div>
            </div>
          </div>

          <div className="mini-stats d-flex justify-content-between align-items-center">
            <div className="stats-items d-flex gap-4">
              {stats.map((s, i) => (
                <div key={i} className="stat-item d-flex flex-column">
                  <h5 className="stat-count mb-0">{s.count}</h5>
                  <small className="stat-label">{s.label}</small>
                </div>
              ))}
            </div>
            <div className="stats-icons d-flex gap-2">
              <FaWhatsapp className="fs-2" />
              <IoCallOutline className="fs-2" />
            </div>
          </div>

          <div className="gallery-grid">
            {gallery.map((src, i) => (
              <img key={i} src={src} alt="" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
