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
          <Col className="p-1" xs={12} md={6}>
            <div className="main-div">
              <div>
                <img
                  src={picOne}
                  alt="Girl in a jacket"
                  className="img-fluid" 
                />
              </div>
         
            </div>
          </Col>
          <Col className="p-1"  xs={12} md={6}>
            <div>
            <ul>
                  <li>24 hour Patiant Support</li>
                  <li>Experienced Doctors</li>
                  <li>Modern Labretories</li>
                  <li>Aircondion Facilities</li>
                  <li>24 hour Pharmacy Management</li>
                </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CustomerAmbulence;
