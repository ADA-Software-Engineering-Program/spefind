import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import CreateProfile from './pages/CreateProfile/CreateProfile';
import Home from './pages/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/createProfile" element={<CreateProfile />} />
    </Routes>
  );
}

export default App;

