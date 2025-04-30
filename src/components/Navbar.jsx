import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    // Toggle dark mode
    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    // Handle search query
    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    return (
        <nav className={`navbar ${isDarkMode ? "dark" : "light"}`}>

            <div className="logo">VIP PRO DELIVERY</div>

            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/TourPage">Tours</Link>
                <Link to="/contact">Contact Us</Link>
            </div>

            {/* Search Bar */}
            <input
                type="text"
                className="search-bar"
                placeholder="Search..."
                value={searchQuery}
                onChange={handleSearchChange}
            />

            {/* Dark Mode Toggle Button */}
            <button className="dark-mode-btn" onClick={toggleDarkMode}>
                {isDarkMode ? "Light Mode" : "Dark Mode"}
            </button>

            {/* Profile Avatar */}
            <div className="profile-avatar">
                <img src="https://via.placeholder.com/40" alt="profile" />
            </div>
        </nav>
    );
};

export default Navbar;
