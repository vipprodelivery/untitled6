import React from "react";
import { FaStar } from "react-icons/fa";
import "./TourModal.css";

const TourModal = ({ toggleTourModal }) => {
    const tourOptions = [
        {
            title: "Bokab",
            price: "ZAR 2,300.00",
            rating: 5,
            reviews: 10,
            image: "src/assets/houses.jpg"
        },
        {
            title: "Kirstenbosch botanical garden",
            price: "ZAR 2,099.00",
            rating: 5,
            reviews: 11,
            image: "src/assets/kirstenbosch.png"
        },
        {
            title: "Sea point",
            price: "ZAR 1,980.00",
            rating: 5,
            reviews: 22,
            image: "src/assets/cape town sea.jpg"
        },
        {
            title: "Table Mountain Safari Tour",
            price: "ZAR 1,500.00",
            rating: 5,
            reviews: 18,
            image: "src/assets/table mountain at night .jpg"
        },
        {
            title: "Cape Town City Tour",
            price: "ZAR 1,200.00",
            rating: 5,
            reviews: 15,
            image: "src/assets/cape town.jpg"
        },
        {
            title: "Sunset Cruise Experience",
            price: "ZAR 850.00",
            rating: 5,
            reviews: 13,
            image: "src/assets/capetown redish.jpg"
        }
    ];

    return (
        <div className="tour-modal-overlay" onClick={toggleTourModal}>
            <div className="tour-modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <h2>Your tour with VIP PRO DELIVERY</h2>
                    <button className="close-button" onClick={toggleTourModal}>×</button>
                </div>

                <div className="banner-image">
                    <img src="src/assets/cap.jpg" alt="African safari" />
                </div>

                <div className="tour-options">
                    {tourOptions.map((tour, index) => (
                        <div className="tour-card" key={index}>
                            <img src={tour.image} alt={tour.title} />
                            <h3>{tour.title}</h3>
                            <div className="tour-rating">
                                {[...Array(tour.rating)].map((_, i) => (
                                    <FaStar key={i} color="#00aa6c" />
                                ))}
                                <span className="review-count"> ({tour.reviews})</span>
                            </div>
                            <div className="tour-price">From {tour.price}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TourModal;