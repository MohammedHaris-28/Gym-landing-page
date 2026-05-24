import {
  ArrowUpRight,
  Instagram,
  Phone,
} from "lucide-react";

import trainerImg from "@/assets/trainer-1.png";

const trainer = {
  img: trainerImg,
  name: "Sharath Kumar",
  role: "Founder & Head Fitness Coach",
  experience: "Strength • Transformation • Functional Training",
  description:
    "Sharath Kumar personally trains and guides every member with a disciplined, performance-focused approach designed around consistency, strength building, and long-term transformation.",
  tags: [
    "Strength Training",
    "Muscle Building",
    "Fat Loss",
    "CrossFit",
    "Personal Coaching",
    "Functional Fitness",
  ],
};

export function Trainers() {
  return (
    <section
      id="trainers"
      className="relative overflow-hidden bg-[#0B0F14] py-20 md:py-28"
    >
      {/* Ambient Background Glow */}
      <div className="absolute left-1/2 top-0 h-[320px] w-[320px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[130px]" />

      <div className="container-px relative mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="eyebrow justify-center text-blue-400">
            Leadership & Coaching
          </div>

          <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight tracking-tight text-white md:text-5xl">
            Train under expert guidance.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-[#94A3B8] md:text-base">
            Every member at Thunder Fitness Gym trains directly under Sharath
            Kumar with structured workouts, disciplined coaching, and
            personalized fitness guidance.
          </p>
        </div>

        {/* Trainer Card */}
        <article className="group relative mt-14 overflow-hidden rounded-[30px] border border-white/10 bg-[#121821] shadow-[0_0_50px_rgba(59,130,246,0.05)]">
          <div className="grid grid-cols-1 lg:grid-cols-[0.88fr_1.12fr]">
            
            {/* Image Section */}
            <div className="relative overflow-hidden bg-[#0F1722]">
              
              {/* Overlay */}
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#121821] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#121821]" />

              {/* Image */}
              <img
                src={trainer.img}
                alt={trainer.name}
                loading="lazy"
                className="
                  h-[420px]
                  w-full
                  object-cover
                  object-top
                  transition-transform
                  duration-700
                  group-hover:scale-[1.02]

                  sm:h-[500px]
                  lg:h-full
                  lg:min-h-[680px]
                "
              />

              {/* Badge */}
              <div className="absolute left-5 top-5 z-20 rounded-full border border-blue-400/20 bg-[#0B0F14]/90 px-4 py-2 backdrop-blur-md">
                <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-blue-300">
                  Founder & Trainer
                </span>
              </div>

              {/* Bottom Fade */}
              <div className="absolute inset-x-0 bottom-0 z-10 h-40 bg-gradient-to-t from-[#121821] to-transparent lg:hidden" />
            </div>

            {/* Content Section */}
            <div className="flex flex-col justify-center p-6 md:p-10 lg:p-14">
              
              {/* Top Label */}
              <div className="inline-flex w-fit items-center rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-blue-300">
                Thunder Fitness Gym
              </div>

              {/* Name */}
              <h3 className="mt-5 text-3xl font-semibold tracking-tight text-white md:text-4xl">
                {trainer.name}
              </h3>

              {/* Role */}
              <div className="mt-2 text-sm font-medium text-blue-300 md:text-base">
                {trainer.role}
              </div>

              {/* Experience */}
              <div className="mt-1 text-sm text-[#64748B]">
                {trainer.experience}
              </div>

              {/* Description */}
              <p className="mt-6 max-w-2xl text-sm leading-relaxed text-[#94A3B8] md:text-base">
                {trainer.description}
              </p>

              {/* Tags */}
              <div className="mt-8 flex flex-wrap gap-3">
                {trainer.tags.map((tag) => (
                  <div
                    key={tag}
                    className="
                      rounded-full
                      border
                      border-white/10
                      bg-white/[0.03]
                      px-4
                      py-2
                      text-xs
                      text-[#CBD5E1]
                      transition-all
                      duration-300
                      hover:border-blue-400/30
                      hover:bg-blue-500/10
                      hover:text-white
                    "
                  >
                    {tag}
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="mt-8 grid grid-cols-3 gap-3">
                <div className="rounded-2xl border border-white/8 bg-[#0B0F14] p-4">
                  <div className="text-xl font-semibold text-white md:text-2xl">
                    1:1
                  </div>

                  <div className="mt-1 text-[11px] leading-relaxed text-[#94A3B8] md:text-xs">
                    Personal Guidance
                  </div>
                </div>

                <div className="rounded-2xl border border-white/8 bg-[#0B0F14] p-4">
                  <div className="text-xl font-semibold text-white md:text-2xl">
                    Elite
                  </div>

                  <div className="mt-1 text-[11px] leading-relaxed text-[#94A3B8] md:text-xs">
                    Training Standards
                  </div>
                </div>

                <div className="rounded-2xl border border-white/8 bg-[#0B0F14] p-4">
                  <div className="text-xl font-semibold text-white md:text-2xl">
                    Daily
                  </div>

                  <div className="mt-1 text-[11px] leading-relaxed text-[#94A3B8] md:text-xs">
                    Member Support
                  </div>
                </div>
              </div>

              {/* Premium CTA Buttons */}
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                
                {/* Call Button */}
                <a
                  href="tel:+919632935282"
                  className="
                    group/button
                    relative
                    inline-flex
                    items-center
                    justify-center
                    overflow-hidden
                    rounded-2xl
                    bg-blue-500
                    px-6
                    py-4
                    text-sm
                    font-semibold
                    text-white
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:bg-blue-400
                    hover:shadow-[0_14px_40px_rgba(59,130,246,0.35)]
                  "
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-white/10 to-blue-400/0 opacity-0 transition-opacity duration-500 group-hover/button:opacity-100" />

                  <div className="relative flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/10">
                      <Phone className="h-4 w-4" />
                    </div>

                    <div className="flex flex-col items-start">
                      <span className="text-[10px] uppercase tracking-[0.22em] text-blue-100/70">
                        Contact
                      </span>

                      <span className="text-sm font-medium">
                        Call Now
                      </span>
                    </div>

                    <ArrowUpRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5" />
                  </div>
                </a>

                {/* Instagram Button */}
                <a
                  href="https://www.instagram.com/sharath_kumar_bn?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group/button
                    relative
                    inline-flex
                    items-center
                    justify-center
                    overflow-hidden
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/[0.03]
                    px-6
                    py-4
                    text-sm
                    font-semibold
                    text-[#E2E8F0]
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:border-blue-400/30
                    hover:bg-blue-500/10
                    hover:shadow-[0_10px_35px_rgba(59,130,246,0.12)]
                  "
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-400/5 to-blue-500/0 opacity-0 transition-opacity duration-500 group-hover/button:opacity-100" />

                  <div className="relative flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-[#0B0F14]">
                      <Instagram className="h-4 w-4 text-pink-400" />
                    </div>

                    <div className="flex flex-col items-start">
                      <span className="text-[10px] uppercase tracking-[0.22em] text-[#94A3B8]">
                        Social
                      </span>

                      <span className="text-sm font-medium">
                        Instagram
                      </span>
                    </div>

                    <ArrowUpRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}