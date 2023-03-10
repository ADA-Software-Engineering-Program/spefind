import React, { useState } from 'react';
import Gold from '../images/Gold.png';
import Ola from '../images/Ola.png';
import Tife from '../images/Tife.png';
import Peace from '../images/Peace.png';
import Tobe from '../images/Tobe.png';
import Sola from '../images/Sola.png';
import ReviewCard from './ReviewCard';

function FeaturedReviwe() {
    const [speakers] = useState([
        {
            id: 1,
            profilePic: Gold,
            speakerName: "Omorinwale Gold",
            occupation:"Abey Event Planning",
            review:"This has been such an important website for me. Finding quality public speakers can be quite difficult. But with this website, I just simply browse till I find the best fit for me"
        },
        {
            id: 2,
            profilePic: Ola,
            speakerName: "Ola Silver",
            occupation:"Lerd Events",
            review:"I love how you can browse through different categories on on website. Super time efficient!"
        },
        {
            id: 3,
            profilePic:  Tife,
            speakerName: "Chike Tife",
            occupation:"Lerd Events",
            review:"I love this website so much!!!!"
        },
        {
            id: 4,
            profilePic: Peace,
            speakerName: "Ojukwu Peace",
            occupation:"Abey Event Planning",
            review:"This has been such an important website for me. Finding quality public speakers can be quite difficult. But with this website, I just simply browse till I find the best fit for me"
        },
        {
            id: 5,
            profilePic: Tobe,
            speakerName: "Tobi Tobe",
            occupation:"Lerd Events",
            review:"I love how you can browse through different categories on on website. Super time efficient!"
        },
        {
            id: 6,
            profilePic: Sola,
            speakerName: "Adesina Sola",
            occupation:"Lerd Events",
            review:"I love this website so much!!!!"
        }
    ]);

    const firstThreeSpeakers = speakers.slice(0, 3);
    const lastThreeSpeakers = speakers.slice(3);
  return (
    <div className='text-center reviewSection'>
        <h3 className='header fw-bolder pt-5'>
            Featured reviews
        </h3>
        <div className='row reviewRow'>
            {firstThreeSpeakers.map((item) => (
                <div key={item.id} className='col-lg-3'>
                    <ReviewCard profilePic={item.profilePic} speakerName={item.speakerName} occupation={item.occupation} review={item.review} />
                </div>
            ))}
        </div>
        <div className='row mt-4 reviewRow'>
            {lastThreeSpeakers.map((item) => (
                <div key={item.id} className='col-lg-3'>
                    <ReviewCard profilePic={item.profilePic} speakerName={item.speakerName} occupation={item.occupation} review={item.review} />
                </div>
            ))}
        </div>
    </div>
  )
}

export default FeaturedReviwe