import React from 'react';
import { motion } from "framer-motion";
import './About.css';

const About = () => {

    const containerVarients = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.3 } }
    };

    const itemVarients = {
        hidden: { opacity: 0, x: 30 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    const itemVarients2 = {
        hidden: { opacity: 0, x: -30 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
    }
    return (
        <section className="about" id="about">
            <motion.div
                className="container"
                variants={containerVarients}
                initial="hidden"
                whileInView="visible"
                viewport={{once: false}}
            >
                <motion.h2
                    className="section-title"
                    variants={itemVarients}
                >
                    About Me
                </motion.h2>

                <div className="grid-layout">

                    <motion.div 
                    className="grid-items bio-box"
                    variants={itemVarients2}
                    >
                        <h3>Who I Am</h3>
                        <p>
                            I'm a Frontend Developer who obsesses over details. I don't just write code;
                            I build digital experiences that are fast, responsive, and visually stunning.
                            My focus is on modern tech like <strong>React</strong> and <strong>Vite</strong>.
                        </p>
                    </motion.div>


                    <motion.div 
                    className="grid-items tech-box"
                    variants={itemVarients}
                    >
                        <h3>Main Stack</h3>
                        <div className="tech-tags">
                            <span>React</span>
                            <span>Vite</span>
                            <span>JavaScript</span>
                            <span>CSS3</span>
                            <span>Tailwind</span>
                        </div>
                    </motion.div>


                    <motion.div 
                    className="grid-items goal-box"
                    variants={itemVarients2}
                    >
                        <h3>Goal</h3>
                        <p>Turning complex ideas into simple,<br /> functional  UI and user friendly experiences.</p>
                    </motion.div>


                    <motion.div 
                    className="grid-items   resume-box"
                    variants={itemVarients}
                    >
                        <h3 className='resume-heading'>Interested in my work?</h3>
                        <a href="/Anurag_jangid_Frontend_Developer_Resume.pdf" className="about-cv-btn" download>
                            Download Full CV
                        </a>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default About;