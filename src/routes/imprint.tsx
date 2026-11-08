import { createFileRoute } from "@tanstack/react-router";
import Imprint from "../site/pages/Imprint";

export const Route = createFileRoute("/imprint")({
  head: () => ({
    meta: [
      { title: "Impressum — ImmoShare Frankfurt" },
      { name: "description", content: "Impressum und Anbieterkennzeichnung von ImmoShare Frankfurt." },
      { property: "og:title", content: "Impressum — ImmoShare Frankfurt" },
      { property: "og:description", content: "Impressum und Anbieterkennzeichnung von ImmoShare Frankfurt." },
    ],
  }),
  component: Imprint,
});
