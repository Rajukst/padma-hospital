import React from "react";
import HomeCarosul from "../Carosul-Section/HomeCarosul";
import CustomerAmbulence from "../Customer-and-Ambulence/CustomerAmbulence";
import Faq from "../FAQ/Faq";
import TestLab from "../Test-Lab/TestLab";

const Home = () => {
  return (
    <div>
      <HomeCarosul></HomeCarosul>
      <TestLab></TestLab>
      <Faq></Faq>
      <CustomerAmbulence></CustomerAmbulence>
    </div>
  );
};

export default Home;
