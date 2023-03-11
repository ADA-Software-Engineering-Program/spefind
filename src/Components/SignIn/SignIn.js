import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./SignIn.css";
import { auth } from "../../firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { MdToggleOff } from "react-icons/md"

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
        navigate("/createProfile");
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
        <Navbar />
        <h1 className="miss">We missed you!</h1>
        
        <form className="SignInForm">
            <label htmlFor="email" className="logLabel">Email Address</label><br/>
            <input 
              id="email"
              name="email"
              className="inputForm"
              type="email"
              autoComplete="username"
              required
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
            /><br/>

            <label htmlFor="password" className="logLabel">Password</label><br/>
            <input 
             id="password"
              className="inputForm"
              type="password"
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Type here"
            /><br/>    
           <div className="forgot">
            <div className="d-flex">
                <MdToggleOff className="toggle"/>
                <p>Keep logged in</p>
            </div>
            <p className="fw-semibold">Forgot Password? </p>
           </div>
          
            <button className="btn btnSign" onClick={onSubmit} type="submit">
              Submit
            </button>
          
        </form>
        <p className="new"> New here?  <a href="/register"> Sign up</a> </p>
      
    </div>
  );
};

export default SignIn;