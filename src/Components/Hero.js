import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import microphone from "../images/microphone.png";
import "../Components/Navbar/Navbar.css";

function Hero() {
  return (
    <div className="heroContainer">
      <div className="heroText">
          <span className="speakers">Speakers and event organizers:</span>
        <h2 className="heroTextHeading">
          genius comes <br /> in all <span className="heroColor">colours</span>
        </h2>
        <p className="heroTextSubHeading">
          If your’e tired of being unnoticed.. if you lack confidence in your
          work.. if you’re seeking for job opportunities.. stop worrying.
          Spefind has got you covered. We are solely here to widen and expand
          the genius in you.
          <span className=""> Are you ready to be discovered?</span>
        </p>
        <Link to="/SignUp" className="ms-0 mt-5 getBtn">
          Get Started
          <BsArrowRight className="ms-2" />
        </Link>
      </div>
      <div className="heroImage">
        <img src={microphone} alt="speakers" className="" />
      </div>
    </div>
  );
}

export default Hero;
