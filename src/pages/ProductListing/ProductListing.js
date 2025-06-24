import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { Upload } from "lucide-react";
import axiosMain from "../utils/axiosMain";
import { toast } from "react-toastify"; // Import toast for notifications
import i from "../../asset/I img.png";

const ProductListing = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [product, setProduct] = useState({
    category: "",
    name: "",
    price: "",
    label: "",
    areaCode: "",
    city: "", 
    description: "",
    keywords: "",
    photo: null,
  });

  // Handle text inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  // Handle image selection
  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
      setProduct((prev) => ({ ...prev, photo: file })); // Save file in state
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const userDetail = JSON.parse(localStorage.getItem("userDetail")); // Get stored user data
    const userId = userDetail?.user?._id; // ✅ Correctly access user ID

    if (!userId) {
      toast.error("User ID not found! Plese log in again.");
      return;
    }

    const formData = new FormData();
    for (const key in product) {
      formData.append(key, product[key]);
    }

    // if (selectedImage) {
    //   formData.append("photo", product.photo);
    // }

    formData.append("createdBy", userId); // Attach user ID

    axiosMain
      .post("https://waaro.in/api/upload-product", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => {
        if (res.success) {
          toast.success(res.message);
        } else {
          toast.error(res.data.message);
        }
      })
      .catch((err) => {
        console.error("Error:", err);
        toast.error("Something went wrong!");
      });
  };

  return (
    <div className="bg-white px-2 py-4">
      <div className="mt-4 w-50 w-md-75 w-sm-100">
        <h3 className="mb-4 product-title">Product Listing</h3>
        <Form onSubmit={handleSubmit} className="d-grid gap-2">
          <Form.Group controlId="category" className="mb-3">
            <Form.Label>Product Category</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Product Category"
              name="category"
              className="border border-dark"
              value={product.category}
              onChange={handleChange}
            />
          </Form.Group>

          <Row className="gap-2">
            <Col>
              <Form.Group controlId="name" className="mb-3">
                <Form.Label>Product Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Product Name"
                  name="name"
                  value={product.name}
                  onChange={handleChange}
                  className="border border-dark"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="photo" className="mb-3">
                <Form.Label>Upload Product Photo</Form.Label>
                <div className="d-flex align-items-center">
                  <div
                    className="preview-box border border-dark me-2"
                    style={{ width: "20%", height: "40px" }}
                  >
                    {selectedImage && (
                      <img
                        src={selectedImage}
                        alt="Product preview"
                        className="preview-image"
                      />
                    )}
                  </div>
                  <label htmlFor="product-photo" className="upload-btn">
                    <Upload className="icon" />
                    <input
                      id="product-photo"
                      type="file"
                      accept="image/*"
                      className="file-input"
                      onChange={handleImageUpload}
                    />
                  </label>
                </div>
              </Form.Group>
            </Col>
          </Row>

          <Row className="gap-2">
            <Col>
              <Form.Group controlId="price" className="mb-3">
                <Form.Label>Product Price</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Price"
                  name="price"
                  value={product.price}
                  className="border border-dark"
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="label" className="mb-3">
                <Form.Label>Product Label</Form.Label>
                <Form.Select
                  name="label"
                  className="border border-dark"
                  value={product.label}
                  onChange={handleChange}
                >
                  <option>Unit</option>
                  <option>Kg</option>
                  <option>Piece</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

          <Row className="gap-2">
            <Col>
              <Form.Group controlId="areaCode" className="mb-3">
                <Form.Label>Area Code</Form.Label>
                <Form.Select
                  name="areaCode"
                  value={product.areaCode}
                  onChange={handleChange}
                  className="border border-dark"
                >
                  <option>Select Area Code</option>
                  <option>123</option>
                  <option>456</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="city" className="mb-3">
                <Form.Label>City</Form.Label>
                <Form.Select
                  name="city"
                  value={product.city}
                  className="border border-dark"
                  onChange={handleChange}
                >
                  <option>Select City</option>
                  <option>New York</option>
                  <option>Los Angeles</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

          <Form.Group controlId="description" className="mb-3">
            <Form.Label>Product Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter Description (Minimum 25 words)"
              name="description"
              className="border border-dark"
              value={product.description}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="keywords" className="mb-3">
            <Form.Label>Product Keywords</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              className="border border-dark"
              placeholder="Enter Keywords (Minimum 25 words)"
              name="keywords"
              value={product.keywords}
              onChange={handleChange}
            />
          </Form.Group>

          <Button variant="dark" type="submit" className="mt-3 w-100">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default ProductListing;
