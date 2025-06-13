import React, { useContext } from "react";
import "./ProductDisplay.css";
import star_icon from "../../assets/star_icon.png";
import dull_star_icon from "../../assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = ({ product }) => {
  const {addTocart} = useContext(ShopContext);
  return (
    <div className="flex flex-col lg:flex-row mx-4 lg:mx-12 gap-8 productdisplay">
  
      <div className="flex flex-col lg:flex-row gap-4 productdisplay-left">
        
        <div className="flex lg:flex-col gap-4 mx-10 pl-4 productdisplay-img-list"> {/* Added pl-4 for left padding */}
          <img src={product.image} alt="" className="w-30 h-30 object-cover rounded-md border " />
          <img src={product.image} alt="" className="w-30 h-30 object-cover rounded-md border" />
          <img src={product.image} alt="" className="w-30 h-30 object-cover rounded-md border" />
          <img src={product.image} alt="" className="w-30 h-30 object-cover rounded-md border" />
          
        </div>

        <div className="w-[500px] h-[600px] flex items-center justify-center rounded-md productdisplay-main-img">
          <img src={product.image} alt="" className="w-full h-full object-contain rounded" />
        </div>
      </div>

      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={dull_star_icon} alt="" />
          <p>(130)</p>
        </div>

        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-priceOld">
            ${product.old_price}
          </div>

          <div className="productdisplay-right-priceNew">
            ${product.new_price}
          </div>
        </div>

        <div className="productdisplay-right-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis tempora fugiat totam. Dolore vitae, dolorum eos repudiandae minima illum unde doloribus quae porro esse, quisquam obcaecati consectetur amet impedit asperiores?
        </div>

        <div className="productdisplay-right-size">
          <h1>Select Size</h1>
          <div className="productdisplay-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>

        <button onClick={() => {addTocart(product.id)}}>ADD TO CART</button>
        <div className="productdisplay-right-category">
          <span>Category: <span>Women, T-Shirt, Crop-Top</span></span>
        </div>
        <div className="productdisplay-right-category">
          <span>Tags: <span>Modern, Latest, Trend-Shorts</span></span>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
