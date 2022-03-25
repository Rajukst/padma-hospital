import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Col, Container, Row, Button } from "react-bootstrap";
const TestProfile = () => {
  const { serviceId } = useParams();
  const [labTest, setLabTest] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/lab-test/${serviceId}`)
      .then((res) => res.json())
      .then((data) => setLabTest(data));
  }, []);
  return (
    <Container>
      <Row className="g-5 m-1">
        <Col xs={12} md={5} lg={5}>
          <img
            src={labTest?.image}
            alt="Girl in a jacket"
            width="500"
            height="600"
          />
        </Col>
        <Col xs={12} md={7} lg={7}>
          <h1>Test Name: {labTest?.name}</h1>
          <h2>Test Fee: ৳{labTest?.fee}</h2>
          <p>Information: {labTest?.description}</p>
        </Col>
      </Row>
      <Link to="/test">
        <Button>Back To Test</Button>
      </Link>
    </Container>
  );
};

export default TestProfile;
