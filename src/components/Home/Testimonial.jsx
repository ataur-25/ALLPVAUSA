const asset = (path) => new URL(`../../assets/${path}`, import.meta.url).href;

export default function Testimonial() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Decorative blur orbs */}
          <div className="absolute -top-20 -left-20 w-[300px] h-[300px] rounded-full animate-float">
            <img
              src={asset("blur-orb.jpg")}
              alt=""
              className="w-full h-full object-contain opacity-60 blur-md"
            />
          </div>
          <div className="absolute -bottom-20 -right-10 w-[250px] h-[250px] rounded-full animate-float-delayed">
            <img
              src={asset("blur-orb.jpg")}
              alt=""
              className="w-full h-full object-contain opacity-40 blur-md"
            />
          </div>

          {/* Testimonial Card */}
          <div className="relative glass-card rounded-3xl p-10 lg:p-16 text-center max-w-4xl mx-auto overflow-hidden">
            {/* Inner gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-indigo-900/10" />

            <div className="relative z-10">
              {/* Avatar */}
              <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-4 ring-2 ring-white/20">
                <img
                  src="/src/assets/avatars/david-doe.jpg"
                  alt="David Doe"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Name */}
              <p className="text-white font-medium mb-1">
                David Doe,{" "}
                <span className="text-[#999] font-normal">Co-Founder</span>
              </p>

              {/* Quote */}
              <blockquote className="mt-6 text-2xl lg:text-3xl text-white leading-relaxed">
                "Likewise, our platform provides a secure and efficient way to
                buy and sell all types of accounts
                <span className="font-display italic text-white/70">
                  {" "}
                  — with speed, simplicity, and complete reliability.
                </span>
                <span className="text-[#999]">"</span>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
