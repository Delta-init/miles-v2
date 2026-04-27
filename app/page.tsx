import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechStack from "./components/TechStack";
import Products from "./components/Benefits";
import WhyUs from "./components/Features";
import Process from "./components/Process";
import Pillars from "./components/Services";
import Accounts from "./components/Pricing";
import Partnership from "./components/Comparison";
import Tools from "./components/Tools";
import Blog from "./components/Blog";
import ClientReviews from "./components/ClientReviews";
import Platforms from "./components/Testimonials";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <TechStack />
      <main className="relative z-10 min-h-screen">
        <Navbar />
        <Hero />
        <Products />
        <WhyUs />
        <Process />
        <Tools />
        <Platforms />
        <Pillars />
        <Accounts />
        <Partnership />
        <ClientReviews />
        <Blog />
        <FAQ />
        <CTA />
        <Footer />
      </main>
    </>
  );
}
