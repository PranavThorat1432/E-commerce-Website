import React, {createContext, useState} from "react";
import all_products from "../assets/all_products";
import CartItems from "../MyComponents/CartItems/CartItems";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for(let index = 0; index < all_products.length; index++) {
        cart[all_products[index].id] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    const addTocart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}));
    }
  
    const removeFromcart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}));
    }
  
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for(const item in cartItems) {
            if(cartItems[item] > 0) {
                let itemInfo = all_products.find((product) => product.id === Number(item));
                if(itemInfo) {
                    totalAmount += itemInfo.new_price * cartItems[item];
                }
            }
        }
        return totalAmount;
    }

    const getTotalCartItems = () => {
        let totalItems = 0;
        for(const item in cartItems) {
            if(cartItems[item] > 0) {
                totalItems += cartItems[item];
            }
        }
        return totalItems;
    }

    const contextValue = {
        getTotalCartItems,
        getTotalCartAmount,
        all_products,
        cartItems,
        addTocart,
        removeFromcart
    };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;
