import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import SignIn from './Components/SignIn/SignIn';
import SignUp from './Components/SignUp/SignUp';
import CreateProfile from './pages/CreateProfile/CreateProfile';
import Home from './pages/Home'
import Explore from './pages/Explore/Explore'
import Register from './pages/Register/Register';
import Contact from './pages/Contact/Contact'
import EventRegister from './pages/Register/EventRegster';
import SpeakerProfile from './pages/SpeakerProfile/SpeakerProfile';
import Blog from './pages/Blog/Blog/Blog';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
	    <Route path='/signUp' element={<SignUp/>}/>
	    <Route path='/login' element={<SignIn/>}/>
	  <Route path='/register' element={<Register/>}/>
	  <Route path='/eventRegister' element={<EventRegister/>}/>
      <Route path="/createProfile" element={<CreateProfile />} />
	  <Route path='/blog' element={<Blog/>}/>
	    <Route path='/explore' element={<Explore/>}/>
      <Route path='/contact' element={<Contact/>}/>
	  <Route path='/speakerProfile' element={<SpeakerProfile/>}/>
    </Routes>
  );
}

export default App;

