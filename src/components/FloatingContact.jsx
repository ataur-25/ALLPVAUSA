import { useState } from "react";

export default function FloatingContact() {
    const [open, setOpen] = useState(false);

    const toggle = () => setOpen(prev => !prev);

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">

            {/* Backdrop (click outside to close feel) */}
            {open && (
                <div
                    onClick={() => setOpen(false)}
                    className="fixed inset-0 bg-black/10 backdrop-blur-sm"
                />
            )}

            {/* Floating Menu */}
            <div
                className={`
                    flex flex-col gap-3 mb-4 transition-all duration-300 ease-out
                    ${open
                        ? "opacity-100 translate-y-0 scale-100"
                        : "opacity-0 translate-y-5 scale-95 pointer-events-none"}
                `}
            >
                {/* WhatsApp */}
                <a
                    href="https://wa.me/17095079679"
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-3 px-4 py-3 rounded-2xl text-white
                    bg-gradient-to-r from-emerald-500 to-green-600
                    shadow-lg shadow-green-500/20
                    hover:shadow-green-500/40 hover:-translate-y-1
                    transition-all duration-200"
                >
                    <span className="text-lg group-hover:scale-110 transition">💬</span>
                    <span className="text-sm font-medium">WhatsApp</span>
                </a>

                {/* Telegram */}
                <a
                    href="https://t.me/allpvausa"
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-3 px-4 py-3 rounded-2xl text-white
                    bg-gradient-to-r from-sky-500 to-blue-600
                    shadow-lg shadow-blue-500/20
                    hover:shadow-blue-500/40 hover:-translate-y-1
                    transition-all duration-200"
                >
                    <span className="text-lg group-hover:scale-110 transition">✈️</span>
                    <span className="text-sm font-medium">Telegram</span>
                </a>
            </div>

            {/* Main Button */}
            <button
                onClick={toggle}
                aria-label="Open contact menu"
                className="relative w-14 h-14 rounded-full flex items-center justify-center text-white
                bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700
                shadow-2xl shadow-black/30
                hover:scale-110 active:scale-95 transition-all duration-300"
            >
                {/* Pulse */}
                <span className="absolute inset-0 rounded-full animate-ping bg-white/10"></span>

                {/* Icon */}
                <span
                    className={`text-xl transition-transform duration-300 ${open ? "rotate-180" : "rotate-0"
                        }`}
                >
                    {open ? "✕" : "💬"}
                </span>
            </button>
        </div>
    );
}
