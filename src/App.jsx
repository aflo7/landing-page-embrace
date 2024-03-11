// import { useState } from 'react'
import './App.css'

const navStyle = {
  color: 'purple'
}

const topNavStyle = {
  backgroundColor: 'rgb(250,241,228)',
  display: 'flex',
  justifyContent: 'flex-end',
  gap: '40px'
}

export default function App() {

  return (
    <>
      <div style={topNavStyle}>
        <div>Call Us: (800) 511-9182</div>
        <div>Contact Us</div>
        <div>MyEmbrace Login</div>
      </div>
      <nav style={navStyle}>
        <div>logo</div>
        <div>
          <div>Pet Insurance</div>
          <div>Compare</div>
          <div>Help Center</div>
          <div>Resources</div>
          <button className='get-quote-btn'>Get Quote</button>
        </div>
      </nav>
    </>
  )
}
