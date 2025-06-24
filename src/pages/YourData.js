import React, { useEffect, useState } from "react";
import CategoryCard from "../components/CategoryCard";
import { Box, Grid, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import axiosMain from "./utils/axiosMain";

const YourData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const userId = JSON.parse(localStorage.getItem("userDetail"))?.user?._id;
    axiosMain
      .get("/your-list/" + userId)
      .then((res) => setData(res.dataCategories))
      .catch((err) => console.log(err));
  }, []);

  function downloadFile(fileUrl) {
    // Make the GET request using Axios with the `responseType` set to 'blob'
    axiosMain({
      url: fileUrl,
      method: "GET",
      responseType: "blob", // Set response type to blob to handle binary data
    })
      .then((response) => {
        // Create a Blob object from the response
        const blob = new Blob([response.data], {
          type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        });

        // Create a temporary link to trigger the download
        const link = document.createElement("a");
        const url = URL.createObjectURL(blob);
        link.href = url;
        link.download = fileUrl.split("/").pop(); // Extract the filename from the URL
        document.body.appendChild(link);
        link.click(); // Trigger the download
        document.body.removeChild(link);
        URL.revokeObjectURL(url); // Clean up the URL object
      })
      .catch((error) => {
        console.error("Download error:", error);
      });
  }

  return (
    <div className="content">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              border: "2px solid #000",
              borderRadius: "15px",
              padding: "0.5rem 1rem",
              maxWidth: "400px",
              backgroundColor: "white",
              marginBottom: "10px",
              background: "transparent",
              flexDirection: "row-reverse",
            }}
          >
            <SearchIcon
              sx={{ color: "#000000", marginRight: "8px", cursor: "pointer" }}
            />
            <InputBase
              placeholder="Search Category"
              fullWidth
              sx={{
                color: "#000",
                fontSize: "1rem",
                padding: "4px 8px 5px",
              }}
            />
          </Box>  
        </Grid>
      </Grid>
      {/* <h2>Your Data</h2> */}
      {/* <div className="card-container"> */}
      <Grid container spacing={2}>
        {data.map((item, index) => (
          <Grid item xs={12} sm={6} md={3} lg={3} xl={2} key={index}>
            <CategoryCard
              key={index}
              card={item}
              buttonLabel="Download"
              handleClick={() => downloadFile(item.excel)}
            />
          </Grid>
        ))}{" "}
      </Grid>

      {/* </div> */}
    </div>
  );
};

export default YourData;
