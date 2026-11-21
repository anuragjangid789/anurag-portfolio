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
  const itemRef = useRef(null);

  // Scroll progress for each individual milestone card
  // Triggers exactly as the descending progress line runner reaches this node
  const { scrollYProgress: itemProgress } = useScroll({
    target: itemRef,
    offset: ["start 70%", "start 46%"],
  });

  const smoothItem = useSpring(itemProgress, {
    stiffness: 90,
    damping: 24,
    restDelta: 0.001,
  });

  // HIDE CARDS INITIALLY: Opacity stays strictly 0 until the progress bar reaches the node
  const cardOpacity = useTransform(smoothItem, [0, 0.12, 0.75], [0, 0, 1]);
  const cardY = useTransform(smoothItem, [0.08, 0.8], [32, 0]);
  const cardScale = useTransform(smoothItem, [0.08, 0.8], [0.92, 1]);
  const cardPointerEvents = useTransform(smoothItem, (v) => (v >= 0.2 ? "auto" : "none"));

  const cardBorder = useTransform(
    smoothItem,
    [0, 0.2, 0.8, 1],
    [
      "rgba(168, 85, 247, 0)",
      "rgba(168, 85, 247, 0.25)",
      "rgba(168, 85, 247, 0.5)",
      "rgba(34, 211, 238, 0.7)",
    ]
  );
  const cardShadow = useTransform(
    smoothItem,
    [0, 0.2, 0.8, 1],
    [
      "0 0 0 rgba(0, 0, 0, 0)",
      "0 10px 25px rgba(0, 0, 0, 0.3)",
      "0 14px 35px rgba(0, 0, 0, 0.45)",
      "0 18px 45px rgba(0, 0, 0, 0.5), 0 0 28px rgba(6, 182, 212, 0.25)",
    ]
  );

  // Node and connector beam activation as progress line arrives
  const connectorScaleX = useTransform(smoothItem, [0.05, 0.65], [0, 1]);
  const connectorOpacity = useTransform(smoothItem, [0.02, 0.2], [0, 1]);

  const nodeGlowOpacity = useTransform(smoothItem, [0, 0.2, 0.7, 1], [0, 0.3, 0.8, 1]);
  const nodeCoreBorder = useTransform(
    smoothItem,
    [0, 0.2, 0.7, 1],
    [
      "rgba(168, 85, 247, 0.25)",
      "rgba(168, 85, 247, 0.5)",
      "rgba(34, 211, 238, 0.7)",
      "#38bdf8",
    ]
  );
  const nodeCoreShadow = useTransform(
    smoothItem,
    [0, 0.2, 0.7, 1],
    [
      "0 0 0px rgba(0, 0, 0, 0)",
      "0 0 10px rgba(168, 85, 247, 0.3), inset 0 0 8px rgba(168, 85, 247, 0.2)",
      "0 0 18px rgba(6, 182, 212, 0.55), inset 0 0 12px rgba(6, 182, 212, 0.25)",
      "0 0 26px rgba(56, 189, 248, 0.8), inset 0 0 14px rgba(56, 189, 248, 0.4)",
    ]
  );
  const nodeIconColor = useTransform(
    smoothItem,
    [0, 0.2, 0.7, 1],
    [
      "rgba(168, 85, 247, 0.4)",
      "rgba(34, 211, 238, 0.7)",
      "#22d3ee",
      "#ffffff",
    ]
  );

  return (
    <div
      ref={itemRef}
      className={`timeline-item ${isEven ? "left" : "right"}`}
    >
      {/* Precision Cyber Node (Centered directly over rail) */}
      <div className="timeline-node">
        <motion.div
          className="node-glow"
          style={{ opacity: nodeGlowOpacity }}
          aria-hidden="true"
        />
        <div className="node-outer-ring" aria-hidden="true" />
        <motion.div
          className="node-core-body"
          style={{
            borderColor: nodeCoreBorder,
            boxShadow: nodeCoreShadow,
          }}
        >
          <motion.span
            className="node-icon"
            style={{ color: nodeIconColor }}
          >
            {item.icon}
          </motion.span>
        </motion.div>
      </div>

      {/* Dynamic Cyber connector beam that extends as progress line arrives */}
      <motion.div
        className={`timeline-connector ${isEven ? "to-left" : "to-right"}`}
        style={{
          scaleX: connectorScaleX,
          opacity: connectorOpacity,
          transformOrigin: isEven ? "right center" : "left center",
        }}
      />

      {/* Content Card with Glassmorphic styling - hidden until progress bar arrives */}
      <motion.div
        className="timeline-card"
        style={{
          opacity: cardOpacity,
          y: cardY,
          scale: cardScale,
          borderColor: cardBorder,
          boxShadow: cardShadow,
          pointerEvents: cardPointerEvents,
          transformOrigin: isEven ? "right center" : "left center",
        }}
        whileHover={{ y: -6, boxShadow: "0 18px 45px rgba(168, 85, 247, 0.4), 0 0 25px rgba(6, 182, 212, 0.25)" }}
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
    </div>
  );
};

const Timeline = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end 70%"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 26,
    restDelta: 0.001,
  });

  // Calculate runner head position along the rail
  const runnerTop = useTransform(smoothProgress, (val) => `${Math.min(100, Math.max(0, val * 100))}%`);
  const runnerOpacity = useTransform(smoothProgress, [0, 0.03, 0.98, 1], [0, 1, 1, 0.6]);

  return (
    <section className="timeline-section" id="timeline">
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

      <div className="timeline-container" ref={containerRef}>
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
