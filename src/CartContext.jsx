import { createContext, useState } from "react";
import { useEffect } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    localStorage.setItem("Cart Details", JSON.stringify(cart));
  }, [cart]);

  function decrement(product) {
    const index = cart.findIndex((item) => item.id === product.id);
    if (cart[index].quantity === 1) {
      removeFromCart(product);
      return;
    }
    const newCart = [...cart];
    newCart[index] = {
      ...newCart[index],
      quantity: newCart[index].quantity - 1,
    };
    setCart(newCart);
  }

  function increment(product) {
    const index = cart.findIndex((item) => item.id === product.id);
    const newCart = [...cart];
    newCart[index] = {
      ...newCart[index],
      quantity: newCart[index].quantity + 1,
    };
    setCart(newCart);
  }

  function removeFromCart(product) {
    const copyCart = [...cart];
    setCart(copyCart.filter((item) => item.id !== product.id));
  }

  function addToCart(product) {
    const index = cart.findIndex((item) => item.id === product.id);
    const newCart = [...cart];
    if (index !== -1) {
      newCart[index] = {
        ...newCart[index],
        quantity: newCart[index].quantity + product.quantity,
      };
    } else {
      newCart.push({ ...product });
    }
    setCart(newCart);
  }

  /*function addToCart(product) {
  // Check if product already exists
  const existingItem = cart.find(item => item.id === product.id);

  if (existingItem) {
    // Found: update the quantity
    const updatedCart = cart.map(item =>
      item.id === product.id
        ? { ...item, quantity: item.quantity + product.quantity }
        : item
    );
    setCart(updatedCart);
  }
    // add the new product
    setCart([...cart, { ...product }]);
} */

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, increment, decrement }}
    >
      {children}
    </CartContext.Provider>
  );
}
