import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaBriefcase } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <h2 className="footer-logo">Anurag Jangid</h2>

                <p className="footer-text">Frontend Developer | Jaipur, India</p>

                <p className="footer-text-2">
                    Designing and developing high-quality web applications with React.
                </p>

                <div className="footer-socials">
                    <a href="mailto:anuragjangid789@gmail.com" target="_blank"  rel="noreferrer"><FaEnvelope /></a>
                    <a href="https://linkedin.com/in/anurag-jangid-03b5203a9" target="_blank"  rel="noreferrer"><FaLinkedin /></a>
                    <a href="https://github.com/anuragjangid789" target="_blank"  rel="noreferrer"><FaGithub /></a>
                    <a href="#projects"><FaBriefcase /></a>
                </div>

                

                <p className="footer-copyright">
                    Designed and Developed with ❤️
                </p>
            </div>
        </footer>
    );
}

export default Footer;