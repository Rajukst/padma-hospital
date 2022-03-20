import React from "react";
import { Carousel } from "react-bootstrap";
import carsoulOne from "../../../Images/carosul1.png";
import carsoulTwo from "../../../Images/carosul2.jpg";
import carsoulThree from "../../../Images/carosul3.jpg";
import "./HomeCarosul.css";
const HomeCarosul = () => {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img className="d-block w-100" src={carsoulOne} alt="First slide" />
          <Carousel.Caption>
            <h3 className="text-colour">Padma Diagnostic Centre Limited</h3>
            <p className="text-colour">
              Your Good Health is Our Responsibility
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={carsoulTwo} alt="Second slide" />

          <Carousel.Caption>
            <h3 className="text-colour">Modern Lab</h3>
            <p className="text-colour">
              We Provide Modern Lab and Lab Technician
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={carsoulThree} alt="Third slide" />

          <Carousel.Caption>
            <h3 className="text-colour">Digital Brainscropy</h3>
            <p className="text-colour">We Have Digitial Brainscropy Lab</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default HomeCarosul;
