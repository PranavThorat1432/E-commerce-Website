import React, { useContext } from 'react'
import {ShopContext} from "../Context/ShopContext.jsx"
import { useParams } from 'react-router-dom';
import BredCrums from '../MyComponents/BredCrums/BredCrums.jsx';
import ProductDisplay from '../MyComponents/ProductDisplay/ProductDisplay.jsx';
import Description from '../MyComponents/Description/Description.jsx';
import RelatedProducts from '../MyComponents/RelatedProducts/RelatedProducts.jsx';


const Product = () => {
  const {all_products} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_products?.find((e) => e.id === parseInt(productId));
  return (
    <div>
      <BredCrums product={product}/>
      <ProductDisplay product={product}/>
      <Description></Description>
      <RelatedProducts></RelatedProducts>
    </div>
  )
}

export default Product
