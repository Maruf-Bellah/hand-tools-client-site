import React, { useEffect, useState } from 'react';
import Services from './Services';

const Card = () => {
     const [cards, setCards] = useState([]);

     useEffect(() => {
          fetch('http://localhost:5000/service')
               .then(res => res.json())
               .then(data => setCards(data))
     }, [])
     return (
          <div className='md:px-12 lg:px-12 px-3 py-12'>
               <h1 className='text-3xl font-bold text-center'>Chose Your Machine {cards.length}</h1>
               <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
                    {
                         cards.map(card => <Services

                              card={card}
                         ></Services>).slice(0, 3)
                    }
               </div>
          </div>
     );
};

export default Card;