import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 rounded-none bg-surface/70 backdrop-blur-xl border-b border-white/10 flex justify-between items-center px-8 py-6 w-full max-w-none">
      <div className="text-lg font-black tracking-tighter text-white uppercase">EXECUTIVE PORTFOLIO</div>
      <div className="hidden md:flex gap-8 items-center">
        <a className="font-inter tracking-tight font-bold uppercase text-xs text-white border-b-2 border-white pb-1 transition-colors duration-300" href="#">Portfolio</a>
        <a className="font-inter tracking-tight font-bold uppercase text-xs text-on-surface-variant hover:text-white transition-colors duration-300" href="#">Insights</a>
        <a className="font-inter tracking-tight font-bold uppercase text-xs text-on-surface-variant hover:text-white transition-colors duration-300" href="#">Curriculum</a>
        <a className="font-inter tracking-tight font-bold uppercase text-xs text-on-surface-variant hover:text-white transition-colors duration-300" href="#">Contact</a>
      </div>
      <button className="bg-primary text-on-primary px-6 py-2 text-xs font-bold uppercase tracking-widest transition-all duration-200 active:scale-95">Inquire</button>
    </nav>
  );
};

export default Navbar;
