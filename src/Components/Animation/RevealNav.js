import { motion } from "framer-motion";

function RevealNav(props) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate="visible"
      transition={{
        duration: 0.5,
        delay: 0.2 * props.delay,
        staggerChildren: 0.9,
      }}
    >
      {props.children}
    </motion.div>
  );
}
export default RevealNav;
