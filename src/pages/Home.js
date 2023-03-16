import React from 'react';
import FeaturedReviwe from '../Components/FeaturedReviwe';
import SpeakersCard from '../Components/FeaturedSpeakersCard/SpeakersCard';
import FindSpeakers from '../Components/FindSpeakers';
import Hero from '../Components/Hero';
import JoinSite from '../Components/JoinSite';
import AppLayout from '../layout/AppLayout';

const Home =()=> {
  return (
    <AppLayout>
        <main>
            <Hero/>
            <SpeakersCard/>
            <FindSpeakers/>
            <JoinSite/>
            <FeaturedReviwe/>
        </main>
    </AppLayout>
  )
}

export default Home