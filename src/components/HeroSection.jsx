import React from "react";
import "./HeroSection.css";
import Discover_Cape_Town from "../assets/Discover_Cape_Town.png";




const HeroSection = () => {

    return (
        <div className="hero">
            <div className="hero-overlay"></div>
            <div className="hero-content">
                <img src={Discover_Cape_Town} alt="Discover Cape Town" className="hero-image"/>
            </div>
            <div className="booking-section">
                <div className="booking-info">
                    <div>
                    Location: <input type="text" placeholder="Enter location" className="input-field" />
                    </div>
                    <div>
                        Date: <input type="date" className="input-field" />
                    </div>
                    <div>
                        Guests: <input type="number" min="1" className="input-field" />
                    </div>
                    <button className="btn">Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;