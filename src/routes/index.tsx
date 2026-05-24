import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Stats } from "@/components/site/Stats";
import { Services } from "@/components/site/Services";
import { About } from "@/components/site/About";
import { Trainers } from "@/components/site/Trainers";
import { Gallery } from "@/components/site/Gallery";
import { MembershipCta } from "@/components/site/MembershipCta";
import { Testimonials } from "@/components/site/Testimonials";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Thunder Fitness Gym — Premium Training in Bhadravathi" },
      {
        name: "description",
        content:
          "Thunder Fitness Gym in Bhadravathi — premium HIIT, CrossFit, weight training, personal training, cycling and nutrition coaching. Train with purpose.",
      },
      { property: "og:title", content: "Thunder Fitness Gym — Premium Training in Bhadravathi" },
      {
        property: "og:description",
        content: "Modern equipment, elite coaches, one philosophy — train with purpose.",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-background">
      <Nav />
      <Hero />
      <Stats />
      <Services />
      <About />
      <Trainers />
      <Gallery />
      <MembershipCta />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
