import React from "react";
import { Container, Row, Col, Form, InputGroup, Button, Dropdown } from "react-bootstrap";
import { FaSearch, FaMapMarkerAlt } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SearchSection.css";

const SearchSection = () => {
  return (
    <Container className="search-container text-center">
      <h6 className="subtitle">Your All-in-one Hub for</h6>
      <h2 className="title">Powerful Business Growth</h2>
      <Row className="justify-content-center mt-3">
        <Col md={8}>
          <InputGroup>
            <Dropdown>
              <Dropdown.Toggle variant="light" className="dropdown-toggle">
                <FaMapMarkerAlt className="me-1" /> All India
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>Ahmedabad</Dropdown.Item>
                <Dropdown.Item>Rajkot</Dropdown.Item>
                <Dropdown.Item>Jamnagar</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Form.Control type="text" placeholder="Enter product/service name" />
            <Button variant="dark">
              <FaSearch /> SEARCH
            </Button>
          </InputGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default SearchSection;
