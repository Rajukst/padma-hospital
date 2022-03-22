import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import useAuth from "../../../../Hooks/useAuth";

const MyAppoint = () => {
  const { user } = useAuth();
  const [myAppoints, setMyAppoints] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/my-appoints")
      .then((res) => res.json())
      .then((data) => setMyAppoints(data));
  }, []);
  return (
    <div>
      <h1>My Appoints</h1>
      <h4>User Email: {user.email}</h4>
      <div>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Doctor Id</th>
              <th>Doctor Name</th>
              <th>Appoint Date</th>
              <th>Your Address</th>
              <th> Approval</th>
            </tr>
          </thead>
          <tbody>
            {myAppoints.map((myRow) => (
              <tr>
                <td>{myRow._id}</td>
                <td>{myRow.name}</td>
                <td>{myRow.date}</td>
                <td>{myRow.address}</td>
                <td>
                  {" "}
                  <Button>Request Approval</Button>{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default MyAppoint;
