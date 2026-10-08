import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

export function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        <Link to="/" aria-label="Home" className="grid h-8 w-8 place-items-center rounded-lg bg-primary text-primary-foreground">
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="9" /><path d="m8 12 3 3 5-6" /></svg>
        </Link>
        <nav className="flex items-center gap-6 text-xs font-medium">
          <Link to="/" activeOptions={{ exact: true }} className="text-muted-foreground hover:text-foreground" activeProps={{ className: "text-foreground" }}>Dashboard</Link>
          <Link to="/plan" className="text-muted-foreground hover:text-foreground" activeProps={{ className: "text-foreground" }}>Plan</Link>
          <Link to="/leaderboard" className="text-muted-foreground hover:text-foreground" activeProps={{ className: "text-foreground" }}>Leaderboard</Link>
          <span className="grid h-8 w-8 place-items-center rounded-full bg-accent text-sm font-semibold text-accent-foreground">A</span>
        </nav>
      </div>
    </header>
  );
}

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`rounded-2xl border border-border bg-card p-5 shadow-card ${className}`}>{children}</div>;
}

export function Ring({ value, size = 48, stroke = 5, children }: { value: number; size?: number; stroke?: number; children?: ReactNode }) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  return (
    <div className="relative shrink-0" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" strokeWidth={stroke} className="stroke-track" />
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" strokeWidth={stroke} strokeDasharray={c} strokeDashoffset={c * (1 - value / 100)} className="stroke-primary" />
      </svg>
      <div className="absolute inset-0 grid place-items-center">{children ?? <span className="text-[10px] font-semibold">{value}</span>}</div>
    </div>
  );
}

export function PrimaryButton({ to, children }: { to: "/plan" | "/" | "/leaderboard"; children: ReactNode }) {
  return (
    <Link to={to} className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-button transition hover:opacity-90">
      {children} <span aria-hidden>→</span>
    </Link>
  );
}

export const tasks = [
  { t: "Solve Binary Search", m: "Coding · 35 min" },
  { t: "Add impact metrics", m: "Resume AI · 20 min" },
  { t: "Complete speed drill", m: "Aptitude · 15 min" },
];

export function TaskList() {
  return (
    <div className="space-y-3">
      {tasks.map((x, i) => (
        <Link key={x.t} to="/plan" className="flex items-center justify-between rounded-xl border border-soft-border bg-soft px-4 py-3 transition hover:border-primary">
          <div>
            <p className="text-sm font-semibold">{i + 1}. {x.t}</p>
            <p className="text-xs text-muted-foreground">{x.m}</p>
          </div>
          <span className="text-muted-foreground">→</span>
        </Link>
      ))}
    </div>
  );
}
