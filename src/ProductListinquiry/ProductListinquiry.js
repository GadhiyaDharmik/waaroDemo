import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { Info, Upload } from "lucide-react";
import i from "../asset/I img.png";
import axiosMain from "../pages/utils/axiosMain";
import { toast } from "react-toastify";

const ProductListingInquiry = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // const handleImageUpload = (e) => {
  //     const file = e.target.files?.[0];
  //     if (file) {
  //         const imageUrl = URL.createObjectURL(file);
  //         setSelectedImage(imageUrl);
  //     }
  // };
  const [product, setProduct] = useState({
    name: "",
    areaCode: "",
    city: "",
    description: "",
    photo: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl); // For preview
      setProduct({ ...product, photo: file }); // Store file in product state
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

    // console.log(formData, userId, product)

    axiosMain
      .post("https://waaro.in/api/upload-product-inquiry", formData, {
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
          <Row className="gap-2">
            <Col>
              <Form.Group controlId="name" className="mb-3">
                <div className="d-flex align-items-center mb-2">
                  <Form.Label className="title mb-0">Product Name</Form.Label>
                  <img
                    src={i}
                    alt="icon"
                    className="ms-2"
                    style={{ width: "20px", height: "20px" }}
                  />
                </div>{" "}
                <Form.Control
                  type="text"
                  placeholder="Enter Your Product Name"
                  name="name"
                  value={product.name}
                  onChange={handleChange}
                  className="border border-dark"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="photo" className="mb-3">
                <div className="d-flex align-items-center mb-2">
                  <Form.Label className="title mb-0">
                    Upload Product Photo
                  </Form.Label>
                  <img
                    src={i}
                    alt="icon"
                    className="ms-2"
                    style={{ width: "20px", height: "20px" }}
                  />
                </div>{" "}
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
                    <div className="upload-icon">
                      <Upload className="icon" />
                    </div>
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
              <Form.Group controlId="areaCode" className="mb-3">
                <div className="d-flex align-items-center mb-2">
                  <Form.Label className="title mb-0">Area Code</Form.Label>
                  <img
                    src={i}
                    alt="icon"
                    className="ms-2"
                    style={{ width: "20px", height: "20px" }}
                  />
                </div>{" "}
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
                {/* Label and Image */}
                <div className="d-flex align-items-center mb-2">
                  <Form.Label className="title mb-0">City</Form.Label>
                  <img
                    src={i}
                    alt="icon"
                    className="ms-2"
                    style={{ width: "20px", height: "20px" }}
                  />
                </div>

                {/* Dropdown Input */}
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
            <div className="d-flex align-items-center mb-2">
              <Form.Label className="title mb-0">
                Product Description
              </Form.Label>
              <img
                src={i}
                alt="icon"
                className="ms-2"
                style={{ width: "20px", height: "20px" }}
              />
            </div>{" "}
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter Description"
              name="description"
              className="border border-dark"
              value={product.description}
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

export default ProductListingInquiry;
