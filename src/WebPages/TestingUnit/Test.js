import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import ExploreTest from "./ExploreTest";

const Test = () => {
  const [testUnit, setTestUnit] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/all-test")
      .then((res) => res.json())
      .then((data) => setTestUnit(data));
  }, []);
  return (
    <div>
      <Row xs={1} md={4} className="g-4 m-1">
        {testUnit.map((getTestResult) => (
          <ExploreTest
            key={getTestResult._id}
            testResult={getTestResult}
            //comment goes here
          ></ExploreTest>
        ))}
      </Row>
    </div>
  );
};

export default Test;
