import { Card as MUICard, CardContent, Grid, Typography } from "@mui/material";
import React from "react";
import { Button } from "react-bootstrap";
import { MdOutlineAddBox } from "react-icons/md";

const CategoryCard = ({ card, handleClick, buttonLabel }) => {
  return (
    <MUICard
      style={{
        backgroundColor: "#FABB18",
        borderRadius: "15px",
        overflow: "hidden",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        textAlign: "center",
        border: "5px solid #FABB18",
      }}
    >
      {/* Card Header */}
      <div
        style={{
          backgroundColor: "#FABB18",
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
          // background: "#000",
          padding: "12px",
          color: "#ffffff",
          flex: 1,
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
            color: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontWeight: "bold",
            background: "#000",
            width: "100%",
            borderRadius: "10px",
          }}
          onClick={handleClick}
        >
          {/* <MdOutlineRemove
                       style={{
                         marginRight: "8px",
                         fontSize: "18px",
                         color: "#fff",
                       }}
                     />{" "} */}
          {buttonLabel}
        </Button>
      </CardContent>
    </MUICard>
  );
};

export default CategoryCard;
