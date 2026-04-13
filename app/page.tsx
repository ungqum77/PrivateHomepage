import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
// import Expertise from "@/components/Expertise";
// import EcommerceStats from "@/components/EcommerceStats";
// import VibeCoding from "@/components/VibeCoding";
// import Portfolio from "@/components/Portfolio";
// import Contact from "@/components/Contact";
// import Footer from "@/components/Footer";
import { getPortfolioItems } from "@/app/actions/portfolioActions";

export const dynamic = 'force-dynamic';

export default async function Home() {
  // 데이터 페칭이 문제인지 확인하기 위해 로깅 추가
  console.log("Supabase Configured:", process.env.NEXT_PUBLIC_SUPABASE_URL ? "YES" : "NO");
  const items = await getPortfolioItems();

  return (
    <main className="min-h-screen bg-black text-white p-20">
      <h1 className="text-4xl font-bold mb-8">System Diagnostic Mode</h1>
      <p className="mb-4">If you see this page, the core layout and Navbar/Hero are working.</p>
      <div className="border p-4 bg-zinc-900">
        <h2 className="font-bold">Portfolio Data Status:</h2>
        <pre>{JSON.stringify({ itemCount: items.length }, null, 2)}</pre>
      </div>
      <Navbar />
      <Hero />
    </main>
  );
}
