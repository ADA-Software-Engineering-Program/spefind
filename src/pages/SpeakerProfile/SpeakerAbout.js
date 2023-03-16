import React, { useState } from 'react';
import Titilayo from '../../images/Titlayo.png';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import  './SpeakerProfile.css';
import Event1 from '../../images/SpokenEvent1.png';
import Event2 from '../../images/SpokenEvent2.png';
import Event3 from '../../images/SpokenEvent3.png';
import Event4 from '../../images/SpokenEvent4.png';
import SpeakEvents from './SpeakEvents';



export default function SpeakerAbout() {
    const [events] = useState([
        {
            id: 1,
            eventPics: Event1,
            title: "TEDx",
            date: "May 17, 2022",
            venue: "Lagos, Nigeria"
        },
        {
            id: 2,
            eventPics: Event2,
            title: "TEDx",
            date: "Sept 15, 2022",
            venue: "Lagos, Nigeria"
        },
        {
            id: 3,
            eventPics: Event3,
            title: "Hosted a Wedding",
            date: "May 26, 2022",
            venue: "Lagos, Nigeria"
        },
        {
            id: 4,
            eventPics: Event4,
            title: "Led the #mychoice women rally",
            date: "Jun 02, 2020",
            venue: "Lagos, Nigeria"
        }
    ])


  return (
    <div className='speakAboutMain'>
        <section className='row'>
            <div className='col-lg-6 speakAboutLeft'>
                <img src={Titilayo} alt='Speaker-image' className='titiLayo img-responsive' />
            </div>
            <div className='col-lg-6 speakAboutRight'>
                <div className='speakAboutContent '>
                    <h3>ABOUT ME.</h3>
                    <p>
                        A Lagos State resident in charge of drafting over 10 statements per mount and speaking with radio and television media about the clients' ongoing 
                        or forthcoming events organize and arrange more than 20 speaking appearances. Conduct Training in product usage and product demos for clients,
                        new hires, and independent contractors. Prepare concepts for new clients who use commercial spots to market their brands.
                    </p>
                    <a href='' className='aboutRightA'>Show more</a>
                </div>
                <div className='row percent mt-lg-4 mt-2 ps-lg-0 ps-2'>
                    <p className='col-md-6'>100% <span className='percentSpan'>Jobs Completed</span></p>
                    <p className='col-md-6'>100% <span className='percentSpan'>On A Budget</span></p>
                    <p className='col-md-6'>100% <span className='percentSpan'>On Time</span></p>
                    <p className='col-md-6'>100% <span className='percentSpan'>Professional</span></p>
                </div>
                <div className='d-flex ps-lg-0 ps-2'>
                    <p className='speakAboutP my-auto'>Verification</p>
                    <div className='d-flex justify-content-between ms-3 my-auto'>
                        <div className='speakAboutIcon '>
                            <FaFacebookF className='speakAboutIcons'/>
                        </div>
                        <div className='speakAboutIcon'> 
                            <FaLinkedinIn className='speakAboutIcons'/>
                        </div>
                        <div className='speakAboutIcon'>
                            <FaTwitter className='speakAboutIcons'/>
                        </div>
                    </div>
                </div>
                <div className='btns my-3 ps-lg-0 ps-2'>
                    <Link to='' className='btn speakAboutBtn'>Book me</Link>
                    <Link to='' className='btn speakAboutBtn ms-2'>Send me a message</Link>
                </div>
            </div>
        </section>
        <section className='text-center my-5'>
            <h3 className='spoken'>EVENTS I HAVE SPOKEN AT</h3>
            <div className='row my-5 eventRow mx-lg-auto'> 
                {events.map((item) =>(
                    <div key={item.id} className='col-lg-3'>
                        <SpeakEvents eventPics={item.eventPics} title={item.title} date={item.date} venue={item.venue}/>
                    </div>
                ))}
            </div>
        </section>
    </div>

  )
}
