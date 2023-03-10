import React from 'react';
import Footer from '../Components/Footer/Footer';
import Navbar from '../Components/Navbar/Navbar';

export default function AppLayout({ children }) {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer/>
    </div>
  );
}

