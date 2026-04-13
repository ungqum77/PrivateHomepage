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

  const processedItems = items.map(item => {
    const title = item.title || "Untitled Project";
    const description = item.description || "";
    const url = item.url || "#";
    const techStack = Array.isArray(item.tech_stack) ? item.tech_stack : [];
    
    let fallbackImage = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000";
    if (title.includes("계산기")) fallbackImage = "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2000";
    else if (title.includes("명세서")) fallbackImage = "https://images.unsplash.com/photo-1586281380349-631531a744c2?q=80&w=2000";
    else if (title.includes("송장")) fallbackImage = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000";
    else if (title.includes("검사")) fallbackImage = "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2000";
    else if (title.includes("정책자금")) fallbackImage = "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2000";
    else if (title.includes("키워드")) fallbackImage = "https://images.unsplash.com/photo-1558403194-611308249627?q=80&w=2000";

    return {
      ...item,
      title,
      description,
      url,
      tech_stack: techStack,
      image_url: item.image_url || fallbackImage
    };
  });

  return (
    <main className="min-h-screen bg-background selection:bg-primary selection:text-on-primary">
      <Navbar />
      <div className="pt-24">
        <Hero />
        <Expertise />
        <VibeCoding />
        <EcommerceStats />
        <Portfolio items={processedItems} />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
