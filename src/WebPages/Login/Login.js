import { Alert } from "@mui/material";
import React, { useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import "./Login.css";
const Login = () => {
  const [signInUser, setSignInUser] = useState({});
  const { user, loginUser, signWithGoogle, isLoading, authError } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const loginSubmit = (e) => {
    loginUser(signInUser.email, signInUser.password, location, history);
    e.preventDefault();
  };
  const loginOnChange = (e) => {
    const nameField = e.target.name;
    const fieldValue = e.target.value;
    const newData = { ...signInUser };
    newData[nameField] = fieldValue;
    setSignInUser(newData);
  };
  const handleGoogle = () => {
    signWithGoogle(location, history);
  };
  return (
    <div className="login-div">
      <h1>User login </h1>
      <div className="login-continer">
        <form onSubmit={loginSubmit}>
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
          <br />
          <div>
            <div>
              <Button type="submit" variant="outline-info">
                Login
              </Button>
            </div>
            <div>
              <h5>New User??</h5>
              <p>
                Register
                <Link to="/register">here</Link>
              </p>
            </div>
            <Button
              onClick={handleGoogle}
              className="m-3"
              variant="outline-info"
            >
              Google Sign In
            </Button>
            <Button className="m-3" variant="outline-info">
              Github SignIn
            </Button>
          </div>
        </form>
        {isLoading && <Spinner animation="grow" variant="info" />}
        {user?.email && <Alert severity="success">Login Succes</Alert>}
        {authError && <Alert severity="error">{authError}</Alert>}
      </div>
    </div>
  );
};

export default Login;
