import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignIn from './Components/SignIn/SignIn';
import SignUpA from './Components/SignUpA/SignUpA';
// import SignUpB from './Components/SignUpB/SignUpB';
import Join from './Components/Join/Join';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  
    <BrowserRouter>
    <Routes>
      <Route path='/' element={
       <App />
      } />
      <Route path='/signin' element={
        <SignIn />
      }/>
      <Route path='/signup-first' element={
        <SignUpA />
      }/>
      <Route path='/signup-second' element={
        <Join />
      }/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


