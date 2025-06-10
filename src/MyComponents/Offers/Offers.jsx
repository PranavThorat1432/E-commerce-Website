import React from 'react'
import './Offers.css';
import exclusive_image from '../../assets/exclu.webp'; // Ensure the path is correct

const Offers = () => {
  return (
    <div className="offers">
        <div className="offers-left">
            <h1 className='text-5xl font-bold text-[#171717]'>Exclusive Offers</h1>
            <p className='text-[19px] text-[#374151]'>Discover our latest offers and promotions. Don't miss out on the best deals available just for you!</p>
            <button className="w-[200px] h-[40px] text-[16px] bg-blue-500 text-white py-2 px-4 rounded-[35px] cursor-pointer hover:bg-blue-600">View Offers</button>
        </div>
        <div className="offers-right">
            <img className='w-[500px] h-[400px] object-cover hover:scale-105 transition ease-in-out duration-300' src={exclusive_image} alt="Exclusive Offers" />
        </div>
    </div>
  )
}

export default Offers
