import React from "react";
import './Navbar.css'
// import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav>
      {/* <div className="ClickIcon">x</div> */}
      <div className="logo-container">
        <h1>SPEFIND</h1>
        <h6>Connecting Speakers to the world</h6>
      </div>

      <ul className="NavList">
        <li>
          <a href="/Navbar" alt="nav">
            Home
          </a>
        </li>
        <li>
          <a href="#About" alt="nav">
            About
          </a>
        </li>
        <li>
          <a href="#Explore" alt="nav">
            Explore
          </a>
        </li>
        <li>
          <a href="#Blog" alt="nav">
            Blog
            <svg
              width="11"
              height="7"
              viewBox="0 0 11 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.718262 1.05078L5.35207 5.68459L9.98587 1.05078"
                stroke="black"
                strokeWidth="1.11211"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </li>
        <li>
          <a href="#Contact" alt="nav">
            Contact
          </a>
        </li>
      </ul>
      <button className="Log-in-btn">
        <a href="/SignIn"> Log In</a>

        <svg
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.1172 6.43091L21.387 12.7007L15.1172 18.9704"
            stroke="black"
            strokeWidth="1.54937"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3.82764 12.7009H21.2115"
            stroke="black"
            strokeWidth="1.54937"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </nav>
  );
};

export default Navbar;
