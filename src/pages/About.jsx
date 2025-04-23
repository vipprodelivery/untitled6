import React from "react";
import "./About.css";

const About = () => {
    return (

        <div className="about-container">
            <br/><br/><br/><br/>
            <div className="about-hero">
                <h1>About VIP PRO DELIVERY</h1>
                <p>Your premier tour and logistics provider in Cape Town</p>
            </div>

            <div className="about-content">
                <div className="about-section centered">
                    <h2>Our Mission</h2>
                    <p>
                        To provide unforgettable experiences through high-quality, personalized tours and
                        reliable logistics services that exceed our clients' expectations.
                    </p>
                </div>


                <div className="about-section">
                    <h2>Why Choose Us</h2>
                    <div className="features-grid">
                        <div className="feature">
                            <h3>Local Expertise</h3>
                            <p>Our guides have intimate knowledge of Cape Town's history, culture, and hidden gems.</p>
                        </div>
                        <div className="feature">
                            <h3>Personalized Service</h3>
                            <p>We tailor our tours and services to meet your specific needs and preferences.</p>
                        </div>
                        <div className="feature">
                            <h3>Reliability</h3>
                            <p>Count on us for punctuality, professionalism, and attention to detail.</p>
                        </div>


                    </div>
                </div>

            </div>
        </div>
    );
};

export default About;