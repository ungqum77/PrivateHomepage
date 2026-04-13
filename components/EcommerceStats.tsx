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
    <section className="px-8 md:px-20 py-32 bg-black border-y border-white/5">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
        <div className="space-y-4">
          <span className="text-[10px] tracking-ultra-wide uppercase font-bold text-outline">SUCCESS METRIC 01</span>
          <div className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black tracking-tighter whitespace-nowrap">
            <span className="text-primary/10 mr-2 sm:mr-4">₩</span>
            <Counter value={1200000000} />
            <span className="text-primary/30 ml-2">+</span>
          </div>
          <h3 className="text-xl font-bold uppercase tracking-tight text-white/80">누적 판매액</h3>
          <p className="text-on-surface-variant max-w-sm font-light leading-relaxed text-sm">
            글로벌 럭셔리 시장 전반에 걸친 고속 거래 엔지니어링 수행.
          </p>
        </div>

        <div className="space-y-4">
          <span className="text-[10px] tracking-ultra-wide uppercase font-bold text-outline">SUCCESS METRIC 02</span>
          <div className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black tracking-tighter whitespace-nowrap">
            <Counter value={18.5} />
            <span className="text-primary/30 ml-2">%</span>
          </div>
          <h3 className="text-xl font-bold uppercase tracking-tight text-white/80">트래픽 전환율</h3>
          <p className="text-on-surface-variant max-w-sm font-light leading-relaxed text-sm">
            행동 기반 디자인 패턴을 통한 구매 전환 여정 최적화.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EcommerceStats;
