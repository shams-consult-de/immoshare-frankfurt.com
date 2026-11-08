import { createFileRoute, redirect, useNavigate } from "@tanstack/react-router";
import Home from "../site/pages/Home";

// Legacy WordPress links (?page_id=…) keep working.
const LEGACY: Record<string, string> = { "3": "/kontakt", "25": "/imprint", "2266": "/datenschutz" };

export const Route = createFileRoute("/")({
  validateSearch: (s: Record<string, unknown>) => ({
    page_id: s.page_id != null ? String(s.page_id) : undefined,
  }),
  beforeLoad: ({ search }) => {
    const to = search.page_id ? LEGACY[search.page_id] : undefined;
    if (to) throw redirect({ to, replace: true });
  },
  head: () => ({
    meta: [
      { title: "ImmoShare Frankfurt — Apartments nahe Frankfurt | Rödermark" },
      {
        name: "description",
        content:
          "Ankommen und wohlfühlen – unser modern ausgestattetes Apartment nahe Frankfurt bietet Ihnen Komfort, Ruhe und eine hervorragende Lage in Rödermark.",
      },
      { property: "og:title", content: "ImmoShare Frankfurt — Apartments nahe Frankfurt" },
      {
        property: "og:description",
        content: "Modern ausgestattete Apartments nahe Frankfurt in Rödermark.",
      },
    ],
    links: [{ rel: "canonical", href: "https://immoshare-frankfurt.com/" }],
  }),
  component: Index,
});

function Index() {
  const navigate = useNavigate();
  return (
    <Home
      navigate={(p) => {
        navigate({ to: p });
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    />
  );
}
