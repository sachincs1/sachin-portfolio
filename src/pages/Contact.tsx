import SEO from "@/components/seo/SEO";
import MainLayout from "@/components/layout/MainLayout";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

type FormValues = z.infer<typeof schema>;

const Contact = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting, isSubmitSuccessful }, reset } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormValues) => {
    await new Promise((r) => setTimeout(r, 800));
    console.log("Form submitted", data);
    reset();
  };

  return (
    <MainLayout>
      <SEO title="Contact - SACHIN's Portfolio" description="Get in touch with me for collaborations, opportunities, or just to say hello." />
      <section id="contact" className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
        <h1 className="text-3xl sm:text-4xl font-bold">Contact</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="Your name"
                {...register("name")}
                className="text-base"
              />
              {errors.name && (
                <p className="text-sm text-destructive">{errors.name.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                {...register("email")}
                className="text-base"
              />
              {errors.email && (
                <p className="text-sm text-destructive">{errors.email.message}</p>
              )}
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              placeholder="Tell me about your project or just say hello!"
              {...register("message")}
              className="min-h-[120px] text-base"
            />
            {errors.message && (
              <p className="text-sm text-destructive">{errors.message.message}</p>
            )}
          </div>
          <Button type="submit" className="w-full sm:w-auto">
            Send Message
          </Button>
        </form>
        {isSubmitSuccessful && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="rounded-md border border-green-500/30 bg-emerald-500/10 p-3 sm:p-4 text-emerald-300 text-sm sm:text-base">
            Thanks! Your message has been sent.
          </motion.div>
        )}
      </section>
    </MainLayout>
  );
};

export default Contact;
