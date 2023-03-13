import React from 'react';
import { HiStar } from 'react-icons/hi';
import { MdOutlineKeyboardDoubleArrowDown } from 'react-icons/md';
import './SpeakerProfile.css';

export default function SpeakerHero() {
  return (
    <div className='speakHeroBG'>
        <section className='speakHeroContent'>
            <h1 className='speakHeroTitle'>Hi! I'm Titilayo</h1>
            <p className='speakHerop'>Media Speaker</p>
            <div className='d-flex'>
                <div className='speakHeronumb'>50</div>
                <div className='d-flex ms-1'>
                    <HiStar className="starRating"/>
                    <HiStar className="starRating"/>
                    <HiStar className="starRating"/>
                    <HiStar className="starRating"/>
                    <HiStar className="starRating"/>
                </div>
            </div>
            <MdOutlineKeyboardDoubleArrowDown className='speakArrow'/>
        </section>
    </div>
  )
}
