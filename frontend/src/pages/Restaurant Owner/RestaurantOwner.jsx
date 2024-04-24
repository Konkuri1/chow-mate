import React, { useState, useEffect } from 'react';
import axios from 'axios'; // for making HTTP requests to your backend

const RestaurantOwnerDashboard = () => {
  // State variables to manage form inputs and data fetching
  const [restaurants, setRestaurants] = useState([]);
  const [formData, setFormData] = useState({
    restaurantName: '',
    // other fields for restaurant details
  });

  useEffect(() => {
    // Fetch existing restaurants belonging to the owner on component mount
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    try {
      // Make a GET request to fetch restaurants associated with the owner
      const response = await axios.get('/api/restaurants');
      setRestaurants(response.data);
    } catch (error) {
      console.error('Error fetching restaurants:', error);
    }
  };

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make a POST request to create a new restaurant
      await axios.post('/api/restaurants', formData);
      // Refetch the restaurants after successful creation
      fetchRestaurants();
      // Clear form fields
      setFormData({
        restaurantName: '',
        // Clear other fields as well
      });
    } catch (error) {
      console.error('Error creating restaurant:', error);
    }
  };

  const handleDelete = async (restaurantId) => {
    try {
      // Make a DELETE request to remove the restaurant
      await axios.delete(`/api/restaurants/${restaurantId}`);
      // Refetch the restaurants after successful deletion
      fetchRestaurants();
    } catch (error) {
      console.error('Error deleting restaurant:', error);
    }
  };

  return (
    <>
    <h2 className='text-center font-semibold p-2 underline underline-offset-4'>Fill the form below to add your restaurant</h2>
    <div className='mx-auto p-5 flex items-center justify-center max-w-lg'>
      {/* Form to add a new restaurant */}
      <form onSubmit={handleSubmit}>
        <input
        className='border rounded p-2 w-full'
          type="text"
          name="resname"
          value={formData.restaurantName}
          onChange={handleFormChange}
          placeholder="Restaurant Name"
          required
        />
        <input
        className='border rounded p-2 w-full mt-2'
          type="text"
          name="location"
          value={formData.restaurantName}
          onChange={handleFormChange}
          placeholder="Location"
          required
        />
        <input
        className='border rounded p-2 w-full mt-2'
          type="text"
          name="menu"
          value={formData.restaurantName}
          onChange={handleFormChange}
          placeholder="Add menu"
          required
        />
        <input
        className='border rounded p-2 w-full mt-2'
          type="tel"
          name="contact"
          value={formData.restaurantName}
          onChange={handleFormChange}
          placeholder="Contact"
          required
        />
        <input
        className='border rounded p-2 w-full mt-2'
          type="email"
          name="email"
          value={formData.restaurantName}
          onChange={handleFormChange}
          placeholder="Email address"
          required
        />
        <input
        className='border rounded p-2 w-full mt-2'
          type="file"
          name="image"
          required
        />
        {/* Add more input fields for other restaurant details */}
        <button type="submit" className='rounded p-2 font-semibold bg-red-500 text-white mt-2'>Create Restaurant</button>
      </form>

      {/* List of existing restaurants */}
      <ul>
        {restaurants.map((restaurant) => (
          <li key={restaurant.id}>
            {restaurant.name}
            <button onClick={() => handleDelete(restaurant.id)}>Delete</button>
            {/* Add edit button and functionality */}
          </li>
        ))}
      </ul>
    </div></>
  );
};

export default RestaurantOwnerDashboard;
