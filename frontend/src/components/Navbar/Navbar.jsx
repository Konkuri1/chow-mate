import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-red-600 p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="text-white text-xl font-bold">Chow Buddy</div>
          <div>
            <ul className="flex space-x-4">
            <li>
  <Link to="/" className="bg-white rounded-lg text-red-700 p-1 hover:text-black">
    Home
  </Link>
</li>
            
<li> 
      <Link to="/restaurant" className="bg-white rounded-lg text-red-700 p-1 hover:text-black">
          Order Now
            </Link></li>
<li> 
      <Link to="/register" className="bg-white rounded-lg text-red-700 p-1 hover:text-black">
          Register
            </Link></li>
<li> 
      <Link to="/login" className="bg-white rounded-lg text-red-700 p-1 hover:text-black">
          Login
            </Link></li>
           
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
