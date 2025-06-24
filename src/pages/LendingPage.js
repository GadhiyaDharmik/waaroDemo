/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useRef, useState } from "react";
import {
  Search,
  ChevronLeft,
  ChevronRight,
  Heart,
  MessageSquare,
  MoreHorizontal,
  Share2,
} from "lucide-react";
// import OwlCarousel from "react-owl-carousel";

// import Image from "next/image"; // ✅ Import Next.js Image
import "bootstrap/dist/css/bootstrap.min.css";
import meat from "../asset/Meat.png";
import user from "../asset/user.png";
import shoes from "../asset/shoes.png";
import save from "../asset/SVG/save.svg";
import send from "../asset/SVG/send.svg";
import home from "../asset/home.png";
import leg from "../asset/leg.png";
import dr from "../asset/dr.png";
import farm from "../asset/farm.png";
import book from "../asset/book.png";
import teddy from "../asset/teddy.png";
import mouse from "../asset/mouse.png";
import Location from "../asset/Location.png";

import train from "../asset/train.png";
import lab from "../asset/lab.png";
import mattchine from "../asset/mattchine.png";
import building from "../asset/building.png";
import bowl from "../asset/bowl.png";
import helicopter from "../asset/helicopter.png";
import medicine from "../asset/medicine.png";
import men from "../asset/men.png";
import men2 from "../asset/men2.png";
import plate from "../asset/fruit.png";
import fruit from "../asset/plate.png";
import buildingg from "../asset/SVG/buildingg.svg";
import carrot from "../asset/SVG/carrot.svg";
import engine from "../asset/SVG/engine.svg";
import helicopterrr from "../asset/SVG/helicopterrr.svg";
import mdicine from "../asset/SVG/mdicine.svg";
import plug from "../asset/SVG/plug.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Slider from "react-slick";
import { Button, Image, Navbar } from "react-bootstrap";
import logo from "../asset/logo.svg";
import profilePicture from "../asset/profilePicture.png";
import { Link, useNavigate } from "react-router-dom";
import { Menu, MenuItem } from "@mui/material";
import { MapPin, ChevronDown } from "lucide-react";
import manufacturer from "../asset/manufacturer.png";
import service from "../asset/service.png";
import trader from "../asset/trader.png";
import distributor from "../asset/distributor.png";
import influencer from "../asset/influencer.png";
import { Container, Row, Col, Form } from "react-bootstrap";
import hero from "../asset/Group 39864.png";
import {
  Box,
  Grid,
  TextField,
  Typography,
  Select,
  InputLabel,
  FormControl,
  Card,
  CardContent,
} from "@mui/material";

function LendingPage() {
  // const [selectedCategory, setSelectedCategory] = useState(null);
  const scrollRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [selectedLocation, setSelectedLocation] = useState("All India");
  const [selectedCategory, setSelectedCategory] = useState("Select Category");
  const [searchQuery, setSearchQuery] = useState("");
  const [showProfile, setShowProfile] = useState(true);
  const cities = ["Ahmedabad", "Rajkot", "Surat"];
  const states = ["Gujarat", "Maharashtra", "Delhi"];

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 200;
      if (direction === "left") {
        scrollRef.current.scrollLeft -= scrollAmount;
      } else {
        scrollRef.current.scrollLeft += scrollAmount;
      }
    }
  };

  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        setShowLeftArrow(scrollLeft > 0);
        setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
      }
    };

    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
      handleScroll();
      return () => scrollContainer.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const categories = [
    { name: "Building and Construction", icon: buildingg },
    { name: "Electronics and Electrical", icon: plug },
    { name: "Drugs and Pharmacy", icon: mdicine },
    { name: "Industrial Machinery and Parts", icon: helicopterrr },
    { name: "Industrial Supplies and Services", icon: engine },
    { name: "Food and Agriculture", icon: carrot },
  ];

  const trendingItems = [
    { id: 1, image: meat, category: "Building and Construction" },
    { id: 2, image: home, category: "Building and Construction" },
    { id: 3, image: medicine, category: "Building and Construction" },
    { id: 4, image: farm, category: "Building and Construction" },
    { id: 5, image: dr, category: "Building and Construction" },
    { id: 6, image: leg, category: "Building and Construction" },
  ];

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
  const topProducts = [
    {
      id: 1,
      image: "https://via.placeholder.com/200",
      vendor: "Vendor1",
      title: "Medical Equipment",
      description: "High quality medical equipment for hospitals",
      price: "€ 999",
      unit: "/page",
      action: "Inquire",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/200",
      vendor: "Vendor2",
      title: "White Mouse",
      description: "Laboratory tested white mouse for research",
      price: "€ 102",
      unit: "/page",
      action: "Inquire",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/200",
      vendor: "Vendor3",
      title: "Ceramic Bowl",
      description: "Premium quality ceramic bowl for laboratory use",
      price: "€ 450",
      unit: "/page",
      action: "Inquire",
    },
    {
      id: 4,
      image: "https://via.placeholder.com/200",
      vendor: "Vendor4",
      title: "Industrial Building",
      description: "Modern industrial building for commercial use",
      price: "€ 999",
      unit: "/page",
      action: "Inquire",
    },
    {
      id: 5,
      image: "https://via.placeholder.com/200",
      vendor: "Vendor5",
      title: "Medical Scanner",
      description: "Advanced medical scanning equipment",
      price: "€ 750",
      unit: "/page",
      action: "Inquire",
    },
    {
      id: 6,
      image: "https://via.placeholder.com/200",
      vendor: "Vendor6",
      title: "Snow Equipment",
      description: "Professional snow equipment for extreme conditions",
      price: "€ 599",
      unit: "/page",
      action: "Inquire",
    },
  ];
  const products = [
    {
      id: 1,
      name: "Vitamin-C Casual",
      brand: "Cardo",
      location: "Semarang, Indonesia",
      image: lab,
      price: "₹ 200",
      unit: "Stripe",
    },
    {
      id: 2,
      name: "Vitamin-C Casual",
      brand: "Cardo",
      location: "Semarang, Indonesia",
      image: mouse,
      price: "₹ 200",
      unit: "Stripe",
    },
    {
      id: 3,
      name: "Vitamin-C Casual",
      brand: "Cardo",
      location: "Semarang, Indonesia",
      image: bowl,
      price: "₹ 200",
      unit: "Stripe",
    },
    {
      id: 4,
      name: "Vitamin-C Casual",
      brand: "Cardo",
      location: "Semarang, Indonesia",
      image: building,
      price: "₹ 200",
      unit: "Stripe",
    },
    {
      id: 5,
      name: "Vitamin-C Casual",
      brand: "Cardo",
      location: "Semarang, Indonesia",
      image: mattchine,
      price: "₹ 200",
      unit: "Stripe",
    },
    {
      id: 6,
      name: "Vitamin-C Casual",
      brand: "Cardo",
      location: "Semarang, Indonesia",
      image: helicopter,
      price: "₹ 200",
      unit: "Stripe",
    },
  ];
  const queryproducts = [
    {
      imageSrc: medicine,
      title: "Vitamin C Capsule",
      description:
        "Premium quality vitamin C supplements for immune support and overall health.",
    },
    {
      imageSrc: "https://via.placeholder.com/150x120",
      title: "Vitamin C Capsule",
      description:
        "High-potency vitamin C formula with natural citrus bioflavonoids.",
    },
    {
      imageSrc: "https://via.placeholder.com/150x120",
      title: "Vitamin C Capsule",
      description:
        "Time-released vitamin C capsules for optimal absorption throughout the day.",
    },
    {
      imageSrc: "https://via.placeholder.com/150x120",
      title: "Vitamin C Capsule",
      description:
        "Organic vitamin C derived from natural sources for better bioavailability.",
    },
    {
      imageSrc: "https://via.placeholder.com/150x120",
      title: "Vitamin C Capsule",
      description:
        "Vitamin C with added zinc and elderberry for comprehensive immune support.",
    },
    {
      imageSrc: "https://via.placeholder.com/150x120",
      title: "Vitamin C Capsule",
      description:
        "Liposomal vitamin C for enhanced absorption and cellular delivery.",
    },
  ];
  const cards = [
    {
      id: 1,
      profileImage: user,
      name: "Carola",
      location: "Cupertino, Mexico",
      mainImage: men,
      likes: "1.4k",
    },
    {
      id: 2,
      profileImage: user,
      name: "David",
      location: "New York, USA",
      mainImage: plate,
      likes: "1.5k",
    },
    {
      id: 3,
      profileImage: user,
      name: "Sophia",
      location: "London, UK",
      mainImage: men2,
      likes: "1.6k",
    },
    {
      id: 4,
      profileImage: user,
      name: "Liam",
      location: "Berlin, Germany",
      mainImage: fruit,
      likes: "1.4k",
    },
  ];
  const testimonials = [
    {
      name: "Ronne Galle",
      role: "Project Manager",
      image:
        "https://images.unsplash.com/photo-1572561300743-2dd367ed0c9a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=300",
      text: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.",
    },
    {
      name: "Missy Limana",
      role: "Engineer",
      image:
        "https://images.unsplash.com/photo-1588361035994-295e21daa761?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=301&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=301",
      text: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.",
    },
    {
      name: "Martha Brown",
      role: "Project Manager",
      image:
        "https://images.unsplash.com/photo-1575377222312-dd1a63a51638?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=302&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=302",
      text: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.",
    },
    {
      name: "Hanna Lisem",
      role: "Project Manager",
      image:
        "https://images.unsplash.com/photo-1549836938-d278c5d46d20?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=303&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=303",
      text: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.",
    },
  ];
  // const settings = {
  //     dots: true,
  //     infinite: true,
  //     speed: 500,
  //     slidesToShow: 3,
  //     slidesToScroll: 1,
  //     autoplay: true,
  //     autoplaySpeed: 3000,
  //     centerMode: true,
  //     centerPadding: "0",
  //     responsive: [
  //         { breakpoint: 1000, settings: { slidesToShow: 2, slidesToScroll: 1 } },
  //         { breakpoint: 680, settings: { slidesToShow: 1, slidesToScroll: 1 } }
  //     ]
  // };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const brands = [
    {
      name: "JCB",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-izFpr5gZHfkwKX115eDGKoKClXa7pE.png",
    },
    {
      name: "ACE",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-izFpr5gZHfkwKX115eDGKoKClXa7pE.png",
    },
    {
      name: "Thermax",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-izFpr5gZHfkwKX115eDGKoKClXa7pE.png",
    },
    {
      name: "CASE Construction",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-izFpr5gZHfkwKX115eDGKoKClXa7pE.png",
    },
    {
      name: "Astral Pipes",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-izFpr5gZHfkwKX115eDGKoKClXa7pE.png",
    },
  ];

  // Role definitions
  const roles = [
    { title: "Manufacturer", bgClass: "bg-green-100", img: manufacturer },
    { title: "Service", bgClass: "bg-blue-100", img: service },
    { title: "Trader", bgClass: "bg-purple-100", img: trader },
    { title: "Distributor", bgClass: "bg-yellow-100", img: distributor },
    { title: "Influencers", bgClass: "bg-pink-100", img: influencer },
  ];

  const locations = [
    "All India",
    "Mumbai",
    "Delhi",
    "Bangalore",
    "Chennai",
    "Kolkata",
    "Hyderabad",
    "Pune",
    "Ahmedabad",
    "Surat",
  ];

  const categorie = [
    "Select Category",
    "Building and Constructions",
    "Electronics and Electrical",
    "Drugs and Pharma",
    "Industrial Machinery and Parts",
    "Industrial Supplies and Services",
    "Food and Agriculture",
    "Automotive",
    "Textiles",
    "Chemicals",
  ];

  return (
    <>
      {/* Navbar */}
      {/* <Navbar
        bg="light"
        className="px-4 py-3 border-none d-flex justify-content-between"
        style={{ boxShadow: "rgba(33, 35, 38, 0.1) 0px 10px 10px -10px" }}
      >
        <Image src={logo} height="40" alt="Waaro" />
        <Button
          variant="dark"
          className="rounded-pill px-4 py-2 text-sm"
          onClick={() => navigate("/login")}
        >
          Subscribe Now
        </Button> 
      </Navbar> */}

      <Navbar
        bg="light"
        className="px-4 py-3"
        style={{ boxShadow: "0 10px 10px -10px rgba(33,35,38,0.1)" }}
      >
        <Image src={logo} height="40" alt="Waaro" />
        {showProfile ? (
          <>
            {/* Avatar */}

            <Button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              className="bg-transparent border-0 ms-auto"
            >
              <div className="d-flex align-items-center gap-3 flex-w rap justify-content-end">
                {/* Desktop User Info */}
                <div className="d-none d-md-block text-end">
                  <h6 className="mb-0 fw-semibold text-nowrap text-dark">
                    {JSON.parse(localStorage.getItem("userDetail"))?.user?.name}
                  </h6>
                  <p className="mb-0 text-secondary small text-nowrap">
                    User ID: GJ01AB
                    {JSON.parse(
                      localStorage.getItem("userDetail")
                    )?.user?._id?.slice(0, 4) || "N/A"}
                  </p>
                </div>

                {/* Avatar */}
                <div>
                  <img
                    src={profilePicture}
                    alt="User"
                    className="rounded-circle"
                    style={{
                      width: "45px",
                      height: "45px",
                      backgroundColor: "#FFCA28",
                      padding: "5px",
                      objectFit: "contain",
                    }}
                  />
                </div>
              </div>
            </Button>

            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              {/* Mobile-only user details */}
              <div className="d-block d-md-none px-3 pt-2 pb-2 text-center">
                <div className="d-flex justify-content-center">
                  <img
                    src={profilePicture}
                    alt="User"
                    className="rounded-circle mb-2"
                    style={{
                      width: "60px",
                      height: "60px",
                      objectFit: "cover",
                    }}
                  />
                </div>

                <div>
                  <h6 className="mb-0">
                    {JSON.parse(localStorage.getItem("userDetail"))?.user?.name}
                  </h6>
                  <p className="text-muted small mb-0">
                    User ID: GJ01AB
                    {JSON.parse(
                      localStorage.getItem("userDetail")
                    )?.user?._id?.slice(0, 4) || "N/A"}
                  </p>
                </div>
                <hr className="my-2" />
              </div>

              <MenuItem
                onClick={() => {
                  navigate("/dashboard");
                  handleClose();
                }}
                style={{ fontSize: "16px" }}
              >
                Go To Dashboard
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleClose();
                  localStorage.clear();
                  setShowProfile(false);
                }}
                style={{ fontSize: "16px" }}
              >
                Logout
              </MenuItem>
            </Menu>
          </>
        ) : (
          <Button
            variant="link"
            className="login-btn ms-auto ms-md-auto"
            onClick={() => navigate("/login")}
          >
            Login
          </Button>
        )}
      </Navbar>
      {/* <div className="container p-0"> */}
      {/* <div className="banner-container ps-3 pe-3">
              <div className="banner">
                <img src={landingbanner} alt="Banner 1" />
              </div>
              <div className="banner">
                <Carousel data-bs-theme="dark">
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={landingbanner2}
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={landingbanner2}
                      alt="Second slide"
                    />
                  </Carousel.Item>
                </Carousel>
              </div>
            </div> */}
      <div className="business-hub">
        {/* Header */}
        <div className=" text-center py-4">
          <h3 className="text-muted">Your All in one Hub for</h3>
          <h1 className="fw-bold">Powerful Business Growth</h1>

          {/* Search Bar */}
          {/* <div className="lendeing-input-container input-group mt-4 mx-auto search-bar w-75">
            <img src={Location} className="img-fluid Location" />
            <select className="form-select">
              <option>All cities</option>
              <option>New York</option>
              <option>Los Angeles</option>
              <option>Chicago</option>
            </select>
            <input
              type="text"
              className="form-control"
              placeholder="What are you looking for?"
            />
            <button className="btn btn-dark">
              <Search size={18} className="me-1" />
              SEARCH
            </button>
          </div> */}

          <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-3 md:gap-3 mt-4 md:mt-6">
            {/* Location Dropdown */}
            <div
              className="relative bg-white border-2 border-black shadow-sm w-full md:w-auto"
              style={{ borderRadius: "18px" }}
            >
              <div className="flex items-center px-4 py-3">
                <MapPin className="w-5 h-5 text-black mr-3" />
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="appearance-none bg-transparent border-none outline-none text-gray-600 font-medium pr-6 cursor-pointer w-full md:min-w-[100px]"
                >
                  {locations.map((location) => (
                    <option key={location} value={location}>
                      {location}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 text-gray-600 absolute right-4 pointer-events-none" />
              </div>
            </div>

            {/* Category Dropdown */}
            <div
              className="relative bg-white border-2 border-black shadow-sm w-full md:w-auto"
              style={{ borderRadius: "18px" }}
            >
              <div className="flex items-center px-4 py-3">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="appearance-none bg-transparent border-none outline-none text-gray-400 font-medium pr-6 cursor-pointer w-full md:min-w-[150px]"
                >
                  {categorie.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 text-gray-400 absolute right-4 pointer-events-none" />
              </div>
            </div>

            {/* Search Input */}
            <div
              className="w-full flex-1 bg-white border-2 border-black shadow-sm"
              style={{ borderRadius: "18px" }}
            >
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Enter product/service name"
                className="w-full border-none outline-none text-gray-600 placeholder-gray-400 px-6 py-3 text-base rounded-full"
              />
            </div>

            {/* Search Button */}
            <button
              className="bg-black text-white w-full md:w-auto px-8 py-3 font-bold flex items-center justify-center gap-3 hover:bg-gray-800 transition-colors shadow-sm"
              style={{ borderRadius: "18px" }}
            >
              <Search className="w-5 h-5" />
              SEARCH
            </button>
          </div>
        </div>

        {/* Category Navigation */}
        <div className="Slider containers py-5">
          <div className="d-flex align-items-center position-relative m-auto">
            <button className="btn btn-dark position-absolute start-0">
              <span>All Categories</span>
            </button>

            <div className="d-flex  px-5 category-list">
              {categories.map((category, index) => (
                <div
                  key={index}
                  className={`category-box px-3 py-2 mx-2 border rounded bg-white 
                        ${selectedCategory === category.name ? "" : ""}`}
                  onClick={() => setSelectedCategory(category.name)}
                  style={{ cursor: "pointer" }}
                >
                  <div className="fs-4">
                    <img src={category.icon} alt="images" />
                  </div>
                  <div className="small text-center">{category.name}</div>
                </div>
              ))}
            </div>

            {/* <button className="btn btn-dark position-absolute end-0">
              <span>All Categories</span>
            </button> */}
          </div>
        </div>

        <div
          className="flex flex-wrap gap-4 justify-center py-6"
          style={{ width: "100%" }}
        >
          {roles.map((role, index) => (
            <div
              key={index}
              className={`w-[260px] h-[260px] rounded-xl relative overflow-hidden ${role.bgClass}`}
            >
              {/* Heading Positioned at Top */}
              <div
                className="absolute top-2 left-1/2 -translate-x-1/2 text-white"
                style={{
                  fontFamily: "Poppins,sans-serif",
                  fontWeight: "500",
                  fontSize: "30px",
                }}
              >
                {role.title}
              </div>

              {/* Person Image Positioned Lower */}
              {/* <div className="absolute bottom-0 w-full flex justify-center"> */}
              <img
                src={role.img}
                alt={role.title}
                className="w-full h-full object-cover"
              />
              {/* </div> */}
            </div>
          ))}
        </div>

        {/* Trending Categories Section */}
        <div className="container-fluid py-4 px-5">
          <h2
            className="mt-4"
            style={{
              fontFamily: "Poppins,sans-serif",
              fontSize: "28px",
              fontWeight: "600",
            }}
          >
            Trending Categories
          </h2>

          {/* Single Card Wrapping All Items */}
          <div className="row gx-4 gy-4">
            {trendingItems.map((item) => (
              <div
                key={item.id}
                className="col-6 col-md-4 col-lg-3 col-xl-2 d-flex justify-content-center"
              >
                <div
                  className="bg-white shadow-sm rounded-4 text-center p-3"
                  style={{ width: "100%", maxWidth: "380px" }}
                >
                  <div
                    style={{
                      width: "100%",
                      height: "150px",
                      borderRadius: "12px",
                      overflow: "hidden",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={item.image}
                      alt={item.category}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <p
                    className="mt-3 mb-0"
                    style={{
                      fontSize: "20px",
                      fontFamily: "Inter, sans-serif",
                      color: "#000000",
                      fontWeight: "400",
                    }}
                  >
                    {item.category}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Product Listings */}
        <div className="container-fluid px-5 py-4">
          <h2
            className="mt-4"
            style={{
              fontFamily: "Poppins,sans-serif",
              fontSize: "28px",
              fontWeight: "600",
            }}
          >
            Trending Categories
          </h2>
          <div className="row">
            {categoryCards.map((card) => (
              <div key={card.id} className="col-12 col-sm-6 col-lg-3 mb-4">
                <div className="card border-0" style={{ borderRadius: "18px" }}>
                  {" "}
                  {/* Removed card border here */}
                  {/* Header */}
                  <div
                    className="card-header d-flex align-items-center justify-content-between bg-white border-0"
                    style={{ borderRadius: "18px" }}
                  >
                    <div className="d-flex align-items-center">
                      <img
                        src={card.userImage}
                        alt={card.username}
                        className="rounded-circle me-2"
                        width="30"
                        height="30"
                      />
                      <span className="fw-medium">{card.username}</span>
                    </div>
                    <button
                      className="btn btn-light btn-sm border-0"
                      style={{ background: "none" }}
                    >
                      <MoreHorizontal size={28} />
                    </button>
                  </div>
                  {/* Image */}
                  <img
                    src={card.mainImage}
                    alt={card.imageAlt}
                    className="card-img-top"
                  />
                  {/* Card Body */}
                  <div className="card-body">
                    <div className="d-flex align-items-center mb-2">
                      <button
                        className="btn"
                        style={{
                          display: "flex",
                          borderRadius: "18px",
                          backgroundColor: "#EAEEF1",
                          justifyContent: "center",
                          alignContent: "center",
                        }}
                      >
                        <Heart
                          size={18}
                          className="text-dark"
                          style={{ marginTop: "2px" }}
                        />
                        <div style={{ paddingLeft: "3px" }}>5.44k</div>
                      </button>
                      <div style={{ marginLeft: "auto" }}>
                        <button className="btn  save-btn btn-sm">
                          <img
                            src={send}
                            alt="send"
                            style={{ width: "16px", height: "16px" }}
                          />
                        </button>
                        <button className="btn save-btn btn-sm">
                          <img
                            src={save}
                            alt="Bookmark"
                            style={{ width: "16px", height: "16px" }}
                          />
                        </button>
                        <button
                          className="btn p-0 ms-auto"
                          style={{
                            fontFamily: "Poppins,sans-serif",
                            fontSize: "14px",
                          }}
                        >
                          Connect
                        </button>
                      </div>
                    </div>

                    <p className="small text-muted fs-6">{card.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* products */}
        <div className="container-fluid px-5 py-4">
          <h2
            className="mb-4 fw-bold"
            style={{
              fontFamily: "Poppins,sans-serif",
              fontWeight: "600",
              fontSize: "28px",
            }}
          >
            Beast Seller
          </h2>
          <div className="row g-3">
            {products.map((product) => (
              <div key={product.id} className="col-6 col-md-4 col-lg-2 d-flex">
                <div className="card w-100 d-flex flex-column shadow-sm p-2">
                  {/* User Info - Profile Image, Username & Location */}
                  <div className="d-flex align-items-center p-2">
                    {/* Profile Image */}
                    <img
                      src={user} // Replace with actual profile image
                      alt="User Profile"
                      className="rounded-circle me-2"
                      style={{
                        width: "35px",
                        height: "35px",
                        objectFit: "cover",
                        border: "none",
                      }}
                    />
                    {/* Username & Location */}
                    <div>
                      <h6
                        className="brand-desc mb-0"
                        style={{
                          fontFamily: "Mulish,sans-serif",
                          fontSize: "14px",
                          fontWeight: "700",
                        }}
                      >
                        {product.brand}
                      </h6>
                      <p
                        className="user-location mb-0"
                        style={{
                          fontFamily: "Mulish,sans-serif",
                          fontSize: "12px",
                          fontWeight: "700",
                          color: "#878D98",
                        }}
                      >
                        {product.location}
                      </p>
                    </div>
                  </div>

                  {/* Product Image */}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="card-img-top p-2"
                    style={{ objectFit: "cover", aspectRatio: "1 / 1" }}
                  />

                  {/* Product Name */}
                  <div className="card-body name-brand py-1">
                    <div
                      className="brand-name"
                      style={{
                        fontFamily: "Poppins,sans-serif",
                        fontSize: "14px",
                        fontWeight: "700",
                      }}
                    >
                      {product.name}
                    </div>
                  </div>

                  {/* Product Description */}
                  <div className="card-body  py-0">
                    <p
                      className="user-desc"
                      style={{
                        fontFamily: "Poppins,sans-serif",
                        fontSize: "12px",
                        fontWeight: "400",
                        color: "#878D98",
                      }}
                    >
                      Vitamin E contains vitamin E that acts as an antioxidant.
                      It stops the formation
                    </p>
                  </div>

                  {/* Product Price */}
                  <div className="card-body  py-0">
                    <div
                      className="brand-price"
                      style={{
                        fontFamily: "Poppins,sans-serif",
                        fontSize: "14px",
                        fontWeight: "700",
                      }}
                    >
                      {product.price} /{" "}
                      <span
                        className="brand-unit"
                        style={{
                          fontFamily: "Poppins,sans-serif",
                          fontSize: "14px",
                          fontWeight: "700",
                        }}
                      >
                        {product.unit}
                      </span>
                    </div>
                  </div>

                  {/* <div className="card-body  py-0">
                    <div className="brand-name">{product.location}</div>
                  </div> */}

                  {/* Inquiry Button */}
                  <div className="card-footer bg-white border-0 text-center mt-auto">
                    <button
                      className="btn w-100"
                      style={{
                        backgroundColor: "#FFC817",
                        borderRadius: "18px",
                      }}
                    >
                      Inquire
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="container-fluid px-5 py-4">
          <h2
            className="mb-4 fw-bold"
            style={{
              fontFamily: "Poppins,sans-serif",
              fontWeight: "600",
              fontSize: "28px",
            }}
          >
            Beast Seller
          </h2>
          <div className="row g-3">
            {products.map((product) => (
              <div key={product.id} className="col-6 col-md-4 col-lg-2 d-flex">
                <div className="card w-100 d-flex flex-column shadow-sm p-2">
                  {/* User Info - Profile Image, Brand & Location */}

                  {/* Product Image */}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="card-img-top p-2"
                    style={{ objectFit: "cover", aspectRatio: "1 / 1" }}
                  />

                  {/* Product Name */}
                  <div className="card-body name-brand py-1">
                    <div
                      className="brand-name"
                      style={{
                        fontFamily: "Poppins,sans-serif",
                        fontSize: "14px",
                        fontWeight: "700",
                      }}
                    >
                      {product.name}
                    </div>
                  </div>

                  {/* Product Description */}
                  <div className="card-body  py-0">
                    <p
                      className="user-desc"
                      style={{
                        fontFamily: "Poppins,sans-serif",
                        fontSize: "12px",
                        fontWeight: "400",
                        color: "#878D98",
                      }}
                    >
                      High-quality vitamin C supplement for better immunity and
                      health.
                    </p>
                  </div>

                  {/* Inquiry Button */}
                  <div className="card-footer bg-white border-0 text-center mt-auto">
                    <button
                      className="btn w-100"
                      style={{
                        backgroundColor: "#FFC817",
                        borderRadius: "18px",
                      }}
                    >
                      Get Quote
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Box sx={{ px: { xs: 2, md: 6 }, py: 6 }}>
          <Grid container spacing={4} alignItems="center">
            {/* Left Form Section */}
            <Grid item xs={12} md={6}>
              <Typography variant="h5" fontWeight={700} mb={1}>
                Post Buy Requirement
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" mb={4}>
                Tell us what you need, and we’ll help you get quotes
              </Typography>

              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <InputLabel shrink sx={{ mb: 1, fontWeight: 500 }}>
                    Product Description
                  </InputLabel>
                  <TextField
                    placeholder="Enter Description"
                    fullWidth
                    multiline
                    rows={3}
                    variant="outlined"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "12px",
                        backgroundColor: "#FAFAFA",
                        padding: 0,
                        "& fieldset": {
                          borderColor: "#000",
                        },
                        "&:hover fieldset": {
                          borderColor: "#000",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "#000",
                        },
                        "& textarea": {
                          padding: "16px",
                          fontSize: "16px",
                        },
                      },
                    }}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <InputLabel shrink sx={{ mb: 1, fontWeight: 500 }}>
                    Full Name
                  </InputLabel>
                  <TextField
                    placeholder="Enter Full Name"
                    fullWidth
                    variant="outlined"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "12px",
                        backgroundColor: "#FAFAFA",
                        padding: 0,
                        "& fieldset": {
                          borderColor: "#000",
                        },
                        "&:hover fieldset": {
                          borderColor: "#000",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "#000",
                        },
                        "& input": {
                          padding: "14px",
                          fontSize: "16px",
                        },
                      },
                    }}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <InputLabel shrink sx={{ mb: 1, fontWeight: 500 }}>
                    Category Name
                  </InputLabel>
                  <FormControl fullWidth>
                    <Select
                      displayEmpty
                      defaultValue=""
                      variant="outlined"
                      sx={{
                        borderRadius: "12px",
                        "& .MuiOutlinedInput-notchedOutline": {
                          borderColor: "#000", // black border
                        },
                        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                          borderColor: "#000",
                        },
                        "& .MuiSelect-select": {
                          padding: "14px",
                          color: "#555",
                        },
                        "& svg": {
                          color: "#000", // dropdown arrow color
                        },
                      }}
                    >
                      <MenuItem disabled value="">
                        Select Category
                      </MenuItem>
                      {categorie.map((cat) => (
                        <MenuItem key={cat} value={cat}>
                          {cat}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item xs={12} md={6}>
                  <InputLabel shrink sx={{ mb: 1, fontWeight: 500 }}>
                    State
                  </InputLabel>
                  <FormControl fullWidth>
                    <Select
                      displayEmpty
                      defaultValue=""
                      variant="outlined"
                      sx={{
                        borderRadius: "12px",
                        "& .MuiOutlinedInput-notchedOutline": {
                          borderColor: "#000",
                        },
                        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                          borderColor: "#000",
                        },
                        "& .MuiSelect-select": {
                          padding: "14px",
                          color: "#555",
                        },
                        "& svg": {
                          color: "#000",
                        },
                      }}
                    >
                      <MenuItem disabled value="">
                        Select State
                      </MenuItem>
                      {states.map((state) => (
                        <MenuItem key={state} value={state}>
                          {state}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item xs={12} md={6}>
                  <InputLabel shrink sx={{ mb: 1, fontWeight: 500 }}>
                    City Name
                  </InputLabel>
                  <FormControl fullWidth>
                    <Select
                      displayEmpty
                      defaultValue=""
                      variant="outlined"
                      sx={{
                        borderRadius: "12px",
                        "& .MuiOutlinedInput-notchedOutline": {
                          borderColor: "#000",
                        },
                        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                          borderColor: "#000",
                        },
                        "& .MuiSelect-select": {
                          padding: "14px",
                          color: "#555",
                        },
                        "& svg": {
                          color: "#000",
                        },
                      }}
                    >
                      <MenuItem disabled value="">
                        Select City Name
                      </MenuItem>
                      {cities.map((city) => (
                        <MenuItem key={city} value={city}>
                          {city}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item xs={12} md={6}>
                  <InputLabel shrink sx={{ mb: 1, fontWeight: 500 }}>
                    Contact Number
                  </InputLabel>
                  <TextField
                    placeholder="Enter Mobile"
                    fullWidth
                    variant="outlined"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "12px",
                        backgroundColor: "#FAFAFA",
                        padding: 0,
                        "& fieldset": {
                          borderColor: "#000",
                        },
                        "&:hover fieldset": {
                          borderColor: "#000",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "#000",
                        },
                        "& input": {
                          padding: "14px",
                          fontSize: "16px",
                        },
                      },
                    }}
                  />
                </Grid>

                <Grid item xs={12} md={6} display="flex" alignItems="flex-end">
                  <Box
                    variant="contained"
                    fullWidth
                    sx={{
                      py: 1.5,
                      width: "100%",
                      borderRadius: "18px",
                      bgcolor: "#FFC107",
                      fontWeight: "500",
                      fontSize: "20px",
                      textTransform: "none",
                      fontFamily: "Poppins,sans-serif",
                      "&:hover": {
                        bgcolor: "#ffb300",
                      },
                      paddingLeft: "41%",
                    }}
                  >
                    Submit
                  </Box>
                </Grid>
              </Grid>
            </Grid>

            {/* Right Image Section */}
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  maxWidth: 600,
                  mx: "auto",
                  height: "auto",
                }}
              >
                {/* Main Person Image */}
                <Box
                  component="img"
                  src={hero}
                  alt="Business Woman"
                  sx={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    zIndex: 2,
                  }}
                />

                {/* Add other labels or images similarly using Box with position: absolute */}
              </Box>
            </Grid>
          </Grid>
        </Box>

        <div className="container-fluid px-5 py-4">
          <h2
            className="mt-4"
            style={{
              fontFamily: "Poppins,sans-serif",
              fontSize: "28px",
              fontWeight: "600",
            }}
          >
            Trending Categories
          </h2>
          <div className="row">
            {categoryCards.map((card) => (
              <div key={card.id} className="col-12 col-sm-6 col-lg-3 mb-4">
                <div className="card border-0" style={{ borderRadius: "18px" }}>
                  {" "}
                  {/* Removed card border here */}
                  {/* Header */}
                  <div
                    className="card-header d-flex align-items-center justify-content-between bg-white border-0"
                    style={{ borderRadius: "18px" }}
                  >
                    <div className="d-flex align-items-center">
                      <img
                        src={card.userImage}
                        alt={card.username}
                        className="rounded-circle me-2"
                        width="30"
                        height="30"
                      />
                      <span className="fw-medium">{card.username}</span>
                    </div>
                    <button
                      className="btn btn-light btn-sm border-0"
                      style={{ background: "none" }}
                    >
                      <MoreHorizontal size={28} />
                    </button>
                  </div>
                  {/* Image */}
                  <img
                    src={card.mainImage}
                    alt={card.imageAlt}
                    className="card-img-top"
                  />
                  {/* Card Body */}
                  <div className="card-body">
                    <div className="d-flex align-items-center mb-2">
                      <button
                        className="btn"
                        style={{
                          display: "flex",
                          borderRadius: "18px",
                          backgroundColor: "#EAEEF1",
                          justifyContent: "center",
                          alignContent: "center",
                        }}
                      >
                        <Heart
                          size={18}
                          className="text-dark"
                          style={{ marginTop: "2px" }}
                        />
                        <div style={{ paddingLeft: "3px" }}>5.44k</div>
                      </button>
                      <div style={{ marginLeft: "auto" }}>
                        <button className="btn  save-btn btn-sm">
                          <img
                            src={send}
                            alt="send"
                            style={{ width: "16px", height: "16px" }}
                          />
                        </button>
                        <button className="btn save-btn btn-sm">
                          <img
                            src={save}
                            alt="Bookmark"
                            style={{ width: "16px", height: "16px" }}
                          />
                        </button>
                        <button
                          className="btn p-0 ms-auto"
                          style={{
                            fontFamily: "Poppins,sans-serif",
                            fontSize: "14px",
                          }}
                        >
                          Connect
                        </button>
                      </div>
                    </div>

                    <p className="small text-muted fs-6">{card.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* testimonialsss */}
        <div className="gtco-testimonials container">
          <h3 className="text-center">What Our Customers Say About Us</h3>
          <h5 className="text-center">
            Don't just take our word for it. Our customers say it the best.
          </h5>
          {/* <h2></h2> */}
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-item text-center">
                <img
                  className="testimonial-img"
                  src={testimonial.image}
                  alt={testimonial.name}
                />
                <h5>{testimonial.name} </h5>
                <p className="testimonial-text">“{testimonial.text}”</p>
              </div>
            ))}
          </Slider>
        </div>

        {/* <div className="container py-5">
          <h2 className="text-center mb-4">Trusted by Global Brands</h2>
          <Slider {...settings} className="px-3">
            {brands.map((brand, index) => (
              <div key={index} className="text-center">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="img-fluid"
                  style={{ height: "60px", margin: "auto" }}
                />
              </div>
            ))}
          </Slider>
        </div> */}
      </div>
      {/* Footer */}
      <footer
        className="text-center py-4 border-none"
        style={{ boxShadow: "rgba(33, 35, 38, 0.1) 0px 10px 10px 10px" }}
      >
        <p className="text-muted small mb-0">
          Copyright © 2025 Powered By Waaro
        </p>
      </footer>
    </>
  );
}

export default LendingPage;
