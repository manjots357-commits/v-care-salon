import { useState, useEffect } from 'react';
import { Menu, X, Phone, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Experience', href: '#experience' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav
        id="navbar"
        className={`fixed top-0 left-0 w-full z-50 px-6 transition-all duration-500 ${
          isScrolled
            ? 'py-4 bg-[#0A1931]/90 backdrop-blur-xl border-b border-[#B3CFE5]/15 shadow-2xl'
            : 'py-7 bg-transparent'
        }`}
      >
        <div className="max-w-[1600px] mx-auto flex justify-between items-center">
          {/* V CARE SALON Brand Logo */}
          <a href="#" className="flex flex-col items-start group">
            <div className="flex items-center gap-1.5">
              <span className="font-serif text-2xl sm:text-3xl tracking-widest text-[#B3CFE5] font-medium leading-none group-hover:text-[#F6FAFD] transition-colors">
                V CARE
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#B3CFE5] animate-pulse"></span>
            </div>
            <span className="font-sans text-[0.45rem] tracking-superwide text-[#B3CFE5]/70 uppercase mt-1">
              Salon • Tarn Taran
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex gap-8 items-center font-sans text-xs tracking-widest uppercase text-[#F6FAFD]/80">
            {navLinks.map((link, idx) => (
              <div key={link.label} className="flex items-center gap-8">
                <a
                  href={link.href}
                  className="hover:text-[#B3CFE5] transition-colors duration-200"
                >
                  {link.label}
                </a>
                {idx < navLinks.length - 1 && (
                  <span className="w-1 h-1 rounded-full bg-[#B3CFE5]/30" aria-hidden="true" />
                )}
              </div>
            ))}
          </div>

          {/* CTA & Actions */}
          <div className="flex items-center gap-4 sm:gap-6">
            <a
              href="tel:07814166427"
              className="hidden md:flex items-center gap-2 text-xs font-sans tracking-widest text-[#B3CFE5] hover:text-[#F6FAFD] transition-colors"
              title="Call V Care Salon"
            >
              <Phone className="w-3.5 h-3.5 text-[#4A7FA7]" />
              <span>078141 66427</span>
            </a>

            <button
              onClick={onOpenBooking}
              className="group relative px-5 sm:px-6 py-2.5 rounded-full overflow-hidden bg-[#B3CFE5] text-[#0A1931] flex items-center gap-2.5 shadow-lg hover:bg-[#F6FAFD] transition-colors duration-300"
            >
              <span className="relative z-10 font-sans text-xs tracking-widest uppercase font-semibold">
                Book Appointment
              </span>
              <ArrowUpRight className="w-3.5 h-3.5 relative z-10 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-[#F6FAFD]/80 hover:text-[#B3CFE5] transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden bg-[#0A1931]/98 backdrop-blur-2xl flex flex-col justify-between p-8 pt-28">
          <div className="space-y-6">
            <span className="font-sans text-[0.65rem] tracking-superwide uppercase text-[#B3CFE5] block">
              Navigation
            </span>
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-serif text-3xl text-[#F6FAFD] hover:text-[#B3CFE5] transition-colors tracking-wide"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="pt-8 border-t border-[#B3CFE5]/15 space-y-4">
            <div className="text-xs text-[#B3CFE5]/80 space-y-1">
              <p className="text-[#F6FAFD] font-medium">V Care Salon</p>
              <p>Tarn Taran, Punjab, India</p>
              <p className="text-[#B3CFE5]">Phone: 078141 66427</p>
              <p className="text-[#B3CFE5]">Instagram: @vcare_salon_tarntaran</p>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="py-3 rounded-full bg-[#B3CFE5] text-[#0A1931] text-center font-sans text-xs tracking-widest uppercase font-semibold hover:bg-[#F6FAFD] transition-colors"
              >
                Book Now
              </button>
              <a
                href="tel:07814166427"
                className="py-3 rounded-full border border-[#B3CFE5]/30 text-[#F6FAFD] text-center font-sans text-xs tracking-widest uppercase flex items-center justify-center gap-2 hover:bg-[#1A3D63]/50 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#B3CFE5]" />
                Call Salon
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
