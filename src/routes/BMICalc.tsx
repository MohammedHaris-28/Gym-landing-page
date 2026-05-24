import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Calculator, Scale, Ruler, ArrowRight } from "lucide-react";

import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/BMICalc")({
  head: () => ({
    meta: [
      {
        title: "BMI Calculator — Thunder Fitness Gym",
      },
      {
        name: "description",
        content:
          "Calculate your Body Mass Index instantly with Thunder Fitness Gym's premium BMI calculator.",
      },
    ],
  }),
  component: BMICalculatorPage,
});

function BMICalculatorPage() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const bmiData = useMemo(() => {
    const h = Number(height) / 100;
    const w = Number(weight);

    if (!h || !w) return null;

    const bmi = w / (h * h);

    let category = "";
    let color = "";

    if (bmi < 18.5) {
      category = "Underweight";
      color = "text-cyan-400";
    } else if (bmi < 25) {
      category = "Healthy";
      color = "text-green-400";
    } else if (bmi < 30) {
      category = "Overweight";
      color = "text-yellow-400";
    } else {
      category = "Obese";
      color = "text-red-400";
    }

    return {
      bmi: bmi.toFixed(1),
      category,
      color,
    };
  }, [height, weight]);

  return (
    <main className="min-h-screen bg-[#0B0F14] text-white">
      <Nav />

      {/* Hero */}
      <section className="relative overflow-hidden pt-36">
        
        {/* Ambient Glow */}
        <div className="absolute left-1/2 top-0 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[140px]" />

        <div className="container-px relative mx-auto max-w-7xl py-20 md:py-28">
          
          {/* Header */}
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-blue-300">
              Health & Fitness Tool
            </div>

            <h1 className="mt-6 text-balance text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
              BMI Calculator
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-[#94A3B8] md:text-lg">
              Measure your Body Mass Index instantly and understand your fitness
              condition with Thunder Fitness Gym’s premium health calculator.
            </p>
          </div>

          {/* Calculator Card */}
          <div className="mx-auto mt-16 max-w-5xl overflow-hidden rounded-[32px] border border-white/10 bg-[#121821] shadow-[0_0_60px_rgba(59,130,246,0.06)]">
            
            <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr]">
              
              {/* Left Side */}
              <div className="relative overflow-hidden border-b border-white/10 bg-[#0F141C] p-8 md:p-10 lg:border-b-0 lg:border-r">
                
                {/* Decorative Glow */}
                <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-blue-500/10 blur-[100px]" />

                <div className="relative">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400 ring-1 ring-blue-500/20">
                    <Calculator className="h-6 w-6" />
                  </div>

                  <h2 className="mt-6 text-3xl font-semibold tracking-tight text-white">
                    Calculate Your BMI
                  </h2>

                  <p className="mt-4 max-w-md text-sm leading-relaxed text-[#94A3B8]">
                    Enter your height and weight to instantly calculate your
                    Body Mass Index and understand your health category.
                  </p>

                  {/* BMI Scale */}
                  <div className="mt-10 space-y-4">
                    
                    <ScaleItem
                      label="Underweight"
                      range="Below 18.5"
                      color="bg-cyan-400"
                    />

                    <ScaleItem
                      label="Healthy"
                      range="18.5 – 24.9"
                      color="bg-green-400"
                    />

                    <ScaleItem
                      label="Overweight"
                      range="25 – 29.9"
                      color="bg-yellow-400"
                    />

                    <ScaleItem
                      label="Obese"
                      range="30+"
                      color="bg-red-400"
                    />
                  </div>
                </div>
              </div>

              {/* Right Side */}
              <div className="p-8 md:p-10 lg:p-12">
                
                {/* Height */}
                <div>
                  <label className="mb-3 block text-xs uppercase tracking-[0.22em] text-[#94A3B8]">
                    Height (cm)
                  </label>

                  <div className="relative">
                    <Ruler className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-blue-400" />

                    <input
                      type="number"
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                      placeholder="Enter your height"
                      className="
                        h-14 w-full rounded-2xl border border-white/10
                        bg-[#0B0F14] pl-12 pr-4 text-white
                        outline-none transition-all duration-300
                        placeholder:text-[#64748B]
                        focus:border-blue-400
                        focus:ring-4 focus:ring-blue-500/10
                      "
                    />
                  </div>
                </div>

                {/* Weight */}
                <div className="mt-6">
                  <label className="mb-3 block text-xs uppercase tracking-[0.22em] text-[#94A3B8]">
                    Weight (kg)
                  </label>

                  <div className="relative">
                    <Scale className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-blue-400" />

                    <input
                      type="number"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                      placeholder="Enter your weight"
                      className="
                        h-14 w-full rounded-2xl border border-white/10
                        bg-[#0B0F14] pl-12 pr-4 text-white
                        outline-none transition-all duration-300
                        placeholder:text-[#64748B]
                        focus:border-blue-400
                        focus:ring-4 focus:ring-blue-500/10
                      "
                    />
                  </div>
                </div>

                {/* Result */}
                <div className="mt-10 rounded-[28px] border border-white/10 bg-[#0B0F14] p-8">
                  
                  <div className="text-xs uppercase tracking-[0.22em] text-[#64748B]">
                    Your Result
                  </div>

                  {bmiData ? (
                    <>
                      <div className="mt-5 flex items-end gap-3">
                        <span className="text-6xl font-semibold tracking-tight text-white">
                          {bmiData.bmi}
                        </span>

                        <span
                          className={`mb-2 text-sm font-medium ${bmiData.color}`}
                        >
                          {bmiData.category}
                        </span>
                      </div>

                      <p className="mt-5 max-w-md text-sm leading-relaxed text-[#94A3B8]">
                        Your BMI indicates that your body weight falls under the{" "}
                        <span className={`font-medium ${bmiData.color}`}>
                          {bmiData.category}
                        </span>{" "}
                        category.
                      </p>
                    </>
                  ) : (
                    <div className="mt-5">
                      <div className="text-5xl font-semibold text-white/20">
                        --.-
                      </div>

                      <p className="mt-4 text-sm text-[#64748B]">
                        Enter your height and weight to calculate your BMI.
                      </p>
                    </div>
                  )}
                </div>

                {/* CTA */}
                <a
                  href="/" 
                  className="
                    group relative mt-8 inline-flex items-center
                    justify-center overflow-hidden rounded-2xl
                    bg-blue-500 px-6 py-4 text-sm font-semibold text-white
                    transition-all duration-300
                    hover:-translate-y-0.5
                    hover:bg-blue-400
                    hover:shadow-[0_14px_40px_rgba(59,130,246,0.35)]
                  "
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-white/10 to-blue-400/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <span className="relative flex items-center gap-2">
                    Start Your Fitness Journey

                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function ScaleItem({
  label,
  range,
  color,
}: {
  label: string;
  range: string;
  color: string;
}) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4">
      <div className="flex items-center gap-3">
        <span className={`h-3 w-3 rounded-full ${color}`} />

        <span className="text-sm font-medium text-white">
          {label}
        </span>
      </div>

      <span className="text-sm text-[#94A3B8]">
        {range}
      </span>
    </div>
  );
}