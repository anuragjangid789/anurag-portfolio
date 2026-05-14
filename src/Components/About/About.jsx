import React from 'react';
import './About.css';

const About = () => {
    return (
        <section className="about" id="about">
            <div className="container">
                <h2 className="section-title">About Me</h2>

                <div className="grid-layout">

                    <div className="grid-items bio-box">
                        <h3>Who I Am</h3>
                        <p>
                            I'm a Frontend Developer who obsesses over details. I don't just write code;
                            I build digital experiences that are fast, responsive, and visually stunning.
                            My focus is on modern tech like <strong>React</strong> and <strong>Vite</strong>.
                        </p>
                    </div>


                    <div className="grid-items tech-box">
                        <h3>Main Stack</h3>
                        <div className="tech-tags">
                            <span>React</span>
                            <span>Vite</span>
                            <span>JavaScript</span>
                            <span>CSS3</span>
                            <span>Tailwind</span>
                        </div>
                    </div>


                    <div className="grid-items goal-box">
                        <h3>Goal</h3>
                        <p>Turning complex ideas into simple,<br /> functional  UI and user friendly experiences.</p>
                    </div>


                    <div className="grid-items   resume-box">
                        <h3 className='resume-heading'>Interested in my work?</h3>
                        <a href="/Anurag-Jangid-CV.pdf" className="about-cv-btn" download>
                            Download Full CV
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;