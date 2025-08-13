import SEO from "@/components/seo/SEO";
import MainLayout from "@/components/layout/MainLayout";
import { motion } from "framer-motion";

// Import logos
import pythonLogo from "@/assets/python-logo.png";
import mysqlLogo from "@/assets/mysql-logo.png";
import rLogo from "@/assets/r-logo.png";
import htmlLogo from "@/assets/html-logo.png";
import cssLogo from "@/assets/css-logo.png";
import javascriptLogo from "@/assets/javascript-logo.png";
import powerbiLogo from "@/assets/powerbi-logo.png";
import msofficeLogo from "@/assets/msoffice-logo.png";
import githubLogo from "@/assets/github-logo.png";
import vscodeLogo from "@/assets/vscode-logo.png";
import tableauLogo from  "@/assets/tableau-logo.png";

const skills = [
  { name: "Python", level: 90, logo: pythonLogo },
  { name: "MySQL", level: 85, logo: mysqlLogo },
  { name: "R Programming", level: 75, logo: rLogo },
  { name: "HTML", level: 95, logo: htmlLogo },
  { name: "CSS", level: 90, logo: cssLogo },
  { name: "JavaScript", level: 88, logo: javascriptLogo },
];

const tools = [
  { name: "Power BI", logo: powerbiLogo },
  { name: "MS Office", logo: msofficeLogo },
  { name: "GitHub", logo: githubLogo },
  { name: "VS Code", logo: vscodeLogo },
  { name: "Tableau Public", logo: tableauLogo }, // Using Power BI logo as placeholder for Tableau Public
];

const SkillCard = ({ skill, index }: { skill: typeof skills[0], index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="rounded-xl border border-border/50 bg-card/30 p-6 backdrop-blur-sm"
    >
      <div className="mb-4 flex items-center gap-4">
        <motion.img
          src={skill.logo}
          alt={`${skill.name} logo`}
          className="h-12 w-12"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.2 }}
        />
        <h3 className="text-lg font-semibold">{skill.name}</h3>
      </div>
      
      <div className="space-y-2">
        <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: index * 0.1 + 0.3 }}
            className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
          />
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 + 0.8 }}
          className="text-center text-sm text-muted-foreground"
        >
          {skill.level}%
        </motion.p>
      </div>
    </motion.div>
  );
};

const ToolCard = ({ tool, index }: { tool: typeof tools[0], index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className="rounded-xl border border-border/50 bg-card/30 p-6 backdrop-blur-sm transition-all duration-300 hover:border-accent/50 hover:shadow-glow"
    >
      <div className="flex items-center gap-4">
        <motion.img
          src={tool.logo}
          alt={`${tool.name} logo`}
          className="h-12 w-12"
          whileHover={{ scale: 1.15, rotate: 8 }}
          transition={{ duration: 0.2 }}
        />
        <h3 className="text-lg font-semibold">{tool.name}</h3>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <MainLayout>
      <SEO 
        title="My Skills & Tools | Dark Animated Portfolio" 
        description="Animated skill bars and tool showcase with logos, progress indicators, and smooth hover effects." 
      />
      
      <div className="space-y-12">
        {/* Skills Section */}
        <section className="space-y-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold">Skills</h1>
            <p className="mt-2 text-muted-foreground">Programming languages and technologies I work with</p>
          </div>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </section>

        {/* Tools Section */}
        <section className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold">Tools</h2>
            <p className="mt-2 text-muted-foreground">Development tools and software I use daily</p>
          </div>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {tools.map((tool, index) => (
              <ToolCard key={tool.name} tool={tool} index={index} />
            ))}
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default Skills;