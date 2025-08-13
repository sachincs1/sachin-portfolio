import SEO from "@/components/seo/SEO";
import MainLayout from "@/components/layout/MainLayout";
import { motion } from "framer-motion";

const Articles = () => {
  const articles = [
    { title: "Mastering Framer Motion Transitions", date: "2025-06-01" },
    { title: "Three.js Tips for Better Performance", date: "2025-05-12" },
    { title: "Designing with Motion: UX Principles", date: "2025-04-20" },
  ];
  return (
    <MainLayout>
      <SEO title="Featured Articles | Dark Animated Portfolio" description="A selection of articles with smooth load-in and fade effects." />
      <section className="space-y-6">
        <h1 className="text-4xl font-bold">Featured Articles</h1>
        <div className="grid gap-4">
          {articles.map((a, i) => (
            <motion.article key={a.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="rounded-md border p-4">
              <h3 className="font-semibold">{a.title}</h3>
              <p className="text-xs text-muted-foreground">{a.date}</p>
            </motion.article>
          ))}
        </div>
      </section>
    </MainLayout>
  );
};

export default Articles;
