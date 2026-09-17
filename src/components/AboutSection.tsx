import { Sparkles, ArrowUpRight, MapPin, Phone, Instagram } from 'lucide-react';

interface AboutSectionProps {
  onOpenBooking: () => void;
}

export default function AboutSection({ onOpenBooking }: AboutSectionProps) {
  return (
    <section id="about" className="py-28 px-6 relative z-10 overflow-hidden">
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Visual Composition */}
        <div className="lg:col-span-6 relative">
          <div className="relative h-[560px] rounded-2xl overflow-hidden glass-panel p-1.5 group">
            <div className="relative w-full h-full rounded-xl overflow-hidden bg-[#1A3D63]">
              <img
                src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=1200"
                alt="V Care Salon Interior Atmosphere"
                loading="lazy"
                className="w-full h-full object-cover object-center filter brightness-95 contrast-110 group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1931] via-black/40 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0A1931]/70 via-transparent to-transparent" />

              {/* Float Card Inside Image */}
              <div className="absolute bottom-8 left-8 right-8 p-6 rounded-xl glass-panel-ocean border border-[#B3CFE5]/30 backdrop-blur-xl">
                <div className="flex items-center gap-2 text-[#B3CFE5] text-[0.65rem] uppercase tracking-superwide mb-1 font-medium">
                  <Sparkles className="w-3 h-3" />
                  <span>The V Care Distinction</span>
                </div>
                <h4 className="font-serif text-xl sm:text-2xl text-[#F6FAFD] font-normal mb-1">
                  Sanctuary of Modern Beauty
                </h4>
                <p className="font-sans text-xs text-[#B3CFE5]/80 font-light leading-relaxed">
                  Located in Tarn Taran, Punjab — dedicated to premium hair artistry, skin vitality, and bespoke personal grooming.
                </p>
              </div>
            </div>
          </div>

          {/* Floating Accent Badge */}
          <div className="absolute -top-6 -right-6 hidden sm:flex flex-col items-center justify-center w-28 h-28 rounded-2xl glass-panel-ocean border border-[#B3CFE5]/40 p-3 shadow-2xl backdrop-blur-xl rotate-3">
            <span className="font-serif text-2xl text-[#B3CFE5] font-semibold leading-none">
              PUNJAB
            </span>
            <span className="font-sans text-[0.55rem] tracking-widest uppercase text-[#F6FAFD]/80 mt-1">
              Tarn Taran
            </span>
            <span className="font-sans text-[0.45rem] tracking-widest text-[#B3CFE5] uppercase mt-0.5">
              Flagship
            </span>
          </div>
        </div>

        {/* Right Editorial Story */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          <div className="flex items-center gap-2 text-[#B3CFE5] text-[0.68rem] uppercase tracking-superwide mb-4 font-medium">
            <Sparkles className="w-3.5 h-3.5" />
            <span>About V Care Salon</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#F6FAFD] leading-[1.08] mb-8 tracking-wide">
            MORE THAN A SALON.<br />
            <span className="gold-gradient-text">A SANCTUARY OF ARTISTRY.</span>
          </h2>

          <p className="font-sans text-[#B3CFE5]/80 leading-relaxed mb-6 text-sm font-light">
            Founded with a passion for excellence in beauty and personal care, <strong className="text-[#F6FAFD] font-medium">V Care Salon</strong> is Tarn Taran’s destination for sophisticated styling and rejuvenation. We understand that your hair and appearance are an intimate expression of your identity.
          </p>

          <p className="font-sans text-[#B3CFE5]/80 leading-relaxed mb-8 text-sm font-light">
            Whether you are seeking a complete hair transformation, restorative care, or exquisite bridal and event styling, our team brings tailored attention to every detail in an atmosphere of refined tranquility.
          </p>

          {/* Business Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-5 rounded-2xl bg-[#1A3D63]/30 border border-[#B3CFE5]/15 mb-10">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-[#1A3D63] border border-[#B3CFE5]/30 flex items-center justify-center shrink-0 mt-0.5 text-[#B3CFE5]">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <span className="font-sans text-[0.65rem] tracking-widest uppercase text-[#B3CFE5]/60 block">Location</span>
                <span className="font-sans text-xs text-[#F6FAFD] font-medium">Tarn Taran, Punjab, India</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-[#1A3D63] border border-[#B3CFE5]/30 flex items-center justify-center shrink-0 mt-0.5 text-[#B3CFE5]">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <span className="font-sans text-[0.65rem] tracking-widest uppercase text-[#B3CFE5]/60 block">Direct Line</span>
                <a href="tel:07814166427" className="font-sans text-xs text-[#B3CFE5] font-medium hover:underline">078141 66427</a>
              </div>
            </div>

            <div className="flex items-start gap-3 sm:col-span-2">
              <div className="w-8 h-8 rounded-full bg-[#1A3D63] border border-[#B3CFE5]/30 flex items-center justify-center shrink-0 mt-0.5 text-[#B3CFE5]">
                <Instagram className="w-4 h-4" />
              </div>
              <div>
                <span className="font-sans text-[0.65rem] tracking-widest uppercase text-[#B3CFE5]/60 block">Instagram</span>
                <a
                  href="https://www.instagram.com/vcare_salon_tarntaran/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-xs text-[#B3CFE5] font-medium hover:underline"
                >
                  @vcare_salon_tarntaran
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={onOpenBooking}
              className="px-8 py-4 rounded-full bg-[#B3CFE5] text-[#0A1931] font-sans uppercase tracking-widest text-xs font-semibold hover:bg-[#F6FAFD] transition-colors flex items-center gap-2 shadow-lg"
            >
              <span>Book An Experience</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            <a
              href="#services"
              className="px-8 py-4 rounded-full border border-[#B3CFE5]/30 text-[#F6FAFD] font-sans uppercase tracking-widest text-xs hover:border-[#B3CFE5] hover:text-[#B3CFE5] transition-colors"
            >
              Explore Offerings
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
