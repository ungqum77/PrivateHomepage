'use client';

import React, { useEffect, useState } from 'react';

const Counter = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
  const [display, setDisplay] = useState("0");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      setMounted(true);
      if (typeof value === 'number') {
        setDisplay(value.toLocaleString());
      }
    } catch (e) {
      console.error("Counter render error:", e);
      setDisplay("0");
    }
  }, [value]);

  return <span>{mounted ? display : "0"}{suffix}</span>;
};

const EcommerceStats = () => {
  return (
    <section className="px-8 md:px-20 py-24 md:py-32 bg-black border-y border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between gap-16 md:gap-24 lg:gap-32">
        {/* Metric 01 */}
        <div className="flex-1 space-y-6">
          <span className="text-[10px] tracking-ultra-wide uppercase font-bold text-outline">SUCCESS METRIC 01</span>
          <div className="flex items-baseline gap-2 sm:gap-4 overflow-hidden">
            <span className="text-3xl sm:text-5xl md:text-6xl font-black text-primary/20">₩</span>
            <div className="text-5xl sm:text-7xl md:text-8xl xl:text-9xl font-black tracking-tighter text-white tabular-nums">
              <Counter value={1200000000} />
            </div>
            <span className="text-3xl sm:text-5xl md:text-6xl font-black text-primary/30">+</span>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-bold uppercase tracking-tight text-white/90">누적 판매액</h3>
            <p className="text-on-surface-variant max-w-sm font-light leading-relaxed text-sm">
              글로벌 럭셔리 시장 전반에 걸친 고속 거래 엔지니어링 수행.
            </p>
          </div>
        </div>

        {/* Metric 02 */}
        <div className="flex-1 space-y-6">
          <span className="text-[10px] tracking-ultra-wide uppercase font-bold text-outline">SUCCESS METRIC 02</span>
          <div className="flex items-baseline gap-2 sm:gap-4 overflow-hidden">
            <div className="text-5xl sm:text-7xl md:text-8xl xl:text-9xl font-black tracking-tighter text-white tabular-nums">
              <Counter value={18.5} />
            </div>
            <span className="text-3xl sm:text-5xl md:text-6xl font-black text-primary/30">%</span>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-bold uppercase tracking-tight text-white/90">트래픽 전환율</h3>
            <p className="text-on-surface-variant max-w-sm font-light leading-relaxed text-sm">
              행동 기반 디자인 패턴을 통한 구매 전환 여정 최적화.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcommerceStats;
