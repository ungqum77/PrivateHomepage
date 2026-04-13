import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Expertise from "@/components/Expertise";
import VibeCoding from "@/components/VibeCoding";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background selection:bg-primary selection:text-on-primary">
      <Navbar />
      <div className="pt-24">
        <Hero />
        <Expertise />
        <VibeCoding />
        <Portfolio />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
