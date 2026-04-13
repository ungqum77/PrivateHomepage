import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-surface-container-lowest border-t border-white/5 flex flex-col md:flex-row justify-between items-center px-12 py-16 w-full">
      <div className="text-white font-bold mb-8 md:mb-0 uppercase tracking-widest text-sm">THE EXECUTIVE EDITORIAL</div>
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="flex gap-8">
          <a className="font-inter text-[10px] tracking-[0.05em] uppercase font-medium text-outline hover:text-white underline underline-offset-4 transition-all duration-200" href="#">Privacy</a>
          <a className="font-inter text-[10px] tracking-[0.05em] uppercase font-medium text-outline hover:text-white underline underline-offset-4 transition-all duration-200" href="#">Terms</a>
          <a className="font-inter text-[10px] tracking-[0.05em] uppercase font-medium text-outline hover:text-white underline underline-offset-4 transition-all duration-200" href="#">LinkedIn</a>
          <a className="font-inter text-[10px] tracking-[0.05em] uppercase font-medium text-outline hover:text-white underline underline-offset-4 transition-all duration-200" href="#">Archive</a>
        </div>
        <div className="font-inter text-[10px] tracking-[0.05em] uppercase font-medium text-outline mt-8 md:mt-0">© 2024 THE EXECUTIVE EDITORIAL. ALL RIGHTS RESERVED.</div>
      </div>
    </footer>
  );
};

export default Footer;
