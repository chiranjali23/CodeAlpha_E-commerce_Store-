import React from 'react';
import { ShopContext } from '../Context/ShopeContext';
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrum/Breadcrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';

export default function Products() {
  const { all_product } = React.useContext(ShopContext);
  const {productID} = useParams();

  const product = all_product.find(e => e.id=== Number(productID));

  

  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
    </div>
  );
}


