import React from 'react';
import './Contact.css';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { motion } from "framer-motion";

function Contact() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const sideVariants = {
        hiddenLeft: { opacity: 0, x: -50 },
        hiddenRight: { opacity: 0, x: 50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    return (
        <section id="contact" className="contact">
            <motion.div 
                className="contact-container"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
            >
                <motion.h2 className="section-title" variants={itemVariants}>
                    Get In <span>Touch</span>
                </motion.h2>

                <div className="contact-wrapper">
                    <motion.div 
                        className="left-side"
                        variants={sideVariants}
                        initial="hiddenLeft"
                        whileInView="visible"
                        viewport={{ once: false }}
                    >
                        <motion.h3 variants={itemVariants}>Let's talk about everything!</motion.h3>
                        <motion.p variants={itemVariants}>
                            I'm currently available for new projects. If you have an idea, let's make it happen.
                        </motion.p>

                        <motion.div className="info-item" variants={itemVariants} whileHover={{ x: 10 }}>
                            <FaEnvelope className="info-icon" />
                            <div>
                                <h4>Email</h4>
                                <p>anuragjangid789@gmail.com</p>
                            </div>
                        </motion.div>

                        <motion.div className="info-item" variants={itemVariants} whileHover={{ x: 10 }}>
                            <FaMapMarkerAlt className="info-icon" />
                            <div>
                                <h4>Location</h4>
                                <p>Jaipur, Rajasthan</p>
                            </div>
                        </motion.div>

                        <motion.div className="info-item" variants={itemVariants} whileHover={{ x: 10 }}>
                            <FaPhoneAlt className="info-icon" />
                            <div>
                                <h4>Call Me</h4>
                                <p>+91 87693 28060</p>
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.form 
                        className="right-side" 
                        onSubmit={(e) => e.preventDefault()}
                        variants={sideVariants}
                        initial="hiddenRight"
                        whileInView="visible"
                        viewport={{ once: false }}
                    >
                        <motion.h2 variants={itemVariants}>Send a Message</motion.h2>
                        
                        <motion.input variants={itemVariants} type="text" placeholder="Your Name" required />
                        <motion.input variants={itemVariants} type="email" placeholder="Your Email" required />
                        <motion.textarea variants={itemVariants} placeholder="Your Message" rows="5" required />
                        
                        <motion.button 
                            variants={itemVariants}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            type="submit" 
                            className="send-btn"
                        >
                            Send Message
                        </motion.button>
                    </motion.form>
                </div>
            </motion.div>
        </section>
    );
}

export default Contact;