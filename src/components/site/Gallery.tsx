import gWeights from "@/assets/gallery-weights.jpg";
import gCycling from "@/assets/gallery-cycling.jpg";
import gCrossfit from "@/assets/gallery-crossfit.jpg";
import gCardio from "@/assets/gallery-cardio.jpg";

const items = [
  { img: gWeights, label: "Weight Floor", span: "md:row-span-2" },
  { img: gCrossfit, label: "Functional Zone", span: "" },
  { img: gCycling, label: "Cycling Studio", span: "" },
  { img: gCardio, label: "Cardio Wing", span: "md:row-span-2" },
];

export function Gallery() {
  return (
    <section id="gallery" className="bg-charcoal text-charcoal-foreground">
      <div className="container-px mx-auto max-w-7xl py-28 md:py-36">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <div className="eyebrow">The Facility</div>
            <h2 className="mt-5 text-balance text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
              A precision-built environment.
            </h2>
          </div>
          <p className="max-w-md text-white/60">
            Every square foot is engineered for training intent — from the strength
            platform to the cycling studio.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-2 md:[grid-auto-flow:dense]">
          {items.map((it, i) => (
            <figure
              key={i}
              className={`group relative overflow-hidden rounded-2xl bg-black ${it.span} ${
                i === 0 ? "md:col-span-1" : i === 3 ? "md:col-span-1" : "md:col-span-1"
              }`}
            >
              <img
                src={it.img}
                alt={it.label}
                className="h-full min-h-[260px] w-full object-cover transition-transform duration-[1500ms] group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/10 to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between p-5">
                <span className="text-sm font-medium tracking-wide">{it.label}</span>
                <span className="h-px w-10 bg-accent transition-all duration-500 group-hover:w-20" />
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
