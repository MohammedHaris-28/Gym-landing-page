const items = [
  {
    quote:
      "Best trainer with good ⚡equipments😍",
    name: "Manjunatha",
    role: "Google Reviewer",
  },
  {
    quote:
      "Best gym in this location, hygiene and well maintained gym and best in class equipments , must visit",
    name: "Rathil Kumar.E",
    role: "Google Reviewer",
  },
  {
    quote:
      "Top gym in Shivamogga district with latest equipments...lot of space....best trainer",
    name: "Harshitha Rani Mahendrakar",
    role: "Google Reviewer",
  },
];

export function Testimonials() {
  return (
    <section className="bg-surface">
      <div className="container-px mx-auto max-w-7xl py-28 md:py-36">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <div className="eyebrow">Members</div>
            <h2 className="mt-5 text-balance text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
              Real stories. Real consistency.
            </h2>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
          {items.map((t) => (
            <figure
              key={t.name}
              className="lift flex flex-col justify-between rounded-2xl border border-border/60 bg-card p-8"
            >
              <svg viewBox="0 0 32 32" className="h-7 w-7 text-accent" fill="currentColor" aria-hidden>
                <path d="M9 8C5 8 2 11 2 15v9h10V15H7c0-2 1-4 4-4V8H9zm15 0c-4 0-7 3-7 7v9h10V15h-5c0-2 1-4 4-4V8h-2z" />
              </svg>
              <blockquote className="mt-6 text-balance text-base leading-relaxed text-foreground/85">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-8 border-t border-border pt-5">
                <div className="text-sm font-semibold tracking-tight">{t.name}</div>
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
