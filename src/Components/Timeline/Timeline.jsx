import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { FaBriefcase, FaCode, FaRocket, FaExternalLinkAlt } from "react-icons/fa";
import "./Timeline.css";

const milestones = [
  {
    id: 1,
    role: "Web Developer",
    period: "Sept 2026 – Present",
    category: "Production Web Applications",
    icon: <FaRocket />,
    points: [
      "Designed and developed multiple interactive wedding invitation websites featuring custom animations, dynamic countdowns, event timelines, and mobile-first responsiveness.",
      "Translated design requirements and wireframes into smooth, high-performance frontend experiences across desktop and mobile viewports.",
      "Collaborated with team members to debug UI issues, optimize asset loading and rendering performance, and deploy updates smoothly.",
      "Maintained consistent code quality, version control workflows, and cross-browser compatibility across live production pages.",
    ],
    liveLinks: [
      { name: "snapivite.vercel.app", url: "https://snapivite.vercel.app" },
      { name: "aanandam.vercel.app", url: "https://aanandam.vercel.app" },
    ],
    skills: [
      "React.js",
      "Interactive Animations",
      "Event Timelines & Countdowns",
      "Mobile-First UI",
      "Cross-Browser Optimization",
      "Vercel Deployment",
    ],
  },
  {
    id: 2,
    role: "Creative Frontend Developer Intern",
    period: "June 2026 – Aug 2026",
    category: "Interactive Digital Invitations",
    icon: <FaBriefcase />,
    points: [
      "Developed responsive, interactive digital invitation web applications for weddings, engagements, and birthdays using modern frontend technologies.",
      "Translated UI designs and wireframes into clean, scalable frontend code while ensuring cross-browser compatibility and optimal user experience.",
      "Collaborated closely with the product team to build reusable UI components and maintain high standards of code security, structure, and performance.",
    ],
    skills: [
      "Frontend Architecture",
      "Responsive Layouts",
      "Micro-Interactions",
      "Component Reusability",
      "UI Performance",
    ],
  },
  {
    id: 3,
    role: "Freelance / Personal Projects",
    period: "Jan 2026 – May 2026",
    category: "React Web Apps & UI Systems",
    icon: <FaCode />,
    points: [
      "Built several websites using React JS that work smoothly and responsively across both mobile and desktop viewports.",
      "Created reusable UI components and modular design tokens to ensure a clean, modern, and consistent aesthetic across the entire application.",
      "Implemented engaging features including dynamic product sections, bespoke UI animations, responsive grids, and fluid layout transitions.",
    ],
    skills: [
      "React.js",
      "Modern CSS & Grid",
      "Reusable UI Systems",
      "Framer Motion",
      "Responsive Design",
    ],
  },
];

const TimelineItem = ({ item, index }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      className={`timeline-item ${isEven ? "left" : "right"}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
    >
      {/* Center cyber node with active energy ring */}
      <motion.div
        className="timeline-node"
        whileHover={{ scale: 1.22 }}
        transition={{ type: "spring", stiffness: 400, damping: 12 }}
      >
        <span className="node-icon">{item.icon}</span>
        <div className="node-glow" />
        <div className="node-pulse-ring" />
      </motion.div>

      {/* Cyber connector beam between node and card */}
      <div className={`timeline-connector ${isEven ? "to-left" : "to-right"}`} />

      {/* Content Card with Glassmorphic styling */}
      <motion.div
        className="timeline-card"
        whileHover={{ y: -6, boxShadow: "0 18px 40px rgba(168, 85, 247, 0.28)" }}
        transition={{ duration: 0.3 }}
      >
        <div className="card-header">
          <div className="timeline-badge-wrap">
            <span className="timeline-badge">{item.period}</span>
            {item.category && <span className="timeline-category-tag">{item.category}</span>}
          </div>
        </div>

        <h3 className="timeline-title">{item.role}</h3>

        {/* Enhanced Bullet Points matching Reference Image */}
        <ul className="timeline-points-list">
          {item.points.map((point, pIdx) => (
            <li key={pIdx} className="timeline-point-item">
              <span className="point-bullet" />
              <span className="point-text">{point}</span>
            </li>
          ))}
        </ul>

        {/* Core Live Web Applications */}
        {item.liveLinks && item.liveLinks.length > 0 && (
          <div className="timeline-live-section">
            <span className="live-section-label">Live Web Applications</span>
            <div className="live-chips-container">
              {item.liveLinks.map((linkItem, lIdx) => (
                <a
                  key={lIdx}
                  href={linkItem.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="timeline-live-chip"
                >
                  <span className="live-status-dot" />
                  <span className="live-link-text">{linkItem.name}</span>
                  <FaExternalLinkAlt className="live-link-icon" />
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Technical Competencies Tags */}
        <div className="timeline-tags">
          {item.skills.map((skill, idx) => (
            <span key={idx} className="timeline-tag">
              {skill}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

const Timeline = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 65%", "end 65%"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 28,
    restDelta: 0.001,
  });

  // Calculate runner head position along the rail
  const runnerTop = useTransform(smoothProgress, (val) => `${Math.min(100, Math.max(0, val * 100))}%`);
  const runnerOpacity = useTransform(smoothProgress, [0, 0.03, 0.98, 1], [0, 1, 1, 0.6]);

  return (
    <section className="timeline-section" id="timeline" ref={containerRef}>
      <motion.div
        className="timeline-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="timeline-eyebrow">
          <span className="eyebrow-pip" />
          <span>Work Experience & Milestones</span>
        </div>
        <h2 className="section-title">
          Experience <span className="gradient-accent">&</span> Journey
        </h2>
        <p className="section-subtitle">
          Demonstrated frontend engineering track record building interactive, production-ready web applications with modern frontend architectures.
        </p>
      </motion.div>

      <div className="timeline-container">
        {/* Redesigned High-Tech Vertical Progress Conduit */}
        <div className="timeline-conduit" aria-hidden="true">
          {/* Top Origin Terminal */}
          <div className="timeline-terminal top">
            <span className="terminal-core" />
            <span className="terminal-aura" />
          </div>

          {/* Ambient Multi-Stop Neon Glow Channel */}
          <motion.div
            className="timeline-glow-channel"
            style={{ scaleY: smoothProgress, transformOrigin: "top" }}
          />

          {/* Background Circuitry Rail with Measurement Ticks */}
          <div className="timeline-rail">
            <div className="rail-circuitry" />
          </div>

          {/* Animated Laser Plasma Fill Line */}
          <motion.div
            className="timeline-laser-bar"
            style={{ scaleY: smoothProgress, transformOrigin: "top" }}
          />

          {/* Leading Plasma Runner (Glowing particle traveling down as you scroll) */}
          <motion.div
            className="timeline-runner"
            style={{ top: runnerTop, opacity: runnerOpacity }}
          >
            <div className="runner-particle-core" />
            <div className="runner-halo-glow" />
            <div className="runner-wave-pulse" />
          </motion.div>

          {/* Bottom Endpoint Terminal */}
          <div className="timeline-terminal bottom">
            <span className="terminal-core live" />
            <span className="terminal-aura live" />
          </div>
        </div>

        {/* Timeline items */}
        <div className="timeline-items">
          {milestones.map((item, index) => (
            <TimelineItem key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
