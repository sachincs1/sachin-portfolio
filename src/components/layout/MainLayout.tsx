import { ReactNode } from "react";
import ParticlesBackground from "@/components/common/ParticlesBackground";
import AnimatedGradientBlobs from "@/components/common/AnimatedGradientBlobs";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Youtube, Twitter } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/cta", label: "Hire Me" },
  { to: "/resume", label: "Resume" },
  { to: "/projects", label: "Projects" },
  { to: "/skills", label: "Skills" },
  { to: "/articles", label: "Articles" },
  { to: "/profiles", label: "Profiles" },
  { to: "/contact", label: "Contact" },
];

const social = [
  { href: "https://github.com/", Icon: Github, label: "GitHub" },
  { href: "https://linkedin.com/", Icon: Linkedin, label: "LinkedIn" },
  { href: "https://instagram.com/", Icon: Instagram, label: "Instagram" },
  { href: "https://youtube.com/", Icon: Youtube, label: "YouTube" },
  { href: "https://twitter.com/", Icon: Twitter, label: "Twitter" },
];

export const MainLayout = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <ParticlesBackground />
      <AnimatedGradientBlobs />

      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <nav className="container mx-auto flex items-center justify-between py-3">
          <Link to="/" className="font-semibold tracking-wide hover-scale">Portfolio</Link>
          <div className="hidden gap-6 md:flex">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} className={`story-link ${location.pathname===n.to? 'text-primary':'text-foreground/80'}`}>{n.label}</Link>
            ))}
          </div>
          <div className="flex items-center gap-3">
            {social.map(({ href, Icon, label }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="hover-scale opacity-80 hover:opacity-100">
                <Icon className="size-5" />
              </a>
            ))}
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-8">
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

      <footer className="border-t py-6">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Your Name</p>
          <div className="flex gap-6 md:hidden">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} className={`text-xs ${location.pathname===n.to? 'text-primary':'text-foreground/80'}`}>{n.label}</Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
