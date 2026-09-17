import { ArrowUpRight, Phone, Instagram, MapPin, Sparkles } from 'lucide-react';

interface FooterProps {
  onOpenBooking: () => void;
}

export default function Footer({ onOpenBooking }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pt-24 pb-12 px-6 border-t border-[#B3CFE5]/10 bg-[#0A1931]/90 relative z-10">
      <div className="max-w-[1600px] mx-auto">
        {/* Top Call to Action Banner inside Footer */}
        <div className="rounded-3xl glass-panel-ocean border border-[#B3CFE5]/30 p-8 sm:p-12 mb-20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="font-sans text-[0.65rem] tracking-superwide uppercase text-[#B3CFE5] block mb-2">
              Ready to elevate your beauty?
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl text-[#F6FAFD]">
              Reserve Your Appointment at V Care Salon
            </h3>
            <p className="font-sans text-xs sm:text-sm text-[#B3CFE5]/70 mt-1 font-light">
              Tarn Taran, Punjab &bull; Direct Phone: 078141 66427
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <button
              onClick={onOpenBooking}
              className="px-8 py-3.5 rounded-full bg-[#B3CFE5] text-[#0A1931] font-sans text-xs uppercase tracking-widest font-semibold hover:bg-[#F6FAFD] transition-colors shadow-lg"
            >
              Book Appointment
            </button>
            <a
              href="tel:07814166427"
              className="px-6 py-3.5 rounded-full border border-[#B3CFE5]/30 text-[#F6FAFD] font-sans text-xs uppercase tracking-widest hover:border-[#B3CFE5] hover:text-[#B3CFE5] transition-colors flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5" />
              Call Salon
            </a>
          </div>
        </div>

        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Brand Col */}
          <div className="md:col-span-4">
            <div className="flex flex-col items-start mb-6">
              <div className="flex items-center gap-1.5">
                <span className="font-serif text-3xl sm:text-4xl tracking-widest text-[#B3CFE5] font-medium leading-none">
                  V CARE
                </span>
                <span className="w-2 h-2 rounded-full bg-[#B3CFE5]"></span>
              </div>
              <span className="font-sans text-[0.55rem] tracking-superwide text-[#B3CFE5]/70 uppercase mt-2">
                Salon &bull; Tarn Taran, Punjab
              </span>
            </div>

            <p className="font-sans text-xs text-[#B3CFE5]/70 leading-relaxed font-light max-w-sm mb-6">
              A luxury sanctuary for beauty, cosmetic & personal care, precision hair styling, and cinematic pampering in Tarn Taran, Punjab, India.
            </p>

            <div className="inline-flex items-center gap-2 text-xs text-[#B3CFE5]">
              <Sparkles className="w-3.5 h-3.5 text-[#B3CFE5]" />
              <span>Beauty &bull; Cosmetic &bull; Personal Care</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <h4 className="font-sans uppercase tracking-[0.2em] text-[0.75rem] text-[#F6FAFD] mb-6 font-medium">
              Navigation
            </h4>
            <ul className="space-y-3 font-sans text-xs text-[#B3CFE5]/70 font-light">
              <li>
                <a href="#" className="hover:text-[#B3CFE5] transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#B3CFE5] transition-colors">About</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#B3CFE5] transition-colors">Services</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#B3CFE5] transition-colors">Gallery</a>
              </li>
              <li>
                <a href="#experience" className="hover:text-[#B3CFE5] transition-colors">Experience</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#B3CFE5] transition-colors">FAQ</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#B3CFE5] transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Business & Contact */}
          <div className="md:col-span-3">
            <h4 className="font-sans uppercase tracking-[0.2em] text-[0.75rem] text-[#F6FAFD] mb-6 font-medium">
              Location & Contact
            </h4>
            <ul className="space-y-4 font-sans text-xs text-[#B3CFE5]/70 font-light">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#B3CFE5] shrink-0 mt-0.5" />
                <span>Tarn Taran, Punjab, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#B3CFE5] shrink-0" />
                <a href="tel:07814166427" className="hover:text-[#B3CFE5] transition-colors">
                  078141 66427
                </a>
              </li>
              <li className="pt-2">
                <span className="text-[#B3CFE5]/40 block text-[0.65rem] tracking-widest uppercase mb-1">
                  Category
                </span>
                <span className="text-[#F6FAFD]/80">Beauty / Cosmetic & Personal Care</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="md:col-span-3">
            <h4 className="font-sans uppercase tracking-[0.2em] text-[0.75rem] text-[#F6FAFD] mb-6 font-medium">
              Official Instagram
            </h4>
            <p className="font-sans text-xs text-[#B3CFE5]/50 mb-4 font-light leading-relaxed">
              Connect with us for behind-the-scenes artistry and latest hairstyles.
            </p>
            <a
              href="https://www.instagram.com/vcare_salon_tarntaran/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 p-3.5 rounded-xl glass-panel border border-[#B3CFE5]/20 hover:border-[#B3CFE5] text-[#F6FAFD] transition-all group"
            >
              <div className="w-8 h-8 rounded-full bg-[#B3CFE5] text-[#0A1931] flex items-center justify-center">
                <Instagram className="w-4 h-4" />
              </div>
              <div className="text-left">
                <span className="font-sans text-[0.65rem] tracking-widest text-[#B3CFE5] uppercase block">
                  Instagram
                </span>
                <span className="font-sans text-xs text-[#F6FAFD] font-medium">
                  @vcare_salon_tarntaran
                </span>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#B3CFE5]/40 group-hover:text-[#B3CFE5] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all ml-auto" />
            </a>
          </div>
        </div>

        {/* Bottom Legal / Copyright */}
        <div className="pt-8 border-t border-[#B3CFE5]/10 flex flex-col md:flex-row justify-between items-center text-[#B3CFE5]/50 text-[0.7rem] font-sans tracking-wide">
          <p>
            &copy; {currentYear} V Care Salon. All Rights Reserved. Tarn Taran, Punjab, India.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0 text-[#B3CFE5]/60">
            <span>Beauty & Cosmetic Care</span>
            <span>&bull;</span>
            <span>078141 66427</span>
            <span>&bull;</span>
            <span className="text-[#B3CFE5]">Crafted with Luxury & Elegance</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
