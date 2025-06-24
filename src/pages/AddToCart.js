import {
  Avatar,
  Button as MUIButton,
  Card as MUICard,
  CardContent,
  Typography,
  Grid,
  Grid2,
} from "@mui/material";

import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

import { MdOutlineAddBox, MdOutlineRemove } from "react-icons/md";
import React, { useEffect, useState } from "react";
import "../asset/style.css";
import "./cart.css";
import { Sidebar } from "lucide-react";
import axiosMain from "./utils/axiosMain";
import { toast } from "react-toastify";
import BillOrPaymentShow from "./Billing/BillOrPaymentShow";

function AddToCart() {
  const [show, setShow] = useState(0); // Default to showing CartBox
  const [showButton, setShowButton] = useState(true); // Control Continue button visibility
  const [cards, setCards] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [userData, setUserData] = useState(null);
  const [finalPrice, setFinalPrice] = useState(null);

  // useEffect(()=> {},[])

  //  Array(12).fill({
  //   title: "Doctor & Hospital",
  //   subtitle: "Salon & Beauty Parlour",
  // });

  useEffect(() => {
    axiosMain
      .get("/cart/items")
      .then((res) => {
        if (res.success) {
          setCards(
            res.cartItems.map((ele) => {
              return { cartId: ele._id, ...ele.dataCategoryId };
            })
          );
          setCartItems(res.cartItems);
          setFinalPrice(
            res.cartItems
              .map((ele) => {
                return { cartId: ele._id, ...ele.dataCategoryId };
              })
              .map((ele) => ele.price || 0)
              .reduce((cur, aqq) => cur + aqq, 0)
          );
        }
      })
      .catch((err) => console.log(err));
  }, []);
  // Array(6).fill({
  //   title: "Doctor & Hospital",
  //   subtitle: "Salon & Beauty Parlour",
  // });

  return (
    <div className="dashboard">
      <Container fluid>
        <Row className="cartMainContainer">
          {/* CartBox or BillFormComponent - Adjusted for Grid */}
          <Col md={7}>
            {show === 1 ? (
              <BillOrPaymentShow
                cartItems={cartItems}
                userData={userData}
                finalPrice={finalPrice}
              />
            ) : (
              <CartBox
                dummyData={cards}
                cartItems={cards}
                setCartItems={setCards}
              />
            )}
          </Col>

          {/* Cart Total Section - Always Visible */}
          <Col md={5}>
            <div className="cartTotalContainer">
              <div className="totalHead subtotal ">
                <h3>Subtotal</h3>
                <div className="d-flex justify-content-end">
                  {/* <span>
                    ₹
                    {cards
                      .map((ele) => ele.price)
                      ?.reduce((cur, aqq) => (cur += aqq), 0)}
                  </span> */}
                  <h4 className="">
                    ₹
                    {cards
                      .map((ele) => ele.price)
                      ?.reduce((cur, aqq) => (cur += aqq), 0)}
                  </h4>
                </div>
              </div>
              {/* <div className="discountClass">
                <h3>Plan Discount -49.8%</h3>
                <div className="discount">
                  <span>-$600.00</span>
                </div>
              </div> */}
              <div className="coupon">
                <span>Have a Coupon Code?</span>
                <input type="text" placeholder="Enter code" />
              </div>

              {/* Hide only the Continue button when clicked */}
              {showButton ? (
                <div
                  className="continue-btn"
                  onClick={() => {
                    setShow(1); // Show BillFormComponent
                    setShowButton(false); // Hide the button
                    setUserData(
                      JSON.parse(localStorage.getItem("userDetail"))?.user
                    );
                  }}
                >
                  Continue
                </div>
              ) : (
                <div className="d-flex mt-10 justify-content-between align-items-center">
                  <h5 className="m-0">Total Pay</h5>
                  <span className="fw-bold" style={{ color: "#fabb18" }}>
                    ₹
                    {cards
                      .map((ele) => ele.price)
                      ?.reduce((cur, aqq) => (cur += aqq), 0)}
                  </span>
                </div>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
function CartBox({ dummyData, cartItems, setCartItems }) {
  // Initialize with an empty array, and update when dummyData changes.

  useEffect(() => {
    if (dummyData && dummyData.length) {
      setCartItems(dummyData);
    }
  }, [dummyData]);

  async function removeItem(item) {
    try {
      const response = await axiosMain.delete(
        `https://waaro.in/api/cart/remove/${item.cartId}`
      );
      if (response.success) {
        // Update the state by filtering out the removed item
        setCartItems((prevItems) =>
          prevItems.filter((cartItem) => cartItem.cartId !== item.cartId)
        );
      }
    } catch (error) {
      console.error("Error removing item:", error);
    }
  }

  // If no items have loaded yet, show a loading indicator.
  if (cartItems.length === 0) {
    return <div>Loading your cart...</div>;
  }

  return (
    <div className="cartListContainer">
      <h3>Your Cart</h3>
      <Grid container spacing={2} justifyContent="center">
        {cartItems.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} lg={4} xl={4} key={index}>
            <MUICard
              style={{
                backgroundColor: "#000000",
                borderRadius: "15px",
                overflow: "hidden",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                textAlign: "center",
                border: "5px solid #000",
              }}
            >
              {/* Card Header */}
              <div
                style={{
                  backgroundColor: "#000",
                  height: "120px",
                  backgroundImage: `url(${card.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
              {/* Card Body */}
              <CardContent
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "0px",
                  // background: "#000",
                  padding: "12px",
                  color: "#ffffff",
                  flex: 1,
                }}
              >
                <Typography
                  variant="h6"
                  style={{ fontWeight: "bold" }}
                  className="card-text"
                >
                  {card.title}
                  <br />
                  {card.description}
                </Typography>

                <hr
                  style={{
                    width: "100%",
                    border: "none",
                    borderTop: "1px solid #ffffff",
                  }}
                />

                <Button
                  variant="text"
                  style={{
                    color: "#FABB18",
                    display: "flex",
                    alignItems: "center",
                    fontWeight: "bold",
                  }}
                  onClick={() => removeItem(card)}
                >
                  {/* <MdOutlineRemove
                    style={{
                      marginRight: "8px",
                      fontSize: "18px",
                      color: "#fff",
                    }}
                  />{" "} */}
                  Remove
                </Button>
              </CardContent>
            </MUICard>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default AddToCart;
