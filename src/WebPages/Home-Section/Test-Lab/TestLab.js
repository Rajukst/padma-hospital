import React, { useState } from "react";
import { Row } from "react-bootstrap";
import ExploreTest from "./ExploreTest";

const TestLab = () => {
  const [testLab, setTestLab] = useState([]);
  return (
    <div>
      <h1>This is Test Lab</h1>
      <Row xs={1} md={4} className="g-4">
        {testLab.map((getTestData) => (
          <ExploreTest key={getTestData._id} myTest={getTestData}></ExploreTest>
        ))}
      </Row>
    </div>
  );
};

export default TestLab;
