import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaBriefcase } from 'react-icons/fa';
import { motion } from "framer-motion";

function Footer() {
    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    return (
        <footer className="footer">
            <motion.div 
                className="footer-content"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
            >
                <motion.h2 className="footer-logo" variants={itemVariants}>
                    Anurag Jangid
                </motion.h2>

                <motion.p className="footer-text" variants={itemVariants}>
                    Frontend Developer | Jaipur, India
                </motion.p>

                <motion.p className="footer-text-2" variants={itemVariants}>
                    Designing and developing high-quality web applications with React.
                </motion.p>

                <motion.div className="footer-socials" variants={itemVariants}>
                    <motion.a 
                        href="mailto:anuragjangid789@gmail.com" 
                        target="_blank" 
                        rel="noreferrer"
                        whileHover={{ y: -5, color: "#c88dff" }}
                    >
                        <FaEnvelope />
                    </motion.a>
                    <motion.a 
                        href="https://linkedin.com/in/anurag-jangid-03b5203a9" 
                        target="_blank" 
                        rel="noreferrer"
                        whileHover={{ y: -5, color: "#c88dff" }}
                    >
                        <FaLinkedin />
                    </motion.a>
                    <motion.a 
                        href="https://github.com/anuragjangid789" 
                        target="_blank" 
                        rel="noreferrer"
                        whileHover={{ y: -5, color: "#c88dff" }}
                    >
                        <FaGithub />
                    </motion.a>
                    <motion.a 
                        href="#projects"
                        whileHover={{ y: -5, color: "#c88dff" }}
                    >
                        <FaBriefcase />
                    </motion.a>
                </motion.div>

                <motion.hr 
                    className="footer-line"
                    initial={{ width: 0, opacity: 0 }}
                    whileInView={{ width: "100%", opacity: 1 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    style={{ 
                        border: "none", 
                        height: "1.2px", 
                        background: "linear-gradient(90deg, transparent, rgba(200, 141, 255, 0.3), transparent)",
                        margin: "20px 0" 
                    }}
                />

                <motion.p className="footer-copyright" variants={itemVariants}>
                    Designed and Developed with ❤️
                </motion.p>
            </motion.div>
        </footer>
    );
}

export default Footer;