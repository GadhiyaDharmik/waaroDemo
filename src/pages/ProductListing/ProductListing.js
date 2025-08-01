import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import {
  ChevronDown,
  Heart,
  MoreHorizontal,
  Plus,
  PlusCircle,
  Upload,
} from "lucide-react";
import axiosMain from "../utils/axiosMain";
import { toast } from "react-toastify"; // Import toast for notifications
import ellipse from "../../asset/Product/Ellipse 2.png";
import rectangle1 from "../../asset/Product/Rectangle1.png";
import rectangle2 from "../../asset/Product/Rectangle2.png";
import rectangle3 from "../../asset/Product/Rectangle3.png";
import rectangle4 from "../../asset/Product/Rectangle4.png";
import rectangle5 from "../../asset/Product/Rectangle5.png";
import rectangle6 from "../../asset/Product/Rectangle6.png";
import rectangle7 from "../../asset/Product/Rectangle7.png";
import rectangle8 from "../../asset/Product/Rectangle8.png";
import user from "../../asset/user.png";
import book from "../../asset/book.png";
import shoes from "../../asset/shoes.png";
import teddy from "../../asset/teddy.png";
import train from "../../asset/train.png";
import { Avatar } from "@mui/material";
import save from "../../asset/SVG/save.svg";

const ProductListing = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [producttoggle, setProductToggle] = useState(false);
  const [posttoggle, setPostToggle] = useState(false);
  const [boostToggle, setBoostToggle] = useState(false);
  const [modalName, setModalName] = useState("");
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
  const categoryCards = [
    {
      id: 1,
      username: "Candle",
      userImage: user,
      mainImage: shoes,
      likes: 45,
      description:
        "Whenever it contains whatever it that ends up an interference it drags the formation whatever it drags the formation",
      imageAlt: "Yellow sneakers",
    },
    {
      id: 2,
      username: "Candle",
      userImage: user,
      mainImage: book,
      likes: 32,
      description:
        "Whenever it contains whatever it that ends up an interference it drags the formation whatever it drags the formation",
      imageAlt: "Notebook with pens",
    },
    {
      id: 3,
      username: "Candle",
      userImage: user,
      mainImage: train,
      likes: 67,
      description:
        "Whenever it contains whatever it that ends up an interference it drags the formation whatever it drags the formation",
      imageAlt: "Teddy bear",
    },
    {
      id: 4,
      username: "Candle",
      userImage: user,
      mainImage: teddy,
      likes: 89,
      description:
        "Whenever it contains whatever it that ends up an interference it drags the formation whatever it drags the formation",
      imageAlt: "Colorful toys",
    },
  ];

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

  const posts = [
    {
      id: 1,
      name: "Camila",
      location: "Mexico City, Mexico",
      image: rectangle1,
      icon: ellipse,
    },
    {
      id: 2,
      name: "Camila",
      location: "Mexico City, Mexico",
      image: rectangle2,
      icon: ellipse,
    },
    {
      id: 3,
      name: "Camila",
      location: "Mexico City, Mexico",
      image: rectangle3,
      icon: ellipse,
    },
    {
      id: 4,
      name: "Camila",
      location: "Mexico City, Mexico",
      image: rectangle4,
      icon: ellipse,
    },
    {
      id: 5,
      name: "Camila",
      location: "Mexico City, Mexico",
      image: rectangle5,
      icon: ellipse,
    },
    {
      id: 6,
      name: "Camila",
      location: "Mexico City, Mexico",
      image: rectangle6,
      icon: ellipse,
    },
    {
      id: 7,
      name: "Camila",
      location: "Mexico City, Mexico",
      image: rectangle7,
      icon: ellipse,
    },
    {
      id: 8,
      name: "Camila",
      location: "Mexico City, Mexico",
      image: rectangle8,
      icon: ellipse,
    },
  ];

  return (
    // <div className="bg-white px-2 py-4">
    //   <div className="mt-4 w-50 w-md-75 w-sm-100">
    //     <h3 className="mb-4 product-title">Product Listing</h3>
    //     <Form onSubmit={handleSubmit} className="d-grid gap-2">
    //       <Form.Group controlId="category" className="mb-3">
    //         <Form.Label>Product Category</Form.Label>
    //         <Form.Control
    //           type="text"
    //           placeholder="Enter Product Category"
    //           name="category"
    //           className="border border-dark"
    //           value={product.category}
    //           onChange={handleChange}
    //         />
    //       </Form.Group>

    //       <Row className="gap-2">
    //         <Col>
    //           <Form.Group controlId="name" className="mb-3">
    //             <Form.Label>Product Name</Form.Label>
    //             <Form.Control
    //               type="text"
    //               placeholder="Enter Product Name"
    //               name="name"
    //               value={product.name}
    //               onChange={handleChange}
    //               className="border border-dark"
    //             />
    //           </Form.Group>
    //         </Col>
    //         <Col>
    //           <Form.Group controlId="photo" className="mb-3">
    //             <Form.Label>Upload Product Photo</Form.Label>
    //             <div className="d-flex align-items-center">
    //               <div
    //                 className="preview-box border border-dark me-2"
    //                 style={{ width: "20%", height: "40px" }}
    //               >
    //                 {selectedImage && (
    //                   <img
    //                     src={selectedImage}
    //                     alt="Product preview"
    //                     className="preview-image"
    //                   />
    //                 )}
    //               </div>
    //               <label htmlFor="product-photo" className="upload-btn">
    //                 <Upload className="icon" />
    //                 <input
    //                   id="product-photo"
    //                   type="file"
    //                   accept="image/*"
    //                   className="file-input"
    //                   onChange={handleImageUpload}
    //                 />
    //               </label>
    //             </div>
    //           </Form.Group>
    //         </Col>
    //       </Row>

    //       <Row className="gap-2">
    //         <Col>
    //           <Form.Group controlId="price" className="mb-3">
    //             <Form.Label>Product Price</Form.Label>
    //             <Form.Control
    //               type="text"
    //               placeholder="Enter Price"
    //               name="price"
    //               value={product.price}
    //               className="border border-dark"
    //               onChange={handleChange}
    //             />
    //           </Form.Group>
    //         </Col>
    //         <Col>
    //           <Form.Group controlId="label" className="mb-3">
    //             <Form.Label>Product Label</Form.Label>
    //             <Form.Select
    //               name="label"
    //               className="border border-dark"
    //               value={product.label}
    //               onChange={handleChange}
    //             >
    //               <option>Unit</option>
    //               <option>Kg</option>
    //               <option>Piece</option>
    //             </Form.Select>
    //           </Form.Group>
    //         </Col>
    //       </Row>

    //       <Row className="gap-2">
    //         <Col>
    //           <Form.Group controlId="areaCode" className="mb-3">
    //             <Form.Label>Area Code</Form.Label>
    //             <Form.Select
    //               name="areaCode"
    //               value={product.areaCode}
    //               onChange={handleChange}
    //               className="border border-dark"
    //             >
    //               <option>Select Area Code</option>
    //               <option>123</option>
    //               <option>456</option>
    //             </Form.Select>
    //           </Form.Group>
    //         </Col>
    //         <Col>
    //           <Form.Group controlId="city" className="mb-3">
    //             <Form.Label>City</Form.Label>
    //             <Form.Select
    //               name="city"
    //               value={product.city}
    //               className="border border-dark"
    //               onChange={handleChange}
    //             >
    //               <option>Select City</option>
    //               <option>New York</option>
    //               <option>Los Angeles</option>
    //             </Form.Select>
    //           </Form.Group>
    //         </Col>
    //       </Row>

    //       <Form.Group controlId="description" className="mb-3">
    //         <Form.Label>Product Description</Form.Label>
    //         <Form.Control
    //           as="textarea"
    //           rows={3}
    //           placeholder="Enter Description (Minimum 25 words)"
    //           name="description"
    //           className="border border-dark"
    //           value={product.description}
    //           onChange={handleChange}
    //         />
    //       </Form.Group>

    //       <Form.Group controlId="keywords" className="mb-3">
    //         <Form.Label>Product Keywords</Form.Label>
    //         <Form.Control
    //           as="textarea"
    //           rows={3}
    //           className="border border-dark"
    //           placeholder="Enter Keywords (Minimum 25 words)"
    //           name="keywords"
    //           value={product.keywords}
    //           onChange={handleChange}
    //         />
    //       </Form.Group>

    //       <Button variant="dark" type="submit" className="mt-3 w-100">
    //         Submit
    //       </Button>
    //     </Form>
    //   </div>
    // </div>
    <>
      <div className="container mx-auto  grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-3">
          <div className="w-full">
            {producttoggle === false ? (
              <UploadCard
                label="Upload Products"
                setProductToggle={setProductToggle}
              />
            ) : (
              <Product handleClose={setProductToggle} />
            )}
          </div>
        </div>

        <div className="col-span-12 md:col-span-3">
          <div className="w-full">
            {posttoggle === false ? (
              <UploadCard
                label="Upload Post"
                setProductToggle={setPostToggle}
              />
            ) : (
              <UploadPosts
                handleClose={setPostToggle}
                modalName={modalName}
                setModalName={setModalName}
              />
            )}
          </div>
        </div>

        <div className="col-span-12 md:col-span-6">
          {/* White background container box */}
          {!boostToggle ? (
            <div className="bg-white p-4 rounded-xl shadow-md ">
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 max-w-[500px] mx-auto">
                {categoryCards.map((card) => (
                  <div
                    key={card.id}
                    className="bg-white rounded-xl shadow hover:shadow-md transition duration-200 w-[230px]"
                  >
                    {/* Header */}
                    <div className="flex justify-between items-center p-2">
                      <div className="flex items-center">
                        <div className="relative w-10 h-10">
                          <Avatar
                            alt={card.username}
                            src={card.userImage}
                            sx={{
                              width: 30,
                              height: 30,
                              position: "absolute",
                              top: 0,
                              left: 0,
                              zIndex: 1,
                            }}
                          />
                          <Avatar
                            alt={card.username}
                            src={card.userImage}
                            sx={{
                              width: 25,
                              height: 25,
                              position: "absolute",
                              top: -5,
                              left: 20,
                              border: "2px solid white",
                            }}
                          />
                        </div>
                        <div className="ml-3">
                          <p className="text-sm font-semibold mb-0">
                            {card.username}
                          </p>
                          <p className="text-xs text-gray-500 mb-0 text-[9px]">
                            Mexico City, Mexico
                          </p>
                        </div>
                      </div>

                      <button className="text-gray-500 hover:text-black">
                        <MoreHorizontal size={20} />
                      </button>
                    </div>

                    {/* Image */}
                    <img
                      src={card.mainImage}
                      alt={card.imageAlt}
                      className="w-full h-45 object-scale-down"
                      style={{ borderRadius: "15px" }}
                    />

                    {/* Body */}
                    <div className="flex items-center justify-between px-2 mb-2">
                      <button className="flex items-center px-2 py-1 rounded-full bg-gray-200 text-[10px]">
                        <Heart size={12} className="text-gray-700" />
                        <span className="ml-1">5.44k</span>
                      </button>

                      <div className="flex items-center gap-1">
                        <button className="p-1 rounded bg-gray-100">
                          <img
                            src={save}
                            alt="Bookmark"
                            className="w-[12px] h-[12px]"
                          />
                        </button>
                        <button
                          className="px-1.5 py-[2px] rounded text-black text-[10px]"
                          style={{
                            fontFamily: "Poppins, sans-serif",
                            lineHeight: "normal",
                          }}
                        >
                          Connect
                        </button>
                        <button
                          className="px-1.5 py-[2px] rounded bg-yellow-500 text-black text-[10px]"
                          style={{
                            fontFamily: "Poppins, sans-serif",
                            lineHeight: "normal",
                          }}
                          onClick={() => {
                            setBoostToggle(true);
                            setModalName("Modal1");
                          }}
                        >
                          Boost
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <UploadPosts
              handleClose={setPostToggle}
              modalName={modalName}
              setModalName={setModalName}
            />
          )}
        </div>
      </div>
    </>
  );
};
function UploadCard({ label, setProductToggle }) {
  return (
    <div
      onClick={() => setProductToggle(true)}
      className="bg-white w-full h-60 rounded-xl border flex flex-col justify-center items-center shadow hover:shadow-md cursor-pointer transition"
    >
      <div className="flex items-center justify-center w-[60px] h-[60px] rounded-lg bg-yellow-400 border border-black">
        <span className="text-black text-4xl font-medium leading-none">+</span>
      </div>

      <p className="mt-3 font-medium text-gray-700">{label}</p>
    </div>
  );
}

const UploadPosts = ({ handleClose, modalName, setModalName }) => {
  const [selectedImagePost, setSelectedImagePost] = useState(null);
  const [isEnabled, setIsEnabled] = useState(false);
  const [post, setPost] = useState({
    // category: "",
    // subCategory: "",
    // name: "",
    // price: "",
    // label: "",
    // city: "",
    // areaCode: "",
    // state: "",
    description: "",
    keywords: "",
  });

  const [website, setWebsite] = useState("");
  const [selectedAction, setSelectedAction] = useState("Learn More");
  const [selectedActionMsg, setSelectedActionMsg] = useState("Sent Massgage");

  const [dailyBudget, setDailyBudget] = useState(149);
  const [duration, setDuration] = useState(6);
  const [budgetType, setBudgetType] = useState("unlimited");

  const totalBudget = dailyBudget * duration;
  const estimatedReach = `${Math.floor(dailyBudget * 11.4)}-${Math.floor(
    dailyBudget * 30.9
  )}`;

  const actionButtons = [
    "Learn More",
    "shop now",
    "watch more",
    "Contact us",
    "Book now",
    "Sign up",
  ];
  const actionButtonsMsg = [
    "Sent Massgage",
    "Contact us",
    "Learn More",
    "Book Now",
  ];

  const postImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImagePost(file);
    }
  };
  const posthandleChange = (e) => {
    const { name, value } = e.target;
    setPost((prev) => ({ ...prev, [name]: value }));
  };

  const posthandleSubmit = async (e) => {
    e.preventDefault();
    // axiosMain.post("api/create-post",)

    try {
      const userDetail = JSON.parse(localStorage.getItem("userDetail"));
      const userId = userDetail?.user?._id;

      let imageUrl = "";

      if (!selectedImagePost) {
        console.warn("No image selected. Product creation aborted.");
        return;
      }

      // 1️⃣ Upload image first if selectedImage is a File
      if (selectedImagePost && selectedImagePost instanceof File) {
        const formData = new FormData();
        formData.append("file", selectedImagePost);

        const uploadRes = await axiosMain.post("/upload", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        console.log(uploadRes, "uploadRes");

        if (uploadRes?.success) {
          imageUrl = uploadRes?.fileUrl;
        } else {
          throw new Error("Image upload failed");
        }
      }
      debugger;
      // 2️⃣ Then create product
      const payload = {
        ...post,
        // price: Number(product.price),
        userId: userId,
        image: imageUrl,
      };
      console.log(payload, "payload");

      const res = await axiosMain.post("/create-post", payload);
      console.log("Product created:", res.data);

      // Optional: success message or reset form here
    } catch (err) {
      console.error("Error creating product:", err);
    }
  };

  return (
    <div className="max-w-sm mx-auto bg-white p-4 rounded-md shadow font-poppins">
      <form className="space-y-4" onSubmit={posthandleSubmit}>
        {modalName === "" && (
          <>
            {" "}
            <h2 className="text-lg font-semibold">Upload Post</h2>
            {/* Upload Photo */}
            <div>
              <div className="flex items-center gap-2">
                {/* Label */}
                <label className="text-xs font-semibold min-w-[100px]">
                  Upload Product Photo
                </label>

                {/* Image + Upload Button */}
                <div className="flex items-center gap-2">
                  {/* Image Preview */}
                  <div className="w-10 h-10 overflow-hidden rounded-lg border border-gray-300">
                    {selectedImagePost ? (
                      <img
                        src={
                          typeof selectedImage === "string"
                            ? selectedImagePost
                            : URL.createObjectURL(selectedImagePost)
                        }
                        alt="preview"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-[#FAFAFA]" />
                    )}
                  </div>

                  {/* Upload Button */}
                  <label
                    htmlFor="upload"
                    className="w-10 h-10 bg-black rounded-lg flex items-center justify-center cursor-pointer"
                  >
                    <Upload size={20} color="white" />
                    <input
                      type="file"
                      id="upload"
                      accept="image/*"
                      className="hidden"
                      onChange={postImageUpload}
                    />
                  </label>
                </div>
              </div>
              {/* Description */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Product Description
                </label>
                <textarea
                  name="description"
                  rows={2}
                  placeholder="Enter Description"
                  value={post.description}
                  onChange={posthandleChange}
                  className="w-full bg-white border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-black"
                ></textarea>
              </div>

              {/* Keywords */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Product Key Wards
                </label>
                <textarea
                  name="keywords"
                  rows={2}
                  placeholder="Enter Key wards"
                  value={post.keywords}
                  onChange={posthandleChange}
                  className="w-full bg-white border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-black"
                ></textarea>
              </div>
            </div>
            {/* Submit */}
            <button
              type="submit"
              className="btn btn-dark w-full rounded-md font-medium  transition"
            >
              Submit
            </button>
            {/* <button
              type="button"
              className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-md font-medium"
              onClick={() => handleClose(false)}
            >
              Close
            </button> */}
          </>
        )}
      </form>
      <form>
        {modalName === "Modal1" && (
          <>
            <div className="bg-white rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">
                What do you want people to do when they see your ad?
              </h2>

              <div className="space-y-4">
                <label className="flex items-center">
                  <span className="text-sm">
                    <span className="text-heading">Visit Your Profile</span>
                    <br />
                    <span className="text-description">
                      Best for Brand awareness and connect @wazaro_official
                    </span>
                  </span>

                  <input
                    type="radio"
                    name="action"
                    className="mr-2 accent-black"
                  />
                </label>

                <label className="flex items-center">
                  <span className="text-sm">
                    <span className="text-heading">Visit Your Profile</span>
                    <br />
                    <span className="text-description">
                      Best for online sales, booking and helping people learn
                      more about you
                    </span>
                  </span>
                  <input
                    type="radio"
                    name="action"
                    className="mr-2 accent-black "
                  />
                </label>

                <label className="flex items-center">
                  <span className="text-sm">
                    <span className="text-heading"> Message you</span>
                    <br />
                    <span className="text-description">
                      Best connecting with more people in wazaro to drive sales
                    </span>
                  </span>
                  <input
                    type="radio"
                    name="action"
                    className="mr-2 accent-black"
                  />
                </label>
              </div>
            </div>
            <button
              type="button"
              className="btn btn-dark w-full bg-black  text-white rounded-md font-medium"
              onClick={() => setModalName("Modal2")}
            >
              Submit
            </button>
          </>
        )}

        {modalName === "Modal2" && (
          <>
            <div className="bg-white rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4 text-center">N/A</h2>
              <p className="text-sm text-gray-500 mb-4 text-center">
                Estimated audience size
              </p>

              <div className="space-y-6">
                <label className="flex items-center justify-between cursor-pointer">
                  <span className="text-sm mr-3">
                    <span className="text-heading fs-8">
                      Use advantage+ audience
                    </span>
                    <br />
                    Automatically finds and updates audience whenever it's
                    likely to improve performance
                  </span>
                  <div className="relative">
                    <div
                      className={`block w-14 h-8 rounded-full transition-colors duration-200 ease-in-out ${
                        isEnabled ? "bg-blue-600" : "bg-gray-300"
                      }`}
                    >
                      <div
                        className={`absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform duration-200 ease-in-out ${
                          isEnabled ? "transform translate-x-6" : ""
                        }`}
                      ></div>
                    </div>
                    <input
                      type="checkbox"
                      className="sr-only"
                      checked={isEnabled}
                      onChange={(e) => setIsEnabled(e.target.checked)}
                    />
                  </div>
                </label>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1 text-heading">
                    Campaign name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter campaign"
                    className="w-full p-2 border rounded-lg text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1 text-heading">
                    Locations
                  </label>
                  <select className="w-full p-2 border rounded-lg text-sm text-gray-500">
                    <option>Gujarat, Rajasthan, Maharashtra</option>
                  </select>
                </div>

                <button
                  type="button"
                  className="btn btn-dark w-full bg-black text-white rounded-lg font-medium mt-4"
                  onClick={() => setModalName("Modal3")}
                >
                  Submit
                </button>
              </div>
            </div>
          </>
        )}

        {modalName === "Modal3" && (
          <>
            <div className="max-w-md mx-auto bg-white p-6 m-4">
              <div className="text-center mb-6">
                <h1 className="text-xl font-semibold text-gray-900 mb-2">
                  Website Goal setup
                </h1>
                <p className="text-gray-600 text-sm">Add url & action button</p>
              </div>

              <div className="mb-6">
                <input
                  type="text"
                  placeholder="Website"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent text-gray-700 placeholder-gray-400"
                />
              </div>

              <div className="mb-8">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  Action button
                </h2>
                <div className="space-y-3">
                  {actionButtons.map((action) => (
                    <label
                      key={action}
                      className="flex items-center justify-between cursor-pointer"
                    >
                      <span className="text-gray-700 text-sm">{action}</span>
                      <div className="relative">
                        <input
                          type="radio"
                          name="action"
                          value={action}
                          checked={selectedAction === action}
                          onChange={(e) => setSelectedAction(e.target.value)}
                          className="sr-only"
                        />
                        <div
                          className={`w-5 h-5 rounded-full border-2 transition-all duration-200 ${
                            selectedAction === action
                              ? "border-black bg-black"
                              : "border-gray-400 bg-white"
                          }`}
                        >
                          {selectedAction === action && (
                            <div className="w-2 h-2 bg-white rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                          )}
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-dark w-full bg-black text-white rounded-md font-medium"
                typeof="button"
                onClick={() => setModalName("Modal4")}
              >
                Submit
              </button>
            </div>
          </>
        )}

        {modalName === "Modal4" && (
          <>
            <div className="max-w-md mx-auto bg-white  p-6 m-4">
              <div className="text-center mb-6">
                <h1 className="text-xl font-semibold text-gray-900 mb-2">
                  Message
                </h1>
                <p className="text-gray-600 text-sm">
                  Select app & Call to Action
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  Action button
                </h2>
                <div className="space-y-3">
                  {actionButtonsMsg.map((action) => (
                    <label
                      key={action}
                      className="flex items-center justify-between cursor-pointer"
                    >
                      <span className="text-gray-700 text-sm">{action}</span>
                      <div className="relative">
                        <input
                          type="radio"
                          name="action"
                          value={action}
                          checked={selectedActionMsg === action}
                          onChange={(e) => setSelectedActionMsg(e.target.value)}
                          className="sr-only"
                        />
                        <div
                          className={`w-5 h-5 rounded-full border-2 transition-all duration-200 ${
                            selectedActionMsg === action
                              ? "border-black bg-black"
                              : "border-gray-400 bg-white"
                          }`}
                        >
                          {selectedActionMsg === action && (
                            <div className="w-2 h-2 bg-white rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                          )}
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
              <button
                type="button"
                className="btn btn-dark w-full bg-black text-white rounded-md font-medium"
                onClick={() => setModalName("Modal5")}
              >
                Submit
              </button>
            </div>
          </>
        )}

        {modalName === "Modal5" && (
          <>
            <div className="max-w-md mx-auto bg-white rounded-2xl p-6 m-4">
              <div className="text-center mb-6">
                <h1 className="text-xl font-semibold text-gray-900 mb-2">
                  What's your ad budget
                </h1>
                <p className="text-gray-600 text-sm">Estimated audience size</p>
              </div>

              {/* Daily Budget Section */}
              <div className="mb-8">
                <h2 className="text-lg font-semibold text-gray-900 mb-2">
                  Daily budget
                </h2>
                <p className="text-gray-700 mb-4">₹{dailyBudget} daily</p>
                <div className="relative">
                  <input
                    type="range"
                    min="50"
                    max="1000"
                    value={dailyBudget}
                    onChange={(e) => setDailyBudget(Number(e.target.value))}
                    className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer slider"
                    id="budget-slider"
                  />
                </div>
              </div>

              {/* Duration Options */}
              <div className="mb-6">
                <label className="flex items-center justify-between cursor-pointer mb-4">
                  <div>
                    <h3 className="text-base font-semibold text-gray-900">
                      Run this ad until you pause it
                    </h3>
                    <p className="text-sm text-gray-600">
                      let your ad run for as long as you'd like. you can pause
                      any time in ad tools
                    </p>
                  </div>
                  <div className="relative ml-4">
                    <input
                      type="radio"
                      name="duration"
                      value="unlimited"
                      checked={budgetType === "unlimited"}
                      onChange={(e) => setBudgetType(e.target.value)}
                      className="sr-only"
                    />
                    <div
                      className={`w-5 h-5 rounded-full border-2 transition-all duration-200 ${
                        budgetType === "unlimited"
                          ? "border-black bg-black"
                          : "border-gray-400 bg-white"
                      }`}
                    >
                      {budgetType === "unlimited" && (
                        <div className="w-2 h-2 bg-white rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                      )}
                    </div>
                  </div>
                </label>

                <label className="flex items-center justify-between cursor-pointer">
                  <div>
                    <h3 className="text-base font-semibold text-gray-900">
                      Set duration
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">
                      {duration} days
                    </p>
                    <div className="relative w-48">
                      <input
                        type="range"
                        min="1"
                        max="30"
                        value={duration}
                        onChange={(e) => setDuration(Number(e.target.value))}
                        className={`w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer slider
                      }`}
                        // disabled={budgetType === "unlimited"}
                      />
                    </div>
                  </div>
                  <label className="relative ml-4 cursor-pointer inline-flex items-center">
                    <input
                      type="radio"
                      name="duration"
                      value="set"
                      checked={budgetType === "set"}
                      onChange={(e) => setBudgetType(e.target.value)}
                      className="sr-only"
                    />
                    <div
                      className={`w-5 h-5 rounded-full border-2 transition-all duration-200 ${
                        budgetType === "set"
                          ? "border-black bg-black"
                          : "border-gray-400 bg-white"
                      }`}
                    >
                      {budgetType === "set" && (
                        <div className="w-2 h-2 bg-white rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                      )}
                    </div>
                  </label>
                </label>
              </div>

              {/* Budget Summary */}
              <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-base font-semibold text-gray-900">
                    Ad budget
                  </span>
                  <span className="text-base font-semibold text-gray-900">
                    ₹{budgetType === "set" ? totalBudget : `${dailyBudget}`}{" "}
                    {budgetType === "set" ? "OVER 6 DAYS" : "DAILY"}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Estimated reach</span>
                  <span className="text-sm text-gray-900">
                    {estimatedReach}
                  </span>
                </div>
              </div>

              <button className="w-full bg-green-400 hover:bg-green-500 text-white font-medium py-4 rounded-xl transition-colors duration-200">
                Boost Post
              </button>
            </div>
          </>
        )}
      </form>
    </div>
  );
};

const Product = ({ handleClose }) => {
  const [product, setProduct] = useState({
    category: "",
    subCategory: "",
    name: "",
    price: "",
    label: "",
    city: "",
    areaCode: "",
    state: "",
    description: "",
    keywords: "",
  });
  const [selectedImage, setSelectedImage] = useState(null);

  const producthandleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const producthandleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      // setSelectedImage(URL.createObjectURL(file));
      setSelectedImage(file);
    }
  };

  // Example data.js (or inside your component)
  const categories = [
    {
      name: "Electronics",
      subCategories: ["Mobile", "Laptop", "Tablet"],
    },
    {
      name: "Clothing",
      subCategories: ["Men", "Women", "Kids"],
    },
    {
      name: "Home",
      subCategories: ["Furniture", "Decor", "Appliances"],
    },
  ];

  const statesData = [
    {
      name: "Gujarat",
      cities: [
        {
          name: "Ahmedabad",
          areaCodes: ["380001", "380015", "380060"],
        },
        {
          name: "Surat",
          areaCodes: ["395003", "395007", "395009"],
        },
        {
          name: "Vadodara",
          areaCodes: ["390001", "390007"],
        },
      ],
    },
    {
      name: "Maharashtra",
      cities: [
        {
          name: "Mumbai",
          areaCodes: ["400001", "400050"],
        },
        {
          name: "Pune",
          areaCodes: ["411001", "411028"],
        },
        {
          name: "Nagpur",
          areaCodes: ["440001", "440012"],
        },
      ],
    },
  ];

  const selectedCategoryObj = categories.find(
    (c) => c.name === product.category
  );
  const subCategories = selectedCategoryObj
    ? selectedCategoryObj.subCategories
    : [];

  const selectedStateObj = statesData.find((s) => s.name === product.state);
  const cities = selectedStateObj ? selectedStateObj.cities : [];

  const selectedCityObj = cities.find((c) => c.name === product.city);
  const areaCodes = selectedCityObj ? selectedCityObj.areaCodes : [];

  const producthandleSubmit = async (e) => {
    e.preventDefault();
    console.log(product);
    // axiosMain.post("api/create-post",)

    try {
      const userDetail = JSON.parse(localStorage.getItem("userDetail"));
      const userId = userDetail?.user?._id;

      let imageUrl = "";

      if (!selectedImage) {
        console.warn("No image selected. Product creation aborted.");
        return;
      }

      // 1️⃣ Upload image first if selectedImage is a File
      if (selectedImage && selectedImage instanceof File) {
        const formData = new FormData();
        formData.append("file", selectedImage);

        const uploadRes = await axiosMain.post("/upload", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        console.log(uploadRes, "uploadRes");

        if (uploadRes?.success) {
          imageUrl = uploadRes?.fileUrl;
        } else {
          throw new Error("Image upload failed");
        }
      }

      // 2️⃣ Then create product
      const payload = {
        ...product,
        price: Number(product.price),
        userId: userId,
        image: imageUrl,
      };
      console.log(payload, "payload");

      const res = await axiosMain.post("/create-product", payload);
      handleClose();
      console.log("Product created:", res.data);

      // Optional: success message or reset form here
    } catch (err) {
      console.error("Error creating product:", err);
    }
  };

  return (
    <div className="max-w-sm mx-auto bg-white p-4 rounded-md shadow font-poppins">
      <form onSubmit={producthandleSubmit} className="space-y-4">
        <h2 className="text-lg font-semibold">Product Listing</h2>

        {/* Product Category */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Product Category
          </label>
          <div className="relative w-full">
            <select
              name="category"
              value={product.category}
              onChange={producthandleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-black appearance-none pr-10"
              style={{ backgroundColor: "#FAFAFA" }}
            >
              {/* <option>Select Category</option> */}
              <option>Select Category</option>
              {categories.map((c) => (
                <option key={c.name} value={c.name}>
                  {c.name}
                </option>
              ))}
              {/* Add dynamic options */}
            </select>

            {/* Lucide Down Arrow */}
            <ChevronDown
              className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-500"
              size={18}
            />
          </div>
        </div>

        {/* Sub Category */}
        <div className="relative w-full">
          <label className="block text-sm font-medium mb-1">Sub Category</label>

          <select
            name="subCategory"
            value={product.subCategory}
            onChange={producthandleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-black appearance-none pr-10"
            style={{ backgroundColor: "#FAFAFA" }}
          >
            {/* <option>Select Category</option> */}
            <option>Select Sub Category</option>
            {subCategories.map((sub) => (
              <option key={sub} value={sub}>
                {sub}
              </option>
            ))}
            {/* Add your dynamic options here */}
          </select>

          <ChevronDown
            className="absolute right-3 top-[38px] transform -translate-y-1/2 pointer-events-none text-gray-500"
            size={18}
          />
        </div>

        {/* Product Name */}
        <div>
          <label className="block text-sm font-medium mb-1">Product Name</label>
          <input
            type="text"
            placeholder="Enter Product Name"
            name="name"
            value={product.name}
            onChange={producthandleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-black"
            style={{ backgroundColor: "#FAFAFA" }}
          />
        </div>

        {/* Upload Photo */}
        <div>
          <div className="flex items-center gap-2">
            {/* Label */}
            <label className="text-xs font-semibold min-w-[100px]">
              Upload Product Photo
            </label>

            {/* Image + Upload Button */}
            <div className="flex items-center gap-2">
              {/* Image Preview */}
              <div className="w-10 h-10 overflow-hidden rounded-lg border border-gray-300">
                {selectedImage ? (
                  <img
                    src={
                      typeof selectedImage === "string"
                        ? selectedImage
                        : URL.createObjectURL(selectedImage)
                    }
                    alt="preview"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-[#FAFAFA]" />
                )}
              </div>

              {/* Upload Button */}
              <label
                htmlFor="upload"
                className="w-10 h-10 bg-black rounded-lg flex items-center justify-center cursor-pointer"
              >
                <Upload size={20} color="white" />
                <input
                  type="file"
                  id="upload"
                  accept="image/*"
                  className="hidden"
                  onChange={producthandleImageUpload}
                />
              </label>
            </div>
          </div>
        </div>

        {/* Product Price */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Product Price
          </label>
          <input
            type="text"
            placeholder="Enter Price"
            name="price"
            value={product.price}
            onChange={producthandleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-black"
            style={{ backgroundColor: "#FAFAFA" }}
          />
        </div>

        {/* Product Label */}
        <div className="relative w-full">
          <label className="block text-sm font-medium mb-1">
            Product Label
          </label>

          <select
            name="label"
            value={product.label}
            onChange={producthandleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-black appearance-none pr-10"
            style={{ backgroundColor: "#FAFAFA" }}
          >
            <option>Select Value</option>
            <option>Unit</option>
            <option>Kg</option>
            <option>Piece</option>
          </select>

          <ChevronDown
            className="absolute right-3 top-[43px] transform -translate-y-1/2 pointer-events-none text-gray-500"
            size={18}
          />
        </div>

        {/* State */}
        <div className="relative w-full">
          <label className="block text-sm font-medium mb-1">State</label>

          <select
            name="state"
            value={product.state}
            onChange={producthandleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-black appearance-none pr-10"
            style={{ backgroundColor: "#FAFAFA" }}
          >
            {/* <option>Select State</option> */}
            <option>Select State</option>
            {statesData.map((s) => (
              <option key={s.name} value={s.name}>
                {s.name}
              </option>
            ))}
            {/* Add dynamic state options here */}
          </select>

          <ChevronDown
            className="absolute right-3 top-[43px] transform -translate-y-1/2 pointer-events-none text-gray-500"
            size={18}
          />
        </div>

        {/* City Name */}
        <div className="relative w-full">
          <label className="block text-sm font-medium mb-1">City Name</label>

          <select
            name="city"
            value={product.city}
            onChange={producthandleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-black appearance-none pr-10"
            style={{ backgroundColor: "#FAFAFA" }}
          >
            {/* <option>Select City Name</option>
            <option>New York</option>
            <option>Los Angeles</option> */}
            <option>Select City Name</option>
            {cities.map((c) => (
              <option key={c.name} value={c.name}>
                {c.name}
              </option>
            ))}
          </select>

          <ChevronDown
            className="absolute right-3 top-[43px] transform -translate-y-1/2 pointer-events-none text-gray-500"
            size={18}
          />
        </div>
        {/* Area Code */}
        <div className="relative w-full">
          <label className="block text-sm font-medium mb-1">Area Code</label>

          <select
            name="areaCode"
            value={product.areaCode}
            onChange={producthandleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-black appearance-none pr-10"
            style={{ backgroundColor: "#FAFAFA" }}
          >
            {/* <option>Select Area code</option>
            <option>123</option>
            <option>456</option> */}
            <option>Select Area code</option>
            {areaCodes.map((code) => (
              <option key={code} value={code}>
                {code}
              </option>
            ))}
          </select>

          <ChevronDown
            className="absolute right-3 top-[43px] transform -translate-y-1/2 pointer-events-none text-gray-500"
            size={18}
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Product Description
          </label>
          <textarea
            name="description"
            rows={2}
            placeholder="Enter Description"
            value={product.description}
            onChange={producthandleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-black"
            style={{ backgroundColor: "#FAFAFA" }}
          ></textarea>
        </div>

        {/* Keywords */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Product Key Wards
          </label>
          <textarea
            name="keywords"
            rows={2}
            placeholder="Enter Key wards"
            value={product.keywords}
            onChange={producthandleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-black"
            style={{ backgroundColor: "#FAFAFA" }}
          ></textarea>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="btn btn-dark w-full text-white rounded-md font-medium transition"
          // style={{ backgroundColor: "#000000" }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};
export default ProductListing;
