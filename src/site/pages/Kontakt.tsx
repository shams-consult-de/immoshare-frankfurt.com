import React from "react";
import { siteData } from "../content";
import { envConfig } from "../env";

export const Kontakt: React.FC = () => {
  const { contact } = siteData;

  const destinationAddress = envConfig.address;
  const mapsEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(destinationAddress)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
  const mapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(destinationAddress)}`;

  return (
    <div className="min-h-screen bg-[#f8f8f9] text-[#1a1a1a] pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-normal font-editorial tracking-tight text-neutral-900 mb-4">
            {contact.title}
          </h1>
          <p className="text-sm sm:text-base leading-relaxed text-neutral-600">
            {contact.lead}
          </p>
        </div>

        {/* 3 Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Telefon */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-neutral-200 text-center flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center mb-4 text-neutral-800">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <h2 className="text-lg font-semibold font-editorial text-neutral-900 mb-2">Telefon</h2>
            <div className="text-sm text-neutral-600 space-y-1">
              <p>
                <strong className="text-neutral-900">Festnetz:</strong>{" "}
                <a href={`tel:${envConfig.phoneLandline}`} className="hover:underline">
                  {envConfig.phoneLandline}
                </a>
              </p>
              <p>
                <strong className="text-neutral-900">Mobil:</strong>{" "}
                <a href={`tel:${envConfig.phoneMobile}`} className="hover:underline">
                  {envConfig.phoneMobile}
                </a>
              </p>
            </div>
          </div>

          {/* E-Mail Adresse */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-neutral-200 text-center flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center mb-4 text-neutral-800">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h2 className="text-lg font-semibold font-editorial text-neutral-900 mb-2">E-Mail Adresse</h2>
            <p className="text-sm text-neutral-600 break-all">
              <a href={`mailto:${envConfig.contactEmail}`} className="hover:underline text-neutral-900">
                {envConfig.contactEmail}
              </a>
            </p>
          </div>

          {/* Anschrift */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-neutral-200 text-center flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center mb-4 text-neutral-800">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <h2 className="text-lg font-semibold font-editorial text-neutral-900 mb-2">Anschrift</h2>
            <div className="text-sm text-neutral-600 space-y-0.5">
              <p className="font-medium text-neutral-900">{contact.address.name}</p>
              <p>{contact.address.street}</p>
              <p>{contact.address.city}</p>
            </div>
          </div>
        </div>

        {/* Standort & Google Maps Section */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 md:p-10 shadow-sm border border-neutral-200">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <div>
              <h2 className="text-2xl font-normal font-editorial text-neutral-900">
                Unser Standort
              </h2>
              <p className="text-sm text-neutral-600 mt-1">
                {destinationAddress}
              </p>
            </div>
            <a
              href={mapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white text-sm font-medium transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-900 self-start sm:self-auto"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span>Route planen</span>
            </a>
          </div>

          <div className="w-full h-80 sm:h-96 md:h-[450px] rounded-xl overflow-hidden border border-neutral-200 bg-neutral-100 shadow-inner">
            <iframe
              title={`Google Maps Standort - ${destinationAddress}`}
              src={mapsEmbedUrl}
              className="w-full h-full border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kontakt;
