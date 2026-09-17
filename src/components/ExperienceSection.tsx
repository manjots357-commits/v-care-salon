import { Sparkles, HeartHandshake, ShieldCheck, Gem, Wind } from 'lucide-react';

export default function ExperienceSection() {
  const pillars = [
    {
      icon: HeartHandshake,
      title: 'Individual Consultation',
      description:
        'Every appointment begins with an attentive dialogue to understand your lifestyle, hair texture, skin needs, and personal styling goals.',
    },
    {
      icon: ShieldCheck,
      title: 'Sterile & Sanitized Standard',
      description:
        'Your health and safety remain paramount. All styling implements, shears, and treatment stations undergo rigorous medical-grade sanitization.',
    },
    {
      icon: Gem,
      title: 'Curated Formulations',
      description:
        'We work exclusively with trusted salon-grade products, nourishing botanical blends, and high-performance color systems that respect hair integrity.',
    },
    {
      icon: Wind,
      title: 'Tranquil Cinematic Ambience',
      description:
        'Designed as an oasis in Tarn Taran, Punjab. Unwind in an atmosphere of soft amber lighting, gentle music, and unhurried luxury pampering.',
    },
  ];

  return (
    <section id="experience" className="py-28 px-6 relative z-10 bg-[#0A1931]/50 border-y border-[#B3CFE5]/10">
      <div className="max-w-[1600px] mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 text-[#B3CFE5] text-[0.68rem] uppercase tracking-superwide mb-3 font-medium">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Salon Standard</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#F6FAFD] tracking-wide leading-tight mb-4">
            THE CLIENT EXPERIENCE
          </h2>
          <p className="font-sans text-xs sm:text-sm text-[#B3CFE5]/75 font-light leading-relaxed">
            Rooted in sincere hospitality, refined artistry, and meticulous hygiene at our Tarn Taran location.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="glass-panel p-8 rounded-2xl flex flex-col justify-between hover:border-[#B3CFE5]/40 transition-colors group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#1A3D63] border border-[#B3CFE5]/30 flex items-center justify-center text-[#B3CFE5] mb-6 group-hover:bg-[#B3CFE5] group-hover:text-[#0A1931] transition-all">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl text-[#F6FAFD] mb-3 tracking-wide">
                    {pillar.title}
                  </h3>
                  <p className="font-sans text-xs text-[#B3CFE5]/75 font-light leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Local Community Dedication Banner */}
        <div className="mt-16 p-8 sm:p-10 rounded-2xl glass-panel-ocean border border-[#B3CFE5]/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="font-sans text-[0.65rem] tracking-superwide uppercase text-[#B3CFE5] block mb-1">
              Proudly Serving Punjab
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#F6FAFD]">
              V Care Salon &bull; Tarn Taran
            </h3>
            <p className="font-sans text-xs text-[#B3CFE5]/80 max-w-xl mt-2 font-light">
              Dedicated to bringing world-class beauty, cosmetic care, and modern hair artistry to our community in Tarn Taran.
            </p>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <a
              href="tel:07814166427"
              className="px-6 py-3 rounded-full bg-[#B3CFE5] text-[#0A1931] font-sans text-xs uppercase tracking-widest font-semibold hover:bg-[#F6FAFD] transition-colors"
            >
              Contact Stylist
            </a>
            <a
              href="https://www.instagram.com/vcare_salon_tarntaran/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full border border-[#B3CFE5]/30 text-[#F6FAFD] font-sans text-xs uppercase tracking-widest hover:border-[#B3CFE5] hover:text-[#B3CFE5] transition-colors"
            >
              Follow Our Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
