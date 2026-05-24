import { useState } from "react";
import {
  MapPin,
  Phone,
  Clock,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";

export function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const name = formData.get("name");
    const phone = formData.get("phone");
    const email = formData.get("email");
    const program = formData.get("program");
    const message = formData.get("message");

    const whatsappMessage = `
 Thunder Fitness Gym Trial Request

 Name: ${name}
 Phone: ${phone}
 Email: ${email}
 Program: ${program}

 Message:
${message}
    `;

    const encodedMessage = encodeURIComponent(whatsappMessage);

    window.open(
      `https://wa.me/919632935282?text=${encodedMessage}`,
      "_blank"
    );

    setSent(true);

    setTimeout(() => {
      setSent(false);
    }, 4000);

    e.currentTarget.reset();
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#0B0F14] text-white"
    >
      {/* Ambient Glow */}
      <div className="absolute right-0 top-0 h-[300px] w-[300px] rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="container-px relative mx-auto max-w-7xl py-20 md:py-28">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12">
          
          {/* Left Side */}
          <div className="lg:col-span-5">
            <div className="eyebrow text-blue-400">
              Visit Thunder Fitness
            </div>

            <h2 className="mt-5 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-white md:text-5xl">
              Find the floor.
              <br />
              Feel the difference.
            </h2>

            <p className="mt-5 max-w-md text-sm leading-relaxed text-[#94A3B8] md:text-base">
              Experience disciplined training, modern fitness programs, and
              personalized guidance in a professional gym environment.
            </p>

            {/* Info Rows */}
            <div className="mt-10 space-y-7">
              <InfoRow
                icon={<MapPin className="h-4 w-4" />}
                title="Address"
              >
                K.S.R.P Opposite Dairy,
                <br />
                Jayanthi Grama Road Circle,
                <br />
                Bhadravathi, Karnataka 577222
              </InfoRow>

              <InfoRow
                icon={<Clock className="h-4 w-4" />}
                title="Working Hours"
              >
                Mon – Sat · 5:00 AM – 10:30 PM
                <br />
                Sunday · 6:00 AM – 12:00 PM
              </InfoRow>
            </div>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              
              {/* Call Button */}
              <a
                href="tel:+919632935282"
                className="
                  group relative inline-flex items-center justify-center
                  overflow-hidden rounded-2xl bg-blue-500 px-6 py-4
                  text-sm font-semibold text-white transition-all duration-300
                  hover:-translate-y-0.5 hover:bg-blue-400
                  hover:shadow-[0_14px_40px_rgba(59,130,246,0.35)]
                "
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-white/10 to-blue-400/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

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

                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </a>

              {/* WhatsApp Button */}
              <a
                href="https://wa.me/919632935282"
                target="_blank"
                rel="noreferrer"
                className="
                  group relative inline-flex items-center justify-center
                  overflow-hidden rounded-2xl border border-white/10
                  bg-white/[0.03] px-6 py-4 text-sm font-semibold
                  text-[#E2E8F0] transition-all duration-300
                  hover:-translate-y-0.5 hover:border-green-400/30
                  hover:bg-green-500/10
                  hover:shadow-[0_10px_35px_rgba(34,197,94,0.18)]
                "
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/0 via-green-400/5 to-green-500/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-[#0B0F14]">
                    <MessageCircle className="h-4 w-4 text-green-400" />
                  </div>

                  <div className="flex flex-col items-start">
                    <span className="text-[10px] uppercase tracking-[0.22em] text-[#94A3B8]">
                      Chat
                    </span>

                    <span className="text-sm font-medium">
                      WhatsApp
                    </span>
                  </div>

                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </a>
            </div>

            {/* Map */}
            <div className="mt-10 overflow-hidden rounded-[28px] border border-white/10 bg-[#121821]">
              <iframe
                title="Thunder Fitness Gym location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d90688.08721831323!2d75.64209682930921!3d13.869766755215617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbbab750f8e54b7%3A0xd833ade80c9aac0b!2sThunder%20Fitness!5e1!3m2!1sen!2sin!4v1779636927770!5m2!1sen!2sin"
                className="h-72 w-full grayscale-[20%] contrast-125"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Open Maps */}
            <a
              href="https://maps.app.goo.gl/gFRQP91aTSLkU3PCA"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm text-blue-300 transition hover:text-blue-200"
            >
              Open in Google Maps
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          {/* Right Side Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="
                rounded-[30px]
                border border-white/10
                bg-[#121821]
                p-7 shadow-[0_0_40px_rgba(59,130,246,0.04)]
                md:p-10
              "
            >
              <h3 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
                Send Enquiry
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-[#94A3B8]">
                Fill your details and continue through WhatsApp to confirm your
                trial session with Thunder Fitness Gym.
              </p>

              {/* Fields */}
              <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
                <Field
                  label="Full Name"
                  name="name"
                  placeholder="Your name"
                  required
                />

                <Field
                  label="Phone"
                  name="phone"
                  type="tel"
                  placeholder="+91"
                  required
                />

                <Field
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="you@email.com"
                  required
                  className="md:col-span-2"
                />

                {/* Program */}
                <div className="md:col-span-2">
                  <label className="mb-2 block text-xs uppercase tracking-[0.22em] text-[#94A3B8]">
                    Program of Interest
                  </label>

                  <select
                    name="program"
                    className="
                      w-full appearance-none rounded-2xl
                      border border-white/10 bg-[#0B0F14]
                      px-4 py-4 text-sm text-white
                      outline-none transition
                      focus:border-blue-400
                    "
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Choose a program
                    </option>

                    {[
                      "HIIT",
                      "Aerobics",
                      "CrossFit",
                      "Personal Training",
                      "Sports Training",
                      "Weight Training",
                      "Nutrition",
                      "Cycling",
                    ].map((p) => (
                      <option key={p}>
                        {p}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div className="md:col-span-2">
                  <label className="mb-2 block text-xs uppercase tracking-[0.22em] text-[#94A3B8]">
                    Message
                  </label>

                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Tell us about your fitness goals..."
                    className="
                      w-full resize-none rounded-2xl
                      border border-white/10 bg-[#0B0F14]
                      px-4 py-4 text-sm text-white
                      placeholder:text-[#64748B]
                      outline-none transition
                      focus:border-blue-400
                    "
                  />
                </div>
              </div>

              {/* Bottom */}
              <div className="mt-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
                <p className="text-xs leading-relaxed text-[#64748B]">
                  By submitting this form you agree to be contacted regarding
                  your trial session and fitness programs.
                </p>

                <button
                  type="submit"
                  className="
                    group relative inline-flex items-center justify-center
                    overflow-hidden rounded-2xl bg-blue-500 px-7 py-4
                    text-sm font-semibold text-white transition-all duration-300
                    hover:-translate-y-0.5 hover:bg-blue-400
                    hover:shadow-[0_14px_40px_rgba(59,130,246,0.35)]
                  "
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-white/10 to-blue-400/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <span className="relative">
                    {sent ? "Opening WhatsApp ✓" : "Continue on WhatsApp"}
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoRow({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/10 bg-[#121821] text-blue-400">
        {icon}
      </span>

      <div>
        <div className="text-xs uppercase tracking-[0.22em] text-[#64748B]">
          {title}
        </div>

        <div className="mt-2 text-sm leading-relaxed text-[#E2E8F0]">
          {children}
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
  className = "",
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
      <label className="mb-2 block text-xs uppercase tracking-[0.22em] text-[#94A3B8]">
        {label}
      </label>

      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        maxLength={120}
        className="
          w-full rounded-2xl border border-white/10
          bg-[#0B0F14] px-4 py-4 text-sm text-white
          placeholder:text-[#64748B]
          outline-none transition
          focus:border-blue-400
        "
      />
    </div>
  );
}