import { useState } from "react";
import { Button, Form, Card, Row, Col } from "react-bootstrap";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Delete from "../../asset/delete_img.png";
import UploadPlaceholder from "../../asset/upload_placeholder.png"; // Add a placeholder image
import { toast } from "react-toastify";
import axiosMain from "../utils/axiosMain";

function AdvertiseForm() {
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");

  const people = [
    {
      name: "John Doe",
      message: "Can you help translate this site?",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      name: "Jane Smith",
      message: "Can you help translate this site?",
      avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
      name: "Alice Brown",
      message: "Can you help translate this site?",
      avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Advertisement submitted successfully!");
    axiosMain
      .post("/advertise", { image, description, url })
      .catch((err) => console.log(err));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };
  const [selectedOption, setSelectedOption] = useState("url"); // Default selection

  return (
    <Card className="p-4" style={{ background: "transparent" }}>
      <Row>
        {/* Left Side: Form */}
        <Col xs={12} md={6} className="mb-4 justify-content-center">
          <Form
            onSubmit={handleSubmit}
            className="d-flex flex-column align-items-center"
          >
            <Form.Group className="mb-3">
              <label
                htmlFor="imageUpload"
                style={{
                  width: "200px",
                  height: "200px",
                  cursor: "pointer",
                  background: "#f5f5f5",
                  border: "2px solid #fabb18",
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                }}
              >
                <img
                  src={image || UploadPlaceholder}
                  alt="Upload"
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </label>
              <input
                type="file"
                id="imageUpload"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleImageChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" style={{ width: "100%" }}>
              <Form.Label className="fs-6">Description</Form.Label>
              <TextField
                fullWidth
                multiline
                rows={3}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter your description..."
                InputProps={{
                  style: {
                    color: "#000",
                    border: "2px solid #fabb18",
                    borderRadius: "7px",
                  }, // Border color
                }}
                InputLabelProps={{
                  style: { color: "#9F8CF1" },
                }}
                sx={{
                  "& .MuiInputBase-input::placeholder": {
                    color: "#9F8CF1",
                    opacity: 1,
                  },
                  background: "white",
                  borderRadius: "7px",
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3" style={{ width: "100%" }}>
              <FormControl component="fieldset" style={{ width: "100%" }}>
                <RadioGroup
                  value={selectedOption}
                  onChange={(e) => setSelectedOption(e.target.value)}
                  style={{ flexDirection: "column" }} // Stacks radio buttons vertically
                >
                  <FormControlLabel
                    value="url"
                    control={
                      <Radio
                        sx={{
                          color: "#fabb18",
                          "&.Mui-checked": { color: "#fabb18" },
                          "&.MuiRadio-root": { borderColor: "#fabb18" },
                        }}
                      />
                    }
                    label="Your URL"
                  />

                  {/* Show URL input only if "Your URL" is selected */}
                  {selectedOption === "url" && (
                    <TextField
                      fullWidth
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      placeholder="Enter your URL..."
                      InputProps={{
                        style: {
                          border: "2px solid #fabb18",
                          borderRadius: "7px",
                        }, // Border color
                      }}
                      sx={{
                        "& .MuiInputBase-input::placeholder": {
                          color: "#9F8CF1",
                          opacity: 1,
                        },
                        background: "white",
                        borderRadius: "7px",
                        marginTop: "8px",
                      }}
                    />
                  )}

                  <FormControlLabel
                    value="inquiry"
                    control={
                      <Radio
                        sx={{
                          color: "#fabb18",
                          "&.Mui-checked": { color: "#fabb18" },
                          "&.MuiRadio-root": { borderColor: "#fabb18" },
                        }}
                      />
                    }
                    label="Inquiry"
                  />
                </RadioGroup>
              </FormControl>
            </Form.Group>

            <Button type="submit" variant="primary" className="w-100 pt-2 pb-2">
              Submit
            </Button>
          </Form>
        </Col>

        {/* Right Side: List */}
        <Col xs={12} md={6}>
          <Box style={{ background: "#fff" }} className="rounded-3 p-3">
            <Typography
              className="rounded-3 p-2 text-center"
              style={{ background: "#fabb18", color: "white" }}
            >
              Instant Benefit Every Month - 3 Posts for Paid Users
            </Typography>
            <Grid container spacing={2} className="mt-1">
              {people.map((person, index) => (
                <Grid
                  item
                  xs={12}
                  key={index}
                  className="d-flex align-items-center p-2"
                  style={{
                    borderBottom: "1px solid #ddd",
                  }}
                >
                  <img
                    src={person.avatar}
                    alt={person.name}
                    style={{
                      height: "90px",
                      width: "90px",
                      objectFit: "cover",
                      border: "2px solid #fabb18",
                      borderRadius: "10px",
                    }}
                    className="me-3"
                  />

                  <Typography>{person.message}</Typography>

                  <Button
                    style={{
                      background: "#9F8CF1",
                      width: "40px",
                      height: "40px",
                      borderRadius: "8px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    size="sm"
                    className="ms-auto"
                  >
                    <img
                      src={Delete}
                      alt="Delete"
                      style={{
                        width: "24px",
                        height: "24px",
                        filter: "brightness(0) invert(1)",
                      }} // Makes the image white on colored bg
                    />
                  </Button>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Col>
      </Row>
    </Card>
  );
}

export default AdvertiseForm;
