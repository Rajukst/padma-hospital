import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import MainDashboard from "./WebPages/Dashboard/Dashboard-Main/MainDashboard";
import Footer from "./WebPages/Footer/Footer";
import Header from "./WebPages/Header/Header";
import BookingConfirm from "./WebPages/Home-Section/BookingConfirm/BookingConfirm";
import Home from "./WebPages/Home-Section/Home/Home";
import SingleDoctor from "./WebPages/Home-Section/Test-Lab/SingleDoctor";
import Login from "./WebPages/Login/Login";
import PrivateRoute from "./WebPages/Login/PrivateRoute/PrivateRoute";
import Registration from "./WebPages/Registration/Registration";
import Test from "./WebPages/TestingUnit/Test";
import TestProfile from "./WebPages/TestingUnit/Test-Profile/TestProfile";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Registration></Registration>
            </Route>
            <Route path="/test">
              <Test></Test>
            </Route>
            <PrivateRoute path="/doctors/:serviceId">
              <SingleDoctor></SingleDoctor>
            </PrivateRoute>
            <PrivateRoute path="/labtest/:serviceId">
              <TestProfile></TestProfile>
            </PrivateRoute>
            <PrivateRoute path="/booking-page/:serviceId">
              <BookingConfirm></BookingConfirm>
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <MainDashboard></MainDashboard>
            </PrivateRoute>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
