import React from 'react';

import { PortfolioItem } from '@/app/actions/portfolioActions';

interface PortfolioProps {
  items: PortfolioItem[];
}

const Portfolio = ({ items }: PortfolioProps) => {
  return (
    <section id="portfolio" className="px-8 md:px-20 pt-20 pb-40 bg-black">
      <div className="max-w-6xl mx-auto space-y-16">
        <div>
          <span className="text-[10px] tracking-ultra-wide uppercase font-bold text-outline">ARCHITECTURAL OUTPUT</span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mt-4 uppercase text-white">프로젝트 포트폴리오.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-12">
          {items.map((item) => (
            <div key={item.id} className="group h-full flex flex-col">
              {/* Browser Mockup */}
              <div className="relative aspect-[4/3] bg-surface-container-high overflow-hidden border border-white/10 flex flex-col">
                {/* Browser Shell Top */}
                <div className="h-6 bg-surface-container-highest border-b border-white/5 flex items-center px-3 gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
                  <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
                </div>
                {/* Image Container with Scroll Hover */}
                <div className="flex-1 relative overflow-hidden bg-[#1a1a1a]">
                  <img
                    alt={item.title}
                    className="w-full absolute top-0 transition-all duration-[3000ms] ease-in-out group-hover:top-[-100%] min-h-full object-cover"
                    src={item.image_url || `https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop`}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop';
                    }}
                  />
                </div>
                {/* Link Overlay */}
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors z-20"
                ></a>
              </div>

              <div className="pt-6 space-y-4 flex-1 flex flex-col">
                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{item.title}</h3>
                    {item.is_beta && (
                      <span className="text-[8px] border border-primary/20 px-2 py-1 tracking-widest text-primary/60">BETA</span>
                    )}
                  </div>
                  <p className="text-sm text-on-surface-variant line-clamp-2 leading-relaxed h-10">
                    {item.description}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {item.tech_stack?.map((tech, idx) => (
                    <span key={idx} className="text-[10px] font-mono tracking-tight text-outline border border-white/5 px-2 py-1 bg-white/5">
                      [{tech}]
                    </span>
                  ))}
                </div>

                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-primary-fixed hover:gap-4 transition-all"
                >
                  VIEW {item.is_beta ? 'DEV BUILD' : 'PLATFORM'} <span className="material-symbols-outlined text-sm">arrow_outward</span>
                </a>
              </div>
            </div>
          ))}
          {items.length === 0 && (
            <div className="col-span-full py-20 text-center border border-white/5 bg-surface-container">
              <p className="text-on-surface-variant tracking-widest uppercase text-sm">Initializing Obsidian Repository...</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
