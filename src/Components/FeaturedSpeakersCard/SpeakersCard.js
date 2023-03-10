import React from 'react';
import { useState } from 'react';
import Zainab from '../../images/Zainab.png';
import Mide from '../../images/Mide.png';
import Tayo from '../../images/Tayo.png';
import Seki from '../../images/Seki.png';
import Sina from '../../images/Sina.png';
import Bola from '../../images/Bola.png';
import FeaturedSpeakersCard from './FeaturedSpeakersCard';
import { CgSearch } from 'react-icons/cg';
import './FeaturedSpeakersCard.css';

function SpeakersCard() {
    const [speakers] = useState([
        {
            id: 1,
            speakerImage: Zainab,
            speakerName: "Zainab Yakub",
        },
        {
            id: 2,
            speakerImage: Mide,
            speakerName: "Olumide Salami",
        },
        {
            id: 3,
            speakerImage:  Tayo,
            speakerName: "Titilayo Chibuike",
        },
        {
            id: 4,
            speakerImage: Seki,
            speakerName: "Sekinat Ndukwu",
        },
        {
            id: 5,
            speakerImage: Sina,
            speakerName: "Mohammed Adesina",
        },
        {
            id: 6,
            speakerImage: Bola,
            speakerName: "Augustina Mobolaji",
        }
    ]);
    const firstThreeSpeakers = speakers.slice(0, 3);
    const lastThreeSpeakers = speakers.slice(3);

    return (
        <div className='text-center featCard'>
            <div>
                <input type='text' placeholder='Search for speaker...' className='featInput' />
                <CgSearch className='search' />
            </div>
            <h3 className='header fw-bolder'>
                Top overall featured <span className='heroColor'>speakers</span>
            </h3>
            <div className='row upperRow'>
                {firstThreeSpeakers.map((item) => (
                    <div key={item.id} className='col-lg-3'>
                        <FeaturedSpeakersCard speakerImage={item.speakerImage} speakerName={item.speakerName} />
                    </div>
                ))}
            </div>
            <div className='row lowerRow'>
                {lastThreeSpeakers.map((item) => (
                    <div key={item.id} className='col-lg-3'>
                        <FeaturedSpeakersCard speakerImage={item.speakerImage} speakerName={item.speakerName} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SpeakersCard;
