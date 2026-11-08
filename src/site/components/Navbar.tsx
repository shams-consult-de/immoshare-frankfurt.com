import React, { useState } from "react";
import { siteData } from "../content";

interface NavbarProps {
  currentPath: string;
  navigate: (path: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPath, navigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Buchen", href: "/kontakt" },
    { label: "Kontakt", href: "/kontakt" },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    navigate(href);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-neutral-100 transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo / Brand */}
          <div className="flex items-center">
            <a
              href="/"
              onClick={(e) => handleLinkClick(e, "/")}
              aria-label="Back to home"
              className="text-lg sm:text-xl font-medium tracking-tight text-neutral-900 hover:opacity-80 transition-opacity"
            >
              {siteData.footer.brand}
            </a>
          </div>

          {/* Desktop Right */}
          <div className="hidden md:flex items-center space-x-6">
            <a
              href="/kontakt"
              onClick={(e) => handleLinkClick(e, "/kontakt")}
              className={`text-sm font-medium transition-colors ${
                currentPath === "/kontakt"
                  ? "text-neutral-900 font-semibold"
                  : "text-neutral-600 hover:text-neutral-900"
              }`}
            >
              Kontakt
            </a>
            <a
              href="/kontakt"
              onClick={(e) => handleLinkClick(e, "/kontakt")}
              className="btn-outline text-xs uppercase tracking-wider px-6 py-2"
            >
              Buchen
            </a>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex md:hidden items-center space-x-2">
            <a
              href="/kontakt"
              onClick={(e) => handleLinkClick(e, "/kontakt")}
              className="btn-primary text-xs uppercase tracking-wider px-4 py-1.5"
            >
              Buchen
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-neutral-700 hover:text-neutral-900 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.75"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.75"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-down Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-neutral-200 px-6 py-6 space-y-4 animate-in slide-in-from-top duration-200 shadow-lg">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`text-base font-medium py-1 transition-colors ${
                  currentPath === link.href
                    ? "text-neutral-900 font-semibold"
                    : "text-neutral-600 hover:text-neutral-900"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-4 border-t border-neutral-100 flex flex-col space-y-2 text-xs text-neutral-500">
            <a
              href="/imprint"
              onClick={(e) => handleLinkClick(e, "/imprint")}
              className="hover:text-neutral-900"
            >
              Imprint
            </a>
            <a
              href="/datenschutz"
              onClick={(e) => handleLinkClick(e, "/datenschutz")}
              className="hover:text-neutral-900"
            >
              Datenschutz
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
