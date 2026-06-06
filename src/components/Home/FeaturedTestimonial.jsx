const asset = (path) => new URL(`../../assets/${path}`, import.meta.url).href;

export default function FeaturedTestimonial() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card rounded-3xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left - Quote */}
            <div className="p-10 lg:p-16 flex flex-col justify-center relative">
              {/* Decorative blur orb */}
              <div className="absolute top-10 left-10 w-[200px] h-[200px]">
                <img
                  src={asset("blur-orb.jpg")}
                  alt=""
                  className="w-full h-full object-contain opacity-40 blur-lg"
                />
              </div>

              <div className="relative z-10">
                <blockquote className="text-2xl lg:text-3xl text-white leading-relaxed mb-8">
                  "They helped us understand our brand identity and{" "}
                  <span className="font-display italic text-white/60">
                    turn it into solutions that truly
                  </span>
                  <span className="font-display italic text-white/60">
                    {" "}
                    connect with our Customers.
                  </span>
                  "
                </blockquote>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-white/20">
                    <img
                      src="/src/assets/avatars/sophia.jpg"
                      alt="Sophia Smith"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-white font-medium">
                      Sophia Smith,{" "}
                      <span className="text-[#999] font-normal">
                        Marketing Logoispum
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Image */}
            <div className="relative hidden lg:block">
              <img
                src={asset("sophia-large.jpg")}
                alt="Sophia Smith"
                className="w-full h-full object-cover"
              />
              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#16162b]/40 to-transparent" />
              {/* Logo overlay */}
              <div className="absolute bottom-8 left-8 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <span className="text-white font-semibold text-sm">
                  Logoipsum
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
