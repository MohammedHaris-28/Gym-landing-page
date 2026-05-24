const stats = [
  { value: "25+", label: "Active Members" },
  { value: "15+", label: "Modern Equipments" },
  { value: "08", label: "Signature Programs" },
  { value: "5+", label: "Years of Excellence" },
];

export function Stats() {
  return (
    <section className="relative -mt-16 z-20 container-px mx-auto max-w-7xl">
      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-charcoal text-charcoal-foreground shadow-elegant md:grid-cols-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className="group relative bg-charcoal p-8 transition-colors duration-500 hover:bg-[oklch(0.24_0.022_260)]"
          >
            <div className="font-display text-4xl font-semibold tracking-tight md:text-5xl">
              {s.value}
            </div>
            <div className="mt-2 text-xs uppercase tracking-[0.22em] text-white/55">
              {s.label}
            </div>
            <div className="mt-5 h-px w-8 bg-accent transition-all duration-500 group-hover:w-16" />
          </div>
        ))}
      </div>
    </section>
  );
}
