import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import "./Header.css";
const Header = () => {
  const { user, logOut } = useAuth();
  
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
          <Link className="my-link ms-4" to="/">
            Padma Diagnostic Centre Limited
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Link className="my-link ms-4" to="/doctors">
                Our Doctors
              </Link>
              <Link className="my-link ms-4" to="/test">
                Testing Unit
              </Link>
              <Link className="my-link ms-4" to="/about">
                About Us
              </Link>
              <Link className="my-link ms-4" to="/dashboard">
                Dashboard
              </Link>
            </Nav>
          </Navbar.Collapse>
         {user.email &&  <div className="wellcome-div"> <span className="wellcome-span me-1">WellCome: </span> {user.displayName}</div>}
        </Container>
       
        {user.email ? (
          <Button onClick={logOut} variant="outline-info" className="me-5">
            LogOut
          </Button>
        ) : (
          <Link to="/login">
            <Button variant="outline-info" className="me-5">
              Login
            </Button>
          </Link>
        )}
      </Navbar>
    </div>
  );
};

export default Header;
