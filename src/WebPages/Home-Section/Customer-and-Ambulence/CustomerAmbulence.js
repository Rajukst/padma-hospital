import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import picOne from "../../../Images/customer.jpg";
import picTwo from "../../../Images/ambulance.jpg";
import "./Customer.css";
const CustomerAmbulence = () => {
  return (
    <div>
      <h1>This is Customer and ambulence</h1>
      <Container fluid>
        <Row>
          <Col xs={12} md={6}>
            <div className="main-div">
              <div>
                <img
                  src={picOne}
                  alt="Girl in a jacket"
                  width="500"
                  height="600"
                />
              </div>
              <div className="mt-5">
                <ul>
                  <li>24 hour Patiant Support</li>
                  <li>Experienced Doctors</li>
                  <li>Modern Labretories</li>
                  <li>Aircondion Facilities</li>
                  <li>24 hour Pharmacy Management</li>
                  <li>24 hour Ambulence Service</li>
                  <li>01531000000 (Ambulence)</li>
                </ul>
              </div>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div>
              <img
                src={picTwo}
                alt="Girl in a jacket"
                width="500"
                height="600"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CustomerAmbulence;
