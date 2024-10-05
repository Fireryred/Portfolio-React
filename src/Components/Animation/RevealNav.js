import { motion } from "framer-motion";

function RevealNav(props) {
  console.log(props);
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: -75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate="visible"
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: props.delay * 0.2,
        staggerChildren: 0.9,
      }}
    >
      {props.children}
    </motion.div>
  );
}
export default RevealNav;
