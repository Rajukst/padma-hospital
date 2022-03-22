import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";
const BookingConfirm = () => {
  const [product, setProduct] = useState({});
  const { user } = useAuth();
  const { serviceId } = useParams();
  useEffect(() => {
    fetch(`https://protected-basin-36315.herokuapp.com/doctors/${serviceId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    fetch("https://protected-basin-36315.herokuapp.com/appoints", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Appoint Confirmed !!",
            showConfirmButton: false,
            timer: 1500,
          });
          console.log(data);
        }
      });
  };
  return (
    <div>
      <h1>Appoint Confirm Form</h1>
      <div className="my-div">
        <Container>
          <Row className="mt-5">
            <Col xs={12} md={4} lg={4}>
              <img src={product.image} alt="" />
              <h1> Appoint: {product?.price}</h1>
              <h4>About Doctor: {product.description} </h4>
            </Col>
            <Col xs={12} md={8} lg={8}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  {...register("displayName")}
                  value={user?.displayName}
                  className="p-2 m-2 w-100"
                />
                <br />
                <input
                  {...register("email")}
                  value={user?.email}
                  className="p-2 m-2 w-100"
                />
                <br />
                <input
                  {...register("name")}
                  defaultValue={product?.name}
                  className="p-2 m-2 w-100"
                />
                <br />
                <input
                  {...register("date")}
                  // placeholder="Name"
                  type="date"
                  className="p-2 m-2 w-100"
                />
                <br />
                <input
                  {...register("address")}
                  placeholder="address"
                  className="p-2 m-2 w-100"
                />
                <br />

                <input
                  {...register("price", { required: true })}
                  defaultValue={product?.price}
                  className="p-2 m-2 w-100"
                />
                <br />
                <input
                  {...register("image", { required: true })}
                  defaultValue={product?.image}
                  className="p-2 m-2 w-100"
                />
                <br />
                <br />

                {errors.exampleRequired && <span>This field is required</span>}

                <input
                  type="submit"
                  value="Appoint"
                  className="btn btn-info w-50"
                />
              </form>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default BookingConfirm;
