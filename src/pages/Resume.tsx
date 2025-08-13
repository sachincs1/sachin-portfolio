import SEO from "@/components/seo/SEO";
import MainLayout from "@/components/layout/MainLayout";

const Resume = () => {
  return (
    <MainLayout>
      <SEO title="Download Resume | Dark Animated Portfolio" description="Download my resume PDF with a stylish animated hover and click." />
      <section className="flex min-h-[50vh] flex-col items-center justify-center gap-6 text-center">
        <h1 className="text-4xl font-bold">Resume</h1>
        <p className="text-muted-foreground">Grab a copy of my latest resume.</p>
        <a href="/resume.pdf" download className="btn-glow shadow-glow hover-scale rounded-md px-6 py-3">Download PDF</a>
      </section>
    </MainLayout>
  );
};

export default Resume;
