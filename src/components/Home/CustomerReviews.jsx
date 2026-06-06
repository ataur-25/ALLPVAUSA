import { Star } from "lucide-react";

const asset = (path) => new URL(`../../assets/${path}`, import.meta.url).href;

export default function CustomerReviews() {
  const reviews = [
    {
      quote:
        '"Working with them was a game-changer — they brought clarity to our messaging and gave us a brand we\'re truly proud of"',
      name: "Clara Jensen",
      title: "Marketing Director",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      quote:
        '"Their team didn\'t just deliver designs; they delivered strategy, purpose, and results. We saw immediate engagement improvement"',
      name: "David Morales",
      title: "Head of Product",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      quote:
        '"From day one, they understood our vision and turned it into something far beyond what we imagined. Absolute professionals"',
      name: "Leila Khan",
      title: "Co Founder",
      avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
      quote:
        '"Working with them was a game-changer — they brought clarity to our messaging and gave us a brand we\'re truly proud of"',
      name: "Clayton Phillips",
      title: "Marketing Director",
      avatar: "https://randomuser.me/api/portraits/men/30.jpg",
    },
  ];

  const Row = ({ direction = "left" }) => {
    const animationClass =
      direction === "left" ? "animate-scroll-left" : "animate-scroll-right";

    return (
      <div className="overflow-hidden w-full group">
        <div
          className={`flex w-max gap-6 ${animationClass} group-hover:[animation-play-state:paused]`}
        >
          {[...reviews, ...reviews].map((review, index) => (
            <div
              key={index}
              className="
                flex-shrink-0
                w-[260px] sm:w-[300px] md:w-[340px]
                rounded-2xl p-5 sm:p-6
                bg-white/5 border border-white/10
                backdrop-blur-md
                transition-all duration-300
                hover:-translate-y-2 hover:bg-white/10 hover:shadow-xl
              "
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-white text-white" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-white/80 text-sm leading-relaxed mb-6">
                {review.quote}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-white/20 flex-shrink-0">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-white text-sm font-medium">
                    {review.name}
                  </p>
                  <p className="text-[#999] text-xs">{review.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section className="py-20 sm:py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header (UNCHANGED TEXT) */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-12">
          Customer{" "}
          <span className="font-display italic text-white/40">reviews</span>
        </h2>

        {/* Rows */}
        <div className="space-y-6 sm:space-y-8">
          <Row direction="left" />
          <Row direction="right" />
        </div>
      </div>

      {/* Smooth infinite animation */}
      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll-left {
          animation: scroll-left 28s linear infinite;
          will-change: transform;
        }

        .animate-scroll-right {
          animation: scroll-right 28s linear infinite;
          will-change: transform;
        }

        @media (max-width: 640px) {
          .animate-scroll-left,
          .animate-scroll-right {
            animation-duration: 22s;
          }
        }
      `}</style>
    </section>
  );
}
