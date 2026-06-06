export default function ContactUs() {
  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center px-4 py-16">
      <div className="max-w-3xl w-full">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold tracking-wide">
            Contact Us
          </h1>
          <p className="text-white/50 mt-3 text-sm">
            Reach us instantly via WhatsApp or Telegram
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* WhatsApp */}
          <a
            href="https://wa.me/17095079679"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-4 px-5 py-4 rounded-2xl text-white
            bg-gradient-to-r from-emerald-500 to-green-600
            shadow-lg shadow-green-500/20
            hover:shadow-green-500/40 hover:-translate-y-1
            transition-all duration-200"
          >
            <span className="text-2xl group-hover:scale-110 transition">
              https://img.icons8.com/?size=100&id=964RahB4l606&format=png&color=000000
            </span>
            <div>
              <p className="text-sm font-semibold">WhatsApp</p>
              <p className="text-xs text-white/80">Chat with us instantly</p>
            </div>
          </a>

          {/* Telegram */}
          <a
            href="https://t.me/allpvausa"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-4 px-5 py-4 rounded-2xl text-white
            bg-gradient-to-r from-sky-500 to-blue-600
            shadow-lg shadow-blue-500/20
            hover:shadow-blue-500/40 hover:-translate-y-1
            transition-all duration-200"
          >
            <span className="text-2xl group-hover:scale-110 transition"></span>
            <div>
              <p className="text-sm font-semibold">Telegram</p>
              <p className="text-xs text-white/80">Message us on Telegram</p>
            </div>
          </a>
        </div>

        {/* Footer note */}
        <p className="text-center text-white/40 text-xs mt-10">
          We usually reply within a few minutes
        </p>
      </div>
    </section>
  );
}
