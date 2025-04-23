import React, { useState } from "react";
import HeroSection from "../components/HeroSection";
import CategorySection from "../components/CategorySection";
import DestinationSection from "../components/DestinationSection";
import TourModal from "../components/TourModal";
import About from "./About.jsx";
import Footer from "../components/Footer.jsx";
//import "./Home.css";

const Home = () => {
    const [showTourModal, setShowTourModal] = useState(false);

    const toggleTourModal = (e) => {
        if (e) e.preventDefault();
        setShowTourModal(!showTourModal);
    };

    return (
        <div className="home-page">
            {showTourModal && <TourModal toggleTourModal={toggleTourModal} />}

            <HeroSection toggleTourModal={toggleTourModal} />
            <About/>
            <CategorySection />
            <DestinationSection />
            <Footer />
        </div>
    );
};

export default Home;