import React from 'react';
import './CSS/ShopeCategory.css';
import { ShopContext } from '../Context/ShopeContext';
import dropdown_icon from '../Components/Assest/dropdown_icon.png';
import Item from '../Components/Item/Item';

export default function ShopeCategory(props) {
  const { all_product } = React.useContext(ShopContext);

  return (
    <div className='shope-category'>
      <img src={props.banner} alt="banner" className='shope-category-banner' />

      <div className="shopcategory-indexsort">
        <p>
          <span>Showing 1-12</span> out of {all_product.length} products
        </p>

        <div className="shopecategory-sort">
          sort by <img src={dropdown_icon} alt='' />
        </div>
      </div>

      <div className="shopecategory-products">
        {all_product.map((item, i) => {
          if (
            props.category?.toLowerCase().trim() === item.category?.toLowerCase().trim()
          ) {
            return (
              <Item
                key={i}
                image={item.image}
                name={item.name}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
}
