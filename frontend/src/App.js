import "../src/App.css";
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Homepage from './pages/Homepage/Homepage';
import Restaurant from './pages/Restaurants/Restaurants';
import Menu from "./pages/Menu/Menu"
import Order from './pages/Order/Order';
import Footer from './components/Footer/Footer';
import Login from './pages/Login/Login';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Register from "./pages/Register/Register";
import RestaurantOwner from "./pages/Restaurant Owner/RestaurantOwner";
import CustomerDashboard from "./pages/Customer/Customer";

const App = () => {
  return (
    <div>
       <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/register" element={<Register />}/>
      <Route path="/menu" element={<Menu />}/>
      <Route path="/order" element={<Order />}/>
      <Route path="/restaurant" element={<Restaurant />}/>
      <Route path="/customer-dashboard" element={<CustomerDashboard/>}/>
      <Route path="/restaurant-owner-dashboard" element={<RestaurantOwner/>}/>
      
      
      
       </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App