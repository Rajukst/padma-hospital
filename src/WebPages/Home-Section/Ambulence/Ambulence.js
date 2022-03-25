import React from 'react';
import picTwo from "../../../Images/ambulance.jpg";
import { Col, Row, Container } from "react-bootstrap";
const Ambulence = () => {
    return (
        <div>
        <h1>This is Customer and ambulence</h1>
        <Container>
          <Row>
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
            <Col className="p-1" xs={12} md={6}>
<div className="main-div">
  <div>
    <img
      src={picTwo}
      alt="Girl in a jacket"
      className="img-fluid" 
    />
  </div>

</div>
</Col>
          </Row>
        </Container>
      </div>
    );
};

export default Ambulence;
