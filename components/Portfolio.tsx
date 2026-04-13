import React from 'react';

const projects = [
  {
    title: "셀링 계산기",
    description: "Advanced profit analysis and sales forecasting tool for high-frequency e-commerce operators.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCEKLu5XHujvOz53yyYNx3YegCj-y761ABjClFAr-92xFKGjiNmdGu3-z1ONQNC5onNN8w_COBViEd-WRnzfJufNErrXg2I2H59QTSNg9vs3nT4MM3bAF3cQc_k_uFncpf1NWFlu043HxgXZjhHIJJQ0wMv0sHILfY-BEFMtAjDiPcSLLOlh-IhffhjhRqU9MGhxLf9DXg1pzc7p8O8c_L0NAYWC8C8NI8LpLQKzBgxVBleCIJZ-h49x1J7ftRPjV_NJlGlXBsspetD",
    link: "https://www.woongth.com/"
  },
  {
    title: "거래명세서 생성기",
    description: "Automated invoice and transaction statement engine for seamless professional billing.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAWgiP43Grg-SIIlMyeGEm-8tkY9nB45Nsm3J55B1jO8PFzDlJW7njeC0IBeUnPkUyqt7oWlz2JjniS3niS8g4J_SOqDoX29ncpM2-SxvQf8dukzV9IldeI-95dQFTh0roPHRdE9flhfmTiY3SpCR2IVqUErPHNzJ-cAN7Y_05EYgWozlJs0UJp0Mtu456wjXYYskNwcAOdlqkXxaD8SJJpRup-TH_sb2NEJzqmQCQ6z8WW1qZ64ze6zvolT7ji6TdBZC53zfJvG9Fp",
    link: "https://invo.woongth.com/"
  },
  {
    title: "송장변환기",
    description: "Streamlined shipping label data transformation utility for logistics optimization.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD3vXgBhHie-1EbAZ4d2_KULdMHnKFzabcIPBgNTg9dRH_5isB9XcywGzfKk7TL7jZWH-PssUaI55qLbe46WjMjpPW3lAu5yVgYlW1S1gB63G7BwRHnwBkylSaadiyNcgGuDM4ZZk4lTme9eHpVy4klvncuGtl-GXJ4nCzX8cWeCcauS_JVv8sdkHxcQ1Vo9VLeWZVo_KaclD02rEJuphtlevckUpQI0xvh6-LPJiMgjwpP8b4yWaIOEvQi0IiiMlw-AD5wnuaCHrx5",
    link: "https://www.songjang.com/"
  },
  {
    title: "disc 검사기",
    description: "Psychometric behavior analysis tool designed for executive team building.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCq9h36BlwB3buDdj6NOFDwoz3f-sihC4xuiHRlGMDJfpzzsUu3nbW6QD9SpexhEyMjxQwm5Njv2mBc2bi0859DZVsTOGX-OeDlUNF7UMKtir8vZC8bGzl8Sh-ElbB5srtP6krO9mt-0waUeYezaRLR94s48C-_5Rwkkm21F6kz61swQ7EvK_J1BU_Hf-swPuKV2BEMf6NFiz_eCOKVTcMY2oGtxC1xzROmhbuEIHpSViEssPgGGa7KtPpwSNjBDvpbPrPSzzE7f4kA",
    link: "https://disc.woongth.com/"
  },
  {
    title: "프레디저 검사기",
    description: "Aptitude assessment platform for strategic career mapping and leadership placement.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBqVJe_Ox2ScdMxqQos1pyWhXrRoQjOqLDf5RsjrDB8WrJrMhghJM6GZGjOCd-l9zIEuhpU87qb4cIV66WCO7cySIYJl-Kc8hq_VqRSXB18s3buMKEldErvm4ovoAQh-3MaqU5bl7_WgDJ0Kw8veQEVg8FFbJk-QT2C5jsN9REo8DboHtadevtopLRzdH0dyed2unJUxq_QC4-1GS0UjoBR5_iEKzOfVUI0BbPpPpUwe5gu9THpu-DQ2j7iz5IxP6wpAvc5dP4P-olA",
    link: "https://prdg.woongth.com/"
  },
  {
    title: "정책자금 조회기",
    description: "Aggregated search system for government grants and enterprise capital opportunities.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuADAxtGXL2uftruYVN5W50bO4zMrJ8W4JG61B30oV44-AcmSYBIc23NeQsTn3QiwZBA9bQgTY7beM-KZH0s_Fr9v5hdlHXCR87ZZzGxQ3XxCKydHJ57KXj4nVChOW1aVyqdoyewxrG6Dgy2mt2zRNhLC7M7rPPYI-yBwnYo2_JZcMB0qakYQBr8j77QJbpkEFE4S3iV4y-bTp3s-AE9KRwQede0F9WCoVWNsvKO7Lta6dZM1QhaOKCFvV2ECGe6fUnJsb_6DBAfGA71",
    link: "https://query.woongth.com/"
  },
  {
    title: "정책자금 신청기",
    description: "Guided workflow assistant for government funding applications and compliance.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBnr2uZ_TzMa0viMa2dsV8RE4e-b6AOrn3TMUZs2AQ1nZubbuEU_9oziQgZKwB3f_cTMNRa7qrw51S_3nuBiqgNYtT9pAXtqUNaJTjAVujdRfHaIIGB7hEuejn9tck_Cl0bKokckF3Z2jyuqWZsXKK9LUE58QDemcPNfd7iW4RRXkNDf63ufIAgW7N5vRRAJX3zdhDGepYNbSC9hr9s7yEon54WnrexmxOCjj7SQeS1moHdYKrebrw0cdKy6K_kJ0aLXHisv8AwvxYS",
    link: "https://www.govhelper.kr/"
  },
  {
    title: "키워드 검사기",
    description: "Sophisticated SEO and keyword trend analysis engine (Currently in development).",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC1xCdC0lFHIqi31hbs1NUU2vorNBMV_qW7Cv6FS3730EV3PH6_9l9Q5unhy1A79NFCq8EkdXmxKQtgVOJ3eXW0gnGYTUa98GQfsdqPFIh_wVoq240Sch5StnRa9SCRP7iOzgrU1Rf2cV0yMmlpwjTVagMCLWfGUfMt2NrZ7zC7OgHsIacmnq6HZSWwPbrFrNjaoIhmz6GRv5uR9hYTF4l5qsUt5moc_fRsQ-qVbqpTemnRq8yrDdOjf7DaU9qH0N-eZuu8TXqc0IrW",
    link: "https://naver-search-rose.vercel.app/",
    isBeta: true
  }
];

const Portfolio = () => {
  return (
    <section className="px-8 md:px-20 py-40 bg-black">
      <div className="space-y-16">
        <div>
          <span className="text-[10px] tracking-ultra-wide uppercase font-bold text-outline">ARCHITECTURAL OUTPUT</span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mt-4 uppercase">PROJECT PORTFOLIO.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <a key={index} className="portfolio-card group block bg-surface-container border border-white/5 overflow-hidden transition-all duration-500 hover:border-primary/30" href={project.link} target="_blank" rel="noopener noreferrer">
              <div className="h-48 overflow-hidden bg-[#1a1a1a]">
                <img
                  alt={`${project.title} Preview`}
                  className="preview-img w-full transition-transform duration-700 ease-out object-top object-cover h-full grayscale hover:grayscale-0 opacity-80 group-hover:opacity-100"
                  src={project.image}
                />
              </div>
              <div className="p-8 space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold tracking-tight uppercase">{project.title}</h3>
                  {project.isBeta && (
                    <span className="text-[8px] border border-primary/20 px-2 py-1 tracking-widest text-primary/60">BETA</span>
                  )}
                </div>
                <p className="text-sm text-on-surface-variant font-light leading-relaxed">{project.description}</p>
                <div className="pt-4 flex items-center text-[10px] font-bold tracking-[0.2em] uppercase text-primary border-t border-white/5">
                  View {project.isBeta ? 'Dev Build' : 'Platform'} <span className="material-symbols-outlined text-sm ml-2">north_east</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
