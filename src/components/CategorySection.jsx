import React from "react";
import { FaUmbrellaBeach, FaSafari, FaShip, FaTree, FaWineGlassAlt } from "react-icons/fa";
import "./CategorySection.css";

const CategorySection = () => {
    const categories = [
        { name: "Beach Experience", icon: <FaUmbrellaBeach size={50} color="blue" /> },
        { name: "African Safari", icon: <FaSafari size={50} color="blue" /> },
        { name: "Boat Cruises", icon: <FaShip size={50} color="blue" /> },
        { name: "Nature Experience", icon: <FaTree size={50} color="blue" /> },
        { name: "Wineland Tours", icon: <FaWineGlassAlt size={50} color="blue" /> }
    ];

    return (
        <div className="categories">
            <h2 className="tour-heading">Tour Categories</h2>
            <div className="category-row">
            {categories.map((category, index) => (
                    <div className="category-card" key={index}>
                        {category.icon}
                        <p>{category.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategorySection;