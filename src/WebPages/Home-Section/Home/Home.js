import React from "react";
import Ambulence from "../Ambulence/Ambulence";
import HomeCarosul from "../Carosul-Section/HomeCarosul";
import CustomerAmbulence from "../Customer-and-Ambulence/CustomerAmbulence";
import Faq from "../FAQ/Faq";
import TestLab from "../Test-Lab/TestLab";

const Home = () => {
  return (
    <div>
      <HomeCarosul></HomeCarosul>
      <CustomerAmbulence></CustomerAmbulence>
      <Ambulence></Ambulence>
      <TestLab></TestLab>
      {/* <Faq></Faq> */}
    </div>
  );
};

export default Home;
