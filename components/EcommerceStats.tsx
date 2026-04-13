'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';

const Counter = ({ value, suffix = "", duration = 2 }: { value: number; suffix?: string; duration?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  
  const spring = useSpring(0, {
    duration: duration * 1000,
    bounce: 0,
  });
  
  const displayValue = useTransform(spring, (current) => 
    Math.floor(current).toLocaleString() + suffix
  );

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, value, spring]);

  return <motion.span ref={ref}>{displayValue}</motion.span>;
};

const EcommerceStats = () => {
  return (
    <section className="px-8 md:px-20 py-32 bg-black border-y border-white/5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
        <div className="space-y-4">
          <span className="text-[10px] tracking-ultra-wide uppercase font-bold text-outline">SUCCESS METRIC 01</span>
          <div className="text-6xl md:text-8xl font-black tracking-tighter">
            <span className="text-primary/10 mr-4">₩</span>
            <Counter value={1200000000} />
            <span className="text-primary/30 ml-2">+</span>
          </div>
          <h3 className="text-xl font-bold uppercase tracking-tight text-white/80">누적 판매액</h3>
          <p className="text-on-surface-variant max-w-sm font-light leading-relaxed">
            High-velocity transaction engineering across global luxury markets.
          </p>
        </div>

        <div className="space-y-4">
          <span className="text-[10px] tracking-ultra-wide uppercase font-bold text-outline">SUCCESS METRIC 02</span>
          <div className="text-6xl md:text-8xl font-black tracking-tighter">
            <Counter value={18.5} />
            <span className="text-primary/30 ml-2">%</span>
          </div>
          <h3 className="text-xl font-bold uppercase tracking-tight text-white/80">트래픽 전환율</h3>
          <p className="text-on-surface-variant max-w-sm font-light leading-relaxed">
            Optimized conversion journeys through behavior-driven design patterns.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EcommerceStats;
