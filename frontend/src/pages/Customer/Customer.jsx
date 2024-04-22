import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Customer = () => {
  const [showMoreRestaurants, setShowMoreRestaurants] = useState(false);
  const [editProfile, setEditProfile] = useState(false);
  const [userData, setUserData] = useState({
    name: "Evarest",
    email: "eva2gmail.com",
    phone: "+1234567890",
    address: "Accra ghana"
  });

  const handleLogout = () => {
   
  };

  const handleEditProfile = () => {
    setEditProfile(true);
  };

  const handleSaveProfile = () => {
   
    setEditProfile(false);
  };

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleContactRestaurant = () => {
   
  };

  const handleViewMenu = () => {
   
  };

  
  const sampleRestaurants = [
    {
      name: "Delicious Delights",
      owner: "Alice Smith",
      location: "123 Main St, City",
      rating: 4.7,
      contact: "+1234567890",
      image: "https://via.placeholder.com/400x200"
    },
    {
      name: "Tasty Treats",
      owner: "Bob Johnson",
      location: "456 Oak Ave, Town",
      rating: 4.5,
      contact: "+1234567890",
      image: "https://via.placeholder.com/400x200"
    },
    {
      name: "Gourmet Grills",
      owner: "Charlie Brown",
      location: "789 Elm St, Village",
      rating: 4.8,
      contact: "+1234567890",
      image: "https://via.placeholder.com/400x200"
    }
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
     
      <header className="bg-red-500 py-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-white text-3xl font-bold">Virtual Restaurants</h1>
          <div className="flex items-center space-x-4">
            <div>
              {editProfile ? (
                <button onClick={handleSaveProfile} className="bg-white text-red-500 px-4 py-2 rounded-full font-semibold focus:outline-none focus:ring-2 focus:ring-red-500">Save</button>
              ) : (
                <button onClick={handleEditProfile} className="bg-white text-red-500 px-4 py-2 rounded-full font-semibold focus:outline-none focus:ring-2 focus:ring-red-500">Edit Profile</button>
              )}
            </div>
            <button onClick={handleLogout} className="bg-white text-red-500 px-4 py-2 rounded-full font-semibold focus:outline-none focus:ring-2 focus:ring-red-500">Logout</button>
          </div>
        </div>
      </header>

      
      <div className="container mx-auto py-8">
        
        <div className="bg-white shadow-md rounded-md p-6 mb-8">
          <h2 className="text-lg font-semibold mb-4 text-red-500">User Profile</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-500 mb-1">Name</label>
              <input type="text" name="name" value={userData.name} onChange={handleChange} disabled={!editProfile} className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-red-500" />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-500 mb-1">Email</label>
              <input type="email" name="email" value={userData.email} onChange={handleChange} disabled={!editProfile} className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-red-500" />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-500 mb-1">Phone</label>
              <input type="tel" name="phone" value={userData.phone} onChange={handleChange} disabled={!editProfile} className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-red-500" />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-500 mb-1">Address</label>
              <input type="text" name="address" value={userData.address} onChange={handleChange} disabled={!editProfile} className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-red-500" />
            </div>
          </div>
        </div>

       
        <div className="bg-white shadow-md rounded-md p-6 mb-8">
          <h2 className="text-lg font-semibold mb-4 text-red-500">Explore Restaurants</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           
            {sampleRestaurants.map((restaurant, index) => (
              <div key={index} className="bg-gray-200 rounded-md p-4">
                <img src={restaurant.image} alt={restaurant.name} className="w-full h-40 object-cover rounded-md mb-4" />
                <h3 className="text-lg font-semibold mb-2">{restaurant.name}</h3>
                <p className="text-sm text-gray-500 mb-2">Owner: {restaurant.owner}</p>
                <p className="text-sm text-gray-500 mb-2">Location: {restaurant.location}</p>
                <div className="flex items-center mb-2">
                  <span className="text-red-500 mr-1">
                    <FaStar />
                  </span>
                  <span>{restaurant.rating}</span>
                </div>
                <p className="text-sm text-gray-500 mb-2">Contact: {restaurant.contact}</p>
                <button onClick={handleViewMenu} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full font-semibold focus:outline-none focus:ring-2 focus:ring-red-500">View Menu</button>
                <button onClick={handleContactRestaurant} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full font-semibold focus:outline-none focus:ring-2 focus:ring-red-500 ml-2">Contact Restaurant</button>
              </div>
            ))}
          </div>
          {!showMoreRestaurants && (
            <div className="text-center mt-8">
              <Link to="/restaurant" className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full font-semibold focus:outline-none focus:ring-2 focus:ring-red-500">View More Restaurants</Link>
 
            </div>
          )}
        </div>

       
        
      </div>
    </div>
  );
};

export default Customer;
