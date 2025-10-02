import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../context/CardContext";
import { useState } from "react";

const Header = () => {
  const [showDropDown, setShowDropDown] = useState(false);

  const { cart, removeFromCart, clearCart } = useCart();

  const itemCount = cart
    .reduce((total, item) => total + item.quantity * item.price, 0)
    .toFixed(2);
  const toggleDropDown = () => {
    if (!cart.length) return;
    setShowDropDown(!showDropDown);
  };
  return (
    <header className="bg-gray-800 text-white p-4 mb-8 rounded-2xl">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl">Shopping Cart</h1>
        <div className="relative">
          <button onClick={toggleDropDown} className="relative">
            <FaShoppingCart className="text-2xl" />
            {itemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full px-2">
                {itemCount}
              </span>
            )}
          </button>
          {showDropDown && (
            <div className="absolute right-0 mt-2 w-72 bg-red-500 rounded shadow-lg z-10">
              <ul className="py-2">
                {cart.map((item) => (
                  <li key={item.id} className="px-4 py-2 border-b">
                    {item.name} - ${item.price} x {item.quantity}
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-white"
                    >
                      Remove
                    </button>
                    {/* <span>{item.name}</span>
                      <span>${(item.price * item.quantity).toFixed(2)}</span> */}
                  </li>
                ))}
              </ul>
              <div className="px-4 py-2">
                <strong>Total:${itemCount}</strong>
              </div>
              <button onClick={() => {clearCart(); setShowDropDown(!showDropDown)}} className="bg-white text-red-500 font-bold py-2 px-4 rounded-lg m-4">Clear Cart</button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
