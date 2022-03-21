import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import MainDashboard from "./WebPages/Dashboard/Dashboard-Main/MainDashboard";
import Header from "./WebPages/Header/Header";
import Home from "./WebPages/Home-Section/Home/Home";
import Login from "./WebPages/Login/Login";
import PrivateRoute from "./WebPages/Login/PrivateRoute/PrivateRoute";
import Registration from "./WebPages/Registration/Registration";

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
            <PrivateRoute path="/dashboard">
              <MainDashboard></MainDashboard>
            </PrivateRoute>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
