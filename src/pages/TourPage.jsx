import React, { useState } from 'react';
import { FaStar, FaSearch, FaFilter } from 'react-icons/fa';
import "./TourPage.css";

const TourPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOrder, setSortOrder] = useState('lowest'); // simplified sorting
    const [showFilters, setShowFilters] = useState(false);

    const tourOptions = [
        {
            title: "Bokab",
            price: "ZAR 2,300.00",
            priceNumeric: 2300,
            rating: 5,
            reviews: 10,
            image: "src/assets/houses.jpg",
            description: "Experience the unique architecture and cultural heritage of Bokab with our comprehensive guided tour."
        },
        {
            title: "Kirstenbosch botanical garden",
            price: "ZAR 2,099.00",
            priceNumeric: 2099,
            rating: 5,
            reviews: 11,
            image: "src/assets/kirstenbosch.png",
            description: "Explore the stunning biodiversity of South Africa at the world-renowned Kirstenbosch National Botanical Garden."
        },
        {
            title: "Sea point",
            price: "ZAR 1,980.00",
            priceNumeric: 1980,
            rating: 5,
            reviews: 22,
            image: "src/assets/cape town sea.jpg",
            description: "Enjoy the scenic Atlantic Seaboard and beautiful promenade of Sea Point with breathtaking ocean views."
        },
        {
            title: "Table Mountain Safari Tour",
            price: "ZAR 1,500.00",
            priceNumeric: 1500,
            rating: 5,
            reviews: 18,
            image: "src/assets/table mountain at night .jpg",
            description: "Discover the natural wonders of Table Mountain with our exclusive safari experience."
        },
        {
            title: "Cape Town City Tour",
            price: "ZAR 1,200.00",
            priceNumeric: 1200,
            rating: 5,
            reviews: 15,
            image: "src/assets/cape town.jpg",
            description: "Explore the vibrant streets and historical landmarks of Cape Town with our comprehensive city tour."
        },
        {
            title: "Sunset Cruise Experience",
            price: "ZAR 850.00",
            priceNumeric: 850,
            rating: 5,
            reviews: 13,
            image: "src/assets/capetown redish.jpg",
            description: "Sail along the coast and witness the spectacular Cape Town sunset from the water."
        }
    ];

    const filteredTours = tourOptions
        .filter(tour =>
            tour.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .sort((a, b) => {
            if (sortOrder === 'lowest') return a.priceNumeric - b.priceNumeric;
            if (sortOrder === 'highest') return b.priceNumeric - a.priceNumeric;
            return 0;
        });

    return (
        <div className="tour-page">
            <div className="hero-section">
                <div className="container">
                    <h1>Discover Cape Town Tours</h1>
                    <p>Explore the beauty and culture of Cape Town with our premium guided tours</p>

                    <div className="search-bar">
                        <FaSearch className="search-icon" />
                        <input
                            type="text"
                            placeholder="Search tours..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <button
                            className="filter-button"
                            onClick={() => setShowFilters(!showFilters)}
                        >
                            <FaFilter className="filter-icon" /> Filters
                        </button>
                    </div>

                    {showFilters && (
                        <div className="filter-options">
                            <h3>Sort By Price</h3>
                            <div className="price-filters">
                                <button
                                    className={sortOrder === 'lowest' ? 'active' : ''}
                                    onClick={() => setSortOrder('lowest')}
                                >
                                    From Lowest
                                </button>
                                <button
                                    className={sortOrder === 'highest' ? 'active' : ''}
                                    onClick={() => setSortOrder('highest')}
                                >
                                    From Highest
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <div className="tours-container">
                <h2>Featured Tours</h2>

                <div className="tours-grid">
                    {filteredTours.map((tour, index) => (
                        <div key={index} className="tour-card">
                            <div className="tour-image">
                                <img src={tour.image} alt={tour.title} />
                            </div>
                            <div className="tour-details">
                                <h3>{tour.title}</h3>
                                <div className="tour-rating">
                                    {[...Array(tour.rating)].map((_, i) => (
                                        <FaStar key={i} className="star-icon" />
                                    ))}
                                    <span>({tour.reviews} reviews)</span>
                                </div>
                                <p>{tour.description}</p>
                                <div className="tour-footer">
                                    <div className="tour-price">From {tour.price}</div>
                                    <button className="book-button">Book Now</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="features-section">
                <h2>Why Choose Our Tours</h2>
                <div className="features-grid">
                    <div className="feature-card">
                        <h3>Expert Local Guides</h3>
                        <p>Our guides are passionate locals with deep knowledge of Cape Town's history and culture.</p>
                    </div>
                    <div className="feature-card">
                        <h3>Small Group Experiences</h3>
                        <p>Enjoy personalized attention with our small group tours for a more intimate experience.</p>
                    </div>
                    <div className="feature-card">
                        <h3>100% Satisfaction Guarantee</h3>
                        <p>If you're not completely satisfied with your tour, we'll make it right.</p>
                    </div>
                </div>
            </div>

            <div className="newsletter-section">
                <h2>Stay Updated with Special Offers</h2>
                <p>Subscribe to our newsletter to receive exclusive deals and updates about new tour experiences.</p>
                <div className="newsletter-form">
                    <input type="email" placeholder="Your email address" />
                    <button>Subscribe</button>
                </div>
            </div>
        </div>
    );
};

export default TourPage;
