import Typewriter from 'typewriter-effect';
import "./Home.css";
import profilePic from "../../assets/home-pic2.png";

function Hero() {
    return (
        <section className="home" id='home'>

            <div className="home-container">
                <div className="home-content">

                    <h1 className="name-text">I am <span className="my-name">Anurag Jangid</span></h1>

                    <h2 className="typing-container">
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
                    </h2>

                    <p className="home-desc">
                        I am a passionate Frontend Developer dedicated to crafting immersive and highly
                        performant web experiences. My goal is to
                        build scalable web apps that provide smooth and intuitive interactions for every user.
                    </p>

                    <a href="#contact"><button className="hire-me-btn">Connect With Me</button></a>

                </div>

                <div className="home-img">
                    <div className="img-box">
                        <img src={profilePic} alt="Profile Picture" />
                    </div>
                </div>

            </div>

        </section>
    );
}

export default Hero;