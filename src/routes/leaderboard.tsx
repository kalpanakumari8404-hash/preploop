import { createFileRoute } from "@tanstack/react-router";
import { Card, Header, Ring } from "@/components/dash";

const rows = [
  { n: "Priya S.", v: 84 }, { n: "Rohan M.", v: 79 }, { n: "Ishita K.", v: 73 },
  { n: "Aarav (you)", v: 62 }, { n: "Kabir J.", v: 58 },
];

export const Route = createFileRoute("/leaderboard")({
  head: () => ({
    meta: [
      { title: "Leaderboard — Placement Readiness" },
      { name: "description", content: "See how your readiness score compares with peers." },
      { property: "og:title", content: "Leaderboard — Placement Readiness" },
      { property: "og:description", content: "See how your readiness score compares with peers." },
    ],
  }),
  component: () => (
    <div className="min-h-screen">
      <Header />
      <main className="mx-auto max-w-3xl px-4 py-6">
        <p className="text-[10px] font-bold uppercase tracking-widest text-primary">Leaderboard</p>
        <h1 className="mt-1 mb-6 text-2xl font-bold sm:text-3xl">This week's top performers</h1>
        <div className="space-y-3">
          {rows.map((r, i) => (
            <Card key={r.n} className={`flex items-center gap-4 !p-4 ${r.n.includes("you") ? "!border-primary" : ""}`}>
              <span className="w-6 text-sm font-bold text-muted-foreground">#{i + 1}</span>
              <Ring value={r.v} />
              <p className="flex-1 text-sm font-semibold">{r.n}</p>
              <span className="text-sm font-bold text-primary">{r.v}</span>
            </Card>
          ))}
        </div>
      </main>
    </div>
  ),
});
