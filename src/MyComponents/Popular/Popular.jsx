import React from 'react'
import './Popular.css'
import Item from '../Item/Item.jsx'
import data_product from '../../assets/data.js'

const Popular = () => {
  return (
    <div className='popular'> 
        <h1 className='text-2xl font-bold'>POPULAR IN WOMEN</h1>
        <hr className='w-[200px] h-[6px] border-radius-[10px] bg-[#252525] '/>
        <div className="popular-item">
            {data_product.map((item, i) => {
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            })}
        </div>
      
    </div>
  )
}

export default Popular
