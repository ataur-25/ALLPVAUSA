import { useEffect, useRef, useState } from "react";

function useCountUp(target, shouldStart, duration = 1500) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;

    let start = 0;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [shouldStart, target, duration]);

  return count;
}

// 🔥 format function (M / B logic)
function formatValue(value, suffix, prefix) {
  if (suffix === "B") {
    return `${prefix || ""}${(value / 1).toFixed(1)}B`;
  }

  if (suffix === "M") {
    return `${prefix || ""}${(value / 1).toFixed(1)}M`;
  }

  return `${prefix || ""}${Math.floor(value)}${suffix || ""}`;
}

export default function Achievements() {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  const stats = [
    { value: 150, label: "Digital products launched", suffix: "+" },
    { value: 95, label: "Average client retention rate", suffix: "%" },
    { value: 1, label: "Client revenue growth", prefix: "$", suffix: "B" },
    { value: 5, label: "Teams working globally", suffix: "+" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.3 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white">
              Our <span className="text-white/40">achievements</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-8 lg:gap-12">
            {stats.map((stat, index) => {
              const count = useCountUp(stat.value, inView, 1500);

              return (
                <div key={index}>
                  <p className="text-5xl sm:text-6xl lg:text-7xl font-bold gradient-text mb-2">
                    {formatValue(count, stat.suffix, stat.prefix)}
                  </p>
                  <p className="text-[#999] text-sm">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
