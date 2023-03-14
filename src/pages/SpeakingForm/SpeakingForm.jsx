import React, { useState } from "react";
import Header from "../../Components/Navbar/Navbar";
import "./SpeakingForm.css";

const SpeakingForm = () => {
  const initialValue = {
    name: "",
    title: "",
    date: "",
    "time-1": "",
    "time-2": "",
    location: "",
    speaker: "",
    event: "",
    audience: "",
    confirm: false,
  };

  const [userData, setUserData] = useState(initialValue);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userData);
  };

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setUserData({ ...userData, [name]: type === "checkbox" ? checked : value });
  };

  return (
    <div className="speaking">
      <Header />
      <div className="speaking-box">
        <div className="speaking-container">
          <h2 className="heading-secondary">Hello, Rita!</h2>
          <p className="paragraph">Fill in the details of your event</p>
          <form className="speaking-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label" htmlFor="name">
                Name/Organization’s Name*
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="form-input"
                placeholder="Type here"
                value={userData.name}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="title">
                Title Of Your Event*
              </label>
              <input
                type="text"
                name="title"
                id="title"
                className="form-input"
                placeholder="Type here"
                value={userData.title}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="date">
                Date Of Your Event*
              </label>
              <input
                type="date"
                name="date"
                id="date"
                className="form-input"
                placeholder="Type here"
                value={userData.date}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="time">
                Duration Of Your Event*
              </label>
              <div className="form-flex">
                <input
                  type="time"
                  name="time-1"
                  id="time-1"
                  className="form-input-time"
                  placeholder="Type here"
                  value={userData["time-1"]}
                  onChange={handleChange}
                />
                <p className="form-text">to</p>
                <input
                  type="time"
                  name="time-2"
                  id="time-2"
                  className="form-input-time"
                  value={userData["time-2"]}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="location">
                Location Of Your Event*
              </label>
              <input
                type="text"
                name="location"
                id="location"
                className="form-input"
                placeholder="Type here"
                value={userData.location}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="speaker">
                Speaker’s Fee*
              </label>
              <input
                type="number"
                name="speaker"
                id="speaker"
                className="form-input"
                placeholder="Kindly specify the fee or state if this is free"
                value={userData.speaker}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="name">
                Event Type*
              </label>

              <div onChange={handleChange} value={userData.event}>
                <div className="form-flex u-margin-small">
                  <input
                    type="radio"
                    name="event"
                    id="physical"
                    className="form-radio-input"
                    value={"physical"}
                  />
                  <label htmlFor="physical" className="form-label-event">
                    Physical Event
                  </label>
                </div>

                <div className="form-flex">
                  <input
                    type="radio"
                    name="event"
                    id="virtual"
                    className="form-radio-input"
                    value={"virtual"}
                  />
                  <label htmlFor="virtual" className="form-label-event">
                    Virtual Event
                  </label>
                </div>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="audience">
                Audience Size*
              </label>
              <input
                type="number"
                name="audience"
                id="audience"
                className="form-input"
                placeholder="Type here"
                value={userData.audience}
                onChange={handleChange}
              />
            </div>

            <div className="form-group form-flex">
              <input
                type="checkbox"
                name="confirm"
                id="confirm"
                className="form-radio-input"
                value={userData.confirm}
                onChange={handleChange}
              />
              <label className="form-radio-label" htmlFor="confirm">
                I confirm that this event does not require speakers to pay for
                speaking.
              </label>
            </div>

            <div className="div">
              <button type="submit" className="btn-submit">
                Done
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SpeakingForm;
