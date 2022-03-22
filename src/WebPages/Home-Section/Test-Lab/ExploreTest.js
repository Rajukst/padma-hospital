import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";


const ExploreTest = ({ myTest }) => {
  const { _id, name, image, designation } = myTest;
  return (
    <div>
      <Col>
        <Card>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>Name: {name}</Card.Title>
            <Card.Title>Designation: {designation}</Card.Title>
          
            <Link to={`/doctors/${_id}`}>
              <Button variant="outline-dark">View Profile</Button>
            </Link>
            <Link to={`/booking-page/${_id}`}>
              <Button variant="outline-dark">Appoint Now</Button>
            </Link>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default ExploreTest;
