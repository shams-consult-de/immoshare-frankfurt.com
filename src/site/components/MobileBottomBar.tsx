import React from "react";
import { envConfig } from "../env";

interface MobileBottomBarProps {
  navigate: (path: string) => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({ navigate }) => {
  return (
    <aside
      aria-label="Schnellzugriff Aktionen"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-neutral-200 px-4 py-3 shadow-[0_-4px_16px_rgba(0,0,0,0.06)]"
    >
      <div className="flex items-center space-x-3 max-w-md mx-auto">
        <a
          href={`tel:${envConfig.phoneMobile}`}
          className="flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-full border border-neutral-300 text-neutral-800 text-xs font-semibold uppercase tracking-wider hover:bg-neutral-50 transition-colors"
        >
          <svg className="w-4 h-4 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          <span>Anrufen</span>
        </a>
        <button
          onClick={() => navigate("/kontakt")}
          className="flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-full bg-neutral-900 text-white text-xs font-semibold uppercase tracking-wider hover:bg-neutral-800 transition-colors shadow-sm"
        >
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span>Jetzt buchen</span>
        </button>
      </div>
    </aside>
  );
};

export default MobileBottomBar;
