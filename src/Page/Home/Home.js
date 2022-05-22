import React from 'react';
import Footer from '../Sheared/Footer';
import Banner from './Banner';
import Card from './Card';
import Slider from './Slider';

const Home = () => {
     return (
          <div>
               <Banner></Banner>
               <Card></Card>
               {/* <Slider></Slider> */}
               <Footer></Footer>
          </div>
     );
};

export default Home;