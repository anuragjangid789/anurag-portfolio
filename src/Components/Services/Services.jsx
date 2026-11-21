import { useRef } from "react";
import {
  FaLaptopCode,
  FaPaintBrush,
  FaMobileAlt,
  FaRocket,
  FaArrowRight,
  FaCheckCircle,
  FaLayerGroup,
  FaCogs,
  FaSearch,
  FaBolt,
} from "react-icons/fa";
import "./Services.css";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import MagneticButton from "../Common/MagneticButton";

const SERVICES_DATA = [
  {
    id: 1,
    number: "01",
    title: "High-Performance Web Apps",
    category: "React 19 • Single Page Applications",
    description:
      "Architecting enterprise-grade single page applications built for lightning speed, clean unidirectional state flow, and real-time interactive responsiveness.",
    icon: <FaLaptopCode />,
    accent: "#06b6d4",
    deliverables: [
      "Custom React Hooks & Scalable Architecture",
      "Dynamic RESTful API & State Integration",
      "Optimized Bundle Size & Instant Hydration",
      "Modular, Reusable Component Systems",
    ],
  },
  {
    id: 2,
    number: "02",
    title: "Interactive UI/UX & Motion",
    category: "Framer Motion • 60fps Micro-interactions",
    description:
      "Crafting memorable digital storytelling through tactile physics-driven animations, smooth scroll parallax, and modern glassmorphic aesthetics that elevate user retention.",
    icon: <FaPaintBrush />,
    accent: "#a855f7",
    deliverables: [
      "Fluid Scroll Parallax & Multi-layered Timelines",
      "Tactile Micro-interactions & Spring Physics",
      "Dark Cyber & Glassmorphic Visual Systems",
      "Custom Cursor & Magnetic Button Feedback",
    ],
  },
  {
    id: 3,
    number: "03",
    title: "Responsive & Adaptive Design",
    category: "Tailwind CSS • Mobile-First Ergonomics",
    description:
      "Engineering seamless experiences designed from the ground up to render flawlessly across handheld phones, tablets, laptops, and ultra-wide desktop monitors.",
    icon: <FaMobileAlt />,
    accent: "#ec4899",
    deliverables: [
      "Fluid Clamp Typography & Proportional Spacing",
      "Mobile-First Touch Ergonomics & Gestures",
      "Cross-Browser Parity (Chrome, Safari, Firefox)",
      "Adaptive Layouts with Modern CSS Grid & Flexbox",
    ],
  },
  {
    id: 4,
    number: "04",
    title: "Performance & Web Vitals Audit",
    category: "Lighthouse 95+ • Core Web Vitals Tuning",
    description:
      "Transforming sluggish websites into ultra-fast digital experiences through code-splitting, tree-shaking, asset compression, and SEO semantic engineering.",
    icon: <FaRocket />,
    accent: "#10b981",
    deliverables: [
      "Sub-second First Contentful Paint (FCP)",
      "Zero Cumulative Layout Shift (CLS) Stabilization",
      "Vite & Rollup Build Output Optimization",
      "SEO Metadata & Structured Semantic Hierarchy",
    ],
  },
];

const WORKFLOW_STEPS = [
  {
    step: "01",
    title: "Discovery & Blueprint",
    desc: "Analyzing user flows, technical constraints, and designing scalable component structures.",
    icon: <FaSearch />,
  },
  {
    step: "02",
    title: "Design & Prototyping",
    desc: "Establishing visual theme systems, glassmorphic UI tokens, and interactive motion specs.",
    icon: <FaLayerGroup />,
  },
  {
    step: "03",
    title: "Clean Engineering",
    desc: "Coding with modern React, Tailwind, and Vite, prioritizing maintainability and clean state.",
    icon: <FaCogs />,
  },
  {
    step: "04",
    title: "Audit & Deployment",
    desc: "95+ Lighthouse speed optimization, cross-browser validation, and seamless cloud launch.",
    icon: <FaBolt />,
  },
];

function Services() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001,
  });

  const yParallax = useTransform(smoothProgress, [0, 1], [-22, 22]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="services-redesign" id="services" ref={sectionRef}>
      {/* Ambient background glows */}
      <div className="services-glow glow-left" aria-hidden="true" />
      <div className="services-glow glow-right" aria-hidden="true" />

      <div className="services-shell">
        {/* Header */}
        <div className="services-header">
          <motion.div
            className="services-eyebrow"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="eyebrow-dot" />
            <span>What I Deliver</span>
          </motion.div>

          <motion.h2
            className="services-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Services <span className="gradient-accent">&</span> Solutions
          </motion.h2>

          <motion.p
            className="services-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            Translating complex product requirements into high-speed, scalable web
            applications with pixel-perfect design and modern architecture.
          </motion.p>
        </div>

        {/* 4-Card Bento Grid */}
        <motion.div
          className="services-bento-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          style={{ y: yParallax }}
        >
          {SERVICES_DATA.map((service) => (
            <motion.div
              key={service.id}
              className="service-bento-card"
              variants={itemVariants}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              {/* Top Accent Line */}
              <div
                className="card-laser-accent"
                style={{
                  background: `linear-gradient(90deg, transparent, ${service.accent}, transparent)`,
                }}
              />

              {/* Card Header: Icon + Number */}
              <div className="service-card-header">
                <div
                  className="service-icon-box"
                  style={{
                    color: service.accent,
                    background: `${service.accent}15`,
                    borderColor: `${service.accent}35`,
                  }}
                >
                  {service.icon}
                </div>
                <span className="service-number">{service.number}</span>
              </div>

              {/* Title & Category */}
              <span className="service-category">{service.category}</span>
              <h3 className="service-card-title">{service.title}</h3>
              <p className="service-card-desc">{service.description}</p>

              {/* Key Deliverables */}
              <div className="service-deliverables">
                <span className="deliverables-heading">Key Capabilities</span>
                <ul className="deliverables-list">
                  {service.deliverables.map((item, idx) => (
                    <li key={idx} className="deliverable-item">
                      <FaCheckCircle
                        className="check-bullet"
                        style={{ color: service.accent }}
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Link to Contact */}
              <div className="service-action-wrap">
                <a href="#contact" className="service-cta-link">
                  <span>Start Project</span>
                  <FaArrowRight className="cta-arrow" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Development Workflow Pipeline */}
        <div className="workflow-container">
          <div className="workflow-header">
            <h3 className="workflow-title">My Development Workflow</h3>
            <p className="workflow-desc">
              A structured, transparent engineering process from concept to deployment.
            </p>
          </div>

          <div className="workflow-steps-grid">
            {WORKFLOW_STEPS.map((step, idx) => (
              <motion.div
                key={idx}
                className="workflow-step-card"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                whileHover={{ y: -6 }}
              >
                <div className="step-badge">{step.step}</div>
                <div className="step-icon-wrap">{step.icon}</div>
                <h4 className="step-title">{step.title}</h4>
                <p className="step-desc">{step.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Bottom Action Banner */}
          <div className="services-action-banner">
            <div className="action-banner-content">
              <h4>Ready to bring your ideas to life?</h4>
              <p>Let's collaborate to build a fast, modern digital presence.</p>
            </div>
            <MagneticButton strength={0.25}>
              <a href="#contact" className="action-banner-btn">
                <span>Let's Talk</span>
                <FaArrowRight />
              </a>
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
