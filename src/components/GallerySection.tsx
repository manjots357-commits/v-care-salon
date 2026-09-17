import { useState } from 'react';
import { Sparkles, Maximize2, X, ArrowUpRight } from 'lucide-react';
import { GalleryItem } from '../types';

const galleryItems: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Sculpted Waves & Tone',
    subtitle: 'Dimensional Color & Blowout',
    image: 'https://images.unsplash.com/photo-1595476108010-b4d1f10d5e43?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: 'g2',
    title: 'Precision Editorial Bob',
    subtitle: 'Architectural Cutting',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: 'g3',
    title: 'V Care Salon Sanctuary',
    subtitle: 'Tarn Taran Luxury Suite',
    image: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: 'g4',
    title: 'Luminous Bridal Elegance',
    subtitle: 'Event Artistry & Ornamentation',
    image: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: 'g5',
    title: 'Silk Moisture Therapy',
    subtitle: 'Deep Hair Spa Conditioning',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1200',
  },
];

export default function GallerySection() {
  const [activeImage, setActiveImage] = useState<GalleryItem | null>(null);

  return (
    <section id="gallery" className="py-32 px-6 relative z-10">
      <div className="max-w-[1600px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-14">
          <div>
            <div className="flex items-center gap-2 text-[#B3CFE5] text-[0.68rem] uppercase tracking-superwide mb-3 font-medium">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Visual Portfolio</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#F6FAFD] tracking-wide leading-tight">
              MOMENTS OF <br />
              <span className="gold-gradient-text">TIMELESS ELEGANCE</span>
            </h2>
          </div>

          <div className="mt-6 md:mt-0">
            <a
              href="https://www.instagram.com/vcare_salon_tarntaran/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-widest text-[#B3CFE5] hover:text-[#F6FAFD] transition-colors pb-1 border-b border-[#B3CFE5]/40 hover:border-[#F6FAFD]"
            >
              View More on Instagram @vcare_salon_tarntaran
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* 5-Image Editorial Staggered Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 min-h-[560px]">
          {/* Item 1 - Left Tall */}
          <div
            onClick={() => setActiveImage(galleryItems[0])}
            className="md:col-span-4 relative rounded-2xl overflow-hidden glass-panel p-1.5 cursor-pointer group h-[380px] md:h-auto"
          >
            <div className="relative w-full h-full rounded-xl overflow-hidden bg-[#1A3D63]">
              <img
                src={galleryItems[0].image}
                alt={galleryItems[0].title}
                loading="lazy"
                className="w-full h-full object-cover filter contrast-105 group-hover:scale-110 transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1931]/90 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="font-sans text-[0.62rem] uppercase tracking-superwide text-[#B3CFE5] block mb-1">
                  {galleryItems[0].subtitle}
                </span>
                <h3 className="font-serif text-xl text-[#F6FAFD] group-hover:text-[#B3CFE5] transition-colors">
                  {galleryItems[0].title}
                </h3>
              </div>
              <div className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#0A1931]/70 border border-[#B3CFE5]/30 flex items-center justify-center text-[#F6FAFD]/80 opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>

          {/* Item 2 & 3 - Center Stacked */}
          <div className="md:col-span-4 flex flex-col gap-5">
            <div
              onClick={() => setActiveImage(galleryItems[1])}
              className="relative rounded-2xl overflow-hidden glass-panel p-1.5 cursor-pointer group h-[260px]"
            >
              <div className="relative w-full h-full rounded-xl overflow-hidden bg-[#1A3D63]">
                <img
                  src={galleryItems[1].image}
                  alt={galleryItems[1].title}
                  loading="lazy"
                  className="w-full h-full object-cover filter contrast-105 group-hover:scale-110 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1931]/90 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-5 left-5 right-5">
                  <span className="font-sans text-[0.62rem] uppercase tracking-superwide text-[#B3CFE5] block mb-1">
                    {galleryItems[1].subtitle}
                  </span>
                  <h3 className="font-serif text-lg text-[#F6FAFD] group-hover:text-[#B3CFE5] transition-colors">
                    {galleryItems[1].title}
                  </h3>
                </div>
              </div>
            </div>

            <div
              onClick={() => setActiveImage(galleryItems[2])}
              className="relative rounded-2xl overflow-hidden glass-panel p-1.5 cursor-pointer group h-[260px]"
            >
              <div className="relative w-full h-full rounded-xl overflow-hidden bg-[#1A3D63]">
                <img
                  src={galleryItems[2].image}
                  alt={galleryItems[2].title}
                  loading="lazy"
                  className="w-full h-full object-cover filter contrast-105 group-hover:scale-110 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1931]/90 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-5 left-5 right-5">
                  <span className="font-sans text-[0.62rem] uppercase tracking-superwide text-[#B3CFE5] block mb-1">
                    {galleryItems[2].subtitle}
                  </span>
                  <h3 className="font-serif text-lg text-[#F6FAFD] group-hover:text-[#B3CFE5] transition-colors">
                    {galleryItems[2].title}
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/* Item 4 & 5 - Right Stacked */}
          <div className="md:col-span-4 flex flex-col gap-5">
            <div
              onClick={() => setActiveImage(galleryItems[3])}
              className="relative rounded-2xl overflow-hidden glass-panel p-1.5 cursor-pointer group h-[260px]"
            >
              <div className="relative w-full h-full rounded-xl overflow-hidden bg-[#1A3D63]">
                <img
                  src={galleryItems[3].image}
                  alt={galleryItems[3].title}
                  loading="lazy"
                  className="w-full h-full object-cover filter contrast-105 group-hover:scale-110 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1931]/90 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-5 left-5 right-5">
                  <span className="font-sans text-[0.62rem] uppercase tracking-superwide text-[#B3CFE5] block mb-1">
                    {galleryItems[3].subtitle}
                  </span>
                  <h3 className="font-serif text-lg text-[#F6FAFD] group-hover:text-[#B3CFE5] transition-colors">
                    {galleryItems[3].title}
                  </h3>
                </div>
              </div>
            </div>

            <div
              onClick={() => setActiveImage(galleryItems[4])}
              className="relative rounded-2xl overflow-hidden glass-panel p-1.5 cursor-pointer group h-[260px]"
            >
              <div className="relative w-full h-full rounded-xl overflow-hidden bg-[#1A3D63]">
                <img
                  src={galleryItems[4].image}
                  alt={galleryItems[4].title}
                  loading="lazy"
                  className="w-full h-full object-cover filter contrast-105 group-hover:scale-110 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1931]/90 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-5 left-5 right-5">
                  <span className="font-sans text-[0.62rem] uppercase tracking-superwide text-[#B3CFE5] block mb-1">
                    {galleryItems[4].subtitle}
                  </span>
                  <h3 className="font-serif text-lg text-[#F6FAFD] group-hover:text-[#B3CFE5] transition-colors">
                    {galleryItems[4].title}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-8 bg-[#0A1931]/90 backdrop-blur-xl">
          <button
            onClick={() => setActiveImage(null)}
            className="absolute top-6 right-6 w-10 h-10 rounded-full border border-[#B3CFE5]/30 flex items-center justify-center text-[#F6FAFD]/80 hover:text-[#F6FAFD] hover:border-[#B3CFE5] transition-colors z-10"
            aria-label="Close image preview"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="relative max-w-4xl max-h-[85vh] w-full rounded-2xl overflow-hidden glass-panel-ocean border border-[#B3CFE5]/40 p-2">
            <img
              src={activeImage.image}
              alt={activeImage.title}
              className="w-full h-full max-h-[75vh] object-cover rounded-xl"
            />
            <div className="p-4 flex justify-between items-center bg-[#0A1931]/95">
              <div>
                <span className="font-sans text-[0.65rem] tracking-superwide uppercase text-[#B3CFE5] block">
                  {activeImage.subtitle}
                </span>
                <h4 className="font-serif text-2xl text-[#F6FAFD]">
                  {activeImage.title}
                </h4>
              </div>
              <span className="font-sans text-xs text-[#B3CFE5]/70">
                V Care Salon • Tarn Taran
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
