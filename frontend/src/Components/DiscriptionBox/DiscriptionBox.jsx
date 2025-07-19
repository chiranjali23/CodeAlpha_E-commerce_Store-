import React from 'react';
import './DiscriptionBox.css';

const DiscriptionBox = () => {
  return (
    <div className='discription-box'>
      <div className="discriptionbox-navigator">
        <div className="disceiption-nav-box">Description</div>
        <div className="disceiption-nav-box">Reviews</div>
      </div>
      <div className="discriptionbox-content">
        <p>
          This product is crafted with the highest quality materials to ensure comfort, durability, and style. Whether you're heading out for a casual outing or a special occasion, it complements your wardrobe effortlessly.
        </p>
        <p>
          Customers love the attention to detail and the perfect fit this item offers. With consistently high ratings, it's a trusted choice for anyone seeking both fashion and functionality in one package.
        </p>
      </div>
    </div>
  );
};

export default DiscriptionBox;
