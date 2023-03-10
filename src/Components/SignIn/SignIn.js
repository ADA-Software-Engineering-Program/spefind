import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./SignIn.css";
import { auth } from "../../firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/");
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };
  return (
    <div>
      <div className="SGN">
        <Navbar />
        <div className="missed">
          <h1 className="miss">We missed you!</h1>
        </div>
        <div className="SignInForm">
          <div className="FormInput">
            <label className="Label">E-mail Address</label>
            {/* <input className="InputForm" type="" placeholder="Type here" /> */}

            <input 
              id="email-address"
              name="email"
              className="Inputform"
              type="email"
              required
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="FormInput">
            <label className="Label">Password</label>
            <input 
              className="Inputform"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Type here"
            />
          </div>

          {/* <div className="Forgot-Password">
          <p className="p">Keep Logged in</p>
          <p className="p">Forgot Password?</p>
        </div> */}

          <div>
            <button className="btnSign" onClick={onSubmit} type="submit">
              Submit
            </button>
          </div>

          <div className="new">
            <p>New here? </p>
            <p>
              <a href="/SignUp-first"> sign up</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;