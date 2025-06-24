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
      link: "/add-product-main-page",
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
            width: 220,
            boxSizing: "border-box",
            padding: "0.5rem",
            scrollbarWidth: "none",
            color: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          },
        }}
      >
        {/* <div
          style={{
            textAlign: "center",
            padding: "16px 0",
            backgroundColor: "#FFFFFF",
            borderRadius: 10,
          }}
        >
          <img src={logo} alt="Logo" className="icon" />
        </div> */}

        <div
          style={{
            backgroundColor: "#FFFFFF",
            height: "100%",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
          className="mt-2"
        >
          <List>
            {menuItems.map((item) => (
              <ListItem
                button
                key={item.text}
                sx={{ "&:hover": { backgroundColor: "#6A4ED8" } }}
                onClick={() => handleMenuItemClick(item.link)}
                className={location.pathname === item.link ? "active" : ""}
              >
                <div>
                  {/* <img src={item.icon} alt="icon" className="icon" /> */}
                  {item.icon}
                </div>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>

          <Divider
            sx={{
              backgroundColor: "#fff",
              margin: "10px",
              padding: "1px",
              borderColor: "#fff",
              borderSize: "2px",
            }}
          />

          <List>
            {profileItems.map((item) => (
              <ListItem
                button
                key={item.text}
                onClick={() => handleMenuItemClick(item.link)}
                sx={{ marginTop: "10px" }}
              >
                <div>
                  {/* <img src={item.icon} alt="icon" className="icon" /> */}
                  {item.icon}
                </div>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>

          <List>
            <ListItem
              button
              sx={{
                "&:hover": { backgroundColor: "#6A4ED8" },
                marginTop: "auto",
              }}
              onClick={() => {
                navigate("/login");
                localStorage.clear();
              }}
            >
              <div>
                {/* <img src={ExitToAppIcon} alt="icon" className="icon" /> */}
                <LogOut color="#ffffff" alt="icon" className="icon" />
              </div>
              <ListItemText primary="Sign Out" />
            </ListItem>
          </List>
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
