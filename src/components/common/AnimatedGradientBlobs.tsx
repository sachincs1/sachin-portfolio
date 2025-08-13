import { motion } from "framer-motion";

const AnimatedGradientBlobs = () => {
  return (
    <div className="absolute inset-0 -z-20 overflow-hidden">
      <motion.div
        className="absolute -top-24 -left-24 h-72 w-72 rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, hsl(var(--accent)/0.25), transparent 60%)" }}
        animate={{ y: [0, 20, -10, 0], x: [0, 15, -10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, hsl(var(--primary)/0.25), transparent 60%)" }}
        animate={{ y: [0, -20, 10, 0], x: [0, -15, 10, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
};

export default AnimatedGradientBlobs;
