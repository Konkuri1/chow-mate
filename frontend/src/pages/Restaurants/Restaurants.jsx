import React, { useState } from "react";
import PlaceholderImage from "../../assets/images/Fried-Chicken.jpg";
import BurgerImage from "../../assets/images/Burger.jpg";
import PizzaImage from "../../assets/images/Pizza.jpg";
import SandwichImage from "../../assets/images/Sandwich.jpg";

const RestaurantMenu = ({ onPlaceOrder }) => {
  const restaurants = [
    {
      name: "Delicious Delights",
      rating: 4.7,
      contact: "+123-456-7890",
      location: "123 Main St, City",
      image: PlaceholderImage,
      menu: [
        { itemName: "Classic Burger", price: 10, image: BurgerImage },
        { itemName: "Margherita Pizza", price: 12, image: PizzaImage },
        {
          itemName: "Grilled Chicken Sandwich",
          price: 9,
          image: SandwichImage,
        },
      ],
    },
    {
      name: "Tasty Treats",
      rating: 4.2,
      contact: "+123-456-7890",
      location: "456 Elm St, Town",
      image: PlaceholderImage,
      menu: [
        { itemName: "Steak Dinner", price: 20, image: SandwichImage },
        { itemName: "Vegetarian Pasta", price: 15, image: SandwichImage },
        { itemName: "Sushi Platter", price: 18, image: SandwichImage },
      ],
    },
    {
      name: "Spice House",
      rating: 4.5,
      contact: "+123-456-7890",
      location: "789 Oak St, Village",
      image: PlaceholderImage,
      menu: [
        { itemName: "Chicken Curry", price: 14, image: SandwichImage },
        { itemName: "Beef Biryani", price: 16, image: SandwichImage },
        { itemName: "Paneer Tikka", price: 12, image: SandwichImage },
      ],
    },

    {
      name: "Sizzling Steaks",
      rating: 4.8,
      contact: "+123-456-7890",
      location: "321 Pine St, Suburb",
      image: PlaceholderImage,
      menu: [
        { itemName: "Filet Mignon", price: 25, image: SandwichImage },
        { itemName: "BBQ Ribs", price: 18, image: SandwichImage },
        { itemName: "Salmon Fillet", price: 20, image: SandwichImage },
      ],
    },
    {
      name: "Café Paris",
      rating: 4.6,
      contact: "+123-456-7890",
      location: "567 Maple Ave, Downtown",
      image: PlaceholderImage,
      menu: [
        { itemName: "Croissant", price: 5, image: SandwichImage },
        { itemName: "Quiche Lorraine", price: 8, image: SandwichImage },
        { itemName: "Eclair", price: 4, image: SandwichImage },
      ],
    },
    {
      name: "Mexican Fiesta",
      rating: 4.4,
      contact: "+123-456-7890",
      location: "890 Cedar Rd, Beachside",
      image: PlaceholderImage,
      menu: [
        { itemName: "Tacos", price: 10, image: SandwichImage },
        { itemName: "Burrito Bowl", price: 12, image: SandwichImage },
        { itemName: "Enchiladas", price: 14, image: SandwichImage },
      ],
    },
    {
      name: "Fresh Catch Seafood",
      rating: 4.9,
      contact: "+123-456-7890",
      location: "753 Oakwood Dr, Coastal",
      image: PlaceholderImage,
      menu: [
        { itemName: "Lobster Tail", price: 30, image: SandwichImage },
        { itemName: "Shrimp Scampi", price: 22, image: SandwichImage },
        { itemName: "Crab Cakes", price: 18, image: SandwichImage },
      ],
    },
    {
      name: "Italian Trattoria",
      rating: 4.3,
      contact: "+123-456-7890",
      location: "345 Elmwood Ave, Old Town",
      image: PlaceholderImage,
      menu: [
        { itemName: "Spaghetti Carbonara", price: 15, image: SandwichImage },
        { itemName: "Margherita Pizza", price: 12, image: SandwichImage },
        { itemName: "Tiramisu", price: 8, image: SandwichImage },
      ],
    },
    {
      name: "Asian Fusion",
      rating: 4.7,
      contact: "+123-456-7890",
      location: "678 Birch Ln, Chinatown",
      image: PlaceholderImage,
      menu: [
        { itemName: "Pad Thai", price: 12, image: SandwichImage },
        { itemName: "Sushi Rolls", price: 16, image: SandwichImage },
        { itemName: "General Tso's Chicken", price: 14, image: SandwichImage },
      ],
    },
    {
      name: "Mediterranean Grill",
      rating: 4.5,
      contact: "+123-456-7890",
      location: "901 Pinecrest Rd, Hillside",
      image: PlaceholderImage,
      menu: [
        { itemName: "Falafel Plate", price: 12, image: SandwichImage },
        { itemName: "Chicken Shawarma", price: 14, image: SandwichImage },
        { itemName: "Greek Salad", price: 10, image: SandwichImage },
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
                      onClick={() => handleSelectItem(item)}
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
