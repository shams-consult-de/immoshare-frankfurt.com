import { createFileRoute } from "@tanstack/react-router";
import Kontakt from "../site/pages/Kontakt";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt & Buchung — ImmoShare Frankfurt" },
      { name: "description", content: "Kontaktieren Sie ImmoShare Frankfurt und buchen Sie Ihr Apartment in Rödermark." },
      { property: "og:title", content: "Kontakt & Buchung — ImmoShare Frankfurt" },
      { property: "og:description", content: "Kontaktieren Sie ImmoShare Frankfurt und buchen Sie Ihr Apartment in Rödermark." },
    ],
  }),
  component: Kontakt,
});
