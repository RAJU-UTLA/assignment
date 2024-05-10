import React from "react";
import "../Section1/Section1.css";
import img1 from "../Assets/image1.png";
import img2 from "../Assets/image2.jpeg.jpg";
import img3 from "../Assets/image3.jpeg";

const Section1 = () => {
    return <>
        <div className="section1_images">
            <img src={img1} alt="" className="img1" />
            <img src={img2} alt="" className="img2" />
            <img src={img3} alt="" className="img3" />
        </div>
    </>;
};

export default Section1;
