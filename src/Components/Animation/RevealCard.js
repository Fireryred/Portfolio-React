import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

function RevealCard(props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControl = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControl.start("visible");
    }
  }, [isInView]);
  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={mainControl}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      {props.children}
    </motion.div>
  );
}

export default RevealCard;
