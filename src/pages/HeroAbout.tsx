import SEO from "@/components/seo/SEO";
import MainLayout from "@/components/layout/MainLayout";
import RotatingIcon from "@/components/three/RotatingIcon";
import { motion } from "framer-motion";

const HeroAbout = () => {
  return (
    <MainLayout>
      <SEO title="Hero & About Me | Dark Animated Portfolio" description="3D icons, particles, and animated gradient blurs introducing who I am and what I do." />
      <section className="grid items-center gap-8 md:grid-cols-3">
        {/* Profile Photo Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.6, delay: 0.2 }}
          className="order-first md:order-1 flex justify-center"
        >
          <div className="relative">
            {/* Profile Photo */}
            <img 
              src="/profile-photo.jpg" 
              alt="Sachin - Full Stack Developer" 
              className="w-48 h-48 sm:w-64 sm:h-64 rounded-full border-4 border-primary/20 object-cover shadow-2xl"
            />
            
            {/* Decorative Elements */}
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent rounded-full animate-pulse"></div>
            <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-primary rounded-full animate-pulse delay-1000"></div>
          </div>
        </motion.div>

        {/* Main Content with About Me */}
        <div className="space-y-6 order-2">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight md:text-5xl">Creating Cinematic Web Experiences</h1>
          <p className="text-base sm:text-lg text-muted-foreground">I'm a Full‑Stack Developer crafting immersive, high‑performance interfaces with 3D and motion design.</p>
          
          {/* About Me Section moved here */}
          <div className="space-y-4 pt-6 border-t border-border/20">
            <h2 className="text-xl sm:text-2xl font-semibold">About Me</h2>
            <ul className="grid gap-2 sm:gap-3 text-sm sm:text-base text-muted-foreground">
              <li className="animate-fade-in [animation-delay:0.1s]">• 4+ years building delightful UI with React & Three.js</li>
              <li className="animate-fade-in [animation-delay:0.2s]">• Performance‑first: responsive, accessible, smooth</li>
              <li className="animate-fade-in [animation-delay:0.3s]">• Delivered 20+ projects across web and mobile</li>
            </ul>
          </div>
        </div>

        {/* Right Column - 3D Icons Vertically */}
        <motion.div 
          initial={{ opacity: 0, x: 40 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.6, delay: 0.4 }}
          className="order-3 flex justify-center"
        >
          <div className="grid grid-rows-3 gap-4">
            <motion.div className="flex items-center justify-center rounded-lg border p-3 sm:p-4" whileHover={{ scale: 1.03 }}>
              <RotatingIcon />
            </motion.div>
            <motion.div className="flex items-center justify-center rounded-lg border p-3 sm:p-4" whileHover={{ scale: 1.03 }}>
              <RotatingIcon />
            </motion.div>
            <motion.div className="flex items-center justify-center rounded-lg border p-3 sm:p-4" whileHover={{ scale: 1.03 }}>
              <RotatingIcon />
            </motion.div>
          </div>
        </motion.div>
      </section>
    </MainLayout>
  );
};

export default HeroAbout;
