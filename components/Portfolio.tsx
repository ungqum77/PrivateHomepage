import React from 'react';

import { PortfolioItem } from '@/app/actions/portfolioActions';

interface PortfolioProps {
  items: PortfolioItem[];
}

const Portfolio = ({ items }: PortfolioProps) => {
  return (
    <section id="portfolio" className="px-8 md:px-20 pt-20 pb-40 bg-black">
      <div className="space-y-16">
        <div>
          <span className="text-[10px] tracking-ultra-wide uppercase font-bold text-outline">ARCHITECTURAL OUTPUT</span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mt-4 uppercase">PROJECT PORTFOLIO.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {items.map((item) => (
            <a key={item.id} className="portfolio-card group block bg-surface-container border border-white/5 overflow-hidden transition-all duration-500 hover:border-primary/30" href={item.url} target="_blank" rel="noopener noreferrer">
              <div className="h-48 overflow-hidden bg-[#1a1a1a]">
                <img
                  alt={`${item.title} Preview`}
                  className="preview-img w-full transition-transform duration-700 ease-out object-top object-cover h-full grayscale hover:grayscale-0 opacity-80 group-hover:opacity-100"
                  src={item.image_url || "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop"}
                />
              </div>
              <div className="p-8 space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold tracking-tight uppercase">{item.title}</h3>
                  {item.is_beta && (
                    <span className="text-[8px] border border-primary/20 px-2 py-1 tracking-widest text-primary/60">BETA</span>
                  )}
                </div>
                <p className="text-sm text-on-surface-variant font-light leading-relaxed">{item.description}</p>
                {item.tech_stack && item.tech_stack.length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-2">
                    {item.tech_stack.map((tech, i) => (
                      <span key={i} className="text-[9px] px-2 py-0.5 border border-white/10 text-outline uppercase tracking-wider">
                        [{tech}]
                      </span>
                    ))}
                  </div>
                )}
                <div className="pt-4 flex items-center text-[10px] font-bold tracking-[0.2em] uppercase text-primary border-t border-white/5">
                  View {item.is_beta ? 'Dev Build' : 'Platform'} <span className="material-symbols-outlined text-sm ml-2">north_east</span>
                </div>
              </div>
            </a>
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
