import React, { useRef } from "react";
import { Button } from "react-bootstrap";
import Swal from "sweetalert2";

const AddTest = () => {
  const testName = useRef();
  const testImage = useRef();
  const testDescription = useRef();
  const serviceFee = useRef();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const name = testName.current.value;
    const image = testImage.current.value;
    const description = testDescription.current.value;
    const fee = serviceFee.current.value;
    const totalBio = { name, image, fee, description };
    console.log(totalBio);
    fetch("http://localhost:5000/add-test", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(totalBio),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Test Added !!",
            showConfirmButton: false,
            timer: 1500,
          });
          e.target.reset();
          console.log(data);
        }
      });
  };
  return (
    <div className="addProduct-image">
      <h1 className="pt-5"> Add a Medical Test</h1>
      <form onSubmit={handleOnSubmit}>
        <input
          type="text"
          name=""
          id=""
          ref={testName}
          placeholder="Test Name"
          required
        />
        <br />
        <br />
        <input
          type="text"
          name=""
          id=""
          ref={serviceFee}
          placeholder="Test Fee"
          required
        />
        <br />
        <br />
        <input
          type="text"
          name=""
          id=""
          ref={testImage}
          placeholder=" Image or Image Url"
          required
        />
        <br />
        <br />
        <input
          type="text"
          name=""
          id=""
          ref={testDescription}
          placeholder="Some Description"
          required
        />
        <br />
        <br />
        <br />
        <br />
        <Button type="submit" variant="outline-info">
          Add Medical Test
        </Button>
      </form>
    </div>
  );
};

export default AddTest;
