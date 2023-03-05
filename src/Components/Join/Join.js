import React, { useRef, useState } from "react";
import "./Join.css";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase";
// import backgroundImg from "../../assets/background.png";

function Join() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');
  const { signup } = useAuth() || {};
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useNavigate();

  const navigate = useNavigate();

  

  const onSubmit = async (e) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate("/signin");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
  };
  return (
    <div>
      <div className="Bg-img">
        <form className="JoinForm">
          <div className="joinCard">
            <div className="NameCard">
              <label className="labell">First Name</label>
              <input type="" placeholder="First Name" />

              <label className="labell">Last Name</label>
              <input type="" placeholder="Last Name" />
            </div>
            <label className="labelForm">E-mail Address</label>
            <input
              type="email"
              label="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Email address"
            />

            {/* <input type="" placeholder="E-mail Address" ref={emailAddressRef} /> */}
            <label className="labelForm">Password</label>
            <input
              type="password"
              label="Create password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Password"
            />
            {/* <input type="password" placeholder="Password" ref={passwordRef} /> */}
            <label className="labelForm">Confirm Password</label>
            <input type="confirm password" placeholder="confirm password" />
          </div>

          <div className="btnSign-up">
            <button className="btnSign-up" onClick={onSubmit} type="submit">
              Sign up
            </button>
          </div>

          <div>
            <h1 className="or">OR</h1>
          </div>
          <div className="icon">
            <a href="https://myaccount.google.com">
              <img src="./assets/google.png" alt="google" />
            </a>

            <a href="https://en-gb.facebook.com">
              <img src="./assets/facebook.png" alt="facebook" />
            </a>

            <a href="https://twitter.com/i/flow/login">
              <img src="./assets/twitter.png" alt="twitter" />
            </a>
          </div>

          <div>
            <p>Already have an account? </p>
            <p>
              <span className="Sign-Up">
                <a href="/SignIn">Sign up</a>
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Join;
