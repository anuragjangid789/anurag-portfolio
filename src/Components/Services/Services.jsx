import { FaCode, FaPaintBrush, FaLaptopCode } from "react-icons/fa";
import "./Services.css";

function Services() {
    return (
        <section className="services" id="services">
            <h2 className="section-title">My Services</h2>
            <div className="services-wrapper">
                <div className="service-card">
                    <div className="service-icon"><FaCode/></div>
                    <h3>Frontend Development</h3>
                    <p>
                        Building high-performance, interactive web applications  using modern frameworks like React.js and Vite for seamless user experiences.
                    </p>
                </div>

                <div className="service-card">
                    <div className="service-icon"><FaPaintBrush/></div>
                    <h3>UI/UX Design</h3>
                    <p>
                        Creating intuitive and visually stunning user interfaces with a focus on user-centric design principles and modern aesthetics.
                    </p>
                </div>

                <div className="service-card">
                    <div className="service-icon"><FaLaptopCode/></div>
                    <h3>Responsive Web Design</h3>
                    <p>
                        Ensuring websites look and function perfectly across all devices, from mobile screens to large desktop monitors, using fluid layouts.
                    </p>
                </div>
            </div>
        </section>
    );
}
export default Services;