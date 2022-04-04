import React, { createContext, useState} from 'react';

export const CartContext=createContext()
// This makes it so i can reach and alter the cart from the mainpage and the camerapage
export const CartProvider=(props) => {
    const [cart, setCart] = useState([]);
    return (
        <CartContext.Provider value={[cart, setCart]}>
            {props.children}
        </CartContext.Provider>
    )
}