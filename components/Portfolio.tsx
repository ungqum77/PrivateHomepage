import React from 'react';
import { PortfolioItem } from '@/app/actions/portfolioActions';

interface PortfolioProps {
  items: PortfolioItem[];
}

const Portfolio = ({ items }: PortfolioProps) => {
  // 데이터 안전성 2중 체크
  const safeItems = Array.isArray(items) ? items : [];

  return (
    <section id="portfolio" className="px-8 md:px-20 pt-20 pb-40 bg-black">
      <div className="max-w-6xl mx-auto space-y-16">
        <div>
          <span className="text-[10px] tracking-ultra-wide uppercase font-bold text-outline">ARCHITECTURAL OUTPUT</span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mt-4 uppercase text-white">프로젝트 포트폴리오.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          {safeItems.length === 0 ? (
            <div className="col-span-full py-20 text-center border border-white/5 bg-surface-container">
              <p className="text-on-surface-variant font-mono">No projects found in the repository.</p>
            </div>
          ) : (
            safeItems.map((item) => {
              if (!item) return null;

              // 각 필드별 안전장치
              const title = item.title || "Untitled Project";
              const description = item.description || "";
              const url = item.url || "#";
              const techStack = Array.isArray(item.tech_stack) ? item.tech_stack : [];
              const imageUrl = item.image_url || "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop";

              return (
                <div key={item.id || Math.random()} className="group flex flex-col h-full">
                  {/* Browser Mockup Style */}
                  <div className="relative aspect-[4/3] bg-zinc-900 overflow-hidden border border-white/10 rounded-sm">
                    {/* Header Dot UI */}
                    <div className="h-5 bg-zinc-800 border-b border-white/5 flex items-center px-2 gap-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-zinc-600"></div>
                      <div className="w-1.5 h-1.5 rounded-full bg-zinc-600"></div>
                      <div className="w-1.5 h-1.5 rounded-full bg-zinc-600"></div>
                    </div>
                    
                    {/* Project Image */}
                    <div className="relative flex-1 h-full overflow-hidden">
                      <img
                        alt={title}
                        src={imageUrl}
                        className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <a 
                        href={url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="absolute inset-0 z-10"
                      />
                    </div>
                  </div>

                  {/* Information Overlay */}
                  <div className="pt-6 space-y-4 flex flex-col flex-1">
                    <div className="space-y-2">
                      <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors line-clamp-1">{title}</h3>
                      <p className="text-xs text-on-surface-variant line-clamp-2 leading-relaxed min-h-[32px]">
                        {description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-1.5 mt-auto">
                      {techStack.map((tech, idx) => (
                        <span key={idx} className="text-[9px] font-mono px-1.5 py-0.5 border border-white/10 text-outline uppercase">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[9px] font-bold text-primary uppercase tracking-widest mt-4 group-hover:gap-3 transition-all"
                    >
                      PLATFORM <span className="material-symbols-outlined text-xs">arrow_outward</span>
                    </a>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
