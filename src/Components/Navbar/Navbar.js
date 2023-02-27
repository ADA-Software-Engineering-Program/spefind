import React from "react";
import './Navbar.css'

const Navbar = () => {
  return (
    <nav>
      <div className="logo-container">
        <h1>SPEFIND</h1>
        <h6>Connecting Speakers to the world</h6>
      </div>
      <ul>
        <li>
          <a hre="#" alt="nav">
            Home
          </a>
        </li>
        <li>
          <a hre="#" alt="nav">
            About
          </a>
        </li>
        <li>
          <a hre="#" alt="nav">
            Explore
          </a>
        </li>
        <li>
          <a hre="#" alt="nav">
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
                stroke-width="1.11211"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </li>
        <li>
          <a hre="#" alt="nav">
            Contact
          </a>
        </li>
      </ul>
      <button className="log-in-btn">
        Log In  
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
            stroke-width="1.54937"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M3.82764 12.7009H21.2115"
            stroke="black"
            stroke-width="1.54937"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </nav>
  );
};

export default Navbar;
