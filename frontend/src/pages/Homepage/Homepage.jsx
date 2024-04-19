import React from "react";
import RestaurantCard from "../../components/RestaurantCards/RestaurantCards";

const Homepage = () => {
  const restaurants = [
    {
      name: "Delicious Delights",
      cuisine: "Italian",
      rating: 4.5,
      priceRange: "$$",
      location: "123 Main St",
      contact: "555-1234",
      menu: ["Pizza", "Pasta", "Salad"],
    },
  ];

  return (
    <div className="bg-red-500 min-h-screen">
      <div className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-red-500 mb-4">
              Discover Your Favorite Cuisine
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Explore a wide range of restaurants offering delicious meals just
              for you.
            </p>
            <button className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 focus:outline-none focus:bg-red-700">
              Find Restaurants
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto py-8">
        <h2 className="text-2xl font-bold text-white mb-4">
          Popular Restaurants
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {restaurants.map((restaurant, index) => (
            <RestaurantCard key={index} restaurant={restaurant} />
          ))}
        </div>
      </div>

      

      <div className="container mx-auto py-8">
        <h2 className="text-2xl font-bold text-white mb-4">
          Quick and Affordable Lunches
        </h2>
      </div>

      <div className="bg-gray-100 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">
            Customer Reviews
          </h2>

          <div className="flex justify-center items-center space-x-8">
            <div className="bg-white p-6 rounded-md shadow-md w-96">
              <p className="text-gray-800 mb-4">
                "Great food and excellent service. Highly recommended!"
              </p>
              <p className="text-gray-600">- Tim</p>
            </div>
            <div className="bg-white p-6 rounded-md shadow-md w-96">
              <p className="text-gray-800 mb-4">
                "The best pizza in town! Will definitely come back."
              </p>
              <p className="text-gray-600">- Sandra</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
