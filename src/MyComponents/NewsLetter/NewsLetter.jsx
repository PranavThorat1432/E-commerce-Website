import React from "react";
import "./NewsLetter.css";

const NewsLetter = () => {
  return (
    <div className="newsletter">
        <h1 className="text-[50px] font-bold text-[#454545]">Get Exclusive Offers on Your Email</h1>
        <p className="text-[20px] font-normal text-[#454545]">
            Subscribe to our newsletter and be the first to know about our latest
            products and special offers.
        </p>
        <div>
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button> 
        </div>
    </div>
  );
};

export default NewsLetter;
