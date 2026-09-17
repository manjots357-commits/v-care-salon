import React, { useRef } from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

const services: ServiceItem[] = [
  {
    id: 'hair-styling',
    title: 'Precision Styling & Hair Cuts',
    category: 'Hair Artistry',
    description: 'Bespoke cuts, customized texture shaping, and blowout styling tailored to frame your facial contours.',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=1000',
    tag: 'Signature Service',
  },
  {
    id: 'facial-skin',
    title: 'Radiant Skin & Facial Rejuvenation',
    category: 'Cosmetic Care',
    description: 'Deep pore cleansing, nourishing hydration masks, and therapeutic skincare for a natural radiant glow.',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=1000',
    tag: 'Revitalizing',
  },
  {
    id: 'bridal-glamour',
    title: 'Bridal & Occasion Glamour',
    category: 'Special Events',
    description: 'Complete celebration styling, elegant hair ornamentation, and camera-ready makeup for your most cherished moments.',
    image: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&q=80&w=1000',
    tag: 'Editorial Finish',
  },
  {
    id: 'hair-spa',
    title: 'Restorative Hair Spa & Therapy',
    category: 'Hair Wellness',
    description: 'Intense moisture infusion, scalp revitalizing massages, and botanical hair repair to restore silkiness and strength.',
    image: 'https://images.unsplash.com/photo-1595476108010-b4d1f10d5e43?auto=format&fit=crop&q=80&w=1000',
    tag: 'Deep Nourishment',
  },
  {
    id: 'grooming-cosmetics',
    title: 'Luxury Grooming & Personal Care',
    category: 'Personal Care',
    description: 'Comprehensive grooming, beard sculpturing, hair coloring, and detail refinement with premium salon products.',
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=1000',
    tag: 'Refined Care',
  },
];

interface TiltServiceCardProps {
  service: ServiceItem;
  onBook: () => void;
  key?: React.Key;
}

function TiltServiceCard({
  service,
  onBook,
}: TiltServiceCardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onBook}
      className="tilt-card relative h-[440px] rounded-2xl overflow-hidden group cursor-pointer glass-panel p-1.5 transition-all duration-300 ease-out"
    >
      <div className="relative w-full h-full rounded-xl overflow-hidden bg-[#1A3D63]">
        {/* Background Image */}
        <img
          src={service.image}
          alt={service.title}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-90 filter contrast-110"
        />

        {/* Ambient Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1931] via-[#0A1931]/60 to-transparent opacity-95 transition-opacity" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A3D63]/70 via-transparent to-transparent opacity-70" />

        {/* Top Badge */}
        <div className="absolute top-5 left-5 z-10">
          <span className="px-3 py-1 rounded-full text-[0.6rem] uppercase tracking-widest bg-[#0A1931]/75 border border-[#B3CFE5]/40 text-[#B3CFE5] backdrop-blur-md">
            {service.tag}
          </span>
        </div>

        {/* Bottom Content Area */}
        <div className="absolute bottom-0 left-0 p-6 z-10 w-full flex flex-col items-start">
          <span className="font-sans text-[0.62rem] uppercase tracking-superwide text-[#B3CFE5] mb-1 font-medium">
            {service.category}
          </span>
          <h3 className="font-serif text-xl lg:text-2xl text-[#F6FAFD] mb-2 tracking-wide leading-snug group-hover:text-[#B3CFE5] transition-colors">
            {service.title}
          </h3>
          <p className="font-sans text-[0.72rem] text-[#B3CFE5]/75 mb-6 font-light leading-relaxed line-clamp-2">
            {service.description}
          </p>

          <div className="flex items-center justify-between w-full pt-3 border-t border-[#B3CFE5]/15">
            <span className="font-sans text-[0.65rem] tracking-widest uppercase text-[#F6FAFD]/80 group-hover:text-[#B3CFE5] transition-colors flex items-center gap-1.5">
              Book Treatment
            </span>
            <div className="w-8 h-8 rounded-full border border-[#B3CFE5]/30 flex justify-center items-center group-hover:bg-[#B3CFE5] group-hover:border-[#B3CFE5] group-hover:text-[#0A1931] transition-all">
              <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ServicesSection({ onSelectService }: ServicesSectionProps) {
  return (
    <section id="services" className="py-32 px-6 relative z-10">
      <div className="max-w-[1600px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <div className="flex items-center gap-2 text-[#B3CFE5] text-[0.68rem] uppercase tracking-superwide mb-3 font-medium">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Our Expertise & Services</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#F6FAFD] tracking-wide leading-tight">
              ELEVATED BEAUTY &<br />
              <span className="gold-gradient-text">TRANSFORMATIVE CARE</span>
            </h2>
          </div>

          <div className="mt-6 md:mt-0 text-right">
            <p className="font-sans text-xs text-[#B3CFE5]/80 max-w-sm font-light mb-3">
              Each experience at V Care Salon is customized to your beauty goals, delivered with precision and sterile professionalism in Tarn Taran.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-widest text-[#B3CFE5] hover:text-[#F6FAFD] transition-colors pb-1 border-b border-[#B3CFE5]/40 hover:border-[#F6FAFD]"
            >
              Inquire Custom Needs
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* 5-Column Responsive Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {services.map((service) => (
            <TiltServiceCard
              key={service.id}
              service={service}
              onBook={() => onSelectService(service.title)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
