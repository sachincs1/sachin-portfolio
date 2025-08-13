import SEO from "@/components/seo/SEO";
import MainLayout from "@/components/layout/MainLayout";
import ThreeCard from "@/components/projects/ThreeCard";
import { motion } from "framer-motion";

const Projects = () => {
  const items = new Array(6).fill(0).map((_, i) => ({ id: i + 1, title: `Project ${i + 1}` }));
  return (
    <MainLayout>
      <SEO title="Projects | Dark Animated Portfolio" description="A grid of projects with 3D hover animations and lazy loading." />
      <section>
        <h1 className="mb-6 text-4xl font-bold">Projects</h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, idx) => (
            <motion.article key={item.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: idx * 0.05 }} className="space-y-3">
              <ThreeCard />
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm text-muted-foreground">Interactive 3D card demo. Replace with your real project.</p>
            </motion.article>
          ))}
        </div>
      </section>
    </MainLayout>
  );
};

export default Projects;
