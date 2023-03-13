import React from 'react';
import './SpeakerProfile.css';

const SpeakEvents =({eventPics, title, date, venue})=> {
  return (
    <div className='text-start'>
        <picture>
            <img src={eventPics} alt='Events' className='img-responsive eventPics'/>
        </picture>
        <h4 className='speakEventTitle'>{title}</h4>
        <span className='speakEventP'>{date}</span><br/>
        <span className='speakEventP'>{venue}</span>

    </div>
  )
}

export default SpeakEvents