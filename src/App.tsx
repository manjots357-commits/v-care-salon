import { useState } from 'react';
import WebGLBackground from './components/WebGLBackground';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import QuickHighlights from './components/QuickHighlights';
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
import GallerySection from './components/GallerySection';
import ExperienceSection from './components/ExperienceSection';
import FaqSection from './components/FaqSection';
import SocialSection from './components/SocialSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import AppointmentModal from './components/AppointmentModal';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Precision Styling & Hair Cuts');

  const handleOpenBooking = (serviceName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    }
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  return (
    <div className="relative min-h-screen bg-[#0A1931] text-[#F6FAFD] font-sans selection:bg-[#4A7FA7] selection:text-[#F6FAFD]">
      {/* 3D WebGL Background Canvas with Shader Particles & Atmospheric Flow */}
      <WebGLBackground />

      {/* Desktop Fluid Interactive Cursor */}
      <CustomCursor />

      {/* Luxury Navigation Bar */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* Main Sections */}
      <main>
        {/* Editorial Hero */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* 3 Pillars Quick Banner */}
        <QuickHighlights />

        {/* Services Showcase with 3D Tilt Cards */}
        <ServicesSection onSelectService={(service) => handleOpenBooking(service)} />

        {/* About V Care Salon in Tarn Taran */}
        <AboutSection onOpenBooking={() => handleOpenBooking()} />

        {/* Visual Gallery with Lightbox */}
        <GallerySection />

        {/* Client Experience & Hospitality Philosophy */}
        <ExperienceSection />

        {/* Dedicated Social Media Feature */}
        <SocialSection />

        {/* Frequently Asked Questions */}
        <FaqSection />

        {/* Contact & Booking Section */}
        <ContactSection onOpenBooking={() => handleOpenBooking()} />
      </main>

      {/* Luxury Footer UI */}
      <Footer onOpenBooking={() => handleOpenBooking()} />

      {/* Interactive Reservation Modal */}
      <AppointmentModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        initialService={selectedService}
      />
    </div>
  );
}
