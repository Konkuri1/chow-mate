import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-red-600 p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="text-white text-xl font-bold">Chow Buddy</div>
          <div>
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="text-white hover:text-gray-300">Home</a>
              </li>
              <li>
                <a href="/menu" className="text-white hover:text-gray-300">Menu</a>
              </li>
              <li>
                <a href="/orders" className="text-white hover:text-gray-300">Orders</a>
              </li>
              <li>
                <a href="/login" className="text-white hover:text-gray-300">Login</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
