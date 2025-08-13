import SEO from "@/components/seo/SEO";
import MainLayout from "@/components/layout/MainLayout";
import { motion } from "framer-motion";

const skills = [
  { name: "React", level: 90 },
  { name: "TypeScript", level: 85 },
  { name: "Three.js", level: 75 },
  { name: "Framer Motion", level: 80 },
  { name: "Tailwind CSS", level: 88 },
];

const Skills = () => {
  return (
    <MainLayout>
      <SEO title="My Skills | Dark Animated Portfolio" description="Animated skill bars and counters showing proficiency levels." />
      <section className="space-y-8">
        <h1 className="text-4xl font-bold">My Skills</h1>
        <div className="grid gap-6">
          {skills.map((s, i) => (
            <div key={s.name} className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>{s.name}</span>
                <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.1 * i }} className="text-muted-foreground">{s.level}%</motion.span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-secondary">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${s.level}%` }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  className="h-full rounded-full bg-primary"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </MainLayout>
  );
};

export default Skills;
