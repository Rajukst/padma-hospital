import React, { useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import "./Registration.css";
const Registration = () => {
  const [loginUser, setLoginUser] = useState({});
  const { registerUser, isLoading } = useAuth();
  const loginSubmit = (e) => {
    if (loginUser.password !== loginUser.password2) {
      alert("password dont match");
    }
    registerUser(loginUser.email, loginUser.password);
    e.preventDefault();
    console.log(loginUser);
  };
  const loginOnChange = (e) => {
    const nameField = e.target.name;
    const fieldValue = e.target.value;
    const newData = { ...loginUser };
    newData[nameField] = fieldValue;
    setLoginUser(newData);
  };
  return (
    <div>
      <div className="register-div">
        <h1>User Registration </h1>
        <div className="register-continer">
          {!isLoading && (
            <form onSubmit={loginSubmit}>
              <br />
              <br />
              <input
                type="text"
                name="name"
                id=""
                onChange={loginOnChange}
                placeholder="Your Name"
                required
              />
              <br />
              <br />
              <input
                type="email"
                name="email"
                id=""
                onChange={loginOnChange}
                placeholder="Your Email"
                required
              />
              <br />
              <br />
              <input
                type="password"
                name="password"
                id=""
                onChange={loginOnChange}
                placeholder="Password"
                required
              />
              <br />
              <br />
              <input
                type="password"
                name="password2"
                id=""
                onChange={loginOnChange}
                placeholder="Re-type Password"
                required
              />
              <br />
              <br />

              <div>
                <div>
                  <Button type="submit" variant="outline-info">
                    Register
                  </Button>
                </div>
                <div>
                  <h5>Already Registered??</h5>
                  <p>
                    Login
                    <Link to="/login">here</Link>
                  </p>
                </div>
              </div>
            </form>
          )}
          {isLoading && <Spinner animation="grow" variant="info" />}
        </div>
      </div>
    </div>
  );
};

export default Registration;
