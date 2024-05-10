import React from "react";
import "../Section2/Section2.css";
import image1 from "../Assets/s2img1.jpg";
import image2 from "../Assets/s2img2.jpg";
import image3 from "../Assets/s2img3.jpg";
import image4 from "../Assets/s2img4.png";
import image5 from "../Assets/s2img5.png";
import image6 from "../Assets/s2img6.jpg";


const Section2 = () => {
    return <>
        <div className="section2">
            <h1>The Yenopoya World</h1>
            <p>A supportive and stimulating environment that fosters academic excellence,<br /> character development, and a love for learning.</p>

            <div className="section2_images">
                <img src={image1} alt="" className="img1" />
                <img src={image2} alt="" className="img2" />
                <img src={image3} alt="" className="img3" />
                <img src={image4} alt="" className="img4" />
                <img src={image5} alt="" className="img5" />
                <img src={image6} alt="" className="img6" />

            </div>


        </div>

    </>;
};

export default Section2;
