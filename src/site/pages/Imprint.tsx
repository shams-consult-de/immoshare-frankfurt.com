import React from "react";
import { siteData } from "../content";

export const Imprint: React.FC = () => {
  const { imprint } = siteData;

  return (
    <div className="min-h-screen bg-[#f8f8f9] text-[#1a1a1a] pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white p-6 sm:p-10 md:p-14 rounded-2xl shadow-sm border border-neutral-200">
        <h1 className="text-3xl md:text-4xl font-normal font-editorial tracking-tight text-neutral-900 mb-8 pb-4 border-b border-neutral-200">
          {imprint.title}
        </h1>

        <div className="space-y-8 text-neutral-700">
          {/* Anschrift */}
          <div>
            <h2 className="text-xl font-semibold text-neutral-900 mb-2 font-editorial">
              {imprint.anschrift.title}
            </h2>
            <div className="text-sm leading-relaxed space-y-0.5">
              {imprint.anschrift.lines.map((line, idx) => (
                <p key={idx}>{line}</p>
              ))}
            </div>
          </div>

          {/* Hauptsitz */}
          <div>
            <h2 className="text-xl font-semibold text-neutral-900 mb-2 font-editorial">
              {imprint.hauptsitz.title}
            </h2>
            <div className="text-sm leading-relaxed space-y-0.5">
              {imprint.hauptsitz.lines.map((line, idx) => (
                <p key={idx}>{line}</p>
              ))}
            </div>
          </div>

          {/* Kontakt */}
          <div>
            <h2 className="text-xl font-semibold text-neutral-900 mb-2 font-editorial">
              {imprint.kontakt.title}
            </h2>
            <div className="text-sm leading-relaxed space-y-0.5">
              {imprint.kontakt.lines.map((line, idx) => (
                <p key={idx}>
                  {line.includes("@") ? (
                    <a
                      href={`mailto:${line}`}
                      className="text-neutral-900 underline hover:text-neutral-600 transition-colors"
                    >
                      {line}
                    </a>
                  ) : line.startsWith("+") ? (
                    <a
                      href={`tel:${line.replace(/\s+/g, "")}`}
                      className="text-neutral-900 hover:text-neutral-600 transition-colors"
                    >
                      {line}
                    </a>
                  ) : (
                    line
                  )}
                </p>
              ))}
            </div>
          </div>

          {/* Haftungsausschluss */}
          <div>
            <h2 className="text-xl font-semibold text-neutral-900 mb-2 font-editorial">
              {imprint.haftungsausschluss.title}
            </h2>
            <div className="text-sm leading-relaxed space-y-3">
              {imprint.haftungsausschluss.paragraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          </div>

          {/* Urheberrecht */}
          <div>
            <h2 className="text-xl font-semibold text-neutral-900 mb-2 font-editorial">
              {imprint.urheberrecht.title}
            </h2>
            <div className="text-sm leading-relaxed space-y-3">
              {imprint.urheberrecht.paragraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Imprint;
