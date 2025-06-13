import React from 'react'
import "./BredCrums.css"
import arrow_icon from "../../assets/arrow_icon.png"

const BredCrums = ({product}) => {
  return (
    <div className='bredcrums'>
        Home <img src={arrow_icon} alt="" />
        SHOP <img src={arrow_icon} alt="" />
        {product.category} <img src={arrow_icon} alt="" />
        {product.name} 
    </div>  
  )
}

export default BredCrums
 