import SEO from "@/components/seo/SEO";
import MainLayout from "@/components/layout/MainLayout";
import { motion } from "framer-motion";
import { ExternalLink, Github, Eye } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "HR Attrition Dashboard",
      description: "Built an interactive Power BI dashboard to analyze employee attrition trends, identify key retention challenges, and provide actionable insights for HR decision-making.",
      image: "/dashboard.png",
      category: "Data Analytics",
      technologies: ["Power BI", "Excel"],
      github: "https://github.com/sachincs1/HR-Attrition-PowerBI",
      live: "https://app.powerbi.com/view?r=eyJrIjoiNWI2NjRmZDMtNzMyMy00ZWNkLTkwMTAtMDI2ODA4ODViZjVkIiwidCI6IjYxYjJkM2UzLTNiMjctNGQ1Zi04ZjgxLTA2NTFjODMyNzljYyJ9",
      featured: true
    },
    {
      id: 2,
      title: "CopBot",
      description: "AI-based legal assistant bridging the gap between citizens and police, offering multilingual legal query support, smart document search, and FIR draft generation.",
      image: "/copbot.jpeg",
      category: "AI & Legal Tech",
      technologies: ["Flask", "FAISS", "LlamaIndex", "Google Gemini", "HuggingFace"],
      github: "https://github.com/zealousMW/CopBotv1.5",
      live: "",
      featured: true
    },
    {
      id: 3,
      title: "Walmart Sales Dashboard",
      description: "An interactive Power BI dashboard analyzing Walmart sales trends, top products, regional performance, and customer segments with KPIs and time-series insights.",
      image: "/Walmart-Dashboard.png",
      category: "Data Analytics & BI",
      technologies: ["Power BI", "DAX", "Data Modeling", "Data Visualization"],
      github: "https://github.com/sachincs1/Walmart-Dashboard",
      live: "https://app.powerbi.com/view?r=eyJrIjoiZjIwYzhkZWItMGIzMC00MzFhLTgwMzItOTgzM2JkODg0MjM2IiwidCI6IjYxYjJkM2UzLTNiMjctNGQ1Zi04ZjgxLTA2NTFjODMyNzljYyJ9",
      featured: true
    }
    
    
   
  ];

  return (
    <MainLayout>
      <SEO title="Projects - SACHIN's Portfolio" description="A showcase of my data analytics and business intelligence projects." />
      <section id="projects" className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">My Projects</h1>
          <p className="text-xl text-muted-foreground">Data-driven solutions that transform business insights</p>
        </div>
        
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg border bg-card hover:shadow-lg transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-48 bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {project.featured && (
                  <div className="absolute top-3 left-3">
                    <span className="px-2 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                      Featured
                    </span>
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="mb-3">
                  <span className="text-sm text-primary font-medium">{project.category}</span>
                </div>
                
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                    >
                      <Eye className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </MainLayout>
  );
}
