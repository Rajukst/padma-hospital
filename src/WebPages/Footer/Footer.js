import React from 'react';
import "./Footer.css"
import payment from "../../Images/Payment-Brands.jpg"
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div className="footer">
        <Container>
          <Row className="footer-row">
            <Col xs={12} md={6} lg={4}>
              <p>Level-3, 35, Anwar yousuf Road, Kushtia</p>
              <p>kushtia@web.com</p>
              <p>+880177766623, 01531930822</p>
             
            </Col>
            <Col className="all-conditons" xs={12} md={6} lg={4}>
              <Link to="/about">About Us</Link>
              <Link to="/success">Success Story</Link>
              <Link to="/refund">Refund Policy</Link>
              <Link to="/terms">Terms & Conditions</Link>
              <Link to="/privacy">Privacy Policy</Link>
            </Col>
            <Col xs={12} md={6} lg={4}>
              <img
                className="img-fluid my-image"
                src={payment}
                alt="Girl with Books"
              />
            </Col>
          </Row>
        </Container>
        <h4>copyright &copy; All right Padma Diagnostic</h4>
      </div>
    );
};

export default Footer;