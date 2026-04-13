import React from 'react';

const VibeCoding = () => {
  return (
    <section className="px-8 md:px-20 pt-40 pb-0 bg-black">
      <div className="flex flex-col md:flex-row gap-20 mb-20">
        <div className="flex-1">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight mb-12 uppercase">VIBE CODING <br />EXPERT.</h2>
          <div className="space-y-12">
            <div className="flex gap-8 group">
              <div className="text-outline-variant font-black text-4xl group-hover:text-primary transition-colors">01</div>
              <div>
                <h4 className="text-xl font-bold mb-2 uppercase tracking-wide">Intuitive Syntax</h4>
                <p className="text-on-surface-variant leading-relaxed">Developing code that feels as natural as spoken language. Clean, declarative, and focused on the 'intent' rather than just the 'instruction'.</p>
              </div>
            </div>
            <div className="flex gap-8 group">
              <div className="text-outline-variant font-black text-4xl group-hover:text-primary transition-colors">02</div>
              <div>
                <h4 className="text-xl font-bold mb-2 uppercase tracking-wide">Atmospheric UI</h4>
                <p className="text-on-surface-variant leading-relaxed">Creating interfaces where the spacing, motion, and typography evoke specific emotional responses from the user.</p>
              </div>
            </div>
            <div className="flex gap-8 group">
              <div className="text-outline-variant font-black text-4xl group-hover:text-primary transition-colors">03</div>
              <div>
                <h4 className="text-xl font-bold mb-2 uppercase tracking-wide">Fluid Logic</h4>
                <p className="text-on-surface-variant leading-relaxed">Implementing state management that flows effortlessly across complex asynchronous operations.</p>
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
    </section>
  );
};

export default VibeCoding;
