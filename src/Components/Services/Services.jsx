import { FaCode, FaPaintBrush, FaLaptopCode } from "react-icons/fa";
import "./Services.css";
import { motion } from "framer-motion";

function Services() {

    const containerVarients = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.3 } }
    };

    const itemVarients = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    return (
        <motion.section
            className="services" id="services"
            variants={containerVarients}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
        >
            <motion.h2
                className="section-title"
                variants={itemVarients}
            >My Services</motion.h2
            >
            <div className="services-wrapper">
                <motion.div
                    className="service-card"
                    variants={itemVarients}
                    whileHover={{ scale: 1.03 }}
                >
                    <div className="service-icon"><FaCode /></div>
                    <h3>Frontend Development</h3>
                    <p>
                        Building high-performance, interactive web applications  using modern frameworks like React.js and Vite for seamless user experiences.
                    </p>
                </motion.div>

                <motion.div
                    className="service-card"
                    variants={itemVarients}
                    whileHover={{ scale: 1.03 }}
                >
                    <div className="service-icon"><FaPaintBrush /></div>
                    <h3>UI/UX Design</h3>
                    <p>
                        Creating intuitive and visually stunning user interfaces with a focus on user-centric design principles and modern aesthetics.
                    </p>
                </motion.div>

                <motion.div
                    className="service-card"
                    variants={itemVarients}
                    whileHover={{ scale: 1.03 }}
                >
                    <div className="service-icon"><FaLaptopCode /></div>
                    <h3>Responsive Web Design</h3>
                    <p>
                        Ensuring websites look and function perfectly across all devices, from mobile screens to large desktop monitors, using fluid layouts.
                    </p>
                </motion.div>
            </div>
        </motion.section>
    );
}
export default Services;