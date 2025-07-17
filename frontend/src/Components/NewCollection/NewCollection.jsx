import React from 'react'
import './NewCollection.css'
import Item from '../Item/Item'
import new_collections from '../Assest/new_collections'



export default function NewCollection() {
  return (
    <div className='new-collection'>
        <h1>New Collection</h1>
        <hr/>
        <div className="new-collection-item">
            {new_collections.map((item,i) => {
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



      
  