import Typewriter from 'typewriter-effect';
import "./Home.css";
import profilePic from "../../assets/home-pic2.png";
import { motion } from "framer-motion";

function Hero() {

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.3 } }
    };

    const itemVarients = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    const imageVariants = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } }
    };

    return (

        <section className="home" id='home' >

            <motion.div className="home-container"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
            >
                <div
                    className="home-content"

                >

                    <motion.h1
                        className="name-text"
                        variants={itemVarients}
                    >I am <span className="my-name">Anurag Jangid</span></motion.h1>

                    <motion.h2
                        className="typing-container"
                        variants={itemVarients}
                    >
                        <span className="gradient-text">
                            <Typewriter
                                options={{
                                    strings: ['Frontend Developer', 'React Developer', 'UI/UX Designer'],
                                    autoStart: true,
                                    loop: true,
                                    delay: 75,
                                    deleteSpeed: 50,
                                }}
                            />
                        </span>
                    </motion.h2>

                    <motion.p
                        className="home-desc"
                        variants={itemVarients}
                    >
                        I am a passionate Frontend Developer dedicated to crafting immersive and highly
                        performant web experiences. My goal is to
                        build scalable web apps that provide smooth and intuitive interactions for every user.
                    </motion.p>

                    <motion.div
                        variants={itemVarients}
                        whileTap={{ scale: 0.95 }}
                    >
                        <a href="#contact"><button className="hire-me-btn">Connect With Me</button></a>
                    </motion.div>

                </div>

                <motion.div
                    className="home-img"
                    variants={imageVariants}
                >
                    <div className="img-box">
                        <img src={profilePic} alt="Profile Picture" />
                    </div>
                </motion.div>

            </motion.div>

        </section >
    );
}

export default Hero;