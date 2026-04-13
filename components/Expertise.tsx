import React from 'react';

const Expertise = () => {
  return (
    <section className="px-8 md:px-20 py-32 bg-surface-container-lowest">
      <div className="mb-16">
        <span className="text-[10px] tracking-ultra-wide uppercase font-bold text-outline">STRATEGIC DOMAINS</span>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight mt-4 uppercase">E-COMMERCE EXPERTISE.</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-8 h-[400px] bg-surface-container border border-white/5 p-12 flex flex-col justify-end group cursor-pointer overflow-hidden relative">
          <img
            alt="Ecommerce Tech"
            className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:scale-105 transition-transform duration-700"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlTe-3fLhIcfPAWBoLWYBn1ELcxttyQJ3Ahrd7mbny3QBxDMSH4KsZd_hG5_a_sQHLNEeM-jkHpooEOuTUp_-I0AEYWOU-Z7hHmz_8Rv1p8PMnAlIPnBMYuzNX7M5lnQhYKkrLxibRdcGzBR41VZFBRx6zF-UYsgxuQ_dqepRofpNxNruXKJbgCxgIFr_dn3rP2AQzfiKzImYB5W8HusEhf0K0cuhRCDcGeTp7M7AG73LA40YddIAp__gPuBDv6jR1zINWnZwHbH5w"
          />
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-4">Scalable Architecture</h3>
            <p className="text-on-surface-variant max-w-md">Engineering systems that handle peak-load traffic without compromising on millisecond latency.</p>
          </div>
        </div>
        <div className="md:col-span-4 h-[400px] bg-surface-container-high p-12 flex flex-col justify-between border border-white/5">
          <span className="material-symbols-outlined text-4xl text-primary">analytics</span>
          <div>
            <h3 className="text-2xl font-bold mb-2">Data Intelligence</h3>
            <p className="text-on-surface-variant text-sm">Transforming raw consumer behavior into actionable growth cycles.</p>
          </div>
        </div>
        <div className="md:col-span-4 h-[400px] bg-surface-container-high p-12 flex flex-col justify-between border border-white/5">
          <span className="material-symbols-outlined text-4xl text-primary">shopping_bag</span>
          <div>
            <h3 className="text-2xl font-bold mb-2">Luxury Logistics</h3>
            <p className="text-on-surface-variant text-sm">Orchestrating high-value inventory flow across global nodes.</p>
          </div>
        </div>
        <div className="md:col-span-8 h-[400px] bg-surface-container border border-white/5 p-12 flex flex-col justify-end group cursor-pointer overflow-hidden relative">
          <img
            alt="UX Interface"
            className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:scale-105 transition-transform duration-700"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD286MRXrH4SUqXsi8VdHJk7gbdb-wHk_ZYezBx_CCYxLNwGOgUjZdaaauvaFZYBHjF2ntXo0LZp__KmhnLdNHi17-SxcqYEodriNqOOCB6uqeOnxyYLN_qMw4BLRbP8padlLZfWJCFKhw48EBNk9eyqceRTdoKTUTSzoLn27ahaQ3eJLZY0v-qxsYFrBViKwL8RPcLTlHJxBtS2dnm9oSlL-32TMgQodphhqBZx4u5LxjCqwBPTJXQQIw727xq2u978tRjpuJkpPa2"
          />
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-4">Premium UX Strategy</h3>
            <p className="text-on-surface-variant max-w-md">Designing conversion journeys that mirror the experience of a five-star concierge.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
