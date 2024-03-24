import {createContext, useContext, useEffect, useState} from "react";

export const CartContext = createContext<any | null>(null);

const getInitialState = () => {
  const cart = localStorage.getItem("cart");
  return cart ? JSON.parse(cart) : [];
};

const cartContextProvider = (props: any) => {
  const [cart, setCart] = useState(getInitialState);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addItem = (cart_item: any) => {
    console.log("add");
    setCart((prev_cart: any) => [...prev_cart, cart_item]);
  };

  const removeItem = (playerId: number) => {
    console.log("remove");
    // setCart((prev: any) => ({
    //   ...prev,
    //   cart: prev.cart.filter((p: any) => p.id !== playerId),
    // }));
  };

  return (
    <CartContext.Provider value={{addItem, removeItem, cart}}>
      {props.children}
    </CartContext.Provider>
  );
};

export default cartContextProvider;
