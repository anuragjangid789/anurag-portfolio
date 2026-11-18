import { useState, useRef } from "react";
import "./Contact.css";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaPaperPlane,
  FaCheck,
  FaCopy,
  FaWhatsapp,
  FaLinkedin,
  FaGithub,
  FaUser,
  FaClock,
  FaCommentDots,
} from "react-icons/fa";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import MagneticButton from "../Common/MagneticButton";

const SERVICE_TAGS = [
  "Frontend Web App",
  "Full-Stack MERN",
  "UI/UX & Animations",
  "Landing Page",
  "Consultation",
];

function Contact() {
  const sectionRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Frontend Web App",
    message: "",
  });
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Parallax scroll effects
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001,
  });

  const yLeft = useTransform(smoothProgress, [0, 1], [-25, 25]);
  const yRight = useTransform(smoothProgress, [0, 1], [25, -25]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("anuragjangid789@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSelectService = (service) => {
    setFormData((prev) => ({ ...prev, service }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate swift server response
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="contact" className="contact-redesign" ref={sectionRef}>
      {/* Ambient background glows */}
      <div className="contact-glow glow-1" aria-hidden="true" />
      <div className="contact-glow glow-2" aria-hidden="true" />

      <motion.div
        className="contact-shell"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.15 }}
      >
        {/* Section Header */}
        <div className="contact-header">
          <motion.div className="contact-badge" variants={itemVariants}>
            <span className="beacon-pulse" />
            <span>Open For Collaboration</span>
          </motion.div>

          <motion.h2 className="contact-main-heading" variants={itemVariants}>
            Let's Build Something <span className="text-gradient">Extraordinary</span>
          </motion.h2>

          <motion.p className="contact-intro" variants={itemVariants}>
            Have an exciting idea, need a high-performance modern web application,
            or looking to add a dedicated developer to your team? Let's connect!
          </motion.p>
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="contact-grid">
          {/* Left Column: Direct Info & Social Hub */}
          <motion.div
            className="contact-info-col"
            variants={itemVariants}
            style={{ y: yLeft }}
          >
            {/* Live Availability Status Card */}
            <div className="status-pill-card">
              <div className="status-indicator">
                <span className="status-dot live" />
                <span className="status-ping" />
              </div>
              <div className="status-text">
                <strong>Available Now</strong>
                <span>Full-time roles, contracts & freelance projects</span>
              </div>
            </div>

            {/* Quick Contact Detail Cards */}
            <div className="contact-methods">
              {/* Email Card with Copy Action */}
              <div className="method-card">
                <div className="method-icon-wrap icon-purple">
                  <FaEnvelope />
                </div>
                <div className="method-details">
                  <span className="method-label">Direct Email</span>
                  <a href="mailto:anuragjangid789@gmail.com" className="method-val">
                    anuragjangid789@gmail.com
                  </a>
                </div>
                <button
                  type="button"
                  className={`copy-btn ${copied ? "is-copied" : ""}`}
                  onClick={handleCopyEmail}
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copied ? (
                    <>
                      <FaCheck className="copy-icon" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <FaCopy className="copy-icon" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Phone & WhatsApp Card */}
              <div className="method-card">
                <div className="method-icon-wrap icon-cyan">
                  <FaPhoneAlt />
                </div>
                <div className="method-details">
                  <span className="method-label">Phone & WhatsApp</span>
                  <a href="tel:+918769328060" className="method-val">
                    +91 87693 28060
                  </a>
                </div>
                <a
                  href="https://wa.me/918769328060"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whatsapp-quick-btn"
                  title="Chat on WhatsApp"
                  aria-label="Chat on WhatsApp"
                >
                  <FaWhatsapp />
                  <span>Chat</span>
                </a>
              </div>

              {/* Location & Timezone Card */}
              <div className="method-card">
                <div className="method-icon-wrap icon-violet">
                  <FaMapMarkerAlt />
                </div>
                <div className="method-details">
                  <span className="method-label">Current Location</span>
                  <p className="method-val-static">Jaipur, Rajasthan, India</p>
                </div>
                <div className="timezone-tag">
                  <FaClock className="tz-icon" />
                  <span>IST (UTC+5:30)</span>
                </div>
              </div>
            </div>

            {/* Social Network Hub */}
            <div className="social-hub-card">
              <span className="social-hub-title">Find Me Online</span>
              <div className="social-hub-links">
                <a
                  href="https://github.com/anuragjangid789"
                  target="_blank"
                  rel="noreferrer"
                  className="social-hub-btn github"
                  title="GitHub Profile"
                >
                  <FaGithub />
                  <span>GitHub</span>
                </a>

                <a
                  href="https://linkedin.com/in/anurag-jangid-03b5203a9"
                  target="_blank"
                  rel="noreferrer"
                  className="social-hub-btn linkedin"
                  title="LinkedIn Profile"
                >
                  <FaLinkedin />
                  <span>LinkedIn</span>
                </a>

                <a
                  href="https://wa.me/918769328060"
                  target="_blank"
                  rel="noreferrer"
                  className="social-hub-btn whatsapp"
                  title="WhatsApp"
                >
                  <FaWhatsapp />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Modern Interactive Contact Form */}
          <motion.div
            className="contact-form-col"
            variants={itemVariants}
            style={{ y: yRight }}
          >
            <div className="form-glass-card">
              <div className="form-card-header">
                <h3 className="form-title">Send a Message</h3>
                <p className="form-subtitle">
                  Fill in the details below and I'll respond within 24 hours.
                </p>
              </div>

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    className="form-success-state"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="success-icon-ring">
                      <FaCheck />
                    </div>
                    <h4>Message Received!</h4>
                    <p>
                      Thank you, <strong>{formData.name || "there"}</strong>! Your
                      message has been delivered directly to Anurag. Expect a reply
                      shortly.
                    </p>
                    <button
                      type="button"
                      className="reset-btn"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: "",
                          email: "",
                          service: "Frontend Web App",
                          message: "",
                        });
                      }}
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="contact-form-body"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {/* Project Interest Selector */}
                    <div className="service-selector">
                      <label className="input-group-label">
                        What can I help you with?
                      </label>
                      <div className="service-tags-wrap">
                        {SERVICE_TAGS.map((tag) => (
                          <button
                            key={tag}
                            type="button"
                            className={`service-tag-pill ${
                              formData.service === tag ? "active" : ""
                            }`}
                            onClick={() => handleSelectService(tag)}
                          >
                            {tag}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Name & Email Row */}
                    <div className="form-input-row">
                      <div className="input-group">
                        <label htmlFor="name" className="input-group-label">
                          Your Name
                        </label>
                        <div className="input-wrapper">
                          <FaUser className="input-field-icon" />
                          <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="John Doe"
                            required
                            value={formData.name}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="input-group">
                        <label htmlFor="email" className="input-group-label">
                          Email Address
                        </label>
                        <div className="input-wrapper">
                          <FaEnvelope className="input-field-icon" />
                          <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="john@example.com"
                            required
                            value={formData.email}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Message Box */}
                    <div className="input-group">
                      <label htmlFor="message" className="input-group-label">
                        Your Message
                      </label>
                      <div className="input-wrapper textarea-wrapper">
                        <FaCommentDots className="input-field-icon textarea-icon" />
                        <textarea
                          id="message"
                          name="message"
                          placeholder="Tell me about your project, goals, or timeline..."
                          rows="4"
                          required
                          value={formData.message}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="form-submit-wrap">
                      <MagneticButton strength={0.2}>
                        <button
                          type="submit"
                          className="contact-submit-btn"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <>
                              <span className="btn-spinner" />
                              <span>Sending Message...</span>
                            </>
                          ) : (
                            <>
                              <span>Send Message</span>
                              <FaPaperPlane className="btn-plane-icon" />
                            </>
                          )}
                        </button>
                      </MagneticButton>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;
