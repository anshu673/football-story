import { createFileRoute } from "@tanstack/react-router";
import { HomeScreen } from "@/components/HomeScreen";

export const Route = createFileRoute("/home-light")({
  head: () => ({
    meta: [
      { title: "Home (Light) — footArena" },
      {
        name: "description",
        content:
          "The footArena home screen in daylight mode: next match, matches near you, live logging and your latest scorecard.",
      },
      { property: "og:title", content: "Home (Light) — footArena" },
      {
        property: "og:description",
        content: "Daylight version of the footArena home screen for every player.",
      },
    ],
  }),
  component: () => <HomeScreen light />,
});
