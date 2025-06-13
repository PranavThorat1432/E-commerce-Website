import React, { useContext } from 'react'
import "./CartItems.css"
import remove_icon from "../../assets/remove.webp"
import { ShopContext } from '../../Context/ShopContext'

const CartItems = () => {
    const { getTotalCartAmount, all_products, cartItems, removeFromcart } = useContext(ShopContext);
    return (
        <div className='cartitems'>
            <div className="cartitems-format-main">
                <p className="text-gray-600">Products</p>
                <p className="text-gray-600">Title</p>
                <p className="text-gray-600">Price</p>
                <p className="text-gray-600">Quantity</p>
                <p className="text-gray-600">Total</p>
                <p className="text-gray-600">Remove</p>
            </div>
            <hr />
            {all_products && all_products.map((e) => {
                if (cartItems[e.id] > 0) {
                    return <div key={e.id}>
                        <div className='cartItems-format cartitems-format-main'>
                            <img src={e.image} alt="" className="h-[100px] object-cover rounded-lg" />
                            <p className="font-medium">{e.name}</p>
                            <p className="text-gray-600">${e.new_price}</p>
                            <button className='cartitems-quantity'>
                                {cartItems[e.id]}
                            </button>
                            <p className="font-semibold">${e.new_price * cartItems[e.id]}</p>
                            <img 
                                src={remove_icon} 
                                alt="" 
                                onClick={() => removeFromcart(e.id)} 
                                className="h-[20px] cursor-pointer hover:scale-110 transition-transform"
                            />
                        </div>
                        <hr/>
                    </div>
                }
                return null;
            })}
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1 className="text-2xl font-bold mb-6">Cart Totals</h1>
                    <div>
                        <div className="cartitems-total-item">
                            <p className="text-gray-600">Subtotal</p>
                            <p className="font-semibold">${getTotalCartAmount()}</p>
                        </div>
                        <hr/>
                        <div className="cartitems-total-item">
                            <p className="text-gray-600">Shipping Fee</p>
                            <p className="font-semibold">Free</p>
                        </div>
                        <hr/>
                        <div className="cartitems-total-item">
                            <p className="text-gray-600">Total</p>
                            <p className="font-semibold">${getTotalCartAmount()}</p>
                        </div>
                    </div>
                    <button className="w-full mt-6 bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:-translate-y-1">
                        PROCEED TO CHECKOUT
                    </button>
                </div>
                <div className="cartitems-promocode">
                    <p className="text-gray-600 mb-4">If you have a promo code, Enter it here</p>
                    <div className="cartitems-promobox">
                        <input 
                            type='text' 
                            placeholder='promo code'
                            className="flex-1 px-4 py-2 focus:outline-none"
                        />
                        <button className="bg-gray-800 hover:bg-gray-900 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 transform hover:-translate-y-1">
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItems