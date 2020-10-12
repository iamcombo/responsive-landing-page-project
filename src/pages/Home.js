import React from 'react';
import landscapeCar from '../assets/landscape-car.jpg';
import portraitCar from '../assets/portrait-car.jpg';
import '../styles/Home.css';

function Home() {
  return (
    <main>
      <section>
        <h1>
          <span>Build</span>
          <span> & </span>
          <span>Price</span>
        </h1>
        <p>Select and Build Your Dream Car</p>
        <button>Build Now</button>
      </section>
      <img src={landscapeCar} alt='landscape-car' />
      <img src={portraitCar} alt='portrait-car' />
    </main>
  )
}

export default Home;
