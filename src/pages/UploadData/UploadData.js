
import React, { useState } from "react";
import { Button, Form, Card, Row, Col } from "react-bootstrap";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import UploadPlaceholder from "../../asset/upload_placeholder.png";
import FileUploadIcon from "@mui/icons-material/UploadFile";
import { KJUR } from "jsrsasign";
import axiosMain from "../utils/axiosMain";
import { toast } from "react-toastify";

// ======= Service Account Credentials & Config =========
const SERVICE_ACCOUNT_EMAIL = "data-shopper@ecommerce-440713.iam.gserviceaccount.com";
const PRIVATE_KEY = `-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCekTGzBdN5dzib\nZOz7FoowkCyJ1fxwDQdznSGv/vOANEE281yiQSLtsOfeEMap4bjdWF05n8Ny+NPG\nu7BqfhtxJO6q9hHmapSsyFFTzWp4bu68U9L6GRbhPhOL5ijc6AVFDEWz9xi3UvkG\npwcqQvAO8P9uaFQ/OTfsgAx6CVP+6353bXgKSH3DVqxj82kF1qHOcxwSS/xtrfdZ\nMucktK54Y8J29jnkhOKwKgmwW0nFGRIB4Nn0c1iBGabCGO4YO6in64z9XtMDEjTK\nQjGOeZyyhc/oXK5Qx0BwduceZ0mzZH6EnGGi7nz+s1+Dt7RwXm/zi8FxFwhXKMAP\n+t+ctRS3AgMBAAECggEAFfm+uYuFKMBXyAbPZmepSdxb+n5S40nq+SA9xaEVKMoV\nKlhv7iIOL9g59Odo9leiFzW34H8+cctVDlB/Z+2HlWwDkmNSomxYToSJ6438binG\n9wgRpTefmXfQ8wKNhzq2AEEYfT3cNGFQwetEGEdOncN9+FSH2HtFlNvqNBThieKW\neY2HPJsKosNbphq+rn4BDXsyVMXldz6vKhluA0wei2G/siBvFz2x/lOhe58AiVSd\nDDHLYsHiuwJjoeLg2H8B3yy29Edch3A5L5XzEGbXK8nek5ZZRegbuertH/vteCNA\nldH/VTvFH4pAJmWUhcylkS9O8RO4nuEWlSQviXKcAQKBgQDd1Y4WIpY25r5RmvCo\n9Qpq/xAgHL6ewuUrCK7nfUeZRy6a25y+UULsLZ4XSh6XSXq5QHHq9pnXXV+rJ2rj\n1hpwXk6GQ4FD7pn8fnq9kkrBKodneaT/6HWd2QRsKDFm2nxp7Ujvh46hTh1rW6hj\nUwnd62emq5y6tOcH3wwvK+fxIQKBgQC2/Sf3V1J3oNK5hclXoabyY9xzUQRvCOt+\nDKDIRu8PazlaKAxVLUdqOG3jPOJ2Hmxo97uI8cAYc7RPEDL/tzxJU0Yd/4MxKXS+\nsKuRke0acUQEFqPG3YgoBXJIJU6cYa4cTXHQ6ECZh5Czf9ZWWxSDXHwwtSr1xZwP\nWmss0w1S1wKBgDDEDIszKUCCcx4vaG5MB/FDhwD4MLNn9scCDqkW8lFww38Jfiic\nZpDS6mkGQzlQzujAkQptEZ61iR1v+eCCJafEI5ECb/1GC5XlHAhmi4ZxWfjWVf5n\n1MtRdNZt84Y/y4/huOHnM+Sj7nW2XYsQKyAc6tlJ6pdkw1EIqH4KMd/hAoGAMlnM\nUnm7nmEpOpU+hpdbaZzivvRPBQJuUfvFjfY+t35ohI86fYF9AhRO4FUTdy7945Av\nEQp8Mf48YfjyH3za4M5CH+T7w15F2magfuipVjpOXdWg8Qpp+aEuBf4F+G/ESdNh\nevs9M0GjJlEJuC9NoKulHH3tOT1LqMnXbbkRFHcCgYB+eEz2MObyU0jB0UpLFscC\ncmEb+2CiGSwYFM8ZsS0Wg3wYGUW/E0Pf+g8lYBNlQGGgRL6Ndbo1pII53NXksvce\npPvcYZMLosl4R9uQgv6mU3dRD+n7aCXRM4sDQiohRFcMyLlJOWEt+T50tz5inAfM\nLqqA9D9T/YvMWh7k5whNDw==\n-----END PRIVATE KEY-----\n`
const SCOPE = "https://www.googleapis.com/auth/drive.file";
const TOKEN_URL = "https://oauth2.googleapis.com/token";
const FOLDER_ID = "1rUZu7XeLQoPVSMYNSKjAhyIR64LDyQTx";

// ======= Function to Generate a JWT =========
function generateJWT() {
  const header = { alg: "RS256", typ: "JWT" };
  const iat = Math.floor(Date.now() / 1000);
  const exp = iat + 3600; // valid for 1 hour
  const payload = {
    iss: SERVICE_ACCOUNT_EMAIL,
    scope: SCOPE,
    aud: TOKEN_URL,
    exp: exp,
    iat: iat,
  };

  const sHeader = JSON.stringify(header);
  const sPayload = JSON.stringify(payload);
  const jwt = KJUR.jws.JWS.sign("RS256", sHeader, sPayload, PRIVATE_KEY);
  return jwt;
}

// ======= Function to Exchange JWT for an Access Token =========
async function getAccessToken(jwt) {
  const data = {
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: jwt,
  };

  const formBody = Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");

  const response = await fetch(TOKEN_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: formBody,
  });

  const tokenData = await response.json();
  return tokenData.access_token;
}

// ======= Function to Upload File to Google Drive =========
async function uploadFile(accessToken, file, type) {
  const metadata = {
    name: file.name,
    parents: [type !== "image" ? "1rUZu7XeLQoPVSMYNSKjAhyIR64LDyQTx" : "1zup7WASF2ErRBgqowlVzfw5PjFrbMFQB"],
  };

  const formData = new FormData();
  formData.append("metadata", new Blob([JSON.stringify(metadata)], { type: "application/json" }));
  formData.append("file", file);

  const response = await fetch(
    "https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart",
    {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${accessToken}`,
      },
      body: formData,
    }
  );

  return await response.json();
}

function UploadData() {
  const [image, setImage] = useState(null);
  const [excelFile, setExcelFile] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("")


  const resetForm = () => {
    setImage(null)
    setExcelFile(null)
    setTitle("")
    setDescription("")
    setPrice("")
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setExcelFile(file);
    }
  };

  // Using Cloud :-

  // const handleSubmit = async (e) => {
  //   e.preventDefault(); // Prevent form reload

  //   if (!image) {
  //     console.error("Please select an image");
  //     return;
  //   }
  //   if (!excelFile) {
  //     console.error("Please select an Excel file");
  //     return;
  //   }

  //   try {
  //     // 1. Generate a JWT using your Service Account credentials
  //     const jwt = generateJWT();
  //     // 2. Exchange the JWT for an access token
  //     const accessToken = await getAccessToken(jwt);

  //     // 3. Upload the image file
  //     const imageUploadResult = await uploadFile(accessToken, image, "image");
  //     // console.log("Image upload result:", imageUploadResult);

  //     // 4. Upload the Excel file
  //     const excelUploadResult = await uploadFile(accessToken, excelFile, "file");
  //     // console.log("Excel file upload result:", excelUploadResult);

  //     // alert("Both files uploaded successfully!", {
  //     //   image: imageUploadResult.id,
  //     //   excel: excelUploadResult.id,
  //     //   description: description,
  //     //   price: price,
  //     // })

  //     axiosMain.post("/data-category", {
  //       image: imageUploadResult.id,
  //       excel: excelUploadResult.id,
  //       title: title,
  //       description: description,
  //       price: price,
  //     }).then((res) => {
  //       if (res.success) {
  //         toast.success(res.message)
  //         resetForm()
  //       } else {
  //         toast.error(res.message)
  //       }
  //     }).catch((err) => console.log(err))
  //   } catch (error) {
  //     console.error("Upload error:", error);
  //     alert("Upload failed!");
  //   }
  // };

  // Using System :-

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !description || !price) {
      alert("All fields are required!");
      return;
    }

    if (!image) {
      alert("Please select image!");
      return;
    }
    if (!excelFile) {
      alert("Please select an Excel file");
      return;
    }


    const formData = new FormData();
    formData.append("image", image);
    formData.append("excel", excelFile);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("price", price);

    try {
      const response = await axiosMain.post("https://waaro.in/api/upload-data", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Upload successful!");
      resetForm()
    } catch (error) {
      console.error("Upload failed:", error);
      alert("Upload failed!");
    }
  };

  return (
    <Card className="p-4" style={{ background: "white" }}>
      <Row>
        <Col className="mb-4">
          <Form onSubmit={handleSubmit} className="d-flex flex-column align-items-center">
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
                  src={image ? URL.createObjectURL(image) : UploadPlaceholder}
                  alt="Upload"
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    objectFit: "cover",
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

            <Form.Group className="mb-3 w-100">
              <Form.Label className="fs-6">Upload Excel File</Form.Label>
              <label
                htmlFor="fileUpload"
                className="d-flex align-items-center justify-content-between p-2"
                style={{
                  border: "2px solid #fabb18",
                  borderRadius: "7px",
                  cursor: "pointer",
                  background: "#fff",
                }}
              >
                <Typography>
                  {excelFile ? excelFile.name : "Choose an Excel file..."}
                </Typography>
                <FileUploadIcon style={{ color: "#fabb18" }} />
              </label>
              <input
                type="file"
                id="fileUpload"
                accept=".xls,.xlsx"
                style={{ display: "none" }}
                onChange={handleFileChange}
              />
            </Form.Group>
            <Form.Group className="mb-3 w-100">
              <Form.Label className="fs-6">$ Price</Form.Label>
              <TextField
                fullWidth
                rows={3}
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Enter your Price..."
                InputProps={{
                  style: { border: "2px solid #fabb18", borderRadius: "7px" },
                }}
                sx={{ background: "white", borderRadius: "7px" }}
              />
            </Form.Group>

            <Form.Group className="mb-3 w-100">
              <Form.Label className="fs-6">Title</Form.Label>
              <TextField
                fullWidth
                rows={3}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter your Title..."
                InputProps={{
                  style: { border: "2px solid #fabb18", borderRadius: "7px" },
                }}
                sx={{ background: "white", borderRadius: "7px" }}
              />
            </Form.Group>

            <Form.Group className="mb-3 w-100">
              <Form.Label className="fs-6">Description</Form.Label>
              <TextField
                fullWidth
                multiline
                rows={3}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter your description..."
                InputProps={{
                  style: { border: "2px solid #fabb18", borderRadius: "7px" },
                }}
                sx={{ background: "white", borderRadius: "7px" }}
              />
            </Form.Group>

            <Button type="submit" variant="primary" className="w-100 pt-2 pb-2">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Card>
  );
}

export default UploadData;