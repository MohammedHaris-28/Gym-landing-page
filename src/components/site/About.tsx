import aboutImg from "@/assets/about.jpg";

export function About() {
  return (
    <section id="about" className="bg-surface">
      <div className="container-px mx-auto grid max-w-7xl grid-cols-1 gap-16 py-28 md:grid-cols-12 md:py-36">
        <div className="relative md:col-span-6">
          <div className="relative overflow-hidden rounded-3xl">
            <img
              src={aboutImg}
              alt="Premium training floor at Thunder Fitness Gym"
              className="h-[560px] w-full object-cover"
              loading="lazy"
              width={1400}
              height={1600}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent" />
          </div>

          <div className="absolute -bottom-8 -right-4 hidden w-64 rounded-2xl bg-charcoal p-6 text-charcoal-foreground shadow-elegant md:block">
            <div className="font-display text-3xl font-semibold">10<span className="accent-text">+</span></div>
            <div className="mt-1 text-xs uppercase tracking-[0.22em] text-white/55">Years building stronger lives</div>
            <div className="mt-4 h-px w-10 bg-accent" />
          </div>
        </div>

        <div className="md:col-span-6 md:pl-6">
          <div className="eyebrow">About Thunder</div>
          <h2 className="mt-5 text-balance text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl">
            A premium training culture rooted in discipline.
          </h2>
          <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
            Thunder Fitness Gym was built for those who take training seriously. From
            powerlifters and athletes to working professionals committed to a stronger
            lifestyle — our floor is a precision environment for transformation.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {[
              ["Professional Coaching", "Certified coaches programming every session with intent."],
              ["Modern Equipment", "Imported strength, cardio and functional rigs."],
              ["Community Atmosphere", "A respectful, focused, energetic training floor."],
              ["Holistic Wellness", "Nutrition, recovery and mindset built into your plan."],
            ].map(([t, d]) => (
              <div key={t} className="group">
                <div className="flex items-center gap-3">
                  <span className="h-px w-6 bg-accent transition-all duration-500 group-hover:w-10" />
                  <h3 className="text-sm font-semibold tracking-tight">{t}</h3>
                </div>
                <p className="mt-2 pl-9 text-sm leading-relaxed text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
