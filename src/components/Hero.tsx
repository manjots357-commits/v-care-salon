import { useState, useEffect } from 'react';
import { Sparkles, ArrowDown, ArrowUpRight, Phone, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 20;
      const y = (e.clientY / innerHeight - 0.5) * 20;
      setMouseOffset({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center pt-28 pb-16 overflow-hidden">
      {/* Editorial Imagery Layer with Subtle Parallax & Masking */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-60 mix-blend-screen transition-transform duration-700 ease-out"
        style={{
          transform: `translate3d(${mouseOffset.x * 0.4}px, ${mouseOffset.y * 0.4}px, 0)`,
          maskImage: 'radial-gradient(circle at 65% 45%, black 35%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(circle at 65% 45%, black 35%, transparent 75%)',
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=2000"
          alt="V Care Salon Editorial Aesthetic"
          className="absolute top-0 right-[-5%] w-full lg:w-3/4 h-[120%] object-cover object-top opacity-55 filter brightness-110 contrast-125"
        />
      </div>

      <div className="z-10 max-w-[1600px] mx-auto w-full px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 relative h-full">
        {/* Left Editorial Content */}
        <div className="lg:col-span-8 flex flex-col justify-center">
          {/* Sub-label */}
          <div className="flex items-center gap-3 font-sans text-[0.68rem] tracking-superwide uppercase text-[#F6FAFD]/70 mb-6">
            <span className="flex items-center gap-1 text-[#B3CFE5]">
              <Sparkles className="w-3.5 h-3.5" />
              V CARE SALON
            </span>
            <span className="text-[#4A7FA7]">&bull;</span>
            <span>BEAUTY</span>
            <span className="text-[#4A7FA7]">&bull;</span>
            <span>COSMETIC</span>
            <span className="text-[#4A7FA7]">&bull;</span>
            <span>PERSONAL CARE</span>
          </div>

          {/* Editorial Headline */}
          <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-[6.5rem] leading-[1.02] text-[#F6FAFD] mb-8 tracking-wide drop-shadow-2xl">
            THE ART OF <br />
            <span className="gold-gradient-text block mt-1">BEAUTIFUL HAIR</span>
          </h1>

          {/* Premium Introduction */}
          <p className="font-sans text-sm sm:text-base tracking-wide text-[#F6FAFD]/80 max-w-xl mb-10 leading-relaxed font-light">
            Welcome to <span className="text-[#F6FAFD] font-medium">V Care Salon</span> in Tarn Taran, Punjab. Step into a world of cinematic luxury where precision styling, bespoke hair artistry, and holistic personal care redefine your elegance.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-14">
            <button
              onClick={onOpenBooking}
              className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-[#F6FAFD] via-[#B3CFE5] to-[#4A7FA7] text-[#0A1931] flex justify-center items-center gap-3 shadow-xl hover:shadow-[#4A7FA7]/30 transition-all duration-300 font-semibold"
            >
              <span className="relative z-10 font-sans text-xs tracking-superwide uppercase font-semibold">
                Book Appointment
              </span>
              <ArrowUpRight className="w-4 h-4 relative z-10 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>

            <a
              href="#services"
              className="group px-8 py-4 rounded-full border border-[#B3CFE5]/30 text-[#F6FAFD] flex justify-center items-center gap-2 hover:border-[#B3CFE5] hover:text-[#B3CFE5] transition-colors"
            >
              <span className="font-sans text-xs tracking-superwide uppercase">
                Explore Services
              </span>
              <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
            </a>

            <a
              href="tel:07814166427"
              className="group px-6 py-4 rounded-full glass-panel text-[#F6FAFD]/90 flex justify-center items-center gap-2.5 hover:text-[#F6FAFD] hover:border-[#B3CFE5] transition-colors"
            >
              <Phone className="w-4 h-4 text-[#B3CFE5]" />
              <span className="font-sans text-xs tracking-widest uppercase">
                078141 66427
              </span>
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-[#B3CFE5]/15 text-[#B3CFE5]/70 text-xs">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#B3CFE5]" />
              <span>Sanitized & Sterile Environment</span>
            </div>
            <span className="text-[#4A7FA7]">&bull;</span>
            <div>Tarn Taran, Punjab, India</div>
            <span className="text-[#4A7FA7]">&bull;</span>
            <div className="text-[#B3CFE5]">@vcare_salon_tarntaran</div>
          </div>
        </div>

        {/* Right Atmospheric Elements */}
        <div className="hidden lg:col-span-4 lg:flex flex-col justify-center items-end relative">
          {/* Vertical Architectural Motto */}
          <div
            className="flex flex-col gap-6 text-right font-serif text-sm tracking-[0.45em] text-[#B3CFE5]/40 uppercase writing-vertical-rl transition-transform duration-700 ease-out"
            style={{
              transform: `translate3d(${-mouseOffset.x * 0.3}px, ${-mouseOffset.y * 0.3}px, 0)`,
            }}
          >
            <span>Elegance</span>
            <span>Artistry</span>
            <span>Wellness</span>
            <span>Tarn Taran</span>
          </div>

          {/* Circular Luxury Seal Badge */}
          <div className="mt-12 relative w-36 h-36 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full border border-[#B3CFE5]/30 animate-spin-slow">
              <svg viewBox="0 0 100 100" className="w-full h-full opacity-70">
                <path
                  id="circlePath"
                  d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
                  fill="transparent"
                />
                <text className="font-sans text-[7px] tracking-[0.28em] uppercase fill-[#B3CFE5]">
                  <textPath href="#circlePath">
                    V Care Salon • Tarn Taran Punjab • Luxury Care •
                  </textPath>
                </text>
              </svg>
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <span className="font-serif text-lg tracking-widest text-[#F6FAFD] font-medium">
                V CARE
              </span>
              <span className="font-sans text-[0.5rem] tracking-widest text-[#B3CFE5] uppercase">
                SALON
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#B3CFE5]/50 pointer-events-none">
        <span className="font-sans text-[0.55rem] tracking-superwide uppercase">Scroll</span>
        <div className="w-[1px] h-6 bg-gradient-to-b from-[#B3CFE5] to-transparent animate-pulse" />
      </div>
    </section>
  );
}
