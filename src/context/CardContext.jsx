import { createContext, useContext, useState } from "react";

const CartContext = createContext();


export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const addToCart = (product) => {
        setCart((prevCart) =>{
            const existing = prevCart.find(item => item.id === product.id)
            if(existing) {
                return prevCart.map((item) => 
                    item.id === product.id 
                        ? {...item, quantity: item.quantity + 1}
                        : item
                )
            }
            return [...prevCart, {...product, quantity: 1}]
        })
    }
    return (
        <CartContext.Provider value={{cart, addToCart}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    return useContext(CartContext);
}