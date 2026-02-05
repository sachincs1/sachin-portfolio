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
import tableauLogo from "@/assets/tableau-logo.png";

// ⭐ AWS Logos
import awsLogo from "@/assets/AWS.png";
import s3Logo from "@/assets/s3.png";
import ec2Logo from "@/assets/EC2.png";
import lambdaLogo from "@/assets/lambda.png";
import cloudwatchLogo from "@/assets/cloudwatch.png";

const skills = [
  { name: "Python", level: 60, logo: pythonLogo },
  { name: "MySQL", level: 85, logo: mysqlLogo },
  { name: "R Programming", level: 50, logo: rLogo },
  { name: "HTML", level: 95, logo: htmlLogo },
  { name: "CSS", level: 90, logo: cssLogo },
  { name: "JavaScript", level: 88, logo: javascriptLogo },

  // ⭐ AWS Skill Level
  { name: "AWS Cloud", level: 60, logo: awsLogo },
];

const tools = [
  { name: "Power BI", logo: powerbiLogo },
  { name: "MS Office", logo: msofficeLogo },
  { name: "GitHub", logo: githubLogo },
  { name: "VS Code", logo: vscodeLogo },
  { name: "Tableau Public", logo: tableauLogo },

  // ⭐ AWS Tools
  { name: "Amazon S3", logo: s3Logo },
  { name: "Amazon EC2", logo: ec2Logo },
  { name: "AWS Lambda", logo: lambdaLogo },
  { name: "AWS CloudWatch", logo: cloudwatchLogo },
];

const Skills = () => {
  return (
    <MainLayout>
      <SEO
        title="Skills & Tools - SACHIN's Portfolio"
        description="Technical skills, programming languages, and tools I use for development."
      />

      <section
        id="skills"
        className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20"
      >
        <section className="space-y-8">
          <h1 className="text-3xl sm:text-4xl font-bold">Skills & Tools</h1>

          {/* Programming Languages */}
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold">
              Programming & Cloud Skills
            </h2>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="rounded-xl border border-border/50 bg-card/30 p-6 backdrop-blur-sm"
                >
                  <div className="mb-4 flex items-center gap-4">
                    <img
                      src={skill.logo}
                      alt={skill.name}
                      className="h-12 w-12"
                    />
                    <h3 className="text-lg font-semibold">{skill.name}</h3>
                  </div>

                  <div className="space-y-2">
                    <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1 }}
                        className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                      />
                    </div>

                    <p className="text-center text-sm text-muted-foreground">
                      {skill.level}%
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Tools & Technologies */}
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold">
              Tools & Technologies
            </h2>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {tools.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className="flex items-center gap-3 p-4 rounded-lg border bg-card hover:bg-accent/50 transition-colors"
                >
                  <img
                    src={tool.logo}
                    alt={tool.name}
                    className="w-8 h-8"
                  />
                  <span className="font-medium">{tool.name}</span>
                </motion.div>
              ))}
            </div>
          </section>
        </section>
      </section>
    </MainLayout>
  );
};

export default Skills;
