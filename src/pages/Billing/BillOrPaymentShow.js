import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import axiosMain from "../utils/axiosMain";
import { toast } from "react-toastify";
import { MdOutlineAddBox } from "react-icons/md";
import { CardContent, Grid, Typography, Card as MUICard } from "@mui/material";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function BillOrPaymentShow({ cartItems, userData, finalPrice }) {
  const [showPayment, setShowPayment] = useState(false);
  const [formData, setFormData] = useState(null);
  const navigate = useNavigate();
  const handleShowPayment = (formData) => {
    setFormData(formData);
    console.log(cartItems);
    setShowPayment(true);
  };

  return (
    <div>
      {showPayment ? (
        <PaymentSection
          userData={userData}
          finalPrice={finalPrice}
          formData={formData}
          cartItems={cartItems}
          navigate={navigate}
        />
      ) : (
        <BillFormComponent
          showPayment={handleShowPayment}
          cartItems={cartItems}
          userData={userData}
          finalPrice={finalPrice}
        />
      )}
    </div>
  );
}

function BillFormComponent({ showPayment, cartItems, userData, finalPrice }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    state: "",
    city: "",
    pinCode: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    // console.log(formData)
    showPayment(formData);
  };

  return (
    <Container className="p-0">
      <Card className="p-4 shadow-lg border-0" style={{ width: "100%" }}>
        <h2 className="mb-4 text-dark fw-bold">Billing Address</h2>
        <Form>
          <Row className="mb-3">
            <Col md={6}>
              <Form.Group>
                <Form.Label style={{ color: "#fabb18", fontWeight: "bold" }}>
                  First Name
                </Form.Label>
                <Form.Control
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Enter First Name"
                  style={{
                    border: "2px solid #fabb18",
                    fontSize: "12px",
                    color: "#333",
                  }}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label style={{ color: "#fabb18", fontWeight: "bold" }}>
                  Last Name
                </Form.Label>
                <Form.Control
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Enter Last Name"
                  style={{
                    border: "2px solid #fabb18",
                    fontSize: "12px",
                    color: "#333",
                  }}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={6}>
              <Form.Group>
                <Form.Label style={{ color: "#fabb18", fontWeight: "bold" }}>
                  Mobile No.
                </Form.Label>
                <Form.Control
                  type="text"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="Enter Mobile No."
                  style={{
                    border: "2px solid #fabb18",
                    fontSize: "12px",
                    color: "#333",
                  }}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label style={{ color: "#fabb18", fontWeight: "bold" }}>
                  State
                </Form.Label>
                <Form.Control
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  placeholder="Enter State Name"
                  style={{
                    border: "2px solid #fabb18",
                    fontSize: "12px",
                    color: "#333",
                  }}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={6}>
              <Form.Group>
                <Form.Label style={{ color: "#fabb18", fontWeight: "bold" }}>
                  City
                </Form.Label>
                <Form.Control
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Enter City Name"
                  style={{
                    border: "2px solid #fabb18",
                    fontSize: "12px",
                    color: "#333",
                  }}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label style={{ color: "#fabb18", fontWeight: "bold" }}>
                  Pin Code
                </Form.Label>
                <Form.Control
                  type="text"
                  name="pinCode"
                  value={formData.pinCode}
                  onChange={handleChange}
                  placeholder="Enter Pin Code"
                  style={{
                    border: "2px solid #fabb18",
                    fontSize: "12px",
                    color: "#333",
                  }}
                />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-4">
            <Form.Label style={{ color: "#fabb18", fontWeight: "bold" }}>
              Street Address
            </Form.Label>
            <Form.Control
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter Your Full Address"
              style={{
                border: "2px solid #fabb18",
                fontSize: "12px",
                color: "#333",
              }}
            />
          </Form.Group>

          <Button
            variant="primary"
            style={{
              backgroundColor: "#fabb18",
              borderColor: "#fabb18",
              fontSize: "16px",
              fontWeight: "bold",
            }}
            className="w-100"
            onClick={handleSubmit}
          >
            Continue
          </Button>
        </Form>
      </Card>
    </Container>
  );
}

const loadRazorpayScript = () => {
  return new Promise((resolve) => {
    if (window.Razorpay) {
      resolve(true);
      return;
    }
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

function PaymentSection({
  userData,
  finalPrice,
  formData,
  cartItems,
  navigate,
}) {
  const handlePayment = async (selectedMethod) => {
    try {
      console.log(selectedMethod);
      const scriptLoaded = await loadRazorpayScript();
      if (!scriptLoaded) {
        alert(
          "Failed to load Razorpay SDK. Please check your internet connection."
        );
        return;
      }

      const data = await axiosMain.post(
        "https://waaro.in/api/razorpay/create-order",
        { amount: finalPrice }
      );

      console.log("Order Created:", data);

      const options = {
        key: "rzp_test_n1tVJTQIyH4mNV", // Replace with your actual Razorpay Key ID
        amount: data.amount,
        currency: data.currency,
        order_id: data.id,
        name: "Data Shopper",
        description: "Test Transaction",
        handler: async (response) => {
          const verifyRes = await axiosMain.post(
            "https://waaro.in/api/razorpay/verify-payment",
            response
          );
          if (verifyRes.success) {
            // alert("Payment Successful!");

            // console.log(verifyRes);
            // console.log(`my Data: ${JSON.stringify(userData, null, 2)}`);
            // console.log(`formData: ${JSON.stringify(formData, null, 2)}`);
            // console.log(`cartItem: ${JSON.stringify(cartItems, null, 2)}`);

            const result = await createBill(
              cartItems,
              formData,
              userData,
              verifyRes,
              finalPrice
            );

            if (result?.success) {
              toast.success("Payment Successful!");
              navigate("/your-data");
              // alert("Bill created successfully!");
            } else {
              toast.success("Payment Successful!");
              alert("Failed to create bill");
            }
          } else {
            toast.error("Payment Failed!");
          }
        },
        prefill: {
          name: userData.name,
          email: userData.email,
          contact: userData.mobile,
        },
        theme: {
          color: "#3399cc",
        },
        method: {
          card: selectedMethod === "card",
          upi: selectedMethod === "upi",
          netbanking: selectedMethod === "netbanking",
        },
      };

      const rzp1 = new window.Razorpay(options);
      rzp1.open();
    } catch (error) {
      console.error("Payment Error:", error);
    }
  };

  return (
    <Container className="m-0 p-0 bg-transparent">
      {/* Billing Address Section */}
      <Card
        className="p-3 mb-3 shadow-sm border-0"
        style={{ backgroundColor: "#FFF", borderRadius: "12px" }}
      >
        <h5 className="fw-bold" style={{ color: "#fabb18" }}>
          Billing Address
        </h5>
        <p className="mb-0 fw-semibold text-dark">Dheera Tech.</p>
        <p className="text-dark mb-0" style={{ fontSize: "20px" }}>
          205, Iscon Elegance SG Hwy Service Rd, <br />
          Prahlad Nagar, Ahmedabad, Gujarat 380015
        </p>
      </Card>

      {/* Payment Section */}
      <Card
        className="p-3 shadow-sm border-0"
        style={{ backgroundColor: "#FFF", borderRadius: "12px" }}
      >
        <h5 className="fw-bold" style={{ color: "#fabb18" }}>
          Payment
        </h5>
        <p className="text-muted" style={{ fontSize: "14px" }}>
          Instant Payment
        </p>

        {/* Payment Options */}
        <div className="payment-options" style={{ fontSize: "25px" }}>
          {/* Card Payment */}
          <Row
            className="p-2 border rounded mb-2 align-items-center"
            style={{ borderColor: "#000000" }}
            onClick={() => {
              handlePayment("card");
            }}
          >
            <Col className="text-dark">Card</Col>
            <Col className="text-end">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Visa.svg/120px-Visa.svg.png"
                alt="Visa"
                width="40"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/100px-Mastercard-logo.svg.png"
                alt="Mastercard"
                width="40"
              />
            </Col>
          </Row>

          {/* UPI Payment */}
          <Row
            className="p-2 border rounded mb-2 align-items-center"
            style={{ borderColor: "#000000" }}
            onClick={() => {
              handlePayment("upi");
            }}
          >
            <Col className=" text-dark">UPI</Col>
            <Col className="text-end">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/UPI-Logo-vector.svg/2560px-UPI-Logo-vector.svg.png"
                alt="UPI"
                width="60"
              />
            </Col>
          </Row>

          {/* Net Banking */}
          <Row
            className="p-2 border rounded align-items-center"
            style={{ borderColor: "#D3C6FF" }}
            onClick={() => {
              handlePayment("netbanking");
            }}
          >
            <Col className="text-dark">Net Banking</Col>
            <Col className="text-end">
              <span className="text-muted fw-semibold">Net @ Banking</span>
            </Col>
          </Row>
        </div>
      </Card>
    </Container>
  );
}

const createBill = async (cartItems, formData, userData, verifyRes, amount) => {
  try {
    const response = await axiosMain.post(
      "https://waaro.in/api/create-bill",
      {
        cartItems,
        formData,
        userData,
        verifyRes,
        amount,
      }
    );

    console.log(response);
    return response;
  } catch (error) {
    console.error(
      "Error creating bill:",
      error.response?.data || error.message
    );
    return null;
  }
};

export default BillOrPaymentShow;
