import SEO from "@/components/seo/SEO";
import MainLayout from "@/components/layout/MainLayout";
import RotatingIcon from "@/components/three/RotatingIcon";
import { motion } from "framer-motion";

const HeroAbout = () => {
  return (
    <MainLayout>
      <SEO title="Hero & About Me | Dark Animated Portfolio" description="3D icons, particles, and animated gradient blurs introducing who I am and what I do." />
      <section className="grid items-center gap-8 md:grid-cols-2">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">Creating Cinematic Web Experiences</h1>
          <p className="text-lg text-muted-foreground">I'm a Full‑Stack Developer crafting immersive, high‑performance interfaces with 3D and motion design.</p>
          <div className="grid grid-cols-3 gap-4">
            <motion.div className="flex items-center justify-center rounded-lg border p-4" whileHover={{ scale: 1.03 }}>
              <RotatingIcon />
            </motion.div>
            <motion.div className="flex items-center justify-center rounded-lg border p-4" whileHover={{ scale: 1.03 }}>
              <RotatingIcon />
            </motion.div>
            <motion.div className="flex items-center justify-center rounded-lg border p-4" whileHover={{ scale: 1.03 }}>
              <RotatingIcon />
            </motion.div>
          </div>
        </div>
        <motion.aside initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="space-y-4">
          <h2 className="text-2xl font-semibold">About Me</h2>
          <ul className="grid gap-3 text-muted-foreground">
            <li className="animate-fade-in [animation-delay:0.1s]">• 4+ years building delightful UI with React & Three.js</li>
            <li className="animate-fade-in [animation-delay:0.2s]">• Performance‑first: responsive, accessible, smooth</li>
            <li className="animate-fade-in [animation-delay:0.3s]">• Delivered 20+ projects across web and mobile</li>
          </ul>
        </motion.aside>
      </section>
    </MainLayout>
  );
};

export default HeroAbout;
