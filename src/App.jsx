import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/HomePage/Home';
import ProDetails from './Pages/ProductDetailsPage/ProDetails';
import Profile from './Pages/ProfilePage/Profile';
import Orders from './Pages/MyOrders/Orders';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
        <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product-details" element={<ProDetails />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

