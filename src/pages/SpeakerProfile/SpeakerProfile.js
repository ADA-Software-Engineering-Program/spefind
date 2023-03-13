import React from 'react'
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Navbar/Header'
import SpeakerAbout from './SpeakerAbout';
import SpeakerHero from './SpeakerHero';
import './SpeakerProfile.css';


function SpeakerProfile() {
  return (
    <div className='speakAboutContainer'>
        <Header/>
        <SpeakerHero/>
        <SpeakerAbout />
        <Footer className='speakFooter'/>
    </div>
  )
}

export default SpeakerProfile