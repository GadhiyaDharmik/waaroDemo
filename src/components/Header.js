import React from "react";
import waaroLogo from "../asset/logo.svg";
import profilePicture from "../asset/profilePicture.png";
import { Bell } from "lucide-react";
import { Menu, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const Header = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const userDetail = JSON.parse(localStorage.getItem("userDetail"))?.user || {};
  const handleClose = () => {
    setAnchorEl(null);
    navigate("/landing");
  };
  return (
    <div className="w-full bg-[#f9f9f9] py-3 px-6 flex justify-between items-center gap-4">
      {/* Left Logo Card */}
      <div className="bg-white w-full md:w-auto rounded-xl px-4 py-4 shadow-sm">
        <img
          src={waaroLogo}
          alt="Waaro Logo"
          className="w-[170.65px] h-auto object-contain"
        />
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4 w-full bg-white justify-end rounded-xl px-4 py-3">
        {/* Notification Bell with Green Badge */}
        <div className="relative me-xs-auto">
          <Bell className="w-5 h-5 text-black" />
          <span className="absolute -top-1 -right-1 bg-[#FFCA28] text-black text-[10px] font-bold px-[4px] rounded-full">
            12
          </span>
        </div>

        {/* User Info */}
        {/* <div className="text-end">
          <h6 className="text-sm font-semibold text-black whitespace-nowrap">
            {userDetail?.name || "Manjoy Gupta"}
          </h6>
          <p className="text-xs text-gray-500 whitespace-nowrap">
            {userDetail?.userId || "GJ0123456789"}
          </p>
        </div> */}

        {/* Avatar */}
        <div>
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            className="bg-transparent border-0 p-0"
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
                  style={{ width: "60px", height: "60px", objectFit: "cover" }}
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
                navigate("/landing");
                handleClose();
              }}
              style={{ fontSize: "16px" }}
            >
              Go Back
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleClose();
                localStorage.clear();
                navigate("/landing");
              }}
              style={{ fontSize: "16px" }}
            >
              Logout
            </MenuItem>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default Header;
