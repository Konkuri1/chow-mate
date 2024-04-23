import React, { useState }from "react";
import RestaurantCard from "../../components/RestaurantCards/RestaurantCards";


import SandwichImage from "../../assets/images/Sandwich.jpg";
import SteakDinner from  "../../assets/images/Steak Dinner.jpg";
import SpaghettiCarbonara from "../../assets/images/Spaghetti Carbonara.jpg";
import FreshCatchSeafood from "../../assets/images/Fresh Catch Seafood.jpg";
import MediterraneanGrill from "../../assets/images/Mediterranean Grill.jpg";
import DeliciousDelights from "../../assets/images/Delicious Delights.jpg";
import SpiceHouse from "../../assets/images/Spice House.jpeg";
import MexicanFiesta from "../../assets/images/Mexican Fiesta.jpg";
import AsianFusion from "../../assets/images/Asian Fusion.jpg";
import SizzlingSteaks from "../../assets/images/Sizzling Steaks.jpg";
import CaféParis from "../../assets/images/Café Paris.jpg";
import BeefBiryani from "../../assets/images/Beef Biryani.jpeg";
import PaneerTikka from "../../assets/images/Paneer Tikka.jpg"
import VegetarianPasta from "../../assets/images/Vegetarian Pasta.jpg"
import SushiPlatter from "../../assets/images/Sushi Platter.jpeg"
import MargheritaPizza from "../../assets/images/Margherita Pizza.jpg"
import GrilledChickenSandwich from "../../assets/images/Grilled Chicken Sandwich.jpeg"
import GreekSalad from "../../assets/images/Greek Salad.jpg"
import ChickenShawarma from "../../assets/images/Chicken Shawarma.jpeg"
import BBQRibs from "../../assets/images/BBQ Ribs.jpeg"
import SalmonFillet from "../../assets/images/Salmon Fillet.jpg"
import QuicheLorraine from "../../assets/images/Quiche Lorraine.jpeg"

const Homepage = () => {
  const restaurants = [
    {
      name: "Delicious Delights",
      cuisine: "Italian",
      image: DeliciousDelights,
      rating: 4.5,
      priceRange: "$$",
      location: "123 Main St",
      contact: "555-1234",
      menu: ["Pizza", "Pasta", "Salad"],
    },
    {
      name: " Steak Dinner",
      cuisine: "Italian",
      image:  SteakDinner,
      rating: 4.5,
      priceRange: "$$",
      location: "123 Main St",
      contact: "555-1234",
      menu: ["Pizza", "Pasta", "Salad"],
    },
    {
      name: "Spaghetti Carbonara",
      cuisine: "Italian",
      image: SpaghettiCarbonara,
      rating: 4.5,
      priceRange: "$$",
      location: "123 Main St",
      contact: "555-1234",
      menu: ["Pizza", "Pasta", "Salad"],
    },
    {
      name: "Mediterranean Grill",
      cuisine: "Italian",
      image: MediterraneanGrill,
      rating: 4.5,
      priceRange: "$$",
      location: "123 Main St",
      contact: "555-1234",
      menu: ["Pizza", "Pasta", "Salad"],
    },
    {
      name: "Spice House",
      cuisine: "Italian",
      image: SpiceHouse,
      rating: 4.5,
      priceRange: "$$",
      location: "123 Main St",
      contact: "555-1234",
      menu: ["Pizza", "Pasta", "Salad"],
    },
    {
      name: "Sizzling Steaks",
      cuisine: "Italian",
      image: SizzlingSteaks,
      rating: 4.5,
      priceRange: "$$",
      location: "123 Main St",
      contact: "555-1234",
      menu: ["Pizza", "Pasta", "Salad"],
    },
    {
      name: "Margherita Pizza",
      cuisine: "Italian",
      image: MargheritaPizza,
      rating: 4.5,
      priceRange: "$$",
      location: "123 Main St",
      contact: "555-1234",
      menu: ["Pizza", "Pasta", "Salad"],
    },
    {
      name: "Café Paris",
      cuisine: "Italian",
      image: CaféParis,
      rating: 4.5,
      priceRange: "$$",
      location: "123 Main St",
      contact: "555-1234",
      menu: ["Pizza", "Pasta", "Salad"],
    },
    {
      name: "Asian Fusion",
      cuisine: "Italian",
      image: AsianFusion,
      rating: 4.5,
      priceRange: "$$",
      location: "123 Main St",
      contact: "555-1234",
      menu: ["Pizza", "Pasta", "Salad"],
    },
    {
      name: "Vegetarian Pasta",
      cuisine: "Italian",
      image: VegetarianPasta,
      rating: 4.5,
      priceRange: "$$",
      location: "123 Main St",
      contact: "555-1234",
      menu: ["Pizza", "Pasta", "Salad"],
    },
    {
      name: "Greek Salad",
      cuisine: "Italian",
      image: GreekSalad,
      rating: 4.5,
      priceRange: "$$",
      location: "123 Main St",
      contact: "555-1234",
      menu: ["Pizza", "Pasta", "Salad"],
    },
    {
      name: "Quiche Lorraine",
      cuisine: "Italian",
      image: QuicheLorraine,
      rating: 4.5,
      priceRange: "$$",
      location: "123 Main St",
      contact: "555-1234",
      menu: ["Pizza", "Pasta", "Salad"],
    },
  ];

  const [showModal, setShowModal] = useState(false);

  const [selectedRestaurantMenu, setSelectedRestaurantMenu] = useState([]);


  const toggleModal = (menu) => {
    setSelectedRestaurantMenu(menu);
    setShowModal(!showModal);
  };

  return (
    <div className="bg-red-600 font-semibold min-h-screen">
      <div className="bg-white font-semi-bold py-20 px-4 sm:px-6 lg:px-8 h-[90vh] bg-cover" style={{backgroundImage: "linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)"}}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-black mb-4">
              Discover Your Favorite Cuisines
            </h1>
            <p className="text-lg text-white mb-8">
             Get Hooked with the Finest Restaurants Around You.
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
              <p className="text-gray-600">- Liana</p>
            </div>
            <div className="bg-white p-6 rounded-md shadow-md w-96">
              <p className="text-gray-800 mb-4">
                "The best pizza in town! Will definitely come back."
              </p>
              <p className="text-gray-600">- MickyMond</p>
            </div>
            <div className="bg-white p-6 rounded-md shadow-md w-96">
              <p className="text-gray-800 mb-4">
                "I'm glad to have discovered you. The best place for my favourite meals."
              </p>
              <p className="text-gray-600">- Theody</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
