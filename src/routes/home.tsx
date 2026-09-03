import { createFileRoute } from "@tanstack/react-router";
import { HomeScreen } from "@/components/HomeScreen";

export const Route = createFileRoute("/home")({
  head: () => ({
    meta: [
      { title: "Home — footArena" },
      {
        name: "description",
        content:
          "Your next match, matches near you, live logging and your latest scorecard — the footArena home screen for every player.",
      },
      { property: "og:title", content: "Home — footArena" },
      {
        property: "og:description",
        content:
          "Your next match, matches near you and your latest scorecard, all in one place.",
      },
    ],
  }),
  component: () => <HomeScreen />,
});
