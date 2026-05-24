import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  { href: "#services", label: "Programs" },
  { href: "#about", label: "About" },
  { href: "#trainers", label: "Trainers" },
  { href: "#gallery", label: "Facility" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);

      const h = document.documentElement;
      const p =
        (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;

      setProgress(p);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () =>
      window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="container-px mx-auto max-w-[1400px]">
        
        {/* Main Navbar */}
        <nav
          className={`
            relative flex items-center justify-between
            rounded-[24px]
            border
            px-4 sm:px-6
            py-3
            transition-all duration-500

            ${
              scrolled
                ? `
                  border-white/10
                  bg-[#0F141C]/88
                  backdrop-blur-xl
                  shadow-[0_18px_50px_rgba(0,0,0,0.45)]
                `
                : `
                  border-transparent
                  bg-transparent
                `
            }
          `}
        >
          {/* Brand */}
          <a
            href="#top"
            className="group flex items-center gap-3"
          >
            {/* Logo Container */}
            <div
              className="
                relative flex h-11 w-11 items-center justify-center
                overflow-hidden rounded-2xl
                border border-white/10
                bg-[#121821]
                shadow-[0_8px_24px_rgba(0,0,0,0.35)]
                transition-all duration-300
                group-hover:scale-[1.03]
                group-hover:border-blue-400/30
              "
            >
              {/* Glow */}
              <div className="absolute inset-0 bg-blue-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <svg
                viewBox="0 0 24 24"
                className="relative z-10 h-5 w-5 text-blue-400"
                fill="currentColor"
                aria-hidden
              >
                <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8z" />
              </svg>
            </div>

            {/* Text */}
            <div className="leading-tight">
              <div className="text-[15px] font-semibold tracking-tight text-white">
                THUNDER
              </div>

              <div className="text-[10px] uppercase tracking-[0.28em] text-[#64748B]">
                Fitness Gym
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="
                  rounded-full
                  px-4 py-2.5
                  text-sm font-medium
                  text-[#94A3B8]
                  transition-all duration-300
                  hover:bg-white/[0.04]
                  hover:text-white
                "
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="
                group relative inline-flex items-center justify-center
                overflow-hidden rounded-2xl
                bg-blue-500
                px-5 py-3
                text-sm font-semibold text-white
                transition-all duration-300
                hover:-translate-y-0.5
                hover:bg-blue-400
                hover:shadow-[0_12px_35px_rgba(59,130,246,0.35)]
              "
            >
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-white/10 to-blue-400/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <span className="relative flex items-center gap-2">
                Contact Us

              </span>
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="
              group flex h-11 w-11 items-center justify-center
              rounded-2xl
              border border-white/10
              bg-[#121821]
              text-[#CBD5E1]
              transition-all duration-300
              hover:border-blue-400/30
              hover:bg-blue-500/10
              hover:text-white
              md:hidden
            "
            aria-label="Toggle menu"
          >
            {open ? (
              <X className="h-5 w-5 transition-transform duration-300 group-hover:rotate-90" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        {open && (
          <div
            className="
              mt-3 overflow-hidden rounded-[24px]
              border border-white/10
              bg-[#0F141C]/95
              p-4 backdrop-blur-xl
              shadow-[0_20px_50px_rgba(0,0,0,0.45)]
              md:hidden
              animate-in fade-in slide-in-from-top-3 duration-300
            "
          >
            <div className="flex flex-col gap-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="
                    rounded-2xl
                    px-4 py-3.5
                    text-sm font-medium
                    text-[#CBD5E1]
                    transition-all duration-300
                    hover:bg-white/[0.04]
                    hover:text-white
                  "
                >
                  {l.label}
                </a>
              ))}
            </div>

            {/* Mobile CTA */}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="
                group relative mt-4 inline-flex w-full items-center
                justify-center overflow-hidden rounded-2xl
                bg-blue-500
                px-5 py-4
                text-sm font-semibold text-white
                transition-all duration-300
                hover:bg-blue-400
                hover:shadow-[0_12px_35px_rgba(59,130,246,0.35)]
              "
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-white/10 to-blue-400/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <span className="relative flex items-center gap-2">
                Contact Us
              </span>
            </a>
          </div>
        )}
      </div>

      {/* Scroll Progress Indicator */}
      <div
        className="
          absolute bottom-0 left-0 h-[2px]
          bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500
          shadow-[0_0_12px_rgba(59,130,246,0.45)]
        "
        style={{
          width: `${progress}%`,
          transition: "width 0.1s linear",
        }}
      />
    </header>
  );
}