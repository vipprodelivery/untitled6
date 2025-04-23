import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";  // If Navbar is in the same directory as App
import Home from "../pages/Home";  // Go up one level, then into pages
import About from "../pages/About";
import ContactUs from "../pages/ContactUs";
import TourPage from "../pages/TourPage.jsx";


const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/TourPage" element={<TourPage />} />
            </Routes>
        </Router>
    );
};

export default App;
