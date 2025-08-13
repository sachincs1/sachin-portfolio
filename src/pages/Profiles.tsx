import SEO from "@/components/seo/SEO";
import MainLayout from "@/components/layout/MainLayout";
import { motion } from "framer-motion";
import { Github, Code, Trophy } from "lucide-react";

const Profiles = () => {
  const profiles = [
    { title: "GitHub", href: "https://github.com/", Icon: Github, desc: "Open-source work & projects" },
    { title: "LeetCode", href: "https://leetcode.com/", Icon: Trophy, desc: "Algorithmic problem solving" },
    { title: "SkillRack", href: "https://www.skillrack.com/", Icon: Code, desc: "Coding practice & assessments" },
  ];
  return (
    <MainLayout>
      <SEO title="Coding Profiles | Dark Animated Portfolio" description="Cards linking to my coding profiles with motion pop-ins." />
      <section className="space-y-6">
        <h1 className="text-4xl font-bold">Coding Profiles</h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {profiles.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="hover-scale rounded-lg border p-4"
            >
              <div className="mb-2 flex items-center gap-3">
                <p.Icon className="size-5 text-primary" />
                <h3 className="font-semibold">{p.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground">{p.desc}</p>
            </motion.a>
          ))}
        </div>
      </section>
    </MainLayout>
  );
};

export default Profiles;
