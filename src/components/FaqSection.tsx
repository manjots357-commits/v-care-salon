import { useState } from 'react';
import { Sparkles, ChevronDown, Phone, Instagram } from 'lucide-react';
import { FaqItem } from '../types';

const faqs: FaqItem[] = [
  {
    question: 'How can I book an appointment with V Care Salon?',
    answer:
      'You can schedule your appointment directly by calling us at 078141 66427, utilizing our online reservation request on this website, or sending a direct message to our Instagram page @vcare_salon_tarntaran.',
  },
  {
    question: 'Where is V Care Salon located?',
    answer:
      'V Care Salon is located in Tarn Taran, Punjab, India. If you need assistance with landmarks or directions, please contact our team directly.',
  },
  {
    question: 'How can I contact V Care Salon?',
    answer:
      'You can connect with us via phone at 078141 66427 or via Instagram @vcare_salon_tarntaran. We are delighted to answer your questions regarding services, timings, and consultations.',
  },
  {
    question: 'Where can I find V Care Salon on Instagram?',
    answer:
      'Our official Instagram profile is @vcare_salon_tarntaran. Follow our page for our latest styling portfolios, beauty transformations, and salon announcements.',
  },
  {
    question: 'What category of services does V Care Salon offer?',
    answer:
      'V Care Salon is categorized in Beauty, Cosmetic & Personal Care. We offer precision haircuts, hair coloring, restorative hair spa rituals, skin and facial rejuvenation, and bridal event grooming.',
  },
  {
    question: 'How can I inquire about custom styling or special event packages?',
    answer:
      'For bridal bookings, special event hair ornamentation, or custom packages, please contact V Care Salon directly at 078141 66427 for the latest information and personalized scheduling.',
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-28 px-6 relative z-10">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center max-w-xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-[#B3CFE5] text-[0.68rem] uppercase tracking-superwide mb-3 font-medium">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl text-[#F6FAFD] tracking-wide leading-tight mb-4">
            EVERYTHING YOU NEED TO KNOW
          </h2>
          <p className="font-sans text-xs text-[#B3CFE5]/70 font-light">
            Essential information regarding appointments, location, and contacting V Care Salon in Tarn Taran.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.question}
                className="rounded-2xl glass-panel border border-[#B3CFE5]/15 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-6 sm:p-7 flex items-center justify-between text-left gap-4 hover:text-[#B3CFE5] transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-lg sm:text-xl text-[#F6FAFD] font-normal">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full border border-[#B3CFE5]/30 flex items-center justify-center shrink-0 text-[#B3CFE5] transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#B3CFE5] text-[#0A1931] border-[#B3CFE5]' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 sm:px-7 pb-6 pt-1 border-t border-[#B3CFE5]/10 text-[#B3CFE5]/80 font-sans text-xs sm:text-sm font-light leading-relaxed">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick Contact Bar */}
        <div className="mt-12 p-6 rounded-2xl glass-panel-ocean border border-[#B3CFE5]/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-serif text-xl text-[#F6FAFD]">Have a specific question?</h4>
            <p className="font-sans text-xs text-[#B3CFE5]/70">
              Please contact V Care Salon directly for the latest information.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="tel:07814166427"
              className="px-5 py-2.5 rounded-full bg-[#B3CFE5] text-[#0A1931] text-xs font-sans uppercase tracking-widest font-semibold flex items-center gap-2 hover:bg-[#F6FAFD] transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              078141 66427
            </a>
            <a
              href="https://www.instagram.com/vcare_salon_tarntaran/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full border border-[#B3CFE5]/30 text-[#F6FAFD] text-xs font-sans uppercase tracking-widest flex items-center gap-2 hover:border-[#B3CFE5] hover:text-[#B3CFE5] transition-colors"
            >
              <Instagram className="w-3.5 h-3.5" />
              Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
