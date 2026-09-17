import { useState, FormEvent } from 'react';
import { X, Phone, Calendar, Clock, Sparkles, CheckCircle2, MessageCircle } from 'lucide-react';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export default function AppointmentModal({
  isOpen,
  onClose,
  initialService = 'Hair Styling & Design',
}: AppointmentModalProps) {
  const [service, setService] = useState(initialService);
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('Morning (10:00 AM - 1:00 PM)');
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-xl rounded-2xl glass-panel-ocean bg-[#0A1931]/95 border border-[#B3CFE5]/30 p-6 sm:p-8 shadow-2xl z-10 my-8 text-[#F6FAFD]">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full border border-[#B3CFE5]/20 flex items-center justify-center text-[#F6FAFD]/60 hover:text-[#F6FAFD] hover:border-[#B3CFE5] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {isSubmitted ? (
          <div className="py-8 text-center space-y-5">
            <div className="w-16 h-16 rounded-full bg-[#1A3D63] border border-[#B3CFE5] flex items-center justify-center mx-auto text-[#B3CFE5]">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-3xl sm:text-4xl text-[#F6FAFD] tracking-wide">
              Request Received
            </h3>
            <p className="font-sans text-xs sm:text-sm text-[#B3CFE5]/80 max-w-md mx-auto leading-relaxed">
              Thank you, <span className="text-[#F6FAFD] font-medium">{clientName || 'valued client'}</span>. Your appointment request for <span className="text-[#B3CFE5]">{service}</span> at V Care Salon has been prepared.
            </p>
            <div className="p-4 rounded-xl bg-[#0A1931]/80 border border-[#B3CFE5]/20 text-left space-y-2 text-xs text-[#B3CFE5]/80">
              <div className="flex justify-between">
                <span>Location:</span>
                <span className="text-[#F6FAFD] font-medium">Tarn Taran, Punjab, India</span>
              </div>
              <div className="flex justify-between">
                <span>Salon Phone:</span>
                <a href="tel:07814166427" className="text-[#B3CFE5] font-medium hover:underline">078141 66427</a>
              </div>
              <div className="flex justify-between">
                <span>Instagram:</span>
                <a href="https://www.instagram.com/vcare_salon_tarntaran/" target="_blank" rel="noopener noreferrer" className="text-[#B3CFE5] font-medium hover:underline">@vcare_salon_tarntaran</a>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href="tel:07814166427"
                className="flex-1 px-5 py-3 rounded-full bg-gradient-to-r from-[#F6FAFD] via-[#B3CFE5] to-[#4A7FA7] text-[#0A1931] font-sans text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all"
              >
                <Phone className="w-4 h-4" />
                Call Salon Directly
              </a>
              <button
                onClick={handleReset}
                className="px-6 py-3 rounded-full border border-[#B3CFE5]/30 text-[#F6FAFD] font-sans text-xs uppercase tracking-widest hover:border-[#B3CFE5] transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-[#B3CFE5] text-[0.65rem] uppercase tracking-superwide mb-2 font-medium">
              <Sparkles className="w-3.5 h-3.5" />
              <span>V Care Salon • Tarn Taran</span>
            </div>
            <h3 className="font-serif text-3xl sm:text-4xl text-[#F6FAFD] mb-2 tracking-wide">
              Reserve Your Moment
            </h3>
            <p className="font-sans text-xs text-[#B3CFE5]/70 mb-6 font-light">
              Connect with our master stylists and aesthetic specialists in Tarn Taran, Punjab.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block text-[#B3CFE5]/80 uppercase tracking-widest text-[0.65rem] mb-1.5 font-medium">
                  Select Service Category
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#1A3D63]/50 border border-[#B3CFE5]/20 text-[#F6FAFD] focus:border-[#B3CFE5] focus:outline-none transition-colors"
                >
                  <option value="Hair Styling & Design">Precision Hair Styling & Design</option>
                  <option value="Facial & Skin Rejuvenation">Radiant Facial & Skin Rejuvenation</option>
                  <option value="Bridal & Special Occasion Glamour">Bridal & Special Occasion Glamour</option>
                  <option value="Restorative Hair Spa">Restorative Hair Spa & Deep Conditioning</option>
                  <option value="Luxury Grooming & Personal Care">Luxury Grooming & Cosmetic Care</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#B3CFE5]/80 uppercase tracking-widest text-[0.65rem] mb-1.5 font-medium">
                    Preferred Date
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      required
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#1A3D63]/50 border border-[#B3CFE5]/20 text-[#F6FAFD] focus:border-[#B3CFE5] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[#B3CFE5]/80 uppercase tracking-widest text-[0.65rem] mb-1.5 font-medium">
                    Preferred Time Window
                  </label>
                  <select
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#1A3D63]/50 border border-[#B3CFE5]/20 text-[#F6FAFD] focus:border-[#B3CFE5] focus:outline-none transition-colors"
                  >
                    <option value="Morning (10:00 AM - 1:00 PM)">Morning (10:00 AM - 1:00 PM)</option>
                    <option value="Afternoon (1:00 PM - 5:00 PM)">Afternoon (1:00 PM - 5:00 PM)</option>
                    <option value="Evening (5:00 PM - 8:00 PM)">Evening (5:00 PM - 8:00 PM)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#B3CFE5]/80 uppercase tracking-widest text-[0.65rem] mb-1.5 font-medium">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#1A3D63]/50 border border-[#B3CFE5]/20 text-[#F6FAFD] placeholder:text-[#B3CFE5]/30 focus:border-[#B3CFE5] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[#B3CFE5]/80 uppercase tracking-widest text-[0.65rem] mb-1.5 font-medium">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Contact Number"
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#1A3D63]/50 border border-[#B3CFE5]/20 text-[#F6FAFD] placeholder:text-[#B3CFE5]/30 focus:border-[#B3CFE5] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[#B3CFE5]/80 uppercase tracking-widest text-[0.65rem] mb-1.5 font-medium">
                  Special Notes / Styling Preferences (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Tell us about your hair type or specific styling requirement..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#1A3D63]/50 border border-[#B3CFE5]/20 text-[#F6FAFD] placeholder:text-[#B3CFE5]/30 focus:border-[#B3CFE5] focus:outline-none transition-colors resize-none"
                />
              </div>

              <div className="pt-3 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="flex-1 py-3.5 rounded-full bg-gradient-to-r from-[#F6FAFD] via-[#B3CFE5] to-[#4A7FA7] text-[#0A1931] font-sans uppercase tracking-widest text-xs font-bold hover:shadow-lg transition-all"
                >
                  Submit Reservation Request
                </button>
                <a
                  href="tel:07814166427"
                  className="px-6 py-3.5 rounded-full border border-[#B3CFE5]/40 text-[#B3CFE5] hover:bg-[#B3CFE5]/10 flex items-center justify-center gap-2 font-sans uppercase tracking-widest text-xs font-medium transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  Call 078141 66427
                </a>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
