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
    <div>
      {/* Form to add a new restaurant */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="restaurantName"
          value={formData.restaurantName}
          onChange={handleFormChange}
          placeholder="Restaurant Name"
          required
        />
        {/* Add more input fields for other restaurant details */}
        <button type="submit">Create Restaurant</button>
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
    </div>
  );
};

export default RestaurantOwnerDashboard;
