import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../context/CardContext";
import { useState } from "react";

const Header = () => {
  const [showDropDown, setShowDropDown] = useState(false);

  const { cart } = useCart();

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
            <div className="absolute right-0 mt-2 w-48 bg-yellow-300 text-black rounded shadow-lg z-10">
              <div className="p-4">
                <h2 className="font-semibold text-lg">Cart Items</h2>
                <ul>
                  {cart.map((item) => (
                    <li
                      key={item.id}
                      className="flex justify-between py-2 border-b"
                    >
                      <span>{item.name}</span>
                      <span>${(item.price * item.quantity).toFixed(2)}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4">
                  <span className="font-bold">Total:</span>
                  <span className="ml-2">${itemCount}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
