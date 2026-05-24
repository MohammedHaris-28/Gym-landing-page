export function MembershipCta() {
  return (
    <section className="container-px mx-auto max-w-7xl py-24">
      <div className="relative overflow-hidden rounded-3xl bg-charcoal p-10 text-charcoal-foreground md:p-16 lg:p-20">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full"
          style={{
            background:
              "radial-gradient(closest-side, color-mix(in oklab, var(--color-accent) 55%, transparent), transparent 70%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-40 -left-20 h-96 w-96 rounded-full"
          style={{
            background:
              "radial-gradient(closest-side, color-mix(in oklab, var(--color-accent) 28%, transparent), transparent 70%)",
          }}
        />

        <div className="relative grid grid-cols-1 items-center gap-10 md:grid-cols-12">
          <div className="md:col-span-8">
            <div className="eyebrow text-white/90">Membership</div>
            <h2 className="mt-5 text-balance text-4xl font-semibold leading-[1.04] tracking-tight md:text-5xl lg:text-6xl">
              Your strongest version <br className="hidden md:block" />
              starts <span className="accent-text">today.</span>
            </h2>
            <p className="mt-6 max-w-xl text-white/65">
              Book a free trial session and experience the Thunder training floor first-hand.
              Meet your coach, walk the facility, and feel the difference.
            </p>
          </div>
          <div className="md:col-span-4 md:text-right">
            <div className="flex flex-col gap-3 md:items-end">
              <a href="#contact" className="btn-primary">Book Free Trial</a>
              <a href="tel:+919632935282" className="btn-ghost">Talk to a Coach</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
