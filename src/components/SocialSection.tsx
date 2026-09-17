import { Instagram, ArrowUpRight, Sparkles } from 'lucide-react';

export default function SocialSection() {
  const instagramPreviewImages = [
    'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1595476108010-b4d1f10d5e43?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=600',
  ];

  return (
    <section className="py-24 px-6 relative z-10 overflow-hidden">
      <div className="max-w-[1600px] mx-auto">
        <div className="rounded-3xl glass-panel-ocean border border-[#B3CFE5]/30 p-8 sm:p-14 relative overflow-hidden">
          {/* Ambient Glows */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#4A7FA7]/20 rounded-full blur-[100px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0A1931] rounded-full blur-[100px] pointer-events-none -translate-x-1/3 translate-y-1/3" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 text-[#B3CFE5] text-[0.68rem] uppercase tracking-superwide mb-4 font-medium">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Follow Our Story</span>
              </div>

              <h2 className="font-serif text-4xl sm:text-5xl text-[#F6FAFD] tracking-wide mb-4 leading-tight">
                CONNECT ON <br />
                <span className="gold-gradient-text">INSTAGRAM</span>
              </h2>

              <p className="font-sans text-xs sm:text-sm text-[#B3CFE5]/80 font-light mb-6 leading-relaxed">
                Immerse yourself in our daily styling creations, hair care inspiration, and luxury transformations at V Care Salon in Tarn Taran.
              </p>

              <div className="flex items-center gap-3 p-4 rounded-xl bg-[#0A1931]/60 border border-[#B3CFE5]/20 w-fit mb-8">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#1A3D63] via-[#4A7FA7] to-[#B3CFE5] flex items-center justify-center text-[#F6FAFD]">
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-sans text-[0.65rem] tracking-widest uppercase text-[#B3CFE5]/60 block">Official Handle</span>
                  <span className="font-serif text-lg text-[#F6FAFD] font-medium">@vcare_salon_tarntaran</span>
                </div>
              </div>

              <a
                href="https://www.instagram.com/vcare_salon_tarntaran/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#F6FAFD] via-[#B3CFE5] to-[#4A7FA7] text-[#0A1931] font-sans text-xs uppercase tracking-widest font-semibold hover:shadow-lg hover:shadow-[#4A7FA7]/30 transition-all"
              >
                <span>Follow @vcare_salon_tarntaran</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* Right Instagram Feed Visuals */}
            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {instagramPreviewImages.map((src, index) => (
                <a
                  key={index}
                  href="https://www.instagram.com/vcare_salon_tarntaran/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative h-48 sm:h-64 rounded-xl overflow-hidden glass-panel p-1 border border-[#B3CFE5]/20 hover:border-[#B3CFE5] transition-colors"
                >
                  <div className="relative w-full h-full rounded-lg overflow-hidden bg-[#1A3D63]">
                    <img
                      src={src}
                      alt="V Care Salon Instagram Post"
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out filter contrast-105"
                    />
                    <div className="absolute inset-0 bg-[#0A1931]/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-[#B3CFE5] text-[#0A1931] flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform">
                        <Instagram className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
