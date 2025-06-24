import {
  Avatar,
  Button as MUIButton,
  Card as MUICard,
  CardContent,
  Typography,
  Grid,
  TextField,
  Box,
  InputBase,
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
} from "lucide-react";
import { Button, Modal } from "react-bootstrap"; // For React Bootstrap Buttons
import edit from "../asset/EditImg.svg";
import Delete from "../asset/DeleteImg.svg";
import advertiseuser from "../asset/advertiseuser.png";
import advertiseuser2 from "../asset/advertiseuser2.png";
import advertiseuser3 from "../asset/advertiseuser3.png";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";

import "../asset/style.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosMain from "./utils/axiosMain";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import * as Yup from "yup";

function LeadComponet() {
  const [imagePreview, setImagePreview] = useState("/placeholder.svg");
  const [showModal, setShowModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5;
  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const [messageToEdit, setMessageToEdit] = useState(null);
  const [editedMessage, setEditedMessage] = useState("");
  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState([
    {
      date: "01-07-2023",
      time: "09:15 AM",
      name: "Dheeratech",
      phone: "+91 9876543210",
      email: "info@cardonxo.com",
      message: "Hello!!!",
    },
    {
      date: "01-06-2023",
      time: "09:15 AM",
      name: "Dheeratech",
      phone: "+91 9876543210",
      email: "info@cardonxo.com",
      message: "Nice to meet you...",
    },
    {
      date: "01-05-2023",
      time: "09:15 AM",
      name: "Dheeratech",
      phone: "+91 9876543210",
      email: "info@cardonxo.com",
      message: "Lorem ipsumme...",
    },
    {
      date: "01-04-2023",
      time: "09:15 AM",
      name: "Dheeratech",
      phone: "+91 9876543210",
      email: "info@cardonxo.com",
      message: "Nice to meet you...",
    },
  ]);

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
  const navigate = useNavigate();
  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    axiosMain
      .get("/inquiries")
      .then((res) => {
        if (res.success) {
          setMessages(res.inquiries);
        } else {
          toast.error("some problem");
        }
        // console.log(res);
      })
      .catch((err) => console.log(err));
  }, []);

  // Sample data for cards
  const cards = Array(12).fill({
    title: "Doctor & Hospital",
    subtitle: "Salon & Beauty Parlour",
  });

  const advertise = [
    {
      id: 1,
      avatar: advertiseuser,
      text: "Can you help translate this site into a foreign language? Please email us with details if you can help.",
    },
    {
      id: 2,
      avatar: advertiseuser2,
      text: "Can you help translate this site into a foreign language? Please email us with details if you can help.",
    },
    {
      id: 3,
      avatar: advertiseuser3,
      text: "Can you help translate this site into a foreign language? Please email us with details if you can help.",
    },
  ];

  function handleDelete(id) {
    axiosMain
      .delete("/inquiry/" + id)
      .then((res) => {
        if (res.success) {
          axiosMain
            .get("/inquiries")
            .then((res) => {
              if (res.success) {
                setMessages(res.inquiries);
              } else {
                toast.error("some problem");
              }
              // console.log(res);
            })
            .catch((err) => console.log(err));
        }
      })
      .catch((err) => console.log(err));
  }

  // Pagination Logic
  const offset = currentPage * itemsPerPage;
  const currentItems = messages.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(messages.length / itemsPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };
  const handleEdit = (data) => {
    setMessageToEdit(data);
    setMessage(data.note);
    setShowModal(true);
  };

  // Save the updated message
  const handleSaveMessage = async () => {
    try {
      const response = await axiosMain.put(`/inquiry/${messageToEdit._id}`, {
        note: message,
      });

      if (response.success) {
        toast.success("Message updated successfully!");
        // setMessages((prevMessages) =>
        //   prevMessages.map((msg) =>
        //     msg._id === messageToEdit._id ? { ...msg, note: editedMessage } : msg
        //   )
        // );
        axiosMain
          .get("/inquiries")
          .then((res) => {
            if (res.success) {
              setMessages(res.inquiries);
            } else {
              toast.error("some problem");
            }
            // console.log(res);
          })
          .catch((err) => console.log(err));
        handleCloseModal();
      } else {
        toast.error(response.success);
      }
    } catch (error) {
      console.error("Error updating message:", error);
      toast.error("Failed to update message");
    }
  };

  return (
    <div className="min-h-screen  flex">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              border: "2px solid #000",
              borderRadius: "15px",
              padding: "0.5rem 1rem",
              maxWidth: "400px",
              backgroundColor: "white",
              marginBottom: "10px",
              background: "transparent",
              flexDirection: "row-reverse",
            }}
          >
            <SearchIcon
              sx={{ color: "#000000", marginRight: "8px", cursor: "pointer" }}
            />
            <InputBase
              placeholder="Search Name... "
              fullWidth
              sx={{
                color: "#000",
                fontSize: "1rem",
                padding: "4px 8px 5px",
              }}
            />
          </Box>
        </Grid>
      </Grid>
      {/* tableee */}
      {/* <div className="container py-4 rounded "> */}
      <div className="table-responsive py-4">
        <table
          className="table"
          style={{ borderRadius: "15px", overflow: "hidden" }}
        >
          <thead className="table-head">
            <tr>
              <th>Date</th>
              <th>Time</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Message</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {messages.map((message, index) => (
              <tr key={index}>
                <td>{message.date}</td>
                <td>{message.time}</td>
                <td>{message.name}</td>
                <td>{message.phone}</td>
                <td>{message.email}</td>
                <td>{message.message}</td>
                <td>
                  <div className="d-flex gap-2">
                    <button
                      className="btn  btn-sm"
                      title="Delete"
                      onClick={() => handleDelete(message._id)}
                    >
                      <img
                        src={Delete}
                        alt="Delete"
                        style={{ width: "30px", height: "30px" }}
                      />
                    </button>
                    <button className="btn  btn-sm" title="Copy">
                      <img
                        src={edit}
                        alt="Copy"
                        style={{ width: "30px", height: "30px" }}
                        onClick={() => handleEdit(message)}
                      />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Modal with only text area */}
        <Modal show={showModal} onHide={handleCloseModal} centered>
          <Modal.Header closeButton>
            <Modal.Title style={{ color: "#5B4DC9", fontWeight: "500" }}>
              Note
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows="5"
              className="form-control"
              placeholder="Type your message here"
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleSaveMessage}>
              Save Message
            </Button>
          </Modal.Footer>
        </Modal>
      </div>

      {/* </div> */}

      {/* advertiseee */}
      {/* <div className="container py-4">
        <div className="row g-4">
          <div className="col-md-8">
            <div className="card p-4 shadow-sm">

              <div className="mb-4">
                <div className="rounded mb-3 text-center" style={{ overflow: "hidden" }}>
                  <img
                    src={advertiseuser2}
                    alt="Property preview"
                    className="img-fluid"
                    style={{ height: "200px", width: "200px" }}
                  />
                </div>
              </div>

              <form>
                <div className="mb-3">
                  <label className="form-label">Description</label>
                  <textarea className="form-control" rows="3" placeholder="Write content here"></textarea>
                </div>

                <div className="mb-3">
                  <label className="form-label">Your URL</label>
                  <input type="url" className="form-control" placeholder="Write Your URL" />
                </div>

                <div className="form-check mb-3">
                  <input type="checkbox" className="form-check-input" id="dashboard" />
                  <label className="form-check-label" htmlFor="dashboard">
                    Inquire On Dashboard
                  </label>
                </div>

                <button type="submit" className="btn btn-submit w-100">
                  Submit
                </button>
              </form>
            </div>
          </div>

          <div className="col-md-4">

            <div className="text-center text-primary mb-4">
              Instant Benefit Every Month 3 Post for Paid User
            </div>
            {advertise.map((message) => (
              <div key={message.id} className="card p-3 mb-3 shadow-sm">
                <div className="d-flex align-items-start">
                  <img
                    src={message.avatar}
                    alt="User avatar"
                    className="me-3"
                    style={{ width: "55px", height: "55px", objectFit: "cover" }}
                  />
                  <p className="flex-grow-1 mb-0">{message.text}</p>
                  <div className="rounded mb-3 text-center" style={{ overflow: "hidden" }}>
                    <img
                      src={advertisedelete}
                      alt="Property preview"
                      className="img-fluid"
                      style={{ height: "28px", width: "60px" }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div> */}

      {/* Inquiry Modal */}
      {/* <Modal show={showModal} onHide={handleCloseModal}>
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
                className={`form-control ${formik.touched.name && formik.errors.name ? "is-invalid" : ""
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
                className={`form-control ${formik.touched.mobile && formik.errors.mobile
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
                className={`form-control ${formik.touched.email && formik.errors.email
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
                className={`form-control ${formik.touched.message && formik.errors.message
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
      </Modal> */}
    </div>
  );
}

export default LeadComponet;
