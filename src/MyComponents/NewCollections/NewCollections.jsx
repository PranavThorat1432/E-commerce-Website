import React from 'react'
import './NewCollections.css'
import new_collections from '../../assets/newcollection.js'
import Item from '../Item/Item'

const NewCollections = () => {
  return (
    <div className='new-collections'>
        <h1 className='text-2xl font-bold text-[#171717]'>NEW COLLECTIONS</h1>
        <hr className='w-[200px] h-[6px] border-radius-[10px] bg-[#252525] '/>
        <div className="collections">
            {new_collections.map((item,i) => {
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            })}
        </div>
    </div>
  )
}

export default NewCollections
