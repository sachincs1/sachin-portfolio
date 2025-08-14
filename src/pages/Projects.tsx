import SEO from "@/components/seo/SEO";
import MainLayout from "@/components/layout/MainLayout";
import { motion } from "framer-motion";
import { ExternalLink, Github, Eye } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "E-commerce Analytics Dashboard",
      description: "Comprehensive analytics dashboard for e-commerce business with real-time data visualization using Power BI and Python.",
      image: "/placeholder.svg",
      category: "Data Analytics",
      technologies: ["Power BI", "Python", "SQL", "Excel"],
      github: "https://github.com/yourusername/ecommerce-analytics",
      live: "https://your-demo-link.com",
      featured: true
    },
    {
      id: 2,
      title: "Customer Segmentation Analysis",
      description: "Advanced customer segmentation using machine learning algorithms to identify customer behavior patterns and preferences.",
      image: "/placeholder.svg",
      category: "Machine Learning",
      technologies: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
      github: "https://github.com/yourusername/customer-segmentation",
      live: "https://your-demo-link.com",
      featured: true
    },
    {
      id: 3,
      title: "Sales Performance Tracker",
      description: "Real-time sales performance tracking system with automated reporting and KPI monitoring.",
      image: "/placeholder.svg",
      category: "Business Intelligence",
      technologies: ["Tableau", "SQL", "Excel", "Power BI"],
      github: "https://github.com/yourusername/sales-tracker",
      live: "https://your-demo-link.com",
      featured: false
    },
    {
      id: 4,
      title: "Predictive Analytics Model",
      description: "Predictive model for forecasting sales trends and customer behavior using historical data analysis.",
      image: "/placeholder.svg",
      category: "Predictive Analytics",
      technologies: ["Python", "TensorFlow", "SQL", "Jupyter"],
      github: "https://github.com/yourusername/predictive-model",
      live: "https://your-demo-link.com",
      featured: false
    },
    {
      id: 5,
      title: "Data Quality Assessment Tool",
      description: "Automated tool for assessing and improving data quality across multiple data sources.",
      image: "/placeholder.svg",
      category: "Data Engineering",
      technologies: ["Python", "Pandas", "SQL", "Apache Airflow"],
      github: "https://github.com/yourusername/data-quality",
      live: "https://your-demo-link.com",
      featured: false
    },
    {
      id: 6,
      title: "Market Research Dashboard",
      description: "Interactive dashboard for market research data with competitive analysis and trend visualization.",
      image: "/placeholder.svg",
      category: "Market Research",
      technologies: ["Tableau", "Python", "Excel", "SQL"],
      github: "https://github.com/yourusername/market-research",
      live: "https://your-demo-link.com",
      featured: false
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
