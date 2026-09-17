import { Sparkles, Phone, MapPin, Instagram, Calendar, ArrowUpRight } from 'lucide-react';

interface ContactSectionProps {
  onOpenBooking: () => void;
}

export default function ContactSection({ onOpenBooking }: ContactSectionProps) {
  return (
    <section id="contact" className="py-28 px-6 relative z-10">
      <div className="max-w-[1600px] mx-auto">
        <div className="rounded-3xl glass-panel p-8 sm:p-14 relative overflow-hidden border border-[#B3CFE5]/15">
          {/* Background Atmospheric Layers */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1931] via-[#1A3D63]/70 to-[#0A1931] -z-10" />
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#4A7FA7]/20 rounded-full blur-[100px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 text-[#B3CFE5] text-[0.68rem] uppercase tracking-superwide mb-3 font-medium">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Visit & Connect</span>
              </div>
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#F6FAFD] tracking-wide mb-6 leading-tight">
                BEGIN YOUR BEAUTY JOURNEY AT <br />
                <span className="gold-gradient-text">V CARE SALON</span>
              </h2>
              <p className="font-sans text-xs sm:text-sm text-[#B3CFE5]/80 font-light max-w-lg mb-10 leading-relaxed">
                Experience the pinnacle of hair care, skin rejuvenation, and personal grooming. Reach out directly to book an appointment or consult with our stylists.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={onOpenBooking}
                  className="px-8 py-4 rounded-full bg-[#B3CFE5] text-[#0A1931] font-sans text-xs uppercase tracking-widest font-semibold hover:bg-[#F6FAFD] transition-colors flex items-center gap-2 shadow-xl"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Appointment</span>
                </button>

                <a
                  href="tel:07814166427"
                  className="px-8 py-4 rounded-full border border-[#B3CFE5]/30 text-[#F6FAFD] font-sans text-xs uppercase tracking-widest hover:border-[#B3CFE5] hover:text-[#B3CFE5] transition-colors flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#B3CFE5]" />
                  <span>Call 078141 66427</span>
                </a>
              </div>
            </div>

            {/* Right Verified Business Details Card */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl glass-panel-ocean border border-[#B3CFE5]/30 p-8 sm:p-10 space-y-6">
                <h3 className="font-serif text-2xl text-[#F6FAFD] tracking-wide border-b border-[#B3CFE5]/15 pb-4">
                  Salon Information
                </h3>

                <div className="space-y-5 text-sm">
                  {/* Location */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#1A3D63] border border-[#B3CFE5]/30 flex items-center justify-center shrink-0 text-[#B3CFE5]">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-sans text-[0.65rem] tracking-widest uppercase text-[#B3CFE5]/60 block">
                        Location
                      </span>
                      <p className="font-serif text-xl text-[#F6FAFD] mt-0.5">
                        Tarn Taran, Punjab, India
                      </p>
                      <span className="font-sans text-xs text-[#B3CFE5]/60">
                        Category: Beauty / Cosmetic & Personal Care
                      </span>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#1A3D63] border border-[#B3CFE5]/30 flex items-center justify-center shrink-0 text-[#B3CFE5]">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-sans text-[0.65rem] tracking-widest uppercase text-[#B3CFE5]/60 block">
                        Direct Phone Contact
                      </span>
                      <a
                        href="tel:07814166427"
                        className="font-serif text-2xl text-[#B3CFE5] hover:text-[#F6FAFD] transition-colors block mt-0.5"
                      >
                        078141 66427
                      </a>
                      <a
                        href="tel:07814166427"
                        className="inline-flex items-center gap-1.5 text-xs font-sans tracking-widest uppercase text-[#B3CFE5] hover:underline mt-1"
                      >
                        Click to call directly
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    </div>
                  </div>

                  {/* Instagram */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#1A3D63] border border-[#B3CFE5]/30 flex items-center justify-center shrink-0 text-[#B3CFE5]">
                      <Instagram className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-sans text-[0.65rem] tracking-widest uppercase text-[#B3CFE5]/60 block">
                        Instagram
                      </span>
                      <a
                        href="https://www.instagram.com/vcare_salon_tarntaran/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-serif text-xl text-[#F6FAFD] hover:text-[#B3CFE5] transition-colors block mt-0.5"
                      >
                        @vcare_salon_tarntaran
                      </a>
                      <a
                        href="https://www.instagram.com/vcare_salon_tarntaran/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-sans tracking-widest uppercase text-[#B3CFE5] hover:underline mt-1"
                      >
                        Visit Instagram Profile
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Direct Call Button */}
                <div className="pt-4 border-t border-[#B3CFE5]/15">
                  <a
                    href="tel:07814166427"
                    className="w-full py-4 rounded-full bg-gradient-to-r from-[#F6FAFD] via-[#B3CFE5] to-[#4A7FA7] text-[#0A1931] font-sans text-xs uppercase tracking-superwide font-bold flex items-center justify-center gap-2 hover:opacity-95 transition-opacity"
                  >
                    <Phone className="w-4 h-4" />
                    Call Now — 078141 66427
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
