import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import SignIn from './Components/SignIn/SignIn';
import SignUp from './Components/SignUp/SignUp';
import CreateProfile from './pages/CreateProfile/CreateProfile';
import Home from './pages/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
	  <Route path='/signUp' element={<SignUp/>}/>
	  <Route path='/login' element={<SignIn/>}/>
      <Route path="/createProfile" element={<CreateProfile />} />
    </Routes>
  );
}

export default App;

