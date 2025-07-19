import React, { useContext } from 'react';
import './CartItems.css';
import { ShopContext } from '../../Context/ShopeContext';
import remove_icon from '../Assest/cart_cross_icon.png';

const CartItems = () => {
  const { getTotalCartAmount,all_product, cartItems, removeFromCart } = useContext(ShopContext);

  return (
    <div className='cart-items'>
      <div className="cartitems-format-main">
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />

      {all_product.map((product) => {
        if (cartItems[product.id] > 0) {
          return (
            <div key={product.id} className="cartitems-format">
              <img src={product.image} alt={product.name} className='cartitems-product-icon' />
              <p>{product.name}</p>
              <p>${product.new_price}</p>
              <button className='cartitems-quantity'>{cartItems[product.id]}</button>
              <p>${(product.new_price * cartItems[product.id]).toFixed(2)}</p>
              <img
                className='cartitems-remove-icon'
                src={remove_icon}
                alt='Remove'
                onClick={() => removeFromCart(product.id)}
              />
            </div>
          );
        }
        return null;
      })}
      <div className="cartitem-down">
        <div className="cartitems-total">
            <h1>Cart Total</h1>
            <div>
                <div className="cartitem-total-item">
                    <p>Subtotal</p>
                    <p>${getTotalCartAmount()}</p>
                </div>
                <hr/>
                <div className="cartitem-total-item">
                    <p>Shipping Fee</p>
                    <p>Free</p>
                </div>
                <hr/>
                <div className="cartitem-total-item">
                    <h3>Total</h3>
                    <h3>${getTotalCartAmount()}</h3>
                </div>
            </div>
            <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitems-promocode">
            <p>If Youhave a promo code,Enter it here</p>
            <div className="cartitem-promobox">
                <input type ="text" placeholder='promo code'/>
                <button>Submit</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
