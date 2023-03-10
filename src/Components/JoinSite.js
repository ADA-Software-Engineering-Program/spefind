import React, { useState } from 'react';
import '../Components/FeaturedSpeakersCard/FeaturedSpeakersCard.css';
import JoinCard from './JoinCard';

export default function JoinSite() {
    const [details] = useState([
        {
            id:1,
            title:"Increased Visibility",
            detail:"Joining an event speakers platform can increase your visibility and help you reach a broader audience. Platforms typically have a large user base of event planners, conference organizers, and businesses looking for speakers for their events. By joining, you can increase your chances of getting discovered and booked for speaking engagements."
        },
        {
            id:2,
            title:"Networking Opportunities",
            detail:"Joining an event speakers platform can increase your visibility and help you reach a broader audience. Platforms typically have a large user base of event planners, conference organizers, and businesses looking for speakers for their events. By joining, you can increase your chances of getting discovered and booked for speaking engagements."
        },
        {
            id:3,
            title:"Better Access To Events",
            detail:"By joining an event speakers platform, you can gain access to a range of speaking opportunities that you may not have been able to find otherwise. These platforms often provide access to events that are not publicly advertised or are exclusive to members."
        },
        {
            id:4,
            title:"Profesional Development",
            detail:"By joining an event speakers platform, you can learn from other speakers and access resources that can help you improve your skills as a speaker. This can include tips on crafting engaging presentations, building your personal brand, and improving your stage presence."
        },
        {
            id:5,
            title:"Marketing and Promotion",
            detail:"Many event speakers platforms offer marketing and promotional support to their members. This can include social media promotion, email campaigns, and other promotional activities that can help you reach a wider audience."
        }
    ]);

    const firstThreeDetails = details.slice(0, 3);
    const lastTwoDetails = details.slice(3);
  return (
    <div className='text-center'>
        <h3 className='findHead fw-bolder'>
            Why join our site as a <span className='heroColor'>speaker?</span>
        </h3>

        <div className='row joinRow1 justify-content-center '>
                {firstThreeDetails.map((item) => (
                    <div key={item.id} className='col-lg-4'>
                        <JoinCard title={item.title} detail={item.detail} />
                    </div>
                ))}
            </div>
            <div className='row joinRow1 justify-content-center'>
                {lastTwoDetails.map((item) => (
                    <div key={item.id} className='col-lg-4'>
                        <JoinCard title={item.title} detail={item.detail} />
                    </div>
                ))}
            </div>
        
    </div>
  )
}
