import React from "react";
import "./DestinationSection.css";

const DestinationSection = () => {
    const destinations = [

        { name: 'Sea Point', image: 'src/assets/cape town sea.jpg' },
        { name: 'Bo-Kab', image: 'src/assets/houses.jpg' },
        { name: 'Table Mountain', image: 'src/assets/table mountain at night .jpg' },
        { name: 'Kirstenbosch', image: 'src/assets/kirstenbosch.png' },

    ];

    return (
        <div className="container">
            <h2 className="title">Top Destinations</h2>
            <p className="description">
                VIP PRO Delivery, headquartered in Cape Town, South Africa, offers bespoke, high-end logistics
                services across Southern Africa.
                Let us manage your logistics so you can focus on what matters most.
            </p>
            <div className="destination-grid">
                {destinations.map((dest, index) => (
                    <div key={index} className="destination-card">
                        <img src={dest.image} alt={dest.name} className="destination-image" />
                        <div className="overlay">
                            <h3 className="destination-title">{dest.name}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DestinationSection;