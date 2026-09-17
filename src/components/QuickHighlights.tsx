export default function QuickHighlights() {
  const highlights = [
    {
      num: '01',
      title: 'Bespoke Hair Artistry',
      description: 'Precision haircuts, transformative styling, and tailored treatments designed to enhance your unique elegance.',
    },
    {
      num: '02',
      title: 'Beauty & Skin Radiance',
      description: 'Cosmetic rejuvenation, therapeutic facials, and personalized pampering in an opulent, calming environment.',
    },
    {
      num: '03',
      title: 'Tarn Taran Sanctuary',
      description: 'A premier destination in Punjab dedicated to contemporary beauty standards and genuine hospitality.',
    },
  ];

  return (
    <section className="border-y border-[#B3CFE5]/15 relative z-10 glass-panel bg-[#1A3D63]/30">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-20 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-[#B3CFE5]/15">
        {highlights.map((item) => (
          <div
            key={item.num}
            className="flex gap-6 items-start md:px-10 first:pl-0 last:pr-0 py-4 md:py-0 group"
          >
            <span className="font-serif text-[#B3CFE5]/60 text-2xl font-light group-hover:text-[#B3CFE5] transition-colors">
              {item.num}
            </span>
            <div>
              <h4 className="font-sans uppercase tracking-[0.2em] text-[0.75rem] text-[#F6FAFD] mb-2 font-medium">
                {item.title}
              </h4>
              <p className="font-sans text-xs text-[#B3CFE5]/70 leading-relaxed font-light">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
