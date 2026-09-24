import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "../useCart";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  //const [menu, setMenu] = useState(false);
  const { increment, decrement, cart, removeFromCart } = useCart();
  return (
    <div className="flex flex-col justify-between w-full bg-black text-white p-5">
      <div className="flex gap-10 w-full justify-between items-center">
        <h1 className="text-3xl font-bold">audiophile</h1>
        <div className="flex justify-center items-center text-sm tracking-[0.12rem] gap-10 font-bold">
          <Link className="hover:text-amber-500" to="/">
            HOME
          </Link>
          <Link className="hover:text-amber-500" to="/headphone">
            HEADPHONES
          </Link>
          <Link className="hover:text-amber-500" to="/speaker">
            SPEAKERS
          </Link>
          <Link className="hover:text-amber-500" to="/earphone">
            EARPHONES
          </Link>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer
           text-xl"
        >
          <FontAwesomeIcon icon={faCartShopping} /> ({cart.length})
        </button>
      </div>
      {isOpen && (
        <div className="bg-white text-black p-4 mt-4 rounded">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-bold text-3xl ">Your Cart</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-red-500 font-bold cursor-pointer"
            >
              X Close
            </button>
          </div>
          {cart.length === 0 ? (
            <p>Cart is empty</p>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="flex justify-between py-1 border-b">
                <div className="flex gap-10">
                  <div>
                    {item.name} (x{item.quantity})
                  </div>
                  <div>
                    {item.price} (x{item.quantity}) ={" "}
                    {item.quantity * item.price}
                  </div>
                </div>
                <button
                  className="text-4xl font-bold active:text-white"
                  onClick={() => {
                    increment(item);
                  }}
                >
                  +
                </button>
                <button
                  onClick={() => {
                    decrement(item);
                  }}
                  className="text-5xl font-bold active:text-white"
                >
                  -
                </button>
                <button
                  onClick={() => removeFromCart(item)}
                  className="text-red-500 text-sm"
                >
                  Remove
                </button>
              </div>
            ))
          )}
          <div>
            Total Amount: $
            {cart.reduce((total, item) => {
              return total + item.price * item.quantity;
            }, 0)}
          </div>
        </div>
      )}
      <div>
        <hr className="border-t border-white/40 mt-6" />
      </div>
    </div>
  );
};

export default Navbar;
