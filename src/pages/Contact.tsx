import SEO from "@/components/seo/SEO";
import MainLayout from "@/components/layout/MainLayout";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

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
      <SEO title="Contact Me | Dark Animated Portfolio" description="Interactive email form with validation and animated success state." />
      <section className="mx-auto max-w-xl space-y-6">
        <h1 className="text-4xl font-bold">Contact</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
          <label className="grid gap-2">
            <span className="text-sm">Name</span>
            <input {...register("name")} className="rounded-md border bg-background px-3 py-2 focus:outline-none focus:ring-2 focus:ring-ring" placeholder="Your name" />
            {errors.name && <span className="text-xs text-destructive">{errors.name.message}</span>}
          </label>
          <label className="grid gap-2">
            <span className="text-sm">Email</span>
            <input {...register("email")} className="rounded-md border bg-background px-3 py-2 focus:outline-none focus:ring-2 focus:ring-ring" placeholder="you@example.com" />
            {errors.email && <span className="text-xs text-destructive">{errors.email.message}</span>}
          </label>
          <label className="grid gap-2">
            <span className="text-sm">Message</span>
            <textarea {...register("message")} className="min-h-32 rounded-md border bg-background px-3 py-2 focus:outline-none focus:ring-2 focus:ring-ring" placeholder="Tell me about your project" />
            {errors.message && <span className="text-xs text-destructive">{errors.message.message}</span>}
          </label>
          <div>
            <Button type="submit" variant="glow" disabled={isSubmitting}>{isSubmitting ? "Sending..." : "Send Message"}</Button>
          </div>
        </form>
        {isSubmitSuccessful && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="rounded-md border border-green-500/30 bg-emerald-500/10 p-4 text-emerald-300">
            Thanks! Your message has been sent.
          </motion.div>
        )}
      </section>
    </MainLayout>
  );
};

export default Contact;
