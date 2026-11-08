export interface Amenity {
  title: string;
  icon: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export const siteData = {
  hero: {
    kicker: "Bequeme",
    title: "Apartments nahe Frankfurt",
    subtitle:
      "Ankommen und wohlfühlen – unser modern ausgestattetes Apartment nahe Frankfurt bietet Ihnen Komfort, Ruhe und eine hervorragende Lage, ideal für Geschäftsreisen, Städtetrips oder längere Aufenthalte.",
    cta: "Buchen",
  },
  apartment: {
    title: "Rödermark",
    summary:
      "Die Unterkunft ist eine stilvoll eingerichtete 3-Zimmer-Wohnung, die komplett oder als 2-Zimmer- und 1-Zimmer-Einheit vermietet werden kann. Alle Räume sind voll möbliert und mit einer komplett ausgestatteten Küche, Kaffeemaschine, Waschmaschine sowie allen wichtigen Haushaltsgeräten und Utensilien eingerichtet. Im Innenhof gibt es kostenpflichtige Parkplätze für PKW und kleine Transporter; nach Absprache können auch Elektrofahrzeuge abgestellt und geladen werden. Unser internationales Team spricht Deutsch, Englisch, Niederländisch und Persisch und unterstützt Gäste jederzeit, damit sie sich wie zu Hause fühlen.",
    connectivity:
      "Die Wohnung liegt zentral nahe der S-Bahn-Station Ober-Roden mit direkter Verbindung nach Frankfurt. Frankfurt, Darmstadt, Aschaffenburg und der Flughafen sind in 20–35 Minuten erreichbar. Geschäfte und Dienstleistungen des täglichen Bedarfs sind fußläufig vorhanden. Die ruhige, gut angebundene Lage eignet sich ideal für Geschäftsreisende, Pendler und Messebesucher.",
    badges: [
      { label: "WLAN Inklusive", icon: "wifi" },
      { label: "5 Schlafplätze", icon: "users" },
      { label: "Nichtraucher", icon: "ban" },
      { label: "Haustiere erlaubt", icon: "paw" },
    ],
    detailedParagraphs: [
      "Die Unterkunft ist eine stilvoll eingerichtete 3-Zimmer-Wohnung, die flexibel als gesamtes Apartment oder getrennt als 2-Zimmer- und 1-Zimmer-Einheit vermietet werden kann und ideal für verschiedene Bedürfnisse ist. Alle Räume sind voll möbliert und umfassend mit Geräten ausgestattet – darunter eine komplett eingerichtete Küche, Kaffeemaschine, Waschmaschine sowie verschiedene Haushaltsgeräte und wichtige Alltagsutensilien, sodass nichts fehlt. Im Innenhof stehen kostenpflichtige Parkplätze für PKW und kleine Transporter (VAN) zur Verfügung; nach Absprache können dort auch Elektrofahrzeuge abgestellt und geladen werden.",
      "Wir sind ein internationales, herzliches Gastgeber-Team und sprechen Deutsch, Englisch, Niederländisch und Persisch. Wir unterstützen unsere Gäste jederzeit und möchten, dass Sie sich bei uns wie zu Hause fühlen.",
      "Die Wohnung liegt zentral nahe der S-Bahn-Station Ober-Roden mit direkter Verbindung nach Frankfurt. Frankfurt, Darmstadt, Aschaffenburg und der Flughafen sind in 20–35 Minuten erreichbar. In der Umgebung finden Sie zahlreiche Geschäfte und Dienstleistungen des täglichen Bedarfs – alles fußläufig. Die Lage ist ruhig und zugleich ideal angebunden, perfekt für Geschäftsreisende, Pendler und Messebesucher.",
    ],
  },
  gallery: [
    { src: "/images/roedermark_9.jpg", alt: "ImmoShare Apartment Wohnbereich & Details" },
    { src: "/images/roedermark_1.jpg", alt: "ImmoShare Apartment Schlafzimmer & Doppelbett" },
    { src: "/images/roedermark_2.jpg", alt: "ImmoShare Apartment Schlafzimmer 1" },
    { src: "/images/roedermark_3.jpg", alt: "ImmoShare Apartment Schlafzimmer 2" },
    { src: "/images/roedermark_4.jpg", alt: "ImmoShare Apartment Küche & Essbereich" },
    { src: "/images/roedermark_6.jpg", alt: "ImmoShare Apartment Bad & Dusche" },
    { src: "/images/roedermark_7.jpg", alt: "ImmoShare Apartment Flur & Eingang" },
    { src: "/images/roedermark_8.jpg", alt: "ImmoShare Apartment Ausstattung & Komfort" },
    { src: "/images/roedermark_10.jpg", alt: "ImmoShare Apartment Übersicht" },
    { src: "/images/roedermark_11.jpg", alt: "ImmoShare Apartment Arbeitsbereich" },
    { src: "/images/roedermark_12.jpg", alt: "ImmoShare Apartment Gemütlichkeit" },
    { src: "/images/roedermark_13.jpg", alt: "ImmoShare Apartment Modernes Interieur" },
    { src: "/images/roedermark_14.jpg", alt: "ImmoShare Apartment Entspannung" },
    { src: "/images/roedermark_5.jpg", alt: "ImmoShare Apartment Überdachte Terrasse & Lounge" },
    { src: "/images/roedermark_15.jpg", alt: "ImmoShare Apartment Außenansicht & Hof" },
  ],
  contact: {
    title: "Kontakt",
    lead: "Wollen Sie buchen oder haben Sie noch Fragen? Nehmen Sie einfach und schnell mit uns Kontakt auf. Schreiben Sie uns eine E-Mail oder rufen Sie uns direkt an.",
    phone: {
      landline: "069795882-55",
      mobile: "015151864090",
    },
    email: "booking@immoshare-frankfurt.com",
    address: {
      name: "Immoshare Frankfurt",
      street: "Dieburger Str. 50",
      city: "63322 Rödermark, Hessen",
    },
  },
  imprint: {
    title: "Imprint",
    anschrift: {
      title: "Anschrift",
      lines: [
        "Majeed Shams",
        "Immoshare Frankfurt, Wohnraumvermietung",
        "Dieburger Str. 50",
        "63322 Rödermark, Hessen",
      ],
    },
    hauptsitz: {
      title: "Hauptsitz",
      lines: [
        "Dieburger Str. 50",
        "63322 Rödermark, Hessen",
      ],
    },
    kontakt: {
      title: "Kontakt",
      lines: [
        "+ 069795882-55",
        "+ 015151864090",
        "booking@immoshare-frankfurt.com",
      ],
    },
    haftungsausschluss: {
      title: "Haftungsausschluss",
      paragraphs: [
        "Wir sind bemüht, auf unserer Webseite vollständige und richtige Inhalte bereitzustellen. Dennoch müssen wir für die Korrektheit, Aktualität, Qualität und Vollständigkeit jede Gewähr oder Haftung ausschließen. Dies gilt auch für alle Inhalte, wie Hyperlinks die wir auf unserer Webseite anbieten. Zudem haften wir nicht für die Schäden, die auf Inhalte zurückgeführt werden können, die auf diesen fremden Webseiten stehen.",
        "Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.",
      ],
    },
    urheberrecht: {
      title: "Urheberrecht",
      paragraphs: [
        "Alle Texte, Fotos und Inhalte dieser Webseite sind geschützt. Die Verwendung außerhalb des Urheberrechtsgesetzes ist ohne unsere Zustimmung untersagt.",
      ],
    },
  },
  footer: {
    brand: "ImmoShare Frankfurt",
    bookingLinks: [
      { label: "Buchen", href: "/kontakt" },
      { label: "Kontakt", href: "/kontakt" },
    ],
    legalLinks: [
      { label: "Datenschutz", href: "/datenschutz" },
      { label: "Imprint", href: "/imprint" },
    ],
    copyright: "© 2025 ImmoShare Frankfurt",
  },
};
