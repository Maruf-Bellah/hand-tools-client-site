import React from 'react';
import Footer from '../Sheared/Footer';
import Banner from './Banner';
import Business from './Business';
import Card from './Card';
import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';
import Slider from './Slider';
import SmalBanner from './SmalBanner';

const Home = () => {
     return (
          <div >
               <Banner></Banner>
               <Business></Business>
               <Card></Card>
               <SectionOne></SectionOne>
               {/* <SmalBanner></SmalBanner> */}
               <Slider></Slider>
               <SectionTwo></SectionTwo>
               <Footer></Footer>
          </div>
     );
};

export default Home;