import React, { useState } from 'react';
import './Section3.css';
import a from '../Images/g1.jpg';
import b from '../Images/g2.jpg';
import c from '../Images/g3.jpg';
import d from '../Images/g4.jpg';
import r1 from '../Images/g5.jpg';
import r2 from '../Images/g6.jpg';
import r3 from '../Images/r3.png';
import h from '../Images/h.jpg';
// import a from '../Images/a.jpg';
// import b from '../Images/b.jpg';
// import c from '../Images/f.jpg';
// import d from '../Images/d.jpg';
// import r1 from '../Images/r1.png';
// import r2 from '../Images/r2.png';
// import r3 from '../Images/r3.png';
// import h from '../Images/h.jpg';
import Card from './Card';

export default function Section3() {
  const [startIdx, setStartIdx] = useState(0);

  const handlePrev = () => {
    setStartIdx((prevIndex) => (prevIndex === 0 ? 7 : prevIndex - 1));
  };

  const handleNext = () => {
    setStartIdx((prevIndex) => (prevIndex === 7 ? 0 : prevIndex + 1));
  };

  const cards = [
    { img: a, title: 'Citralan Puri Serang' },
    { img: b, title: 'Aliva Priva Jardin' },
    { img: c, title: 'Asatti City' },
    { img: d, title: 'Persi Hunds City' },
    { img: r1, title: 'Burdj Gyutf Sidan' },
    { img: r2, title: 'Citralan Puri Serang' },
    { img: r3, title: 'Curyd Artee' },
    { img: h, title: 'Tuibf Aghit Manti' },
  ];

  const visibleCards = cards.slice(startIdx, startIdx + 4);

  return (
    <>
      <div className='room'>
        <div className='bts'>
          <div className='head'>
            <h2>Best Choices</h2>
            <h1>Popular Residencies</h1>
          </div>
          <div className='btns'>
            <button onClick={handlePrev}>&lt;</button>
            <button onClick={handleNext}>&gt;</button>
          </div>
        </div>
        <div className='mhnt'>
            {visibleCards.map((card, index) => (
            <Card key={index} img={card.img} title={card.title} />
            ))}
        </div>
      </div>
    </>
  );
}

