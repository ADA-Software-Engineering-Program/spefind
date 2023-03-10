import React from 'react'
import '../Components/FeaturedSpeakersCard/FeaturedSpeakersCard.css'

export default function FindSpeakers() {
  return (
    <div className='text-center findSection'>
        <h3 className='findHead fw-bolder'>
            Why find <span className='heroColor'>speakers</span> on our site?
        </h3>
        <p className='findText'>
            Speakers go through rigorous process and qualifications to join our community, this measure is taken to ensure adequacy and quality in the speakers we provide. 
            So therefore, our platform offers you the best, we offer authenticity. Spefind also has a very good system put in place whereby speakers will always be ready and available for events except for dire circumstances. 
            Our goal is to make the “search for a speaker” process seamless, convenient, and easy for event organizers and the world at large.
        </p>
    </div>
  )
}
