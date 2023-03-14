import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import SignIn from "./Components/SignIn/SignIn";
import SignUp from "./Components/SignUp/SignUp";
import CreateProfile from "./pages/CreateProfile/CreateProfile";
import Home from "./pages/Home";
import Explore from "./pages/Explore/Explore";
import Contact from "./pages/Contact/Contact";
import Bookme from "./pages/BookMe/Bookme";
import SpeakingForm from "./pages/SpeakingForm/SpeakingForm";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/login" element={<SignIn />} />
      <Route path="/createProfile" element={<CreateProfile />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/book-me" element={<Bookme />} />
      <Route path="/speaking-form" element={<SpeakingForm />} />
    </Routes>
  );
}

export default App;
