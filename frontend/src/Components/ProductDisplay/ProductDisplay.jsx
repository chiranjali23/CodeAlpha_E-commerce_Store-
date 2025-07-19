import React from 'react'
import './ProductDisplay.css';
import star_icon from '../Assest/star_icon.png'
import star_dull_icon from '../Assest/star_dull_icon.png'

const ProductDisplay = (props) => {
    const product = {props};
  return (
    <div className='product-display'>
        <div className="productdisplay-left">
            <div className="product-img-list">
                <img src ={product.image} alt =''/>
                <img src ={product.image} alt =''/>
                <img src ={product.image} alt =''/>
                <img src ={product.image} alt =''/>
            </div>

            <div className="productdisplay-img">
                <img className='productdisplay-main-img' src ={product.image} alt =''/>
            </div>

        </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-star">
                <img src ={star_icon} alt =''/>
                <img src ={star_icon}  alt =''/>
                <img src ={star_icon}  alt =''/>
                <img src ={star_icon}  alt =''/>
                <img src ={star_dull_icon} alt =''/>
                <p>(122)</p>

            </div>
            <div className="producdisplay-right-prices">
                <div className="productdisplay-right-price-new">
                    <p>${product.new_price}</p>
                </div>
                <div className="productdisplay-right-price-old">
                    <p>${product.old_price}</p>
                </div>
                <div className="productdisplay-description">
                This is a high-quality product that matches your fashion needs.
                </div>
                <div className="productdisplay-right-size">
                    <p>Size</p>
                    <select>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                    </select>


            </div>
            <button className='productdisplay-add-to-cart'>Add to Cart</button>

        </div>
        </div>
      
    </div>
  )
}

export default ProductDisplay;
