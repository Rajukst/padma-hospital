import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const ExploreDoctor = ({ myList }) => {
  const { _id, name, image, designation } = myList;
  return (
    <Col>
      <Card>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>Name: {name}</Card.Title>
          <Card.Title>Designation: {designation}</Card.Title>
          <Link to={`/booking-page/${_id}`}>
            <Button variant="outline-dark">Appoint Now</Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ExploreDoctor;
