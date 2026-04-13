import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-surface-container-lowest border-t border-white/5 py-16 px-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center w-full">
        <div className="text-white font-bold mb-8 md:mb-0 uppercase tracking-widest text-sm">집행자의 기록 (EDITORIAL)</div>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="flex gap-8">
            <a className="font-inter text-[10px] tracking-[0.05em] uppercase font-medium text-outline hover:text-white underline underline-offset-4 transition-all duration-200" href="#">Privacy</a>
            <a className="font-inter text-[10px] tracking-[0.05em] uppercase font-medium text-outline hover:text-white underline underline-offset-4 transition-all duration-200" href="#">Terms</a>
            <a className="font-inter text-[10px] tracking-[0.05em] uppercase font-medium text-outline hover:text-white underline underline-offset-4 transition-all duration-200" href="#">LinkedIn</a>
            <a className="font-inter text-[10px] tracking-[0.05em] uppercase font-medium text-outline hover:text-white underline underline-offset-4 transition-all duration-200" href="#">Archive</a>
          </div>
          <div className="font-inter text-[10px] tracking-[0.05em] uppercase font-medium text-outline mt-8 md:mt-0">© 2024 비즈니스 아키텍트. ALL RIGHTS RESERVED.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
