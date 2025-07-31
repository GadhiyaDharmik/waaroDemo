import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../asset/logo.svg";
import { useNavigate, useLocation } from "react-router-dom"; // Import useLocation
import { useCart } from "./CartContext";

// import DashboardIcon from "../asset/house-2.png";
// import FolderIcon from "../asset/simcard.png";
// import DataUsageIcon from "../asset/shop.png";
// import PersonIcon from "../asset/tag-user.png";
// import settings from "../asset/setting-3.png";
// import ExitToAppIcon from "../asset/toggle-off.png";

import "./Sidebar.css";
import { Button, Modal } from "react-bootstrap";

import {
  BookCopy,
  ChartColumnStacked,
  ChartPie,
  CircleUserRound,
  CopyPlus,
  Database,
  LayoutDashboard,
  LogOut,
  Settings,
  SquareUser,
  User,
} from "lucide-react";

const Sidebar = () => {
  const navigate = useNavigate();
  const { user, logout } = useCart();

  const location = useLocation(); // Use useLocation to track the current route
  const [isOpen, setIsOpen] = useState(true);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleClose = () => setIsOpenModal(false);

  const isSmallScreen = useMediaQuery("(max-width:600px)");

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    // {
    //   text: "Add Category",
    //   icon: <CopyPlus alt="icon" className="icon" color="#ffffff" />,
    //   link: "/upload-data",
    // },
    {
      text: "Dashboard",
      icon: <LayoutDashboard alt="icon" className="icon" color="#ffffff" />,
      link: "/dashboard",
    },
    {
      text: "Analytic",
      icon: <ChartPie color="#ffffff" alt="icon" className="icon" />,
      link: "/analytics",
    },
    {
      text: "Inquiry",
      icon: <CircleUserRound color="#ffffff" alt="icon" className="icon" />,
      link: "/inquiry",
    },
    {
      text: "Product Listing",
      icon: <BookCopy alt="icon" className="icon" color="#ffffff" />,
      link: "/product-listing",
    },
    // {
    //   text: "Your Data",
    //   icon: <Database alt="icon" className="icon" color="#ffffff" />,
    //   link: "/your-data",
    // },
    // {
    //   text: "Lead",
    //   icon: <User alt="icon" className="icon" color="#ffffff" />,
    //   link: "/lead",
    // },
  ];

  const profileItems = [
    {
      text: "Profile",
      icon: <SquareUser alt="icon" className="icon" color="#ffffff" />,
    },
    {
      text: "Settings",
      icon: <Settings alt="icon" className="icon" color="#ffffff" />,
    },
  ];

  const handleMenuItemClick = (link) => {
    // if (link !== "/dashboard") {
    //   setIsOpenModal(true);
    // } else {
    navigate(link);
    // }
  };

  return (
    <>
      {(isSmallScreen || !isOpen) && (
        <IconButton
          color="primary"
          aria-label="open drawer"
          onClick={toggleDrawer}
          sx={{ position: "fixed", top: 16, left: 16, zIndex: 1201 }}
        >
          <MenuIcon />
        </IconButton>
      )}

      <Drawer
        variant={isSmallScreen ? "temporary" : "persistent"}
        open={isOpen}
        anchor="left"
        onClose={toggleDrawer}
        sx={{
          "& .MuiDrawer-paper": {
            width: 196,
            boxSizing: "border-box",
            borderRadius: "1rem",
            padding: "6px",
          },
        }}
          className="shadow"

      >
        <div
          style={{
            backgroundColor: "#FFFFFF",
            height: "50%",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
          className="mt-2"
        >
          {/* Top Menu */}
          <List>
            {menuItems.map((item) => (
              <ListItem
                button
                key={item.text}
                sx={{ "&:hover": { backgroundColor: "#000" } }}
                onClick={() => handleMenuItemClick(item.link)}
                className={location.pathname === item.link ? "active" : ""}
              >
                <div>{item.icon}</div>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>

          {/* Bottom Profile Section */}
          <div style={{ padding: "1rem 0rem", borderTop: "1px solid #FFC817" }}>
            <div style={{}}>
              <div
                style={{
                  border: "1px solid #e6e6e6",
                  borderRadius: "12px",
                  padding: "8px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  <div style={{ fontSize: "11px", color: "#999" }}>
                    Active{" "}
                    {new Date().toLocaleDateString("en-IN", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })}
                  </div>
                  <div style={{ fontWeight: "600", fontSize: "14px" }}>
                    {user?.name || "User Name"}
                  </div>
                  {/* <p style={{ fontSize: "12px", color: "#888", margin: 0 }}>
        User ID: GJ01AB{user?._id?.slice(0, 4) || ""}
      </p> */}
                </div>

                <div
                  style={{
                    position: "relative",
                    width: "36px",
                    height: "36px",
                  }}
                >
                  <img
                    src={
                      user?.profilePicture && user?.profilePicture !== ""
                        ? user.profilePicture
                        : "https://i.imgur.com/og1Wc1z.png"
                    }
                    alt="avatar"
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "50%",
                      objectFit: "cover",
                      backgroundColor: "#fabb18",
                      padding: "4px",
                    }}
                  />
                  <span
                    style={{
                      position: "absolute",
                      bottom: 0,
                      right: 0,
                      width: "8px",
                      height: "8px",
                      backgroundColor: "#32cd32",
                      borderRadius: "50%",
                      border: "2px solid white",
                    }}
                  ></span>
                </div>
              </div>
            </div>

            <List>
              {profileItems.map((item) => (
                <ListItem
                  button
                  key={item.text}
                  onClick={() => handleMenuItemClick(item.link)}
                  sx={{ marginTop: "10px" }}
                >
                  <div>{item.icon}</div>
                  <ListItemText primary={item.text} />
                </ListItem>
              ))}
              <ListItem
                button
                sx={{ marginTop: "10px" }}
                onClick={() => {
                  navigate("/login");
                  localStorage.clear();
                }}
              >
                <div>
                  <LogOut className="icon" />
                </div>
                <ListItemText primary="Sign Out" />
              </ListItem>
            </List>
          </div>
        </div>
      </Drawer>

      <Modal show={isOpenModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Coming Soon!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            <strong>All the Features will be unlocked after the Launch.</strong>
            <br />
            Enjoy the full access <strong>for 3 Months.</strong>
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            style={{
              background: "#FABB18",
              // display: "flex",
              alignItems: "center",
              fontWeight: "bold",
              border: "none",
            }}
            onClick={handleClose}
          >
            Got it!
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Sidebar;
