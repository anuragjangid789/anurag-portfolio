import React from 'react';
import './Contact.css';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

function Contact() {
    return (
        <section id="contact" className="contact">
            <div className="contact-container">
                <h2 className="section-title">Get In <span>Touch</span></h2>

                <div className="contact-wrapper">

                    <div className="left-side">
                        <h3>Let's talk about everything!</h3>
                        <p>I'm currently available for new projects. If you have an idea, let's make it happen.</p>

                        <div className="info-item">
                            <FaEnvelope className="info-icon" />
                            <div>
                                <h4>Email</h4>
                                <p>anuragjangid789@gmail.com</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <FaMapMarkerAlt className="info-icon" />
                            <div>
                                <h4>Location</h4>
                                <p>Jaipur, Rajasthan</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <FaPhoneAlt className="info-icon" />
                            <div>
                                <h4>Call Me</h4>
                                <p>+91 12345 67890</p>
                            </div>
                        </div>
                    </div>


                    <form className="right-side" onSubmit={(e) => e.preventDefault()}>

                        <h2>Let's talk about everything!</h2>
                        
                        <input type="text" placeholder="Your Name" required />
                        <input type="email" placeholder="Your Email" required />

                        <textarea placeholder="Your Message" rows="5" required></textarea>
                        
                        <button type="submit" className="send-btn">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;