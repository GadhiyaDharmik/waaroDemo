import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { Upload } from "lucide-react";
import axiosMain from "../utils/axiosMain";
import { toast } from "react-toastify"; // Import toast for notifications
import i from "../../asset/I img.png";
import ellipse from "../../asset/Product/Ellipse 2.png";
import rectangle1 from "../../asset/Product/Rectangle1.png";
import rectangle2 from "../../asset/Product/Rectangle2.png";
import rectangle3 from "../../asset/Product/Rectangle3.png";
import rectangle4 from "../../asset/Product/Rectangle4.png";
import rectangle5 from "../../asset/Product/Rectangle5.png";
import rectangle6 from "../../asset/Product/Rectangle6.png";
import rectangle7 from "../../asset/Product/Rectangle7.png";
import rectangle8 from "../../asset/Product/Rectangle8.png";

const ProductListing = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [producttoggle, setProductToggle] = useState(false);
  const [posttoggle, setPostToggle] = useState(false);
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
    }
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
      <div className="container mx-auto p-6 grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-4 space-y-6">
          {producttoggle === false ? (<UploadCard label="Upload Products" setProductToggle={setProductToggle} />) : (<Product handleClose={setProductToggle} />)}

        </div>
        <div className="col-span-12 md:col-span-4 space-y-6">
          {posttoggle === false ? (<UploadCard label="Upload Post" setProductToggle={setPostToggle} />) :  (<UploadPosts handleClose={setPostToggle} modalName={modalName} setModalName={setModalName} />)}

        </div>
        <div className="col-span-12 md:col-span-4">
          <div className="grid grid-cols-2 gap-4">
            {posts.map((post) => (
              <div className="bg-white rounded-xl shadow hover:shadow-md transition duration-200">
                {/* Header with Icon */}
                <div className="flex items-center p-2 border-b">
                  <div className="rounded-full mr-2 flex items-center justify-center">
                    {/* Placeholder for icon - replace with actual image or icon */}
                    <span className="text-gray-600"><img src={post.icon} alt={post.name} /></span>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm">{post.name}</h5>
                    <p className="text-xs text-gray-500">{post.location}</p>
                  </div>
                </div>
                {/* Image Section */}
                <img
                  src={post.image}
                  alt={post.name}
                  className="rounded-t-xl w-full h-40 object-cover"
                />
                {/* Footer Section */}
                <div className="p-3">
                  <div className="flex justify-between items-center text-xs mt-2 text-gray-600">
                    <span>5.4k</span>
                    <button className="text-blue-600 font-medium">Connect</button>
                    <button className="text-yellow-500 font-medium" onClick={() => {
                      setModalName("Modal1");
                      setPostToggle(true);
                    }}
                    >Boost</button>
                  </div>
                </div>
              </div>

              // <div
              //   key={post.id}
              //   className="bg-white rounded-xl shadow hover:shadow-md transition duration-200"
              // >
              //   <img
              //     src={post.image}
              //     alt={post.name}
              //     className="rounded-t-xl w-full h-40 object-cover"
              //   />
              //   <div className="p-3">
              //     <h4 className="font-semibold text-sm">{post.name}</h4>
              //     <p className="text-xs text-gray-500">{post.location}</p>

              //     <div className="flex justify-between items-center text-xs mt-2 text-gray-600">
              //       <span>5.4k</span>
              //       <button className="text-blue-600 font-medium">Connect</button>
              //       <button className="text-yellow-500 font-medium">Boost</button>
              //     </div>
              //   </div>
              // </div>
            ))}
          </div>
        </div >

      </div >
    </>
  );
};
function UploadCard({ label, setProductToggle }) {
  return (
    <div onClick={() => setProductToggle(true)} className="bg-white w-60 h-60 rounded-xl border flex flex-col justify-center items-center shadow hover:shadow-md cursor-pointer transition">
      <div className="bg-yellow-400 rounded-full p-3 text-2xl font-bold text-white">
        +
      </div>
      <p className="mt-3 font-medium text-gray-700">{label}</p>
    </div>
  );
}

const UploadPosts = ({ handleClose, modalName, setModalName }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isEnabled, setIsEnabled] = useState(false);
  const [post, setPost] = useState({
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

  const [website, setWebsite] = useState("");
  const [selectedAction, setSelectedAction] = useState("Learn More");
  const [selectedActionMsg, setSelectedActionMsg] = useState("Sent Massgage");

  const [dailyBudget, setDailyBudget] = useState(149);
  const [duration, setDuration] = useState(6);
  const [budgetType, setBudgetType] = useState("unlimited");

  const totalBudget = dailyBudget * duration;
  const estimatedReach = `${Math.floor(dailyBudget * 11.4)}-${Math.floor(dailyBudget * 30.9)}`;

  const actionButtons = [
    "Learn More",
    "shop now",
    "watch more",
    "Contact us",
    "Book now",
    "Sign up"
  ];
  const actionButtonsMsg = [
    "Sent Massgage",
    "Contact us",
    "Learn More",
    "Book Now"
  ];

  const postImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };
  const posthandleChange = (e) => {
    const { name, value } = e.target;
    setPost((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <div className="max-w-sm mx-auto bg-white p-4 rounded-md shadow font-poppins">
      <form className="space-y-4">
        {modalName === "" && (<> <h2 className="text-lg font-semibold">Upload Post</h2>
          {/* Upload Photo */}
          <div>
            <label className="block text-sm font-medium mb-1">Upload Product Photo</label>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 border border-gray-300 overflow-hidden rounded-md">
                {selectedImage && <img src={selectedImage} alt="preview" className="w-full h-full object-cover" />}
              </div>
              <label
                htmlFor="upload"
                className="bg-black text-white px-2 py-1 rounded-md text-sm cursor-pointer flex items-center gap-1"
              >
                <Upload size={16} />
                <input type="file" id="upload" accept="image/*" className="hidden" onChange={postImageUpload} />
              </label>
            </div>
            {/* Description */}
            <div>
              <label className="block text-sm font-medium mb-1">Product Description</label>
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
              <label className="block text-sm font-medium mb-1">Product Key Wards</label>
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
            type="button"
            className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-md font-medium"

          >
            Submit
          </button>

          <button
            type="button"
            className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-md font-medium"
            onClick={() => handleClose(false)}
          >
            Close
          </button></>)}



        {modalName === "Modal1" && (<>
          <div className="bg-white rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">What do you want people to do when they see your ad?</h2>

            <div className="space-y-4">
              <label className="flex items-center">
                <input type="radio" name="action" className="mr-2" />
                <span className="text-sm">
                  Visit Your Profile
                  <br />
                  Best for Brand awareness and connect @wazaro_official
                </span>
              </label>

              <label className="flex items-center">
                <input type="radio" name="action" className="mr-2" />
                <span className="text-sm">
                  Visit your website
                  <br />
                  Best for online sales, booking and helping people learn more about you
                </span>
              </label>

              <label className="flex items-center">
                <input type="radio" name="action" className="mr-2" />
                <span className="text-sm">
                  Message you
                  <br />
                  Best connecting with more people in wazaro to drive sales
                </span>
              </label>
            </div>
          </div>
          <button
            type="button"
            className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-md font-medium"
            onClick={() => setModalName("Modal2")}
          >
            Submit
          </button></>)}



        {modalName === "Modal2" && (<>
          <div className="bg-white rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">N/A</h2>
            <p className="text-sm text-gray-500 mb-4">Estimated audience size</p>

            <div className="space-y-6">
              <label className="flex items-center justify-between cursor-pointer">
                <span className="text-sm mr-3">
                  Use advantage+ audience
                  <br />
                  Automatically finds and updates audience whenever it's likely to improve performance
                </span>
                <div className="relative">
                  <div className={`block w-14 h-8 rounded-full transition-colors duration-200 ease-in-out ${isEnabled ? 'bg-blue-600' : 'bg-gray-300'
                    }`}>
                    <div className={`absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform duration-200 ease-in-out ${isEnabled ? 'transform translate-x-6' : ''
                      }`}></div>
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
                <label className="block text-sm font-medium text-gray-700 mb-1">Campaign name</label>
                <input
                  type="text"
                  placeholder="Enter campaign"
                  className="w-full p-2 border rounded-lg text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Locations</label>
                <select className="w-full p-2 border rounded-lg text-sm text-gray-500">
                  <option>Gujarat, Rajasthan, Maharashtra</option>
                </select>
              </div>

              <button type="button" className="w-full bg-green-400 text-white py-2 rounded-lg font-medium mt-4"
                onClick={() => setModalName("Modal3")}
              >
                Submit
              </button>
            </div>
          </div></>)}


        {modalName === "Modal3" && (<>
          <div className="max-w-md mx-auto bg-white p-6 m-4">
            <div className="text-center mb-6">
              <h1 className="text-xl font-semibold text-gray-900 mb-2">
                Website Goal setup
              </h1>
              <p className="text-gray-600 text-sm">
                Add url & action button
              </p>
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
                  <label key={action} className="flex items-center justify-between cursor-pointer">
                    <span className="text-gray-700 text-sm">
                      {action}
                    </span>
                    <div className="relative">
                      <input
                        type="radio"
                        name="action"
                        value={action}
                        checked={selectedAction === action}
                        onChange={(e) => setSelectedAction(e.target.value)}
                        className="sr-only"
                      />
                      <div className={`w-5 h-5 rounded-full border-2 transition-all duration-200 ${selectedAction === action
                        ? 'border-green-400 bg-green-400'
                        : 'border-gray-400 bg-white'
                        }`}>
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
              className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-md font-medium"
              typeof="button"
              onClick={() => setModalName("Modal4")}
            >
              Submit
            </button>
          </div>
        </>)}

        {modalName === "Modal4" && (<>
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
                  <label key={action} className="flex items-center justify-between cursor-pointer">
                    <span className="text-gray-700 text-sm">
                      {action}
                    </span>
                    <div className="relative">
                      <input
                        type="radio"
                        name="action"
                        value={action}
                        checked={selectedActionMsg === action}
                        onChange={(e) => setSelectedActionMsg(e.target.value)}
                        className="sr-only"
                      />
                      <div className={`w-5 h-5 rounded-full border-2 transition-all duration-200 ${selectedActionMsg === action
                        ? 'border-green-400 bg-green-400'
                        : 'border-gray-400 bg-white'
                        }`}>
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
              className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-md font-medium"
              onClick={() => setModalName("Modal5")}
            >
              Submit
            </button>
          </div>
        </>)}


        {modalName === "Modal5" && (<>
          <div className="max-w-md mx-auto bg-white rounded-2xl p-6 m-4">
            <div className="text-center mb-6">
              <h1 className="text-xl font-semibold text-gray-900 mb-2">
                What's your ad budget
              </h1>
              <p className="text-gray-600 text-sm">
                Estimated audience size
              </p>
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
                    let your ad run for as long as you'd like. you can pause any time in ad tools
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
                  <div className={`w-5 h-5 rounded-full border-2 transition-all duration-200 ${budgetType === "unlimited"
                    ? 'border-green-400 bg-green-400'
                    : 'border-gray-400 bg-white'
                    }`}>
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
                <div className="relative ml-4">
                  <input
                    type="radio"
                    name="duration"
                    value="set"
                    checked={budgetType === "set"}
                    onChange={(e) => setBudgetType(e.target.value)}
                    className="sr-only"
                  />
                  <div className={`w-5 h-5 rounded-full border-2 transition-all duration-200 ${budgetType === "set"
                    ? 'border-green-400 bg-green-400'
                    : 'border-gray-400 bg-white'
                    }`}>
                    {budgetType === "set" && (
                      <div className="w-2 h-2 bg-white rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                    )}
                  </div>
                </div>
              </label>
            </div>

            {/* Budget Summary */}
            <div className="mb-6 p-4 bg-gray-50 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="text-base font-semibold text-gray-900">Ad budget</span>
                <span className="text-base font-semibold text-gray-900">
                  ₹{budgetType === "set" ? totalBudget : `${dailyBudget}`} {budgetType === "set" ? "OVER 6 DAYS" : "DAILY"}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Estimated reach</span>
                <span className="text-sm text-gray-900">{estimatedReach}</span>
              </div>
            </div>

            <button className="w-full bg-green-400 hover:bg-green-500 text-white font-medium py-4 rounded-xl transition-colors duration-200">
              Boost Post
            </button>
          </div>
        </>)}
      </form>
    </div>
  );
}


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
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  const producthandleSubmit = (e) => {
    e.preventDefault();
    console.log(product);
  };



  return (
    <div className="max-w-sm mx-auto bg-white p-4 rounded-md shadow font-poppins">
      <form onSubmit={producthandleSubmit} className="space-y-4">
        <h2 className="text-lg font-semibold">Product Listing</h2>

        {/* Product Category */}
        <div>
          <label className="block text-sm font-medium mb-1">Product Category</label>
          <select
            name="category"
            value={product.category}
            onChange={producthandleChange}
            className="w-full bg-white border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-black"
          >
            <option>Select Category</option>
          </select>
        </div>

        {/* Sub Category */}
        <div>
          <label className="block text-sm font-medium mb-1">Sub Category</label>
          <select
            name="subCategory"
            value={product.subCategory}
            onChange={producthandleChange}
            className="w-full bg-white border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-black"
          >
            <option>Select Category</option>
          </select>
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
            className="w-full bg-white border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        {/* Upload Photo */}
        <div>
          <label className="block text-sm font-medium mb-1">Upload Product Photo</label>
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 border border-gray-300 overflow-hidden rounded-md">
              {selectedImage && <img src={selectedImage} alt="preview" className="w-full h-full object-cover" />}
            </div>
            <label
              htmlFor="upload"
              className="bg-black text-white px-2 py-1 rounded-md text-sm cursor-pointer flex items-center gap-1"
            >
              <Upload size={16} />
              <input type="file" id="upload" accept="image/*" className="hidden" onChange={producthandleImageUpload} />
            </label>
          </div>
        </div>

        {/* Product Price */}
        <div>
          <label className="block text-sm font-medium mb-1">Product Price</label>
          <input
            type="text"
            placeholder="Enter Price"
            name="price"
            value={product.price}
            onChange={producthandleChange}
            className="w-full bg-white border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        {/* Product Label */}
        <div>
          <label className="block text-sm font-medium mb-1">Product Label</label>
          <select
            name="label"
            value={product.label}
            onChange={producthandleChange}
            className="w-full bg-white border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-black"
          >
            <option>Select Value</option>
            <option>Unit</option>
            <option>Kg</option>
            <option>Piece</option>
          </select>
        </div>

        {/* City Name */}
        <div>
          <label className="block text-sm font-medium mb-1">City Name</label>
          <select
            name="city"
            value={product.city}
            onChange={producthandleChange}
            className="w-full bg-white border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-black"
          >
            <option>Select City Name</option>
            <option>New York</option>
            <option>Los Angeles</option>
          </select>
        </div>

        {/* Area Code */}
        <div>
          <label className="block text-sm font-medium mb-1">Area Code</label>
          <select
            name="areaCode"
            value={product.areaCode}
            onChange={producthandleChange}
            className="w-full bg-white border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-black"
          >
            <option>Select Area code</option>
            <option>123</option>
            <option>456</option>
          </select>
        </div>

        {/* State */}
        <div>
          <label className="block text-sm font-medium mb-1">State</label>
          <select
            name="state"
            value={product.state}
            onChange={producthandleChange}
            className="w-full bg-white border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-black"
          >
            <option>Select State</option>
          </select>
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium mb-1">Product Description</label>
          <textarea
            name="description"
            rows={2}
            placeholder="Enter Description"
            value={product.description}
            onChange={producthandleChange}
            className="w-full bg-white border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-black"
          ></textarea>
        </div>

        {/* Keywords */}
        <div>
          <label className="block text-sm font-medium mb-1">Product Key Wards</label>
          <textarea
            name="keywords"
            rows={2}
            placeholder="Enter Key wards"
            value={product.keywords}
            onChange={producthandleChange}
            className="w-full bg-white border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-black"
          ></textarea>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-md font-medium"
        >
          Submit
        </button>

        <button
          type="button"
          className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-md font-medium"
          onClick={() => handleClose(false)}
        >
          Close
        </button>
      </form>
    </div>
  );
}
export default ProductListing;
