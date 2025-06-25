import React from 'react'
import './Hero.css'
import hand_icon from '../Assest/hand_icon.png'
import arrow_icon from '../Assest/arrow.png'
import hero_image from '../Assest/hero_image.png'


export default function Hero() {
  return (
    <div className='hero'>
        <div className='hero-left'>
            <h2>NEW ARRIVALS ONLY</h2>
            <div>
                <div className="hero_hand-icon">
                    <p>New</p>
                    <img src={hand_icon} alt=''/>
                </div>
                <p>Collection</p>
                <p>for everyone</p>
            </div>
            <div className="hero_least_button">
                <div>Latest collection</div>
                <img src={arrow_icon} alt=''/>
            </div>
        </div>
        <div className="hero-right">
            <img src={hero_image} alt=''/>
            

        </div>
      
    </div>
  )
}
