import {
  Flame, Activity, Dumbbell, UserRound, Trophy, Bike, Apple, Music2,
} from "lucide-react";

const services = [
  { icon: Flame, title: "HIIT Training", desc: "High-intensity interval sessions engineered to torch fat and build conditioning fast." },
  { icon: Music2, title: "Aerobics", desc: "Rhythm-driven group classes that elevate stamina, mobility and energy." },
  { icon: Activity, title: "CrossFit", desc: "Functional strength and metabolic conditioning programmed by certified coaches." },
  { icon: UserRound, title: "Personal Training", desc: "One-on-one coaching with custom programming and accountable progression." },
  { icon: Trophy, title: "Adult Sports Training", desc: "Sport-specific performance development for athletes and weekend competitors." },
  { icon: Dumbbell, title: "Weight Training", desc: "Strength foundations, hypertrophy splits and progressive overload — done right." },
  { icon: Apple, title: "Nutrition Consulting", desc: "Personalised nutrition strategies aligned with your goals, lifestyle and culture." },
  { icon: Bike, title: "Cycling Studio", desc: "Immersive indoor cycling sessions with elite power-tracking equipment." },
];

export function Services() {
  return (
    <section id="services" className="container-px mx-auto max-w-7xl py-28 md:py-36">
      <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
        <div className="max-w-2xl">
          <div className="eyebrow">Programs</div>
          <h2 className="mt-5 text-balance text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
            Train with purpose. <br className="hidden md:block" />
            Built across eight disciplines.
          </h2>
        </div>
        <p className="max-w-md text-pretty text-muted-foreground">
          Every program is designed to develop strength, endurance and discipline — guided
          by certified coaches in a precision-built training environment.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {services.map(({ icon: Icon, title, desc }) => (
          <article
            key={title}
            className="group lift relative overflow-hidden rounded-2xl border border-border/60 bg-card p-7 hover:border-accent/60 hover:shadow-[0_30px_60px_-30px_color-mix(in_oklab,var(--color-accent)_45%,transparent)]"
          >
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-charcoal text-accent transition-colors duration-500 group-hover:bg-accent group-hover:text-charcoal">
              <Icon className="h-5 w-5" strokeWidth={1.6} />
            </div>
            <h3 className="mt-6 text-lg font-semibold tracking-tight">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
            <div className="mt-6 flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-foreground/40 transition-colors group-hover:text-accent">
              Explore
              <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
