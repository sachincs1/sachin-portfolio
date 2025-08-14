import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Badge, Calendar, ExternalLink, Award } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";
import SEO from "@/components/seo/SEO";

export default function Certifications() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const certifications = [
    {
      name: "Deloitte Australia – Data Analytics Job Simulation",
      issuer: "Deloitte",
      date: "Jul 2025",
      credentialId: "6nS1CTsY7hCGWJ65P",
      category: "Data Analytics",
      logo: "📊",
      description: "Gained practical experience in data analysis, data modeling, Tableau, and spreadsheet-based insights.",
      link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_7gZxhrnC2wE5AaAtL_1751540167964_completion_certificate.pdf"
    },
    {
      name: "Data Analytics with AI",
      issuer: "Sololearn",
      date: "Jun 2025",
      credentialId: "CC-FWPS4GJA",
      category: "Data Analytics",
      logo: "🤖",
      description: "Completed hands-on training in AI-powered data analytics techniques.",
      link: "https://api2.sololearn.com/v2/certificates/CC-FWPS4GJA/image/png?t=638850339042481440"
    },
    {
        name: "Python Programming Certification",
        issuer: "GUVI (HCL)",
        date: "Jul 2024",
        credentialId: "7D2SH81ZN426baJ7Tr",
        category: "Programming",
        logo: "🐍",
        description: "Advanced Python programming and problem-solving skills.",
        link: "https://www.guvi.in/share-certificate/702SH81ZN426baJ71r"
      },
    {
        name: "Tata Group – Data Visualisation: Empowering Business with Effective Insights Job Simulation",
        issuer: "Forage",
        date: "Jan 2025",
        credentialId: "L5skPYgqqhNQefu",
        category: "Data Visualization",
        logo: "📈",
        description: "Practical experience in business insights and data visualization techniques.",
        link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/ifobHAoMjQs9s6bKS/MyXvBcppsW2FkNYCX_ifobHAoMjQs9s6bKS_7gZxhrnC2wE5AaAtL_1736557157627_completion_certificate.pdf"
      },
    {
      name: "Industrial Metaverse using Mixed Reality (XR)",
      issuer: "Tamil Nadu Skill Development Corporation",
      date: "Jan 2025",
      credentialId: "NME222E3EAU22327331676",
      category: "Mixed Reality",
      logo: "🥽",
      description: "Skills in mixed reality and augmented reality applications.",
      link: "https://www.linkedin.com/in/sachin-c-64552126b/details/certifications/"
    },
    {
      name: "Big Data 101",
      issuer: "Infosys Springboard",
      date: "Oct 2024",
      credentialId: "",
      category: "Big Data",
      logo: "💾",
      description: "Gained foundational skills in big data analytics.",
      link: "https://www.linkedin.com/in/sachin-c-64552126b/details/certifications/"
    },
   
    {
      name: "Machine Learning to Generative AI",
      issuer: "Tamil Nadu Skill Development Corporation",
      date: "Apr 2024",
      credentialId: "",
      category: "Machine Learning",
      logo: "🧠",
      description: "Covered core concepts of machine learning and generative AI.",
      link: "https://www.linkedin.com/in/sachin-c-64552126b/details/certifications/"
    }
  ];

  const categories = ["All", "Data Analytics", "Mixed Reality", "Data Visualization", "Big Data", "Programming", "Machine Learning"];

  const filteredCertifications = useMemo(() => {
    if (selectedCategory === "All") return certifications;
    return certifications.filter(cert => cert.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <MainLayout>
      <SEO title="Certifications - SACHIN's Portfolio" description="Professional certifications and achievements in data analytics, programming, and technology." />
      <section id="certifications" className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl font-bold">Certifications</h1>
          <p className="text-xl text-muted-foreground">Professional achievements and learning milestones</p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Certifications Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredCertifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg border bg-card p-6 hover:shadow-lg transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="text-3xl">{cert.logo}</div>
                <div className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs">
                  {cert.category}
                </div>
              </div>

              {/* Content */}
              <div className="space-y-3">
                <h3 className="font-semibold text-lg leading-tight group-hover:text-primary transition-colors">
                  {cert.name}
                </h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4" />
                    <span>{cert.issuer}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{cert.date}</span>
                  </div>
                  {cert.credentialId && (
                    <div className="flex items-center gap-2">
                      <Badge className="w-4 h-4" />
                      <span className="font-mono text-xs">{cert.credentialId}</span>
                    </div>
                  )}
                </div>
                <p className="text-sm leading-relaxed">{cert.description}</p>
              </div>

              {/* Footer */}
              <div className="mt-4 pt-4 border-t">
                <a
                  href={cert.link}
                  className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Certificate
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12 p-6 bg-muted/50 rounded-lg"
        >
          <p>All certifications are verified and can be validated through their respective issuing organizations.</p>
        </motion.div>
      </section>
    </MainLayout>
  );
}
