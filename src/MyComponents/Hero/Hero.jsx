import React from 'react'
import './Hero.css'
import handIcon from '../../assets/hand_icon.png' // Assuming you have a hand icon image in assets folder
import arrow_icon from '../../assets/arrow_icon.png' // Assuming you have an arrow icon image in assets folder
import men from '../../assets/p8.webp'

const Hero = () => {
  return (
    <div className="hero">
        <div className="hero-left">
          <h2>Best Deals !  Best Prices !</h2>
          <div className="hero-hand-icon">
              <p>new</p>
              <img src={handIcon} alt="" className='h-[60px]'/>
          </div>

          <p>Collections <br />for Everyone</p>

          <div className="hero-latest-btn">
            <div>Latest Collection</div>
            <img src={arrow_icon} alt="" className='h-[30px] text-white'/>
          </div>

        </div>

        <div className="hero-right">
          <img src={men} alt="" className='h-[500px]'/>
        </div>
    </div>
  )
}

export default Hero
