import React from "react";
import { siteData } from "../content";

interface FooterProps {
  navigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ navigate }) => {
  const { footer } = siteData;

  const handleLink = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    navigate(href);
  };

  return (
    <footer className="bg-[#141416] text-neutral-300 pt-16 pb-24 md:pb-16 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-neutral-800">
          {/* Brand & Mission */}
          <div className="md:col-span-5 space-y-4">
            <h2 className="text-xl font-normal font-editorial tracking-tight text-white">
              {footer.brand}
            </h2>
            <p className="text-xs leading-relaxed text-neutral-400 max-w-sm">
              Komfortable und voll ausgestattete Apartments nahe Frankfurt in Rödermark. Ideal für Geschäftsreisen, Pendler und Städtetrips.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 space-y-3">
            <h3 className="text-xs uppercase tracking-wider text-neutral-400 font-semibold">
              {footer.brand}
            </h3>
            <ul className="space-y-2 text-sm">
              {footer.bookingLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLink(e, link.href)}
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-xs uppercase tracking-wider text-neutral-400 font-semibold">
              Weitere Links
            </h3>
            <ul className="space-y-2 text-sm">
              {footer.legalLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLink(e, link.href)}
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 text-center text-xs text-neutral-500">
          <p>{footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
