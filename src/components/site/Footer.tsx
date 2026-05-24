import { Instagram, Facebook, Youtube } from "lucide-react";

const socialLinks = [
  {
    icon: Instagram,
    href: "https://www.instagram.com/sharath_kumar_bn?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    label: "Instagram",
  },
  {
    icon: Facebook,
    href: "#",
    label: "Facebook",
  },
  {
    icon: Youtube,
    href: "#",
    label: "Youtube",
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#0B0F14] text-white">
      
      {/* Ambient Glow */}
      <div className="absolute left-1/2 top-0 h-[250px] w-[250px] -translate-x-1/2 rounded-full bg-blue-500/5 blur-[120px]" />

      <div className="container-px relative mx-auto max-w-7xl border-t border-white/10 py-14">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          
          {/* Brand */}
          <div className="md:col-span-5">
            <a
              href="#top"
              className="group flex items-center gap-3"
            >
              {/* Logo */}
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-blue-500 text-white shadow-[0_0_25px_rgba(59,130,246,0.25)] transition-all duration-300 group-hover:scale-105 group-hover:bg-blue-400">
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8z" />
                </svg>
              </span>

              {/* Text */}
              <div className="leading-tight">
                <div className="text-sm font-semibold tracking-wide text-white">
                  THUNDER
                </div>

                <div className="text-[10px] uppercase tracking-[0.28em] text-[#94A3B8]">
                  Fitness Gym
                </div>
              </div>
            </a>

            <p className="mt-6 max-w-sm text-sm leading-relaxed text-[#94A3B8]">
              A premium training facility in Bhadravathi built for discipline,
              strength, consistency, and lasting transformation.
            </p>

            {/* Social Buttons */}
            <div className="mt-6 flex gap-3">
              {socialLinks.map((item, i) => {
                const Icon = item.icon;

                return (
                  <a
                    key={i}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={item.label}
                    className="
                      group flex h-11 w-11 items-center justify-center
                      rounded-full border border-white/10
                      bg-white/[0.03]
                      text-[#CBD5E1]
                      transition-all duration-300
                      hover:-translate-y-0.5
                      hover:border-blue-400/30
                      hover:bg-blue-500/10
                      hover:text-white
                      hover:shadow-[0_10px_25px_rgba(59,130,246,0.12)]
                    "
                  >
                    <Icon className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Explore */}
          <div className="md:col-span-3">
            <div className="text-xs uppercase tracking-[0.22em] text-[#64748B]">
              Explore
            </div>

            <ul className="mt-5 space-y-3 text-sm text-[#CBD5E1]">
              {[
                ["Programs", "#services"],
                ["About", "#about"],
                ["Trainers", "#trainers"],
                ["Facility", "#gallery"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    className="transition-colors duration-300 hover:text-blue-400"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Visit */}
          <div className="md:col-span-4">
            <div className="text-xs uppercase tracking-[0.22em] text-[#64748B]">
              Visit
            </div>

            <p className="mt-5 text-sm leading-relaxed text-[#CBD5E1]">
              K.S.R.P Opposite Dairy,
              <br />
              Jayanthi Grama Road Circle,
              <br />
              Bhadravathi, Karnataka 577222
            </p>

            <p className="mt-4 text-sm text-[#94A3B8]">
              Mon – Sat · 5:00 AM – 10:30 PM
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-xs text-[#64748B] md:flex-row md:items-center">
          
          <div>
            © {new Date().getFullYear()} Thunder Fitness Gym. All rights reserved.
          </div>

          <div className="flex flex-col items-start gap-2 text-left md:items-end md:text-right">
            
            <span>
              Crafted with discipline in Bhadravathi.
            </span>

            <a
              href="https://hash2codeteam.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="
                font-medium text-[#94A3B8]
                transition-colors duration-300
                hover:text-blue-400
              "
            >
              Designed and developed by #2CODE
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}