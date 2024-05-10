import React from "react";
import logo from "../Assets/Logo.jpg";
import "../Navbar/Navbar.css";

const Navbar = () => {
    return (
        <nav>
            <div className="navbar_logo">
                <img src={logo} alt="logo" />
            </div>

            <div className="navbar_actions">
                <p>AboutUs</p>
                <p>Our Space</p>
                <p>Curriculum</p>
                <p>Addmmisions</p>
                <p>Contact Us</p>
            </div>

        </nav>


    )
};

export default Navbar;
