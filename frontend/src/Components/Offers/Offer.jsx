import React from 'react'
import './Offer.css'
import exclusive_image from '../Assest/exclusive_image.png' 

export default function Offer() {
  return (
    <div className='offer'>
        <div className="offer_left">
            <h1>Exclusive</h1>
            <h1>Offer For You</h1>
            <p>ONLY ON BEST SELLERS PRODUCTS</p>
            <button>Check Now</button>

        </div>

        <div className="offer_right">
            <img src={exclusive_image} alt=""/>

        </div>
      
    </div>
  )
}
