import { useRef } from "react";
import { motion } from "framer-motion";

function Reveal(props) {
  const ref = useRef(null);
  return (
    <div
      ref={ref}
      style={{
        position: "relative",
        overflow: "hidden",
      }}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ root: ref, once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {props.children}
      </motion.div>
      <motion.div
        variants={{ hidden: { left: 0 }, visible: { left: "100%" } }}
        initial="hidden"
        whileInView="visible"
        viewport={{ root: ref, once: true }}
        transition={{ duration: 0.5, ease: "easeIn" }}
        style={{
          position: "absolute",
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          background: "var(--text-green)",
          zIndex: 20,
        }}
      />
    </div>
  );
}

export default Reveal;
