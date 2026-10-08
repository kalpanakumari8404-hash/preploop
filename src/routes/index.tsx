import { createFileRoute, Link } from "@tanstack/react-router";
import { Card, Header, PrimaryButton, Ring, TaskList } from "@/components/dash";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dashboard — Placement Readiness" },
      { name: "description", content: "Track your placement readiness score, weekly trend and priority tasks." },
      { property: "og:title", content: "Dashboard — Placement Readiness" },
      { property: "og:description", content: "Track your readiness score, weekly trend and priority tasks." },
    ],
  }),
  component: Index,
});

const trend = [
  { d: "Fri", v: 30 }, { d: "Sat", v: 36 }, { d: "Sun", v: 34 }, { d: "Mon", v: 44 },
  { d: "Tue", v: 42 }, { d: "Wed", v: 54 }, { d: "Today", v: 62 },
];
const shades = ["bg-bar-1", "bg-bar-1", "bg-bar-2", "bg-bar-2", "bg-bar-3", "bg-bar-4", "bg-primary"];
const skills = [
  { n: "Skills", s: "Core stack", v: 70 }, { n: "Resume", s: "Impact needs work", v: 55 },
  { n: "Aptitude", s: "Speed practice", v: 60 }, { n: "Coding", s: "Problem solving", v: 50 },
  { n: "Interview", s: "Communication", v: 65 }, { n: "Role fit", s: "SWE potential", v: 72 },
];

function Index() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="mx-auto max-w-6xl px-4 py-6">
        <p className="text-[10px] font-bold uppercase tracking-widest text-primary">Aarav's dashboard</p>
        <h1 className="mt-1 text-2xl font-bold sm:text-3xl">Good morning, Aarav.</h1>
        <p className="mt-1 text-sm text-muted-foreground">Here's where a focused hour will matter most.</p>
        <div className="mt-4"><PrimaryButton to="/plan">View today's plan</PrimaryButton></div>

        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          <Card className="lg:col-span-1">
            <div className="flex justify-center py-2">
              <Ring value={62} size={140} stroke={16}>
                <div className="text-center">
                  <p className="text-3xl font-bold">62<span className="text-sm font-normal text-muted-foreground">/100</span></p>
                  <p className="text-[10px] font-bold uppercase text-primary">Readyness</p>
                </div>
              </Ring>
            </div>
            <span className="mt-4 inline-block rounded bg-warn px-2 py-0.5 text-[10px] font-semibold text-warn-foreground">Building momentum</span>
            <h2 className="mt-2 text-lg font-bold">You're on your way.</h2>
            <p className="mt-1 text-sm text-muted-foreground">Your role fit is promising. Sharpen coding and quantify your resume wins next.</p>
            <Link to="/plan" className="mt-4 inline-block text-sm font-semibold text-primary">Open priority review →</Link>
          </Card>

          <Card className="lg:col-span-2">
            <div className="flex justify-between">
              <div><h2 className="font-bold">Weekly readiness trend</h2><p className="text-xs text-muted-foreground">Last 7 days</p></div>
              <span className="text-xs font-bold text-primary">+8 pts</span>
            </div>
            <div className="mt-6 flex h-40 items-end gap-2 sm:h-52 sm:gap-3">
              {trend.map((t, i) => (
                <div key={t.d} className="flex h-full flex-1 flex-col justify-end">
                  {t.d === "Today" && <p className="mb-1 text-center text-[10px] font-bold text-primary">62</p>}
                  <div className={`rounded-t-md ${shades[i]}`} style={{ height: `${t.v * 1.4}%` }} />
                </div>
              ))}
            </div>
            <div className="mt-2 flex gap-2 border-t border-border pt-2 sm:gap-3">
              {trend.map((t) => <span key={t.d} className="flex-1 text-center text-[10px] text-muted-foreground">{t.d}</span>)}
            </div>
          </Card>
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((s) => (
            <Card key={s.n} className="flex items-center gap-3 !p-4">
              <Ring value={s.v} />
              <div><p className="text-sm font-semibold">{s.n}</p><p className="text-[11px] text-muted-foreground">{s.s}</p></div>
            </Card>
          ))}
        </div>

        <div className="mt-4 grid gap-4 lg:grid-cols-3">
          <Card className="lg:col-span-2">
            <h2 className="mb-4 font-bold">Prepare this first</h2>
            <TaskList />
          </Card>
          <Card>
            <div className="flex justify-between">
              <div><h2 className="font-bold">Progress streak</h2><p className="text-xs text-muted-foreground">Keep the rhythm going.</p></div>
              <span className="text-2xl">🔥</span>
            </div>
            <p className="mt-5 text-4xl font-bold">4 <span className="text-sm font-normal text-muted-foreground">days</span></p>
            <div className="mt-4 flex gap-2">
              {["M", "T", "W", "T", "F"].map((d, i) => (
                <span key={i} className={`grid h-6 w-6 place-items-center rounded-full text-[10px] font-semibold ${i < 4 ? "bg-primary text-primary-foreground" : "bg-accent text-accent-foreground"}`}>{d}</span>
              ))}
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
}
