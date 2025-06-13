import React from 'react'
import Hero from '../MyComponents/Hero/Hero.jsx'
import Popular from '../MyComponents/Popular/Popular.jsx'
import Offers from '../MyComponents/Offers/Offers.jsx'
import NewCollections from '../MyComponents/NewCollections/NewCollections.jsx'
import Newsletter from '../MyComponents/NewsLetter/Newsletter'


const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <NewCollections />
      <Newsletter/>
      
    </div>
  )
}

export default Shop
