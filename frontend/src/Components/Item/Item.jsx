import React from 'react'
import './Item.css'

export default function Item(props) {
  return (
    <div classname='item'>
        <img src ={props.image} alt='' />
        <p className='discription'>{props.name}</p>
        <div className="item-prices">
            <div className="item-price-new">
                <p>${props.new_price}</p>

            </div>
            <div className="item-price-old">
                <p>${props.old_price}</p>
            </div>
           
        </div>
      
    </div>
  )
}
