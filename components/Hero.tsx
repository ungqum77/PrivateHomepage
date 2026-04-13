import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-[819px] flex items-center px-8 md:px-20 py-10 overflow-hidden">
      <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center gap-16">
        <div className="flex-1 space-y-8 z-10">
          <div className="space-y-2">
            <span className="text-[10px] tracking-ultra-wide uppercase font-bold text-outline">PIONEER & VISIONARY</span>
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight leading-[1.1] uppercase">
              <div className="whitespace-nowrap">전략은 날카롭게,</div>
              <div className="whitespace-nowrap italic text-primary">구현은 완벽하게.</div>
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-on-surface-variant max-w-xl font-light leading-relaxed">
            복잡한 커머스 환경을 정교한 로직으로 설계합니다. <br />누구나 기술로 비즈니스를 키울 수 있도록, 실전에 강한 디지털 혁신가를 키워냅니다.
          </p>
          <div className="flex gap-4 pt-4">
            <button className="bg-primary text-on-primary px-10 py-4 font-bold uppercase text-sm tracking-widest hover:opacity-90 transition-opacity">포트폴리오 보기</button>
            <button className="border border-outline-variant px-10 py-4 font-bold uppercase text-sm tracking-widest hover:bg-surface-container transition-colors">커리큘럼</button>
          </div>
        </div>
        <div className="flex-1 relative w-full h-[500px] md:h-[800px] grayscale contrast-125">
          <img
            alt="Professional Portrait of Executive"
            className="w-full h-full object-cover object-top"
            src="https://lh3.googleusercontent.com/aida/ADBb0ugMaXjc4hqN0jCtOhGJ-_pDjH_xzwjdYdHITiYhA0wCzzqdAwn469M_IHvruEFHyFc3HWm-HN01Y0Km_uu0E1h6kfTHhQcZ7wxumJBjmdTmo52uvfeYMVjog2QWNa0sPREc2yXfM-lwMupoRoRrnRc-VHA3w_yAcRU37kXNHuo4oHFBkYGuPrEIte8lEaY8CfuXDrFdxG5RXs0zBz7aW6M2S6cq8iLpKvJ8Z3rifjvaca3GuVF0oNjXNtpys69559KB1k1-by6fEg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
