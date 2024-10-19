"use client";  // Marking this component as a Client Component

import React, { useState } from 'react';

const ProductsPage = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const handleBackButton = () => {
        window.history.back();
    };

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div>
            {/* Metallic Animated Background */}
            <div className="metallic-background"></div>

            {/* Header Section */}
            <header>
                <div className="container">
                    <h1>FlowForge</h1>
                    <p>Automate, Secure, and Scale Your Node-RED Workflows.</p>
                    <a href="https://github.com/acmpesuecc/flowforge" className="btn">View on GitHub</a>
                    <div className="icon-box">
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="https://github.com/himaniraoo/flowforge" target="_blank">
                            <i className="fab fa-github"></i>
                        </a>
                        <a href="#"><i className="fab fa-linkedin"></i></a>
                    </div>
                </div>
            </header>

            {/* Overview Section */}
            <section className="overview">
                <div className="container">
                    <h2>What is FlowForge?</h2>
                    <p>FlowForge is an open-source platform that enhances Node-RED workflows with collaborative features, security, and scalability for developers.</p>
                </div>
            </section>

            {/* Key Features Section */}
            <section className="features">
                <div className="container">
                    <h2>Key Features</h2>
                    <div className="feature-grid">
                        <div className="feature">
                            <h3>Collaborative Development</h3>
                            <p>Share and manage Node-RED instances with team members efficiently.</p>
                        </div>
                        <div className="feature">
                            <h3>Remote Deployment</h3>
                            <p>Deploy flows to multiple devices and servers with ease.</p>
                        </div>
                        <div className="feature">
                            <h3>Snapshot Management</h3>
                            <p>Track versions and restore flows with built-in snapshot capabilities.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Use Cases Section */}
            <section className="use-cases">
                <div className="container">
                    <h2>Use Cases</h2>
                    {[
                        {
                            title: "Healthcare Automation",
                            description: "Streamline patient data management and integration with IoT devices, ensuring accurate and timely healthcare services.",
                        },
                        {
                            title: "Smart Home Automation",
                            description: "Control IoT devices across various platforms and protocols seamlessly, enhancing comfort and energy efficiency in homes.",
                        },
                        {
                            title: "Industrial IoT",
                            description: "Connect, monitor, and manage sensors and devices for predictive maintenance, optimizing operations in industrial environments.",
                        },
                    ].map((useCase, index) => (
                        <div key={index}>
                            <button className="accordion" onClick={() => toggleAccordion(index)}>
                                {useCase.title}
                            </button>
                            <div className={`panel ${activeIndex === index ? 'show' : ''}`}>
                                <p>{useCase.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Back Button */}
            <button className="back-button" onClick={handleBackButton}>Back to Homepage</button>

            {/* Footer Section */}
            <footer>
                <p>&copy; 2024 FlowForge. All rights reserved.</p>
                <p>Made with <span style={{ color: '#e74c3c' }}>❤️</span> by Your Name.</p>
            </footer>

            {/* Styles */}
            <style jsx>{`
                /* Basic Reset */
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }

                body {
                    font-family: 'Poppins', sans-serif;
                    line-height: 1.6;
                    overflow-x: hidden; /* To avoid horizontal scroll */
                    position: relative;
                    background: radial-gradient(125% 125% at 50% 10%, rgb(0, 0, 0) 35%, rgb(34, 34, 85) 100%);
                    color: #ffffff; /* White text */
                }

                /* Metallic Animated Background */
                .metallic-background {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100px; /* Set a height for metallic section */
                    z-index: -2;
                    animation: metallicAnimation 5s linear infinite;
                    background: linear-gradient(135deg, #4e4e4e, #6a6a6a, #9c9c9c, #6a6a6a);
                    background-size: 200% 200%;
                }

                @keyframes metallicAnimation {
                    0% {
                        background-position: 0% 50%;
                    }
                    50% {
                        background-position: 100% 50%;
                    }
                    100% {
                        background-position: 0% 50%;
                    }
                }

                /* Header Section */
                header {
                    background-color: #000000; /* Deep pitch black */
                    color: #ffffff;
                    padding: 120px 0;
                    text-align: center;
                    background-image: linear-gradient(135deg, #000000 60%, #000000);
                    border-bottom: 5px solid #ffffff; /* White border */
                }

                header h1 {
                    font-size: 3.5rem;
                    font-weight: 700;
                    letter-spacing: 2px;
                    text-transform: uppercase;
                    text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.2);
                }

                header p {
                    font-size: 1.2rem;
                    margin-top: 10px;
                    font-weight: 300;
                    color: #ffffff; /* White text */
                }

                .btn {
                    background-color: #333333; /* Dark gray button */
                    color: #ffffff;
                    padding: 14px 35px;
                    text-decoration: none;
                    border-radius: 50px;
                    font-weight: 600;
                    transition: background-color 0.3s ease, transform 0.2s ease;
                    margin-top: 50px; /* Adjusted margin to move button down */
                    display: inline-block;
                    border: 2px solid #4f4f4f; /* Dark grayish border */
                }

                .btn:hover {
                    background-color: #666666; /* Slightly lighter gray on hover */
                    transform: translateY(-3px);
                }

                .icon-box {
                    margin-top: 20px;
                    display: flex;
                    justify-content: center;
                    gap: 20px;
                }

                .icon-box i {
                    font-size: 2rem;
                    color: #ffffff;
                    padding: 10px;
                    transition: color 0.3s ease;
                }

                .icon-box i:hover {
                    color: #ffffff; /* White hover effect */
                }

                section {
                    padding: 100px 0;
                    background-color: #000000; /* Pitch black */
                }

                section h2 {
                    font-size: 2.6rem;
                    font-weight: 600;
                    text-align: center;
                    margin-bottom: 50px;
                    color: #ffffff; /* White text */
                }

                section p {
                    font-size: 1.2rem;
                    text-align: center;
                    margin-bottom: 50px;
                    max-width: 70%;
                    margin-left: auto;
                    margin-right: auto;
                    color: #ffffff; /* White text */
                }

                .feature-grid {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 30px;
                    justify-content: center;
                }

                .feature {
                    background-color: #1c1c1c; /* Dark grayish for feature cards */
                    color: #ffffff; /* White text */
                    padding: 30px;
                    border-radius: 15px;
                    width: 30%;
                    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                    text-align: center;
                    border: 2px solid #4f4f4f; /* Dark grayish border */
                }

                .feature:hover {
                    transform: translateY(-10px);
                    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5);
                }

                .feature h3 {
                    font-size: 1.8rem;
                    font-weight: 600;
                    margin-bottom: 15px;
                }

                .feature p {
                    font-size: 1rem;
                    color: #ffffff; /* White text */
                }

                .use-cases {
                    padding: 50px 0;
                }

                .use-cases .accordion {
                    font-size: 1.5rem;
                    font-weight: bold;
                    background-color: #333333; /* Dark gray button */
                    color: #ffffff; /* White text */
                    cursor: pointer;
                    padding: 15px;
                    text-align: left;
                    border: none;
                    outline: none;
                    transition: background-color 0.3s ease;
                    width: 100%;
                    border-radius: 10px;
                    margin-bottom: 10px;
                }

                .use-cases .accordion:hover {
                    background-color: #666666; /* Slightly lighter gray on hover */
                }

                .use-cases .panel {
                    padding: 15px 20px;
                    display: none;
                    overflow: hidden;
                    background-color: #1c1c1c; /* Dark gray for panel */
                    color: #ffffff; /* White text */
                    border-radius: 10px;
                    margin-bottom: 15px;
                }

                .use-cases .panel.show {
                    display: block;
                }

                .back-button {
                    background-color: #333333; /* Dark gray button */
                    color: #ffffff;
                    padding: 14px 30px;
                    text-decoration: none;
                    border-radius: 50px;
                    font-weight: 600;
                    transition: background-color 0.3s ease, transform 0.2s ease;
                    margin: 30px auto;
                    display: block;
                    border: 2px solid #4f4f4f; /* Dark grayish border */
                    cursor: pointer;
                }

                .back-button:hover {
                    background-color: #666666; /* Slightly lighter gray on hover */
                    transform: translateY(-3px);
                }

                footer {
                    text-align: center;
                    padding: 20px;
                    background-color: #000000; /* Pitch black */
                    color: #ffffff; /* White text */
                    position: relative;
                }

                footer p {
                    margin: 5px 0;
                }
            `}</style>
        </div>
    );
};

export default ProductsPage;
