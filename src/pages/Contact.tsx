import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Github, Linkedin, Instagram } from "lucide-react";
import SEO from "@/components/seo/SEO";
import MainLayout from "@/components/layout/MainLayout";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactForm = z.infer<typeof contactSchema>;

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactForm) => {
    console.log(data);
    // Here you would typically send the data to your backend
    reset();
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "sachin948825@gmail.com",
      link: "mailto:sachin948825@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9344447968",
      link: "tel:+91 9344447968"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Madurai, Tamil Nadu",
      link: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      url: "https://github.com/sachincs1",
      color: "hover:text-gray-600"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/sachin-c-64552126b/",
      color: "hover:text-blue-600"
    },
    {
      icon: Instagram,
      label: "Instagram",
      url: "https://www.instagram.com/s.a.c.h.i.n._____?igsh=MWRqemZ3M2d6eXVxYw==",
      color: "hover:text-pink-600"
    }
  ];

  return (
    <MainLayout>
      <SEO 
        title="Contact - Sachin | Data Analyst"
        description="Get in touch with Sachin for data analysis projects, collaborations, or inquiries."
      />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-background"
      >
        <section id="contact" className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-3xl sm:text-4xl font-bold mb-6">Contact</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Let's discuss your data analysis needs or just say hello!
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
            {/* Contact Form - Left Side */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-semibold mb-6">Send Message</h2>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    {...register("name")}
                    placeholder="Your name"
                    className="w-full"
                  />
                  {errors.name && (
                    <p className="text-sm text-red-500">{errors.name.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    {...register("email")}
                    placeholder="your.email@example.com"
                    className="w-full"
                  />
                  {errors.email && (
                    <p className="text-sm text-red-500">{errors.email.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    {...register("subject")}
                    placeholder="What's this about?"
                    className="w-full"
                  />
                  {errors.subject && (
                    <p className="text-sm text-red-500">{errors.subject.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    {...register("message")}
                    placeholder="Tell me more..."
                    rows={5}
                    className="w-full"
                  />
                  {errors.message && (
                    <p className="text-sm text-red-500">{errors.message.message}</p>
                  )}
                </div>

                <Button type="submit" className="w-full sm:w-auto">
                  Send Message
                </Button>
              </form>

              {isSubmitSuccessful && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  className="rounded-md border border-green-500/30 bg-emerald-500/10 p-4 text-emerald-300 text-center"
                >
                  Thanks! Your message has been sent.
                </motion.div>
              )}
            </motion.div>

            {/* Contact Information - Right Side */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-8"
            >
              <h2 className="text-2xl font-semibold mb-6">Get In Touch</h2>
              
              {/* Contact Details */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <div className="p-3 bg-primary/10 rounded-full">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      <a 
                        href={info.link}
                        className="text-base font-medium hover:text-primary transition-colors"
                      >
                        {info.value}
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Media */}
              <div className="pt-6 border-t border-border/20">
                <h3 className="text-lg font-semibold mb-4">Follow Me</h3>
                
                {/* GitHub Link Above Icons */}
                <div className="mb-4">
                  <a 
                    href="https://github.com/sachincs1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 transition-colors font-medium"
                  >
                    https://github.com/sachincs1
                  </a>
                </div>
                
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className={`p-3 bg-muted rounded-full transition-colors ${social.color}`}
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* FAQ Section */}
              <div className="pt-6 border-t border-border/20">
                <h3 className="text-lg font-semibold mb-4">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                    className="space-y-2"
                  >
                    <h4 className="font-medium text-sm">How quickly do you respond?</h4>
                    <p className="text-sm text-muted-foreground">I typically respond within 24 hours during business days.</p>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.0 }}
                    className="space-y-2"
                  >
                    <h4 className="font-medium text-sm">What types of projects do you take on?</h4>
                    <p className="text-sm text-muted-foreground">Data analysis, dashboard creation, business intelligence solutions, and more.</p>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.1 }}
                    className="space-y-2"
                  >
                    <h4 className="font-medium text-sm">Do you offer free consultations?</h4>
                    <p className="text-sm text-muted-foreground">Yes, I offer a 30-minute free consultation to discuss your project needs.</p>
                  </motion.div>
                </div>
              </div>

              {/* Additional Info - Commented Out
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.0 }}
                className="pt-6 border-t border-border/20"
              >
                <h3 className="text-lg font-semibold mb-4">Availability</h3>
                <p className="text-muted-foreground mb-2">
                  I'm currently available for:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    Data Analysis Projects
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    Business Intelligence Solutions
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    Freelance Opportunities
                  </li>
                </ul>
              </motion.div>
              */}
            </motion.div>
          </div>
        </section>
      </motion.div>
    </MainLayout>
  );
};

export default Contact;
