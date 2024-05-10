import React from "react";
import "../Section4/Section4.css";
import image from "../Assets/book.jpg";

const Section4 = () => {
    return <>
        <div className="section4">

            <div>
                <img src={image} alt="" />
            </div>
            <div className="enroll_section">
                <div><h1>Our Education like no other</h1></div>
                <div><button>ENROLL</button></div>
            </div>

        </div>
    </>;
};

export default Section4;
