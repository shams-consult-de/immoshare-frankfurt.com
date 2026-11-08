import { createFileRoute } from "@tanstack/react-router";
import Datenschutz from "../site/pages/Datenschutz";

export const Route = createFileRoute("/datenschutz")({
  head: () => ({
    meta: [
      { title: "Datenschutz — ImmoShare Frankfurt" },
      { name: "description", content: "Datenschutzerklärung von ImmoShare Frankfurt." },
      { property: "og:title", content: "Datenschutz — ImmoShare Frankfurt" },
      { property: "og:description", content: "Datenschutzerklärung von ImmoShare Frankfurt." },
    ],
  }),
  component: Datenschutz,
});
