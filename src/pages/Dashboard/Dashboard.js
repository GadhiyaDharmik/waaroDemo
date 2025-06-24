import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Dashboard.css";

import { FiSearch } from "react-icons/fi";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

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

import whatsappIcon from "../../asset/Rectangle/Whatsapp.png";
import phoneIcon from "../../asset/Rectangle/Call.png";

import google from "../../asset/Rectangle/Chrome.png";

import digitalbusinesscard from "../../asset/Rectangle/digital-business-card.png";
import { FaEye } from "react-icons/fa";

const priceData = [
  { period: "6 Month", price: 899, cls: "box-1" },
  { period: "Year", price: 1499, cls: "box-2" },
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

// 3) Build your messages so that each object gets exactly one avatar
const messages = avatarList.map((avatar, i) => ({
  avatar, // single URL
  company: `Company Name ${i + 1}`, // you can template in the index
  person: "Chetan Patel",
  category: "Category Name",
}));

const gallery = [r1, r2, r3, r4, r5, r6, r7, r8];

export default function Dashboard() {
  return (
    <div className="dashboard">
      {/* HEADER */}
      <div className="dashboard-header mb-4">
        <h1>Today</h1>
        <p>Mon 22, 2021 | 10:00 AM</p>
      </div>

      <div className="row gx-4">
        {/* LEFT COLUMN */}
        <div className="col-lg-4 d-flex flex-column gap-4">
          {/* Price Card */}

          <div className="price-card card p-4">
            <h2 className="price-title">Price</h2>
            <p className="price-subtitle" style={{ textAlign: "center" }}>
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
              {priceData.map((_, i) => (
                <p key={i} className="price-desc">
                  is a long established fact that a reader will distracted
                  readable content page when
                </p>
              ))}
            </div>
          </div>

          {/* Bottom stats grid */}
          <div className="stats-grid card p-4">
            {statsLabels.map((label, i) => (
              <div key={i} className="stat-box">
                <p className="fw-semibold">{label}</p>
                <h5>135</h5>
                <small className="small-text">customers recommend this product</small>
              </div>
            ))}
          </div>
        </div>

        {/* MIDDLE COLUMN */}
        <div className="col-lg-4 d-flex flex-column gap-4">
          {/* Search + Pills */}
          <div className="card no-gap p-3 flex-grow-1 d-flex flex-column">
            {/* <div className="d-flex align-items-center gap-2"> */}
            {/* 1️⃣ Search pill */}
            <div
              className="input-group px-2 mx-auto"
              style={{ maxWidth: "432px" }}
            >
              <span
                className="input-group-text bg-white border border-secondary"
                style={{ borderRadius: "50px 0 0 50px" }}
              >
                <FiSearch className="text-secondary" />
              </span>
              <input
                type="text"
                className="form-control border border-start-0 border-secondary"
                placeholder="Search in Message"
                style={{ borderRadius: "0 50px 50px 0", boxShadow: "none" }}
              />
            </div>

            {/* 2️⃣ Buttons pill */}
            <div
              className="d-flex align-items-center justify-content-center gap-2 rounded-pill px-2 mx-auto"
              style={{
                backgroundColor: "#F2F2F2",
                marginTop: "9px",
                maxWidth: "403px",
                height: "51px",
                marginLeft: "60px !important",
                marginRight: "55px !important",
              }}
            >
              <button
                className="btn rounded-pill px-3 py-1"
                style={{
                  backgroundColor: "#FFC107",
                  border: "none",
                  color: "#fff",
                }}
              >
                Connect
              </button>
              <button
                className="btn rounded-pill px-3 py-1 ms-1"
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  color: "#000",
                }}
              >
                Save
              </button>
              <button
                className="btn rounded-pill px-3 py-1 ms-1"
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  color: "#000",
                }}
              >
                Call Alerts
              </button>
            </div>
            {/* </div> */}

            {/* </div> */}

            {/* Message list */}
            <div className="message-list flex-grow-1 px-3">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className="d-flex align-items-center py-2 border-bottom"
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
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="col-lg-4 d-flex flex-column gap-4">
          {/* Ad Card */}

          <div className="business-card">
            {/* Banner + mockup */}
            <div className="banner-container">
              <img
                src={digitalbusinesscard}
                alt="banner"
                className="banner-img"
              />

              {/* <img src={cardMockup} alt="" className="mockup-img" /> */}
            </div>

            {/* Unified info row */}
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

          {/* Mini stats + icons */}
          <div className="mini-stats">
            <div className="stats-items">
              {stats.map((s, i) => (
                <div key={i} className="stat-item">
                  <h5 className="stat-count">{s.count}</h5>
                  <small className="stat-label">{s.label}</small>
                </div>
              ))}
            </div>
            <div className="stats-icons">
              <FaWhatsapp className="icon" />
              <FaPhoneAlt className="icon" />
            </div>
          </div>

          {/* Gallery */}
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
