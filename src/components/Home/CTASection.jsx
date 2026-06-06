import { ArrowRight } from "lucide-react";

const asset = (path) => new URL(`../../assets/${path}`, import.meta.url).href;

export default function CTASection() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card rounded-3xl overflow-hidden relative">
          <div className="grid lg:grid-cols-2 gap-0 items-center">
            {/* Left - Content */}
            <div className="p-10 lg:p-16 relative z-10">
              {/* Decorative blur orb */}
              <div className="absolute top-0 left-0 w-[250px] h-[250px]">
                <img
                  src={asset("blur-orb.jpg")}
                  alt=""
                  className="w-full h-full object-contain opacity-40 blur-lg"
                />
              </div>

              <div className="relative z-10">
                <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8">
                  Revolutionize your marketplace and{" "}
                  <span className="font-display italic text-white/60">
                    take a bold step forward.
                  </span>
                </h2>
                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href="#"
                    className="inline-flex items-center justify-center px-7 py-3.5 bg-white text-[#0c0c1d] rounded-full text-sm font-semibold hover:bg-white/90 transition-colors"
                  >
                    See Pricing
                  </a>
                  <a
                    href="/contact-us"
                    className="inline-flex items-center gap-2 text-white text-sm font-semibold hover:text-white/80 transition-colors group"
                  >
                    Contact us
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right - 3D Ring Image */}
            <div className="relative hidden lg:block h-full min-h-[400px]">
              <img
                src={asset("cta-ring.jpg")}
                alt="3D Abstract Ring"
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#16162b]/60 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
