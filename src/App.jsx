// import { useState } from 'react'
import './App.css';
import { RxHamburgerMenu } from 'react-icons/rx';

export default function App() {
  return (
    <>
      <div className="top-nav">
        <div>Call Us: (800) 511-9182</div>
        <div>Contact Us</div>
        <div>MyEmbrace Login</div>
      </div>
      <nav>
        <RxHamburgerMenu className="burger-logo" />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <div className="embrace-text">embrace</div>
          <div className="pet-insurance-text">PET INSURANCE</div>
        </div>
        <button className="get-quote-btn">Get Quote</button>
      </nav>

      {/* <img
        className="dog-img"
        src="https://images.ctfassets.net/nx3pzsky0bc9/2sdUirqRQ4dXpJpVUcCKny/02edf394197f4f3df2e6f6fb6e2d2f54/Desktop_Work_at_Embrace.png?w=1600&fm=webp"
      /> */}
      <div className='dog-img'></div>

      
    </>
  );
}
