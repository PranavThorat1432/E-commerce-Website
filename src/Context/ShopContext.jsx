import React, {createContext, useState} from "react";
import all_products from "../assets/all_products";

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
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const addTocart = async (itemId) => {
        try {
            setIsLoading(true);
            setError(null);
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 500));
        } catch (err) {
            setError('Failed to add item to cart');
            throw err;
        } finally {
            setIsLoading(false);
        }
    }
  
    const removeFromcart = async (itemId) => {
        try {
            setIsLoading(true);
            setError(null);
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 500));
        } catch (err) {
            setError('Failed to remove item from cart');
            throw err;
        } finally {
            setIsLoading(false);
        }
    }
  
    const clearCart = () => {
        setCartItems(getDefaultCart());
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
        all_products,
        cartItems,
        addTocart,
        removeFromcart,
        clearCart,
        getTotalCartAmount,
        getTotalCartItems,
        isLoading,
        error
    };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;
