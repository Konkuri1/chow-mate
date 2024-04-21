// CustomerDashboard.jsx

import React from 'react';

const CustomerDashboard = () => {
  // Sample restaurant data
  const restaurants = [
    {
      name: "Delicious Delights",
      rating: 4.7,
      contact: "+123-456-7890",
      location: "123 Main St, City",
      menu: [
        { itemName: "Classic Burger", price: 10 },
        { itemName: "Margherita Pizza", price: 12 },
        { itemName: "Grilled Chicken Sandwich", price: 9 },
        // Add more items as needed
      ]
    },
    {
      name: "Tasty Tacos",
      rating: 4.4,
      contact: "+987-654-3210",
      location: "456 Elm St, Town",
      menu: [
        { itemName: "Beef Taco", price: 8 },
        { itemName: "Chicken Quesadilla", price: 10 },
        { itemName: "Vegetarian Burrito", price: 9 },
        // Add more items as needed
      ]
    }
    // Add more restaurants as needed
  ];

  const handleLogout = () => {
  
    console.log("Logged out successfully");
  };

  return (
    <div className="bg-red-500 min-h-screen p-4 text-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Discover Delicious Food!</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {restaurants.map((restaurant, index) => (
            <div key={index} className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-bold mb-2">{restaurant.name}</h2>
              <p className="text-sm mb-2">Rating: {restaurant.rating}</p>
              <p className="text-sm mb-2">Location: {restaurant.location}</p>
              <p className="text-sm mb-4">Contact: {restaurant.contact}</p>
              <h3 className="text-lg font-semibold mb-2">Menu</h3>
              <ul>
                {restaurant.menu.map((item, idx) => (
                  <li key={idx} className="flex justify-between items-center mb-1">
                    <span>{item.itemName}</span>
                    <span>${item.price}</span>
                  </li>
                ))}
              </ul>
              <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg mt-4 w-full">
                Place Order
              </button>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <button onClick={handleLogout} className="bg-white text-red-500 px-4 py-2 rounded-lg hover:bg-red-500 hover:text-white transition duration-300">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomerDashboard;
