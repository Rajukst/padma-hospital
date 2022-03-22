import React, { useState, useEffect } from "react";
import { Row } from "react-bootstrap";
import ExploreTest from "./ExploreTest";

const TestLab = () => {
  const [testLab, setTestLab] = useState([]);
  useEffect(() => {
    fetch("https://protected-basin-36315.herokuapp.com/doctors")
      .then((res) => res.json())
      .then((data) => setTestLab(data));
  }, []);
  return (
    <div>
      <h1>This is Test Lab</h1>
      <Row xs={1} md={4} className="g-5 m-1">
        {testLab.map((getTestData) => (
          <ExploreTest key={getTestData._id} myTest={getTestData}></ExploreTest>
        ))}
      </Row>
    </div>
  );
};

export default TestLab;
