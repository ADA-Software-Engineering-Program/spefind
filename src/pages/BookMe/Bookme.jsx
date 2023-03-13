import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { HiLocationMarker, HiOutlineLocationMarker } from "react-icons/hi";
import { IoMailSharp } from "react-icons/io5";
import { AiOutlineClockCircle } from "react-icons/ai";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Navbar/Navbar";
import "./Bookme.css";

const Bookme = () => {
  return (
    <div className="bookme">
      <Header />
      <div className="bookme-container">
        <h1 className="heading-primary">Book Titilayo</h1>
        <p className="paragraph">Titilayo’s schedule </p>
        <div className="schedule-box">
          <div className="schedule-container">
            <div className="schedule-block">
              <div>
                <div className="schedule-circle"></div>
                <div className="schedule-line"></div>
              </div>
              <div className="schedule-cont">
                <div className="schedule-date">NOV 17</div>
                <div className="schedule-location">Lagos, Nigeria</div>
                <div className="schedule-time">
                  <div>
                    <HiOutlineLocationMarker className="schedule-icon" /> jogor
                    centre
                  </div>
                  <div>
                    <AiOutlineClockCircle className="schedule-icon" /> 50:00
                  </div>
                </div>
              </div>
            </div>

            <div>
              <button className="schedule-btn booked">Booked</button>
            </div>
          </div>

          <div className="schedule-container">
            <div className="schedule-block">
              <div>
                <div className="schedule-circle"></div>
                <div className="schedule-line"></div>
              </div>

              <div className="schedule-cont">
                <div className="schedule-date">SEP 2</div>
                <div className="schedule-location">Enugu, Nigeria</div>
                <div className="schedule-time">
                  <div>
                    <HiOutlineLocationMarker className="schedule-icon" /> polin
                    place
                  </div>
                  <div>
                    <AiOutlineClockCircle className="schedule-icon" /> 60:00
                  </div>
                </div>
              </div>
            </div>

            <div>
              <button className="schedule-btn available">Available</button>
            </div>
          </div>

          <div className="schedule-container">
            <div className="schedule-block">
              <div>
                <div className="schedule-circle"></div>
                <div className="schedule-line"></div>
              </div>
              <div className="schedule-cont">
                <div className="schedule-date">OCT 4</div>
                <div className="schedule-location">Omaha, US</div>
                <div className="schedule-time">
                  <div>
                    <HiOutlineLocationMarker className="schedule-icon" /> st.
                    Lora
                  </div>
                  <div>
                    <AiOutlineClockCircle className="schedule-icon" /> 40:00
                  </div>
                </div>
              </div>
            </div>

            <div>
              <button className="schedule-btn booked">Booked</button>
            </div>
          </div>

          <div className="schedule-container">
            <div className="schedule-block">
              <div>
                <div className="schedule-circle"></div>
                <div className="schedule-line last"></div>
              </div>

              <div className="schedule-cont">
                <div className="schedule-date">JAN 5</div>
                <div className="schedule-location">Abuja, Nigeria</div>
                <div className="schedule-time">
                  <div>
                    <HiOutlineLocationMarker className="schedule-icon" /> pepsi
                    centre
                  </div>
                  <div>
                    <AiOutlineClockCircle className="schedule-icon" /> 40:00
                  </div>
                </div>
              </div>
            </div>

            <div>
              <button className="schedule-btn available">Available</button>
            </div>
          </div>
        </div>
        <h4 className="heading-tertiary">
          For more info & enquires on speaker, contact:
        </h4>
        <div className="bookme-socials">
          <div className="bookme-social-details">
            <div>
              <FaPhoneAlt className="bookme-icon" />
            </div>
            <div>+234 1234567891</div>
          </div>
          <div className="bookme-social-details">
            <div>
              <IoMailSharp className="bookme-icon" />
            </div>
            <div>spefind@gmail.com</div>
          </div>
          <div className="bookme-social-details">
            <div>
              <HiLocationMarker className="bookme-icon" />
            </div>
            <div>
              07 Bolanle Road, Off Ola Street, Lekki Phase 1, Lagos State.
              Nigeria
            </div>
          </div>
        </div>
        <div className="event-box">
          <button className="event">Event Details</button>
          <button className="event">Make payment</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Bookme;
