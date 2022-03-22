import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import MyCalender from "../../Shared/MyCalender";

const SingleDoctor = () => {
  const [doctor, setDoctor] = useState({});
  const { serviceId } = useParams();
  useEffect(() => {
    fetch(`https://protected-basin-36315.herokuapp.com/doctors/${serviceId}`)
      .then((res) => res.json())
      .then((data) => setDoctor(data));
  }, []);
  return (
    <div>
      <h1>This is Single Doctor</h1>
      <Container>
        <Row className="g-5 m-1">
          <Col xs={12} md={5} lg={5}>
            <img
              src={doctor?.image}
              alt="Girl in a jacket"
              width="500"
              height="600"
            />
          </Col>
          <Col xs={12} md={7} lg={7}>
            <h1>Doctor name: {doctor?.name}</h1>
            <h2>Designation: {doctor?.designation}</h2>
            <p>Information: {doctor?.description}</p>
            <MyCalender></MyCalender>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SingleDoctor;
