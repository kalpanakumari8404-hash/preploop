import { createFileRoute } from "@tanstack/react-router";
import { Card, Header, PrimaryButton, TaskList } from "@/components/dash";

export const Route = createFileRoute("/plan")({
  head: () => ({
    meta: [
      { title: "Today's Plan — Placement Readiness" },
      { name: "description", content: "Your focused plan for today, ordered by impact." },
      { property: "og:title", content: "Today's Plan — Placement Readiness" },
      { property: "og:description", content: "Your focused plan for today, ordered by impact." },
    ],
  }),
  component: () => (
    <div className="min-h-screen">
      <Header />
      <main className="mx-auto max-w-3xl px-4 py-6">
        <p className="text-[10px] font-bold uppercase tracking-widest text-primary">Today's plan</p>
        <h1 className="mt-1 text-2xl font-bold sm:text-3xl">70 focused minutes.</h1>
        <p className="mt-1 mb-6 text-sm text-muted-foreground">Ordered by the biggest gain to your readiness score.</p>
        <Card><h2 className="mb-4 font-bold">Prepare this first</h2><TaskList /></Card>
        <div className="mt-6"><PrimaryButton to="/">Back to dashboard</PrimaryButton></div>
      </main>
    </div>
  ),
});
