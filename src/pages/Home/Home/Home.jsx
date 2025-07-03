import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import ClientLogosMarquee from '../ClientLogosMarquee/ClientLogosMarquee';
import Benefits from '../Benefits/Benefits';
import BeMarchent from '../BeMarchent/BeMarchent';
import ReviewSlider from '../Review/ReviewSlider';



const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Services></Services>
           <ReviewSlider></ReviewSlider>
           <ClientLogosMarquee></ClientLogosMarquee>
           <Benefits></Benefits>
          <BeMarchent></BeMarchent>
        </div>
    );
};

export default Home;