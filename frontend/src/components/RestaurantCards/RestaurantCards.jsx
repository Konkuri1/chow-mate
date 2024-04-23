import React from "react";

const RestaurantCard = ({ restaurant }) => {
  return (
    // <div className="bg-white p-4 rounded-lg shadow-md">
    //   <h2 className="text-xl font-bold mb-2">{restaurant.name}</h2>
    //   <p className="text-gray-600 mb-2">{restaurant.cuisine}</p>
    //   <div className="flex items-center mb-2">
    //     <span className="text-gray-600 mr-2">Rating:</span>
    //     <div className="flex items-center">
    //       <svg className="h-4 w-4 text-yellow-500 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    //         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v14M5 12h14" />
    //       </svg>
    //       <span className="text-gray-600">{restaurant.rating}</span>
    //     </div>
    //   </div>
    //   <p className="text-gray-600 mb-2">{restaurant.priceRange}</p>
    //   <p className="text-gray-600 mb-2">{restaurant.location}</p>
    //   <p className="text-gray-600 mb-4">{restaurant.contact}</p>
    //   <ul>
    //     {restaurant.menu.map((item, index) => (
    //       <li key={index} className="text-gray-600">{item}</li>
    //     ))}
    //   </ul>
    //   <button className="bg-red-600 text-white px-4 py-2 mt-2 rounded-md hover:bg-red-700 focus:outline-none focus:bg-red-700">
    //     Place Order
    //   </button>
    // </div>

    <div
    // key={index}
    className="bg-white rounded-lg shadow overflow-hidden"
  >
    <img
      src={restaurant.image}
      alt={restaurant.name}
      className="w-full h-48 object-cover"
    />
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">{restaurant.name}</h2>
      <p className="text-sm mb-2">Rating: {restaurant.rating}</p>
      <p className="text-sm mb-4">Contact: {restaurant.contact}</p>
      <button
        // onClick={() => toggleModal(restaurant.menu)}
        className="bg-red-500 text-white px-4 py-2 rounded-lg w-full mb-4"
      >
        Order Now
      </button>
    </div>
  </div>
  );
};

export default RestaurantCard;

