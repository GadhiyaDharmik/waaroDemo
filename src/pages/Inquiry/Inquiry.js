import React from "react";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import userIcon from "../../asset/Rectangle/User1.png";
import PhoneIcon from "../../asset/SVG/PhoneIcon.svg";
import OnlyPhoneIcon from "../../asset/SVG/OnlyPhoneIcon.svg";
import WhatsAppIcon from "../../asset/SVG/WhatsAppIcon.svg";
import send from "../../asset/SVG/send.svg";
import LinkIcon from "../../asset/SVG/LinkIcon.svg";
import MailIcon from "../../asset/SVG/MailIcon.svg";
import AddressIcon from "../../asset/SVG/AddressIcon.svg";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Inquiry() {
  return (
    <div className="w-full min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Left Column */}
        <div className="bg-white rounded-lg shadow p-4">
          <div
            className="flex gap-2 mb-4"
            style={{
              backgroundColor: "#0000001A",
              borderRadius: "18px",
              padding: "8px",
            }}
          >
            <button
              className="bg-yellow-400 text-black font-semibold px-3 py-1 text-sm"
              style={{ borderRadius: "12px" }}
            >
              Received Inquiry
            </button>
            <button className="px-3 py-1 text-sm">Buy Leads</button>
            <button className="px-3 py-1 text-sm">Call Alerts</button>
          </div>
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="flex items-start gap-3 py-3"
              style={{ borderBottom: "1px solid #000000" }}
            >
              <img
                src={userIcon}
                alt="user"
                className="w-10 h-10 rounded-full"
              />
              <div className="flex-1">
                <p
                  className="text-sm mb-0.5"
                  style={{
                    fontFamily: "Roboto,sans-serif",
                    fontSize: "18px",
                    lineHeight: "100%",
                    color: "#00000080",
                    fontWeight: "500",
                  }}
                >
                  Margen Patel
                </p>
                <p
                  className="text-xs"
                  style={{
                    fontFamily: "Roboto,sans-serif",
                    fontSize: "16px",
                    lineHeight: "100%",
                    color: "#00000080",
                    fontWeight: "500",
                  }}
                >
                  DP Tourism
                </p>
                <p
                  className="text-xs"
                  style={{
                    fontFamily: "Roboto,sans-serif",
                    fontSize: "12px",
                    lineHeight: "100%",
                    color: "#00000080",
                    fontWeight: "400",
                  }}
                >
                  Social Media Graphic Design Services
                </p>
              </div>
              <div>
                <p
                  style={{
                    fontFamily: "Roboto,sans-serif",
                    fontWeight: "400",
                    fontSize: "10px",
                    lineHeight: "100%",
                  }}
                >
                  10.00 AM
                </p>
                <img src={PhoneIcon} alt="call" className="w-8 h-8 mt-1" />
              </div>
            </div>
          ))}
        </div>

        {/* Center Column */}
        <div className="bg-white rounded-lg shadow p-4 text-center">
          <img
            src={userIcon}
            alt="user"
            className="w-20 h-20 mx-auto rounded-full mb-3"
          />
          <h2
            className="text-lg font-bold mb-3"
            style={{
              fontFamily: "Roboto,sans-serif",
              fontSize: "25px",
              lineHeight: "100%",
              fontWeight: "500",
            }}
          >
            New User
          </h2>

          <div className="p-4">
            <div
              className="p-3 text-left text-sm"
              style={{
                border: "1px solid #000000",
                borderRadius: "18px",
                fontFamily: "Roboto, sans-serif",
              }}
            >
              <p className="mb-2">
                Buyer is looking for: Social Media Graphic Design Services
              </p>

              <p className="mb-2">
                <strong className="mt-3 block">Inquiry Details:</strong>
                <br />
                Dear Mr. Smith Patel, There is an inquiry regarding products
                Graphic Designing Services.
              </p>

              <p className="my-0.5 leading-tight">
                <strong>Mobile:</strong> +91-9999999990
              </p>
              <p className="my-0.5 leading-tight">
                <strong>Company Name:</strong> New Company
              </p>
              <p className="my-0.5 leading-tight">
                <strong>Country:</strong> India
              </p>
              <p className="my-0.5 leading-tight">
                <strong>State:</strong> Gujarat
              </p>
              <p className="my-0.5 leading-tight">
                <strong>City:</strong> Ahmedabad
              </p>
            </div>
          </div>

          <div className="flex justify-center gap-3 mb-2 h-11">
            <button className="flex items-center px-4 py-1 text-[12px] border border-black rounded-full">
              <img
                src={OnlyPhoneIcon}
                alt="phone"
                className="w-4 h-4 mr-2 mb-[2px]"
              />
              Call Now
            </button>

            <button className="flex items-center px-4 py-1 text-[12px] font-normal leading-5 bg-[#FFC817] border border-black rounded-full">
              <img src={WhatsAppIcon} alt="whatsapp" className="w-5 h-5 mr-2" />
              Reply on Message
            </button>
          </div>

          <button
            className="text-white bg-black px-4 py-2.5 mb-3"
            style={{ width: "100%", borderRadius: "18px" }}
          >
            Mark Irrelevant
          </button>

          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <div
              className="h-14 w-14 flex overflow-hidden"
              style={{
                justifyContent: "center",
                border: "1px solid #000000",
                borderRadius: "18px",
                marginRight: "2px",
              }}
            >
              <img src={LinkIcon} alt="File" style={{ width: "20px" }} />
            </div>
            <div
              className="h-14 flex items-center overflow-hidden"
              style={{
                justifyContent: "center",
                border: "1px solid #000000",
                borderRadius: "18px",
              }}
            >
              <input
                type="text"
                className="flex-1 px-3 py-2 text-sm outline-none"
                placeholder="Type your message here..."
              />
              <span className="px-3 text-gray-500">
                <img src={send} />
              </span>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-5">
          <div className="bg-white rounded-lg shadow p-4  min-h-[550px]">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                borderBottom: "1px solid #000000",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "8%",
                }}
              >
                <img
                  src={userIcon}
                  alt="user"
                  className="w-12 h-12 rounded-full"
                />
                <h3
                  className="font-semibold text-base"
                  style={{ marginLeft: "10px" }}
                >
                  New User
                </h3>
              </div>
            </div>
            <div
              className="flex items-center gap-3"
              style={{ paddingTop: "5%" }}
            >
              <div style={{ padding: "4px" }}>
                <div style={{ display: "flex", margin: "12px" }}>
                  <div
                    style={{
                      marginRight: "2%",
                      backgroundColor: "black",
                      borderRadius: "50%",
                      width: "40px",
                      height: "40px",
                      justifyItems: "center",
                      alignContent: "center",
                    }}
                  >
                    {/* <img src={MailIcon} /> */}
                    <Mail color="#FFFFFF" />
                  </div>
                  <div style={{ display: "flex-column" }}>
                    <div
                      className="text-xs text-gray-600"
                      style={{
                        fontWeight: "300",
                        fontFamily: "Roboto,sans-serif",
                        fontSize: "15px",
                      }}
                    >
                      E-Mail
                    </div>
                    <div
                      className="text-xs"
                      style={{
                        fontWeight: "400",
                        fontFamily: "Roboto,sans-serif",
                        fontSize: "18px",
                      }}
                    >
                      123abc@gmail.com
                    </div>
                  </div>
                </div>

                <div style={{ display: "flex", margin: "12px" }}>
                  <div
                    style={{
                      marginRight: "2%",
                      backgroundColor: "black",
                      borderRadius: "50%",
                      width: "40px",
                      height: "40px",
                      justifyItems: "center",
                      alignContent: "center",
                    }}
                  >
                    <Phone color="#FFFFFF" />
                  </div>
                  <div style={{ display: "flex-column" }}>
                    <div
                      className="text-xs text-gray-600"
                      style={{
                        fontWeight: "300",
                        fontFamily: "Roboto,sans-serif",
                        fontSize: "15px",
                      }}
                    >
                      Phone
                    </div>
                    <div
                      className="text-xs"
                      style={{
                        fontWeight: "400",
                        fontFamily: "Roboto,sans-serif",
                        fontSize: "18px",
                      }}
                    >
                      +91-9999999990
                    </div>
                  </div>
                </div>

                <div style={{ display: "flex", margin: "12px" }}>
                  <div
                    style={{
                      marginRight: "2%",
                      backgroundColor: "black",
                      borderRadius: "50%",
                      width: "40px",
                      height: "40px",
                      justifyItems: "center",
                      alignContent: "center",
                    }}
                  >
                    {/* <img src={AddressIcon} /> */}
                    <MapPin color="#FFFFFF" />
                  </div>
                  <div style={{ display: "flex-column" }}>
                    <div
                      className="text-xs text-gray-600"
                      style={{
                        fontWeight: "300",
                        fontFamily: "Roboto,sans-serif",
                        fontSize: "15px",
                      }}
                    >
                      Address
                    </div>
                    <div
                      className="text-xs"
                      style={{
                        fontWeight: "400",
                        fontFamily: "Roboto,sans-serif",
                        fontSize: "18px",
                      }}
                    >
                      12, Atihasik Society, Opp. Kr studios, Mehsana, India{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-4">
            <h4 className="font-semibold text-base mb-3">
              Post Buy Requirement
            </h4>
            <div className="text-base mb-3">
              Tell us what you need, and we'll help you get quotes
            </div>
            <form className="space-y-2 text-sm">
              <label
                style={{
                  fontFamily: "Roboto,sans-serif",
                  fontSize: "15px",
                  fontWeight: "400",
                  lineHeight: "125%",
                }}
              >
                Product Description
              </label>
              <textarea
                placeholder="Enter Description"
                className="w-full p-2 resize-none"
                rows="2"
                style={{
                  backgroundColor: "#FAFAFA",
                  border: "0.5px solid #000000",
                  borderRadius: "10px",
                }}
              ></textarea>

              <label
                style={{
                  fontFamily: "Roboto,sans-serif",
                  fontSize: "15px",
                  fontWeight: "400",
                  lineHeight: "125%",
                }}
              >
                Choose Category
              </label>
              <select
                className="w-full border p-2 rounded"
                style={{ color: "#00000080" }}
              >
                <option>Select Category</option>
              </select>

              <label
                style={{
                  fontFamily: "Roboto,sans-serif",
                  fontSize: "15px",
                  fontWeight: "400",
                  lineHeight: "125%",
                }}
              >
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter Full Name"
                className="w-full border p-2 rounded"
              />

              <label
                style={{
                  fontFamily: "Roboto,sans-serif",
                  fontSize: "15px",
                  fontWeight: "400",
                  lineHeight: "125%",
                }}
              >
                Mobile Number
              </label>
              <input
                type="text"
                placeholder="Enter Mobile"
                className="w-full border p-2 rounded"
              />

              <label
                style={{
                  fontFamily: "Roboto,sans-serif",
                  fontSize: "15px",
                  fontWeight: "400",
                  lineHeight: "125%",
                }}
              >
                State
              </label>
              <select
                className="w-full border p-2 rounded"
                style={{ color: "#00000080" }}
              >
                <option>Select State</option>
              </select>

              <label
                style={{
                  fontFamily: "Roboto,sans-serif",
                  fontSize: "15px",
                  fontWeight: "400",
                  lineHeight: "125%",
                }}
              >
                City Name
              </label>
              <select
                className="w-full border p-2 rounded"
                style={{ color: "#00000080" }}
              >
                <option>Select State</option>
              </select>

              <button
                type="submit"
                className="w-full h-12 font-semibold py-2"
                style={{
                  backgroundColor: "#FFC817",
                  fontFamily: "Roboto,sans-serif",
                  borderRadius: "18px",
                  color: "#000000",
                }}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
