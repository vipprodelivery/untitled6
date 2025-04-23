import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">VIP PRO DELIVERY</div>
            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/TourPage">Tours</Link>

                <Link to="/contact">Contact Us</Link>
            </div>
        </nav>
    );
};

export default Navbar;