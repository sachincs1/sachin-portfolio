import { ReactNode, useState } from "react";
import ParticlesBackground from "@/components/common/ParticlesBackground";
import AnimatedGradientBlobs from "@/components/common/AnimatedGradientBlobs";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Instagram, Menu, X } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/skills", label: "Skills" },
  { to: "/projects", label: "Projects" },
  { to: "/certifications", label: "Certifications" },
  { to: "/contact", label: "Contact" },
];

const social = [
  { href: "https://github.com/sachincs1", Icon: Github, label: "GitHub" },
  { href: "https://www.linkedin.com/in/sachin-c-64552126b/", Icon: Linkedin, label: "LinkedIn" },
  { href: "https://www.instagram.com/s.a.c.h.i.n._____?igsh=MWRqemZ3M2d6eXVxYw==", Icon: Instagram, label: "Instagram" },
];

export const MainLayout = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <div className="relative min-h-screen overflow-x-hidden flex flex-col">
      <ParticlesBackground />
      <AnimatedGradientBlobs />

      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <nav className="container mx-auto flex items-center justify-between py-3 px-4">
          <Link to="/" className="font-semibold tracking-wide hover-scale text-lg">Portfolio</Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-6 items-center">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} className={`story-link ${location.pathname===n.to? 'text-primary':'text-foreground/80'}`}>{n.label}</Link>
            ))}
            <motion.a
              href="/resume.pdf"
              download
              aria-label="Download Resume PDF"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="px-3 py-1.5 rounded-md text-sm font-medium transition-colors shadow-sm mix-blend-difference border border-foreground/60 text-foreground hover:bg-foreground hover:text-background"
            >
              Resume
            </motion.a>
          </div>

          {/* Social Links & Mobile Menu Button */}
          <div className="flex items-center gap-3">
            {/* Social Links - Hidden on very small screens */}
            <div className="hidden sm:flex items-center gap-3">
              {social.map(({ href, Icon, label }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="hover-scale opacity-80 hover:opacity-100">
                  <Icon className="size-5" />
                </a>
              ))}
            </div>
            
            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 hover:bg-accent/20 rounded-md transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden border-t bg-background/95 backdrop-blur-sm"
            >
              <div className="container mx-auto px-4 py-4 space-y-3">
                {/* Mobile Social Links - Moved to top */}
                <div className="flex items-center justify-center gap-4 pb-3 border-b">
                  {social.map(({ href, Icon, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={label}
                      className="p-2 hover:bg-accent/20 rounded-md transition-colors"
                    >
                      <Icon className="size-5" />
                    </a>
                  ))}
                </div>
                
                {/* Navigation Links */}
                {nav.map((n) => (
                  <Link
                    key={n.to}
                    to={n.to}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block py-2 px-3 rounded-md transition-colors ${
                      location.pathname === n.to
                        ? 'text-primary bg-primary/10'
                        : 'text-foreground/80 hover:text-foreground hover:bg-accent/20'
                    }`}
                  >
                    {n.label}
                  </Link>
                ))}
                <motion.a
                  href="/resume.pdf"
                  download
                  aria-label="Download Resume PDF"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="mt-2 inline-block w-full text-center py-2 rounded-md bg-primary text-primary-foreground text-sm font-medium transition-colors hover:bg-primary/90 shadow-sm hover:shadow-glow"
                >
                  Resume
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="flex-1 container mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      </main>

      <footer className="border-t py-6 mt-auto">
        <div className="container mx-auto px-4 sm:px-6 flex justify-center">
          <p className="text-sm text-muted-foreground">© 2025 Sachin | Data Analyst</p>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
