import React, { useEffect, useRef } from "react";
import Nav from "./Nav";
import { useLocation } from 'react-router-dom';

const About = (props) => {
    const scrollRef = useRef(null);
    const location = useLocation();

    useEffect(() => {
        // Ensure scrollRef.current exists before trying to scroll
        if (scrollRef.current && props.bool) {
            scrollRef.current.scrollTo({
                top: scrollRef.current.scrollHeight,
                behavior: 'smooth'
            });
        }
    }, [location.pathname, props.bool]); // Trigger effect when the pathname changes

    return (
        <>
            <Nav />
            <video className="video-slide" src="/static/media/about.mp4" autoPlay muted loop></video>
            <div className="container" ref={scrollRef}>
                <div className="about-container">
                    <div className="about-banner">
                        <h1>About Us</h1>
                        <p>Discover Your Next Adventure with TRAVEL</p>
                    </div>
                    <div className="about-content">
                        <section className="about-section">
                            <h2>Who We Are</h2>
                            <p>
                                Welcome to TRAVEL, your ultimate travel companion for booking flights and hotels.
                                Our mission is to make travel planning easy, enjoyable, and affordable. Whether you're
                                jetting off for a weekend getaway or embarking on a month-long adventure, TRAVEL is
                                here to help you every step of the way.
                            </p>
                        </section>
                        <section className="about-section">
                            <h2>Our Services</h2>
                            <p>
                                At TRAVEL, we offer a comprehensive range of services to cater to all your travel needs:
                            </p>
                            <ul>
                                <li><strong>Flight Booking:</strong> Search, compare, and book flights from a wide range of airlines, all at competitive prices.</li>
                                <li><strong>Hotel Booking:</strong> Find the perfect accommodation with our extensive database of hotels, ranging from budget to luxury.</li>
                                <li><strong>Travel Packages:</strong> Choose from our curated travel packages for a hassle-free vacation experience.</li>
                                <li><strong>Customer Support:</strong> Our dedicated support team is available 24/7 to assist you with any queries or concerns.</li>
                            </ul>
                        </section>
                        <section className="about-section">
                            <h2>Our Vision</h2>
                            <p>
                                Our vision is to become the go-to platform for travelers worldwide, known for our exceptional
                                service, user-friendly interface, and unbeatable deals. We believe in the transformative power
                                of travel and strive to make it accessible to everyone.
                            </p>
                        </section>
                        <section className="about-section">
                            <h2>Why Choose TRAVEL?</h2>
                            <p>
                                Here are just a few reasons why TRAVEL stands out from the crowd:
                            </p>
                            <ul>
                                <li><strong>Best Prices:</strong> We negotiate with airlines and hotels to bring you the best deals.</li>
                                <li><strong>User-Friendly:</strong> Our platform is designed with you in mind, making booking a breeze.</li>
                                <li><strong>Trusted Partners:</strong> We partner with reputable airlines and hotels to ensure a safe and pleasant journey.</li>
                                <li><strong>24/7 Support:</strong> Our customer support team is always here to help, anytime, anywhere.</li>
                            </ul>
                        </section>
                        <section className="about-section">
                            <h2>Contact Us</h2>
                            <p>
                                Have any questions or need assistance? Feel free to reach out to us at:
                            </p>
                            <ul>
                                <li>Email: dramsgard@gmail.com</li>
                                <li>Phone: +1-315-447-8656</li>
                                <li>Address: 22 West Elizabeth, Skaneateles, NY, USA</li>
                                <li>A Daniel Ramsgard Production</li>
                            </ul>
                        </section>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;