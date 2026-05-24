import heroImg from "@/assets/hero.jpg";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden bg-charcoal text-charcoal-foreground">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Athlete training under dramatic lighting at Thunder Fitness Gym"
          className="h-full w-full object-cover animate-slow-zoom"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/85 via-charcoal/55 to-charcoal" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 container-px mx-auto flex min-h-screen max-w-7xl flex-col justify-end pb-24 pt-40 md:pb-32">
        <div className="max-w-3xl">
          <div className="reveal eyebrow text-white/90">Bhadravathi · Karnataka</div>

          <h1 className="reveal reveal-delay-1 mt-6 text-balance text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl xl:text-[5.5rem]">
            Transform Your Body.<br />
            <span className="accent-text">Elevate</span> Your Mind.
          </h1>

          <p className="reveal reveal-delay-2 mt-7 max-w-xl text-pretty text-base leading-relaxed text-white/70 md:text-lg">
            A premium training environment built for discipline, strength and lasting
            transformation. Modern equipment, elite coaches, one philosophy — train with purpose.
          </p>

          <div className="reveal reveal-delay-3 mt-10 flex flex-wrap items-center gap-3">
            <a href="#contact" className="btn-primary">
              Join Now
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <a href="#contact" className="btn-ghost">Book Free Trial</a>
          </div>
        </div>

        <div className="reveal reveal-delay-4 mt-20 flex items-end justify-between gap-10 border-t border-white/10 pt-8">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-white/50">
            <span className="block h-px w-10 bg-accent animate-pulse-line origin-left" />
            Scroll
          </div>
          <div className="hidden gap-12 md:flex">
            {[
              ["HIIT", "Cardio fire"],
              ["CrossFit", "Functional"],
              ["Strength", "Powerlifting"],
            ].map(([k, v]) => (
              <div key={k}>
                <div className="font-display text-lg font-semibold">{k}</div>
                <div className="text-xs uppercase tracking-[0.2em] text-white/50">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
