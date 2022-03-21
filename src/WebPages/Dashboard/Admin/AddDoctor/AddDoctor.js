import React, { useRef } from "react";
import { Button } from "react-bootstrap";
import Swal from "sweetalert2";
import "./AddDoctor.css";
const AddDoctor = () => {
  const doctorName = useRef();
  const doctorImage = useRef();
  const doctorDesignation = useRef();
  const doctorPosition = useRef();
  const serviceFee = useRef();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const name = doctorName.current.value;
    const image = doctorImage.current.value;
    const designation = doctorDesignation.current.value;
    const fee = serviceFee.current.value;
    const description = doctorPosition.current.value;
    const totalBio = { name, image, designation, fee, description };
    console.log(totalBio);
    fetch("http://localhost:5000/add-doctors", {
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
            title: "Doctor Added !!",
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
      <h1 className="pt-5"> Add Doctor</h1>
      <form onSubmit={handleOnSubmit}>
        <input
          type="text"
          name=""
          id=""
          ref={doctorName}
          placeholder="Doctor's Name"
          required
        />
        <br />
        <br />
        <input
          type="text"
          name=""
          id=""
          ref={serviceFee}
          placeholder="Service Charge"
          required
        />
        <br />
        <br />
        <input
          type="text"
          name=""
          id=""
          ref={doctorImage}
          placeholder="Doctor's Image or Image Url"
          required
        />
        <br />
        <br />
        <input
          type="text"
          name=""
          id=""
          ref={doctorDesignation}
          placeholder="Doctor's Designation"
          required
        />
        <br />
        <br />
        <textarea
          placeholder="Short Description of Doctor"
          id=""
          ref={doctorPosition}
          name=""
          rows=""
          cols=""
        ></textarea>
        <br />
        <br />
        <Button type="submit" variant="outline-info">
          Add Doctor
        </Button>
      </form>
    </div>
  );
};

export default AddDoctor;
