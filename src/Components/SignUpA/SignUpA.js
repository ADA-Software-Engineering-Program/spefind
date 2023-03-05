import React from 'react'
import Navbar from "../Navbar/Navbar";
import './SignUpA.css'


function SignUpA() {
  
  return (
    <div>
      <Navbar />
      <div>
        <h1 className="Welcome">Welcome!</h1>
        <p className="pp">Your very first step to ease and convenience </p>
      </div>
      <div className="btnSignUP">
        <button id="btnsignup">
          <a href="/SignUp-second">Speaker</a>
        </button>

        <button id="btnsignup">
          {" "}
          <a href="/SignUp-second">Event Organizer</a>
        </button>
      </div>
    </div>
  );
}

export default SignUpA
