import { motion, AnimatePresence } from "framer-motion";

const RollingText = ({
  text,
  textKey,
  containerClassName = "",
  charClassName = "",
  staggerDelay = 0.032,
}) => {
  const letters = Array.from(text);

  const containerVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.02,
      },
    },
    exit: {
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  };

  const letterVariants = {
    initial: {
      y: "115%",
      opacity: 0,
    },
    animate: {
      y: "0%",
      opacity: 1,
      transition: {
        duration: 0.42,
        ease: [0.16, 1, 0.3, 1], // Smooth snappy curve
      },
    },
    exit: {
      y: "-115%",
      opacity: 0,
      transition: {
        duration: 0.35,
        ease: [0.7, 0, 0.84, 0], // Acceleration upwards
      },
    },
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={textKey}
        className={containerClassName}
        variants={containerVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        style={{ display: "inline-flex", whiteSpace: "nowrap" }}
      >
        {letters.map((char, index) => (
          <span
            key={index}
            className="char-mask"
            style={{
              display: "inline-block",
              overflow: "hidden",
              verticalAlign: "top",
              lineHeight: 1.08,
              paddingBottom: "0.12em",
              marginBottom: "-0.12em",
            }}
          >
            <motion.span
              variants={letterVariants}
              className={charClassName}
              style={{
                display: "inline-block",
              }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          </span>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};

export default RollingText;
