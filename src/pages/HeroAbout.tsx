import { motion } from "framer-motion";
import MainLayout from "@/components/layout/MainLayout";
import SEO from "@/components/seo/SEO";

export default function HeroAbout() {
  return (
    <MainLayout>
      <SEO title="SACHIN's Portfolio" description="3D icons, particles, and animated gradient blurs introducing who I am and what I do." />
      <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center md:justify-start"
          >
            <div className="relative">
              {/* Profile Photo */}
              <img
                src="/profile-photo.jpg"
                alt="Sachin - Full Stack Developer"
                className="w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full border-4 border-primary/20 object-cover shadow-2xl"
              />
              {/* Decorative Elements */}
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent rounded-full animate-pulse"></div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-primary rounded-full animate-pulse delay-1000"></div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Main Content */}
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                Creating Cinematic Web Experiences
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground leading-relaxed">
              I’m a Data Analyst passionate about transforming raw data into meaningful stories, using analytics to solve problems and drive informed decisions.n technologies and motion design.
              </p>
            </div>

            {/* About Me Section */}
            <div className="space-y-4 pt-8 border-t border-border/20">
              <h2 className="text-2xl sm:text-3xl font-semibold">About Me</h2>
              <ul className="grid gap-3 text-base sm:text-lg text-muted-foreground">
                <li className="flex items-center gap-3 animate-fade-in [animation-delay:0.1s]">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Skilled in SQL, Python, Excel, and data visualization
                </li>
                <li className="flex items-center gap-3 animate-fade-in [animation-delay:0.2s]">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Experienced in AI, e-commerce, and real-time analytics projects
                </li>
                <li className="flex items-center gap-3 animate-fade-in [animation-delay:0.3s]">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Strong analytical and problem-solving mindset
                </li>
                <li className="flex items-center gap-3 animate-fade-in [animation-delay:0.3s]">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Dedicated to delivering impactful, data-driven solutions
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>
    </MainLayout>
  );
}
