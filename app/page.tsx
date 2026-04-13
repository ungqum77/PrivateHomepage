import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Expertise from "@/components/Expertise";
import EcommerceStats from "@/components/EcommerceStats";
import VibeCoding from "@/components/VibeCoding";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { getPortfolioItems } from "@/app/actions/portfolioActions";

export const dynamic = 'force-dynamic';

export default async function Home() {
  const items = await getPortfolioItems();

  return (
    <main className="min-h-screen bg-background selection:bg-primary selection:text-on-primary">
      <Navbar />
      <div className="pt-24">
        <Hero />
        <Expertise />
        <VibeCoding />
        {/* <EcommerceStats /> */}
        {/* <Portfolio items={items} /> */}
        {/* <Contact /> */}
      </div>
      <Footer />
    </main>
  );
}
