import React, { useState } from "react";
import { siteData } from "../content";

interface HomeProps {
  navigate: (path: string) => void;
}

export const Home: React.FC<HomeProps> = ({ navigate }) => {
  const { hero, apartment, gallery } = siteData;
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const prevImage = () => {
    setActiveImageIndex((prev) => (prev === 0 ? gallery.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setActiveImageIndex((prev) => (prev === gallery.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="min-h-screen bg-[#fcfcfd] text-[#1a1a1a]">
      {/* 1. Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-4 sm:px-6 lg:px-8 text-center bg-gradient-to-b from-[#f5f5f7] to-[#fcfcfd]">
        <div className="max-w-4xl mx-auto space-y-6">
          <p className="text-xs sm:text-sm uppercase tracking-widest text-neutral-500 font-medium">
            {hero.kicker}
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal font-editorial tracking-tight text-neutral-900 leading-[1.15]">
            {hero.title}
          </h1>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-neutral-600 font-light leading-relaxed">
            {hero.subtitle}
          </p>
          <div className="pt-2">
            <button
              onClick={() => navigate("/kontakt")}
              className="btn-outline px-8 py-3 text-xs uppercase tracking-widest font-semibold"
            >
              {hero.cta}
            </button>
          </div>
        </div>

        {/* Hero Visual Imagery */}
        <div className="max-w-5xl mx-auto mt-12 md:mt-16 px-2">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-neutral-200/80 aspect-[16/10] bg-neutral-100">
            <img
              src={gallery[0].src}
              alt={gallery[0].alt}
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 text-left text-white">
              <span className="text-xs uppercase tracking-wider font-semibold bg-white/20 backdrop-blur-md px-3 py-1 rounded-full">
                Apartment Rödermark
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Apartment Section: Rödermark */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="space-y-6 text-center md:text-left mb-12">
          <h2 className="text-3xl sm:text-4xl font-normal font-editorial tracking-tight text-neutral-900">
            {apartment.title}
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-neutral-700">
            {apartment.summary}
          </p>
        </div>

        {/* 3. Interactive Gallery / Slideshow */}
        <div className="space-y-4 mb-16">
          <div className="relative rounded-2xl overflow-hidden shadow-lg border border-neutral-200 bg-neutral-900 aspect-[16/10] sm:aspect-[16/9]">
            <img
              src={gallery[activeImageIndex].src}
              alt={gallery[activeImageIndex].alt}
              className="w-full h-full object-cover transition-opacity duration-300"
            />

            {/* Previous Button */}
            <button
              onClick={prevImage}
              aria-label="Vorheriges Bild"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center backdrop-blur-sm transition-all"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Next Button */}
            <button
              onClick={nextImage}
              aria-label="Nächstes Bild"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center backdrop-blur-sm transition-all"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Counter */}
            <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">
              {activeImageIndex + 1} / {gallery.length}
            </div>
          </div>

          <p className="text-center text-xs text-neutral-400">
            Mehr Fotos durch Wischen oder Klick auf die Pfeile
          </p>

          {/* Thumbnails row */}
          <div className="flex space-x-2 overflow-x-auto pb-2 scrollbar-thin">
            {gallery.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImageIndex(idx)}
                className={`relative flex-shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition-all ${
                  activeImageIndex === idx
                    ? "border-neutral-900 opacity-100 scale-105"
                    : "border-transparent opacity-60 hover:opacity-100"
                }`}
              >
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* 4. Connectivity & Location */}
        <div className="bg-[#f5f5f7] rounded-2xl p-6 sm:p-10 border border-neutral-200/70 mb-16 space-y-6">
          <p className="text-base sm:text-lg leading-relaxed text-neutral-800">
            {apartment.connectivity}
          </p>
          <div>
            <button
              onClick={() => navigate("/kontakt")}
              className="btn-primary text-xs uppercase tracking-widest font-semibold px-8 py-3"
            >
              Buchen
            </button>
          </div>
        </div>

        {/* 5. 4 Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {apartment.badges.map((badge, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-6 text-center border border-neutral-200 shadow-sm flex flex-col items-center justify-center space-y-3"
            >
              <div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-800">
                {badge.icon === "wifi" && (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.75"
                      d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
                    />
                  </svg>
                )}
                {badge.icon === "users" && (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.75"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                )}
                {badge.icon === "ban" && (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.75"
                      d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                    />
                  </svg>
                )}
                {badge.icon === "paw" && (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.75"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                )}
              </div>
              <h3 className="text-sm font-medium text-neutral-900">{badge.label}</h3>
            </div>
          ))}
        </div>

        {/* 6. Detailed Paragraphs */}
        <div className="space-y-6 text-neutral-700 leading-relaxed text-base border-t border-neutral-200 pt-12">
          {apartment.detailedParagraphs.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
