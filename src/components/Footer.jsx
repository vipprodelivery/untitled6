import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                {/* Left Section - Services */}
                <div className="footer-left">
                    <h2 className="footer-title">All Roads Lead To Africa</h2>
                    <div className="footer-line"></div>
                    <ul className="footer-list">
                        <li>TOURISM / TOURS</li>
                        <li>AIRPORTS AND TRANSFERS</li>
                        <li>CHARTERS / BUSINESS TRIPS</li>
                        <li>SHORT AND LONG ROUTES</li>
                    </ul>
                </div>

                {/* Right Section - Contact Info */}
                <div className="footer-right">
                    <p>📞 +27-81-593-6882</p>
                    <p>📞 +27-78-523-6712</p>
                    <p>📧 B.katundu@gmail.com</p>
                    <p>🌍 <a href="https://vipprodelivery.com">vipprodelivery.com</a></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;