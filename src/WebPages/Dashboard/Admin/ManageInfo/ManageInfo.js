import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import Swal from "sweetalert2";

const ManageInfo = () => {
  const [update, setUpdate] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/doctors")
      .then((res) => res.json())
      .then((data) => setUpdate(data));
  }, []);

  // delete product
  const handleDeleteUser = (id) => {
    const proceed = window.confirm("are you sure to delete a Doctor?");
    if (proceed) {
      const url = `http://localhost:5000/delete/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Delete successfull",
              showConfirmButton: false,
              timer: 1500,
            });
            const remainingDoctor = update.filter(
              (newUpdate) => newUpdate._id !== id
            );
            setUpdate(remainingDoctor);
          }
        });
    }
  };
  return (
    <div>
      <h1>This is Manage Products</h1>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Doctor Id</th>
            <th> Name</th>
            <th>Designation</th>
            <th>Short Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {update.map((myRow) => (
            <tr>
              <td>{myRow._id}</td>
              <td>{myRow.name}</td>
              <td>{myRow.designation}</td>
              <td>{myRow.description}</td>

              <td>
                <Button
                  onClick={() => handleDeleteUser(myRow._id)}
                  className="my-button"
                  variant="danger"
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ManageInfo;
