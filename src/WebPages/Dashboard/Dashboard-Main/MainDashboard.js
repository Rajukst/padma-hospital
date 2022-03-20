import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import { useRouteMatch } from "react-router-dom";
import AddDoctor from "../Admin/AddDoctor/AddDoctor";
import ManageInfo from "../Admin/ManageInfo/ManageInfo";
import MyAppoint from "../User/MyAppoint/MyAppoint";
import "./MainDashboard.css";
const MainDashboard = () => {
  let { path, url } = useRouteMatch();
  return (
    <div className="my-dashboard">
      <Container fluid>
        <Row>
          <Col className="my-nestedRoute" xs={12} md={2} lg={2}>
            <Link className="remove" to={`${url}/my-appoint`}>
              <Button className="mt-4 my-button" color="inherit">
                My Appoint
              </Button>
            </Link>
            <Link className="remove" to={`${url}/user-review`}>
              <Button className="mt-4 my-button" color="inherit">
                User Review
              </Button>
            </Link>
            <Link className="remove" to={`${url}/add-course`}>
              <Button className="mt-4 my-button" color="inherit">
                Add Doctor
              </Button>
            </Link>
            <Link className="remove" to={`${url}/manage`}>
              <Button className="mt-4 my-button" color="inherit">
                Manage Info
              </Button>
            </Link>
            <Link className="remove" to={`${url}/update`}>
              <Button className="mt-4 my-button" color="inherit">
                Update Info
              </Button>
            </Link>
          </Col>
          <Col xs={12} md={10} lg={10}>
            <Switch>
              <Route path={`${path}/my-appoint`}>
                <MyAppoint></MyAppoint>
              </Route>
              <Route path={`${path}/add-course`}>
                <AddDoctor></AddDoctor>
              </Route>
              <Route path={`${path}/manage`}>
                <ManageInfo></ManageInfo>
              </Route>
            </Switch>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MainDashboard;
