import React, { useEffect, useState } from 'react';
import Services from './Services';

const Card = () => {
     const [cards, setCards] = useState([]);

     useEffect(() => {
          fetch('https://gentle-anchorage-39185.herokuapp.com/service')
               .then(res => res.json())
               .then(data => setCards(data))
     }, [])
     return (
          <div className='md:px-12  lg:py-20 lg:px-12 px-3 '>
               <h1 className='text-4xl uppercase font-bold text-center'>You choose the product you need</h1>
               <h2 className='text-2xl uppercase text-center py-3'>
                    And add us to receive it</h2>
               <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
                    {
                         cards.map(card => <Services
                              key={card._id}
                              card={card}
                         ></Services>).slice(0, 3)
                    }
               </div>
          </div>
     );
};

export default Card;