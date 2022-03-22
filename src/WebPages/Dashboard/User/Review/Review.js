import React, { useRef } from "react";
import { Button } from "react-bootstrap";
import Swal from "sweetalert2";

const Review = () => {
  const userReview = useRef();
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const getReview = userReview.current.value;
    const totalReview = { getReview };
    console.log(totalReview);
    fetch("https://protected-basin-36315.herokuapp.com/get-review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(totalReview),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Review Succcess !!",
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
      <h1 className="pt-5"> Give your valuable Review</h1>
      <form onSubmit={handleOnSubmit}>
        <input
          type="text"
          name=""
          id=""
          ref={userReview}
          placeholder="Give Review out of ten"
          required
        />
        <br />
        <br />
        <br />
        <br />
        <Button type="submit" variant="outline-info">
          Give Review
        </Button>
      </form>
    </div>
  );
};

export default Review;
