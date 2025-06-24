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

import { Button } from "react-bootstrap"; // For React Bootstrap Buttons
import { MdOutlineAddBox } from "react-icons/md";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Navigate, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axiosMain from "./utils/axiosMain";
import { toast } from "react-toastify";

import { useCart } from "../components/CartContext";

function AllCategory() {
  const navigate = useNavigate();
  // Sample data for cards
  const [cards, setCards] = useState([]);
  //  Array(12).fill({
  //   title: "Doctor & Hospital",
  //   subtitle: "Salon & Beauty Parlour",
  // });

  const { addToCart } = useCart(); // Get addToCart function

  useEffect(() => {
    axiosMain
      .get("/data-category")
      .then((res) => {
        if (res.success) {
          setCards(res.dataCategories);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="min-h-screen bg-[#F3F2FF] flex">
      {/* Main Content */}
      <main>
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
                placeholder="Search Category"
                fullWidth
                sx={{
                  color: "#000",
                  fontSize: "1rem",
                  padding: "4px 8px 5px",
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className="text-end">
            <MUIButton
              variant="contained"
              startIcon={<ShoppingCartIcon />}
              sx={{
                backgroundColor: "#000",
                color: "white",
                borderRadius: "15px",
                textTransform: "none",
                fontSize: "1rem",
                padding: "1rem 2.5rem",
                "&:hover": {
                  backgroundColor: "#000",
                },
              }}
              onClick={() => navigate("/cart")}
            >
              Cart
            </MUIButton>
          </Grid>
        </Grid>

        {/* </div> */}

        <Grid container spacing={2}>
          {cards.map((card, index) => (
            <Grid item xs={12} sm={6} md={3} lg={3} xl={2} key={index}>
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
                    background: "#000",
                    padding: "14px",
                    color: "#ffffff",
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
                    onClick={() => {
                      const userData = JSON.parse(
                        localStorage.getItem("userDetail")
                      );

                      if (!userData || !userData.user._id) {
                        console.error("User not found in localStorage");
                        return;
                      }

                      const userId = userData.user._id; // Extract userId

                      axiosMain
                        .post(
                          "/cart/add",
                          {
                            categoryId: card._id,
                            userId,
                          }
                          // { headers: { Authorization: `Bearer ${token}` } }
                        )
                        .then((res) => {
                          if (res.success) {
                            toast.success(res.message);

                            addToCart(userId, card._id);
                          } else {
                            toast.error(res.message);
                          }
                        })
                        .catch((err) => console.log(err));
                    }}
                  >
                    <MdOutlineAddBox
                      style={{
                        marginRight: "8px",
                        fontSize: "18px",
                        color: "#FABB18",
                      }}
                    />{" "}
                    Add to Cart
                  </Button>
                </CardContent>
              </MUICard>
            </Grid>
          ))}
        </Grid>
      </main>
    </div>
  );
}

export default AllCategory;
