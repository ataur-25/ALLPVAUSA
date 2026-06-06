import { Suspense, lazy } from "react";

const Hero = lazy(() => import("./Hero"));
const TrustedBrands = lazy(() => import("./TrustedBrands"));
const About = lazy(() => import("./About"));
const Features = lazy(() => import("./Features"));
const Achievements = lazy(() => import("./Achievements"));
const Portfolio = lazy(() => import("./Portfolio"));
const CustomerReviews = lazy(() => import("./CustomerReviews"));
const FeaturedTestimonial = lazy(() => import("./FeaturedTestimonial"));
const Testimonial = lazy(() => import("./Testimonial"));
const CTASection = lazy(() => import("./CTASection"));
const Blog = lazy(() => import("./Blog"));

const SectionLoader = () => (
  <div className="w-full h-screen flex items-center justify-center bg-white dark:bg-slate-950">
    <div className="w-10 h-10 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin"></div>
  </div>
);

export default function Home() {
  return (
    <main>
      <Suspense fallback={<SectionLoader />}>
        <Hero />
        <TrustedBrands />
        <About />
        <Features />
        <Achievements />
        <Portfolio />
        <CustomerReviews />
        <FeaturedTestimonial />
        <Testimonial />
        <CTASection />
        <Blog />
      </Suspense>
    </main>
  );
}
