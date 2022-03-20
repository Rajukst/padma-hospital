import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import MainDashboard from "./WebPages/Dashboard/Dashboard-Main/MainDashboard";
import Header from "./WebPages/Header/Header";
import Home from "./WebPages/Home-Section/Home/Home";
import Login from "./WebPages/Login/Login";
import Registration from "./WebPages/Registration/Registration";

function App() {
  return (
    <div className="App">
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
          <Route path="/dashboard">
            <MainDashboard></MainDashboard>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
