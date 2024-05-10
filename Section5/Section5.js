import React from "react";
import "../Section5/Section5.css";
import closedbook from "../Assets/closedbook.jpg";
import group_img from "../Assets/Group 176502.png";

const Section5 = () => {
    return <>
        <div className="section5">

            <div className="inquire">
                <div>
                    <h1>Inquire Today</h1>
                    <p>Contact Us for More Information</p>
                </div>

            </div>

            <div className="mission">

                <div className="enriching">
                    <h1>Enriching Communities</h1>
                    <p>Our mission at The Yenopoya World is to inspire and<br /> empower every student to achieve their full potential,<br /> become lifelong learners, and make positive contributions<br /> to society. We are </p>
                    <button>Learn More</button>
                    <img src={closedbook} alt="" />
                </div>

                <div className="aboutmission">
                    <div className="mission_box">
                        <h1>Mission</h1>
                        <p>Our mission at The Yenopoya World is to inspire and </p>
                    </div>
                    <hr style={{ width: '100%', textAlign: 'left', marginLeft: 0 }} />

                    <div className="mission_box">
                        <h1>Mission</h1>
                        <p>Our mission at The Yenopoya World is to inspire and </p>
                    </div>
                    <hr style={{ width: '100%', textAlign: 'left', marginLeft: 0 }} />

                    <div className="mission_box"><h1>Mission</h1>
                        <p>Our mission at The Yenopoya World is to inspire and </p>
                    </div>
                    <hr style={{ width: '100%', textAlign: 'left', marginLeft: 0 }} />

                    <div className="mission_box"><h1>Mission</h1>
                        <p>Our mission at The Yenopoya World is to inspire and </p>
                    </div>
                    <hr style={{ width: '100%', textAlign: 'left', marginLeft: 0 }} />
                </div>
            </div>

            <div className="group_img">
                <div >
                    <img src={group_img} alt="" />
                </div>


            </div>

        </div>

    </>;
};

export default Section5;
