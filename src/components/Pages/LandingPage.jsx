import React from 'react';
import './LandingPage.css';
import profilePic from '../../assets/WhatsApp_Image_2025-03-22_at_14.24.10_cfed76bf-removebg-preview.png';

export default function LandingPage() {
    return (
        <div className="container">
            <div className="intro" data-aos="zoom-in-up">
                <h4>Hi, I am</h4>
                <h1>Amanullah!</h1>
                <h4 className="skills" style={{ opacity: '0.6' }}>
                    Software Engineer / Web Developer
                </h4>
            </div>

            <div className="picture" data-aos="fade-down-left" data-aos-delay="200">
                <img src={profilePic} alt="Amanullah" />
            </div>
        </div>
    );
}
