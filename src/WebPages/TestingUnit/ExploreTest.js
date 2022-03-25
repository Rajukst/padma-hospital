import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ExploreTest.css";
const ExploreTest = ({ testResult }) => {
  const { _id, name, image, fee, description } = testResult;
  return (
    <Col>
      <Card className="alignmet-card">
        <Card.Img className="img-fluid p-2" variant="top" src={image} />
        <Card.Body>
          <Card.Title>Name: {name}</Card.Title>
          <Card.Title>Test Fee: {fee}</Card.Title>
          <Card.Text>{description.slice(0, 100)}</Card.Text>
          <div className="link-div">
            <Link to={`/labtest/${_id}`}>
              <Button variant="outline-info">View More</Button>
            </Link>
            <Link>
              <Button variant="outline-dark">Start Test</Button>
            </Link>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ExploreTest;
