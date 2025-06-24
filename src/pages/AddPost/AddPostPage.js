import { Bookmark, Heart } from "lucide-react";
import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  Image,
  Spinner,
} from "react-bootstrap";
import axiosMain from "../utils/axiosMain";
import { useNavigate } from "react-router-dom";

const AddPostPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

  // Fetch products from backend
  useEffect(() => {
    axiosMain
      .get("http://localhost:8000/api/get-all-product")
      .then((response) => {
        // Check if response.data is an array before setting state
        if (Array.isArray(response.data)) {
          setProducts(response.data);
        } else {
          console.error("Received data is not an array:", response.data);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);

  return (
    <Container fluid style={{ minHeight: "100vh", padding: "20px" }}>
      <Row className="g-4">
        {/* Left Side */}
        <Col sm={12} md={6}>
          <div
            style={{
              backgroundColor: "#f8f9fa",
              borderRadius: "10px",
              padding: "20px",
              height: "85vh",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Button
              style={{
                width: "100%",
                background: "black",
                color: "white",
                marginBottom: "15px",
              }}
              onClick={() => navigate("/product-listing")} //kanj
            >
              Add Product
            </Button>

            {/* Scrollable List */}
            <div style={{ flex: 1, overflowY: "auto" }}>
              {loading ? (
                <div className="d-flex justify-content-center">
                  <Spinner animation="border" />
                </div>
              ) : Array.isArray(products) && products.length > 0 ? (
                products.map((product) => (
                  <InstaPostCard
                    key={product._id}
                    user={product.createdBy?.name || "User"}
                    userAvatar=""
                    postImage={product.image}
                    likes={Math.floor(Math.random() * 1000)}
                  />
                ))
              ) : (
                <p>No products available</p>
              )}
            </div>
          </div>
        </Col>

        {/* Right Side */}
        <Col sm={12} md={6}>
          <div
            style={{
              backgroundColor: "#f8f9fa",
              borderRadius: "10px",
              padding: "20px",
              height: "85vh",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Button
              style={{
                width: "100%",
                background: "black",
                color: "white",
                marginBottom: "15px",
              }}
              onClick={() => navigate("/product-inquiry")} 
            >
              Product Listing Inquiry
            </Button>

            {/* Scrollable List */}
            <div style={{ flex: 1, overflowY: "auto" }}>
              {loading ? (
                <div className="d-flex justify-content-center">
                  <Spinner animation="border" />
                </div>
              ) : Array.isArray(products) && products.length > 0 ? (
                products.map((product) => (
                  <InstaPostCard
                    key={product._id}
                    user={product.createdBy?.name || "User"}
                    userAvatar=""
                    postImage={product.image}
                    likes={Math.floor(Math.random() * 1000)}
                  />
                ))
              ) : (
                <p>No products available</p>
              )}
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AddPostPage;

const InstaPostCard = ({ user, userAvatar, postImage, likes }) => {
  return (
    <Card className="mb-4 shadow-sm" style={{ borderRadius: "15px" }}>
      {/* User Info */}
      <Card.Header
        style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "#fff",
          borderBottom: "none",
        }}
      >
        <Image
          src={
            userAvatar ||
            "https://gravatar.com/avatar/1f82b0492a0a938288c2d5b70534a1fb?s=400&d=robohash&r=x"
          }
          roundedCircle
          style={{
            width: "40px",
            height: "40px",
            objectFit: "cover",
            marginRight: "10px",
          }}
        />
        <strong>{user}</strong>
      </Card.Header>

      {/* Post Image */}
      {postImage && (
        <Card.Img
          variant="top"
          src={postImage}
          style={{ maxHeight: "400px", objectFit: "cover" }}
        />
      )}

      {/* Likes and Caption */}
      <Card.Body style={{ backgroundColor: "#fff" }}>
        <div
          style={{
            fontWeight: "bold",
            marginBottom: "8px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div>
            <Heart strokeWidth={0.5} color="#000000" /> {likes}{" "}
            <Bookmark strokeWidth={0.5} />
          </div>
          <div>
            <Button
              className="bg-white border-white px-3 text-black"
              style={{ fontSize: "12px" }}
            >
              Connect
            </Button>
            <Button
              className="bg-warning border-black px-3 text-black"
              style={{ fontSize: "12px", marginLeft: "5px" }}
            >
              Boost
            </Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};
