import React from 'react';

const VibeCoding = () => {
  return (
    <section className="px-8 md:px-20 pt-40 pb-0 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-20 mb-20">
          <div className="flex-1">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight mb-12 uppercase">바이브 코딩 <br />전문가.</h2>
            <div className="space-y-12">
              <div className="flex gap-8 group">
                <div className="text-outline-variant font-black text-4xl group-hover:text-primary transition-colors">01</div>
                <div>
                  <h4 className="text-xl font-bold mb-2 uppercase tracking-wide">Intuitive Syntax</h4>
                  <p className="text-on-surface-variant leading-relaxed">일상 언어처럼 자연스럽게 읽히는 코드를 지향합니다. 깨끗하고 선언적이며, 단순한 '지시'가 아닌 개발자의 '의도'에 집중합니다.</p>
                </div>
              </div>
              <div className="flex gap-8 group">
                <div className="text-outline-variant font-black text-4xl group-hover:text-primary transition-colors">02</div>
                <div>
                  <h4 className="text-xl font-bold mb-2 uppercase tracking-wide">Atmospheric UI</h4>
                  <p className="text-on-surface-variant leading-relaxed">여백, 동선, 타이포그래피를 통해 사용자에게 특정한 정서적 경험을 선사하는 인터페이스를 창조합니다.</p>
                </div>
              </div>
              <div className="flex gap-8 group">
                <div className="text-outline-variant font-black text-4xl group-hover:text-primary transition-colors">03</div>
                <div>
                  <h4 className="text-xl font-bold mb-2 uppercase tracking-wide">Fluid Logic</h4>
                  <p className="text-on-surface-variant leading-relaxed">복잡한 비동기 작업 속에서도 물 흐르듯 매끄럽게 흐르는 상태 관리 시스템을 구현합니다.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 bg-surface-container-low border border-white/5 p-1 relative flex items-center justify-center min-h-[500px]">
            <div className="absolute inset-0 overflow-hidden">
              <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent opacity-30"></div>
            </div>
            <div className="z-10 p-12 text-center w-full">
              <code className="text-sm md:text-base text-primary/80 font-mono leading-relaxed block text-left bg-black/40 p-8 backdrop-blur-xl border border-white/10 w-full">
                const architecture = vibe.create({'{'}<br />
                &nbsp;&nbsp;aesthetic: "executive",<br />
                &nbsp;&nbsp;logic: "flawless",<br />
                &nbsp;&nbsp;experience: "seamless"<br />
                {'}'});<br /><br />
                // Execute with intent<br />
                architecture.render();
              </code>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VibeCoding;
