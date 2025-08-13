import SEO from "@/components/seo/SEO";
import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const CallToAction = () => {
  return (
    <MainLayout>
      <SEO title="Hire Me | Dark Animated Portfolio" description="Cinematic CTA with glowing, animated button to contact or hire me." />
      <section className="flex min-h-[60vh] flex-col items-center justify-center gap-6 text-center">
        <h1 className="text-4xl font-bold md:text-5xl">Ready to build something extraordinary?</h1>
        <p className="max-w-2xl text-muted-foreground">Let's collaborate to ship fast, beautiful, and reliable experiences powered by motion and 3D.</p>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
          <Button variant="hero" size="lg" onClick={() => (window.location.href = "/contact")}>Contact / Hire Me</Button>
        </motion.div>
      </section>
    </MainLayout>
  );
};

export default CallToAction;
