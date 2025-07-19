import React from 'react'
import './RelatedProduct.css'
import Item from '../../Components/Item/Item'
import data_product from '../../Components/Assest/data'



const RelatedProduct = () => {
  return (
    <div className='related-product'>
        <h1>RELATED PRODUTS</h1>
        <hr/>
        <div className="relatedproducts-item">
            {data_product.map((item,i)=>{
                return <Item key={i} 
                            id={item.id}
                            name={item.name}
                            image={item.image}
                            new_price={item.new_price}
                            old_price={item.old_price}/>
            }
            )}
        </div>
      
    </div>
  )
}

export default RelatedProduct
