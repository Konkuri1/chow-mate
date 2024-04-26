import React, { useState } from "react";
// import PlaceholderImage from "../../assets/images/Fried-Chicken.jpg";
// import BurgerImage from "../../assets/images/Burger.jpg";
// import PizzaImage from "../../assets/images/Pizza.jpg";
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
import search from "../../assets/images/search-icon.svg"



const RestaurantMenu = ({ onPlaceOrder }) => {
  const restaurants = [
    {
      name: "Delicious Delights",
      rating: 4.7,
      contact: "+123-456-7890",
      location: "East Legon",
      image: DeliciousDelights,
      menu: [
        { itemName: "Classic Burger", price: 10, image: DeliciousDelights },
        { itemName: "Margherita Pizza", price: 12, image:MargheritaPizza },
        {
          itemName: "Grilled Chicken Sandwich",
          price: 9,
          image: GrilledChickenSandwich,
        },
      ],
    },
    {
      name: "Quiche Lorraine",
      rating: 4.2,
      contact: "+123-456-7890",
      location: "Cantonments",
      image: QuicheLorraine,
      menu: [
        { itemName: "Steak Dinner", price: 20, image: QuicheLorraine},
        { itemName: "Vegetarian Pasta", price: 15, image: VegetarianPasta },
        { itemName: "Sushi Platter", price: 18, image: SushiPlatter },
      ],
    },
    {
      name: "Steak Dinner",
      rating: 4.2,
      contact: "+123-456-7890",
      location: "Cantonments",
      image: SteakDinner,
      menu: [
        { itemName: "Steak Dinner", price: 20, image: SteakDinner },
        { itemName: "Vegetarian Pasta", price: 15, image: VegetarianPasta },
        { itemName: "Sushi Platter", price: 18, image: SushiPlatter },
      ],
    },
    {
      name: "Spaghetti Carbonara",
      rating: 4.2,
      contact: "+123-456-7890",
      location: "Cantonments",
      image: SpaghettiCarbonara,
      menu: [
        { itemName: "Steak Dinner", price: 20, image: SpaghettiCarbonara },
        { itemName: "Vegetarian Pasta", price: 15, image: VegetarianPasta },
        { itemName: "Sushi Platter", price: 18, image: SushiPlatter },
      ],
    },
    {
      name: "Spice House",
      rating: 4.5,
      contact: "+123-456-7890",
      location: "Achimota",
      image: SpiceHouse,
      menu: [
        { itemName: "Chicken Curry", price: 14, image: SpiceHouse },
        { itemName: "Beef Biryani", price: 16, image: BeefBiryani},
        { itemName: "Paneer Tikka", price: 12, image: PaneerTikka },
      ],
    },

    {
      name: "Sizzling Steaks",
      rating: 4.8,
      contact: "+123-456-7890",
      location: "Cirlce",
      image: SizzlingSteaks,
      menu: [
        { itemName: "Filet Mignon", price: 25, image: SizzlingSteaks },
        { itemName: "BBQ Ribs", price: 18, image: BBQRibs },
        { itemName: "Salmon Fillet", price: 20, image: SalmonFillet },
      ],
    },
    {
      name: "Café Paris",
      rating: 4.6,
      contact: "+123-456-7890",
      location: "East Legon",
      image: CaféParis,
      menu: [
        { itemName: "Croissant", price: 5, image: CaféParis},
        { itemName: "Quiche Lorraine", price: 8, image: QuicheLorraine },
        { itemName: "Eclair", price: 4, image: SandwichImage },
      ],
    },
    {
      name: "Mexican Fiesta",
      rating: 4.4,
      contact: "+123-456-7890",
      location: "Cantonments",
      image:  MexicanFiesta,
      menu: [
        { itemName: "Tacos", price: 10, image:  MexicanFiesta},
        { itemName: "Burrito Bowl", price: 12, image: SandwichImage },
        { itemName: "Enchiladas", price: 14, image: SandwichImage },
      ],
    },
    {
      name: "Fresh Catch Seafood",
      rating: 4.9,
      contact: "+123-456-7890",
      location: "Achimota",
      image: FreshCatchSeafood,
      menu: [
        { itemName: "Lobster Tail", price: 30, image: FreshCatchSeafood },
        { itemName: "Shrimp Scampi", price: 22, image: SandwichImage },
        { itemName: "Crab Cakes", price: 18, image: SandwichImage },
      ],
    },
    {
      name: "Italian Trattoria",
      rating: 4.3,
      contact: "+123-456-7890",
      location: "Circle",
      image: SpaghettiCarbonara,
      menu: [
        { itemName: "Spaghetti Carbonara", price: 15, image: SpaghettiCarbonara },
        { itemName: "Margherita Pizza", price: 12, image: SandwichImage },
        { itemName: "Tiramisu", price: 8, image: SandwichImage },
      ],
    },
    {
      name: "Asian Fusion",
      rating: 4.7,
      contact: "+123-456-7890",
      location: "East Legon",
      image: AsianFusion,
      menu: [
        { itemName: "Pad Thai", price: 12, image: AsianFusion },
        { itemName: "Sushi Rolls", price: 16, image: SandwichImage },
        { itemName: "General Tso's Chicken", price: 14, image: SandwichImage },
      ],
    },
    {
      name: "Mediterranean Grill",
      rating: 4.5,
      contact: "+123-456-7890",
      location: "Cantonments",
      image: MediterraneanGrill,
      menu: [
        { itemName: "Falafel Plate", price: 12, image: MediterraneanGrill },
        { itemName: "Chicken Shawarma", price: 14, image: ChickenShawarma },
        { itemName: "Greek Salad", price: 10, image: GreekSalad },
      ],
    },
  ];

  const [showModal, setShowModal] = useState(false);

  const [selectedRestaurantMenu, setSelectedRestaurantMenu] = useState([]);

  const toggleModal = (menu) => {
    setSelectedRestaurantMenu(menu);
    setShowModal(!showModal);
  };

  const [selectedItems, setSelectedItems] = useState([]);

  const handleSelectItem = (item) => {
    const existingItem = selectedItems.find(
      (selectedItem) => selectedItem.itemName === item.itemName
    );
    if (existingItem) {
      const updatedItems = selectedItems.map((selectedItem) =>
        selectedItem.itemName === item.itemName
          ? { ...selectedItem, quantity: selectedItem.quantity + 1 }
          : selectedItem
      );
      setSelectedItems(updatedItems);
    } else {
      setSelectedItems([...selectedItems, { ...item, quantity: 1 }]);
    }
  };

  const handleSelectItemMinus = (item) => {
    const existingItem = selectedItems.find(
      (selectedItem) => selectedItem.itemName === item.itemName
    );
    if (existingItem) {
      const updatedItems = selectedItems.map((selectedItem) =>
        selectedItem.itemName === item.itemName
          ? { ...selectedItem, quantity: selectedItem.quantity - 1 }
          : selectedItem
      );
      setSelectedItems(updatedItems);
    } else {
      setSelectedItems([...selectedItems, { ...item, quantity: 1 }]);
    }
  };

  const handlePlaceOrder = () => {
    onPlaceOrder(selectedItems);
    setShowModal(false);
  };

  const getTotalCost = () => {
    return selectedItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mt-8 mb-8">
        Available Restaurants
      </h1>
      <div className=" max-w-lg flex mx-auto items-center mb-2"> <input type="text" placeholder="Search" className=" w-full p-2  border rounded"/><img src={search} alt="search" className="h-12"/></div>
     
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {restaurants.map((restaurant, index) => (
          <div
            key={index}
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
                onClick={() => toggleModal(restaurant.menu)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg w-full mb-4"
              >
                View All Menu
              </button>
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
          <div className="bg-white rounded-lg p-8 max-w-3xl">
            <h2 className="text-2xl font-bold mb-4">Menu</h2>
            <ul>
              {selectedRestaurantMenu.map((item, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center mb-4"
                >
                  <div className="flex items-center">
                    <img
                      src={item.image}
                      alt={item.itemName}
                      className="w-16 h-16 object-cover rounded-full mr-4"
                    />
                    <div>
                      <p className="font-semibold">{item.itemName}</p>
                      <p className="text-gray-500">${item.price}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <button
                      onClick={() => handleSelectItemMinus(item)}
                      className="bg-red-500 text-white px-3 py-1 rounded-l"
                    >
                      -
                    </button>
                    <span className="px-3">
                      {selectedItems.find(
                        (selectedItem) =>
                          selectedItem.itemName === item.itemName
                      )?.quantity || 0}
                    </span>
                    <button
                      onClick={() => handleSelectItem(item)}
                      className="bg-red-500 text-white px-3 py-1 rounded-r"
                    >
                      +
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-4">
              <p className="text-lg font-semibold">
                Total Cost: ${getTotalCost()}
              </p>
            </div>
            <div className="flex justify-between items-center mt-6">
              <button
                onClick={() => setShowModal(false)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg"
              >
                Close
              </button>
              <button
                onClick={() => (window.location.href = "/order")}
                className="bg-red-500 text-white px-4 py-2 rounded-lg"
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RestaurantMenu;
