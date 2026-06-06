import { useMemo, useState, useEffect, useRef } from 'react';

const Premium404 = () => {
    const [mouse, setMouse] = useState({ x: 0, y: 0, px: 0, py: 0 });
    const mouseRef = useRef({ x: 0, y: 0, px: 0, py: 0 });
    const rafRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            mouseRef.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
            mouseRef.current.y = (e.clientY / window.innerHeight - 0.5) * 2;
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    useEffect(() => {
        const animate = () => {
            const lerp = 0.07;
            mouseRef.current.px += (mouseRef.current.x - mouseRef.current.px) * lerp;
            mouseRef.current.py += (mouseRef.current.y - mouseRef.current.py) * lerp;
            setMouse({ ...mouseRef.current });
            rafRef.current = requestAnimationFrame(animate);
        };
        rafRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(rafRef.current);
    }, []);

    const particles = useMemo(() => Array.from({ length: 24 }, (_, i) => ({
        id: i,
        size: Math.random() * 5 + 2,
        x: Math.random() * 100,
        duration: Math.random() * 10 + 8,
        delay: Math.random() * 8,
        opacity: Math.random() * 0.25 + 0.08,
    })), []);

    const shapes = [
        { id: 1, x: '8%', y: '12%', size: 55, color: 'bg-rose-200', depth: 0.035, rot: 40 },
        { id: 2, x: '87%', y: '18%', size: 38, color: 'bg-amber-200', depth: 0.055, rot: -25 },
        { id: 3, x: '78%', y: '62%', size: 48, color: 'bg-sky-200', depth: 0.04, rot: 55 },
        { id: 4, x: '12%', y: '72%', size: 32, color: 'bg-violet-200', depth: 0.065, rot: -40 },
        { id: 5, x: '52%', y: '8%', size: 22, color: 'bg-emerald-200', depth: 0.025, rot: 20 },
        { id: 6, x: '92%', y: '82%', size: 42, color: 'bg-pink-200', depth: 0.05, rot: -55 },
        { id: 7, x: '30%', y: '85%', size: 28, color: 'bg-teal-200', depth: 0.045, rot: 35 },
    ];

    return (
        <div
            className="relative min-h-screen overflow-hidden select-none"
            style={{
                background: 'linear-gradient(135deg, #FFFBF5 0%, #FFF3EA 20%, #F5F0FF 45%, #FFF5F7 65%, #F0FFF4 85%, #FFFBF5 100%)',
                backgroundSize: '400% 400%',
                animation: 'bgShift 18s ease infinite',
            }}
        >
            {/* ─── Keyframes ─── */}
            <style>{`
        @keyframes bgShift {
          0%,100% { background-position: 0% 50% }
          25% { background-position: 100% 0% }
          50% { background-position: 100% 100% }
          75% { background-position: 0% 100% }
        }
        @keyframes float {
          0%,100% { transform: translateY(0) rotate(0deg) }
          33% { transform: translateY(-14px) rotate(2deg) }
          66% { transform: translateY(7px) rotate(-1.5deg) }
        }
        @keyframes floatSlow {
          0%,100% { transform: translateY(0) }
          50% { transform: translateY(-22px) }
        }
        @keyframes pulseSoft {
          0%,100% { opacity:.55; transform:scale(1) }
          50% { opacity:1; transform:scale(1.08) }
        }
        @keyframes spinSlow { to { transform:rotate(360deg) } }
        @keyframes particleUp {
          0% { transform:translateY(0) translateX(0); opacity:0 }
          8% { opacity:1 }
          88% { opacity:1 }
          100% { transform:translateY(-105vh) translateX(40px); opacity:0 }
        }
        @keyframes ghostBounce {
          0%,100% { transform:translateY(0) rotate(-1.5deg) }
          30% { transform:translateY(-12px) rotate(1deg) }
          60% { transform:translateY(-4px) rotate(-0.5deg) }
          80% { transform:translateY(-10px) rotate(1.5deg) }
        }
        @keyframes signSwing {
          0%,100% { transform:rotate(-6deg) }
          50% { transform:rotate(6deg) }
        }
        @keyframes eyeBlink {
          0%,42%,58%,100% { transform:scaleY(1) }
          50% { transform:scaleY(.08) }
        }
        @keyframes enterUp {
          from { opacity:0; transform:translateY(50px) }
          to { opacity:1; transform:translateY(0) }
        }
        @keyframes enterScale {
          from { opacity:0; transform:scale(.4) rotate(-12deg) }
          to { opacity:1; transform:scale(1) rotate(0) }
        }
        @keyframes dashMove { to { stroke-dashoffset:-20 } }
        @keyframes shimmer {
          0% { background-position:-200% center }
          100% { background-position:200% center }
        }
        @keyframes wobble {
          0%,100% { transform:rotate(-3deg) }
          50% { transform:rotate(3deg) }
        }
        @keyframes waveBottom {
          0%,100% { height:12px }
          50% { height:20px }
        }
        .e1 { animation: enterUp .9s cubic-bezier(.16,1,.3,1) .15s both }
        .e2 { animation: enterUp .9s cubic-bezier(.16,1,.3,1) .35s both }
        .e3 { animation: enterUp .9s cubic-bezier(.16,1,.3,1) .55s both }
        .e4 { animation: enterUp .9s cubic-bezier(.16,1,.3,1) .75s both }
        .e5 { animation: enterScale 1.1s cubic-bezier(.16,1,.3,1) .95s both }
      `}</style>

            {/* ─── Mouse Glow Follower ─── */}
            <div
                className="fixed pointer-events-none z-50 rounded-full"
                style={{
                    width: 350, height: 350,
                    background: 'radial-gradient(circle, rgba(251,191,36,.14) 0%, rgba(251,191,36,.04) 45%, transparent 72%)',
                    transform: `translate(${mouse.px * 80 + 50}vw - 175px, ${mouse.py * 60 + 50}vh - 175px)`,
                    transition: 'transform .35s cubic-bezier(.22,1,.36,1)',
                }}
            />

            {/* ─── Dot Grid ─── */}
            <div
                className="absolute inset-0 opacity-[.12]"
                style={{
                    backgroundImage: 'radial-gradient(circle, #b8a48e 1px, transparent 1px)',
                    backgroundSize: '32px 32px',
                }}
            />

            {/* ─── Parallax Shapes ─── */}
            {shapes.map((s) => (
                <div
                    key={s.id}
                    className={`absolute ${s.color} rounded-2xl opacity-35 blur-[1px]`}
                    style={{
                        width: s.size, height: s.size, left: s.x, top: s.y,
                        transform: `translate(${mouse.px * s.depth * 480}px,${mouse.py * s.depth * 480}px) rotate(${s.rot + mouse.px * 12}deg)`,
                        animation: `float ${5 + s.id * .8}s ease-in-out infinite`,
                        animationDelay: `${s.id * .6}s`,
                    }}
                />
            ))}

            {/* ─── Particles ─── */}
            {particles.map((p) => (
                <div
                    key={p.id}
                    className="absolute rounded-full"
                    style={{
                        width: p.size, height: p.size,
                        left: `${p.x}%`, bottom: '-12px',
                        background: `rgba(217,169,80,${p.opacity})`,
                        animation: `particleUp ${p.duration}s linear infinite`,
                        animationDelay: `${p.delay}s`,
                    }}
                />
            ))}

            {/* ─── Large Blur Blobs ─── */}
            <div
                className="absolute -top-24 -left-24 w-[420px] h-[420px] rounded-full opacity-[.18] blur-3xl pointer-events-none"
                style={{
                    background: 'radial-gradient(circle,#FDE68A,transparent 70%)',
                    transform: `translate(${mouse.px * 18}px,${mouse.py * 18}px)`,
                    transition: 'transform .55s ease-out',
                    animation: 'floatSlow 9s ease-in-out infinite',
                }}
            />
            <div
                className="absolute -bottom-24 -right-24 w-[420px] h-[420px] rounded-full opacity-[.16] blur-3xl pointer-events-none"
                style={{
                    background: 'radial-gradient(circle,#FECDD3,transparent 70%)',
                    transform: `translate(${mouse.px * -14}px,${mouse.py * -14}px)`,
                    transition: 'transform .55s ease-out',
                    animation: 'floatSlow 11s ease-in-out infinite reverse',
                }}
            />
            <div
                className="absolute top-1/4 right-1/5 w-72 h-72 rounded-full opacity-[.1] blur-3xl pointer-events-none"
                style={{
                    background: 'radial-gradient(circle,#BFDBFE,transparent 70%)',
                    transform: `translate(${mouse.px * 22}px,${mouse.py * 22}px)`,
                    transition: 'transform .5s ease-out',
                    animation: 'float 13s ease-in-out infinite',
                }}
            />

            {/* ═══════════════ MAIN CONTENT ═══════════════ */}
            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-14">

                {/* ── OOPS! ── */}
                <div className="e1 mb-1">
                    <h1
                        className="text-5xl md:text-7xl lg:text-[5.5rem] font-black tracking-tighter leading-none"
                        style={{
                            fontFamily: "'Inter','SF Pro Display',system-ui,sans-serif",
                            background: 'linear-gradient(135deg,#F59E0B,#EF4444,#F59E0B)',
                            backgroundSize: '200% auto',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            animation: 'shimmer 3.5s linear infinite',
                            transform: `translate(${mouse.px * 4}px,${mouse.py * 3}px) rotate(${mouse.px * 1.2}deg)`,
                            transition: 'transform .35s ease-out',
                        }}
                    >
                        OOPS!
                    </h1>
                </div>

                {/* ── 404 ── */}
                <div className="e2 relative my-3 md:my-5">
                    <div
                        className="absolute inset-0 blur-3xl opacity-[.18]"
                        style={{
                            background: 'linear-gradient(135deg,#FBBF24,#F87171)',
                            transform: `translate(${mouse.px * 10}px,${mouse.py * 10}px)`,
                            transition: 'transform .45s ease-out',
                        }}
                    />
                    <h2
                        className="relative text-[110px] md:text-[170px] lg:text-[230px] font-black leading-none"
                        style={{
                            fontFamily: "'Inter','SF Pro Display',system-ui,sans-serif",
                            background: 'linear-gradient(180deg,#1e1e32 0%,#52527a 45%,#1e1e32 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            transform: `translate(${mouse.px * 6}px,${mouse.py * 6}px) rotateX(${mouse.py * 4}deg) rotateY(${mouse.px * 4}deg)`,
                            transition: 'transform .4s ease-out',
                        }}
                    >
                        404
                    </h2>
                    <svg className="absolute top-1/2 left-0 w-full -translate-y-1/2 opacity-[.18]" height="4">
                        <line x1="0" y1="2" x2="100%" y2="2" stroke="#EF4444" strokeWidth="3" strokeDasharray="8 14"
                            style={{ animation: 'dashMove 1s linear infinite' }} />
                    </svg>
                </div>

                {/* ── Ghost Character ── */}
                <div
                    className="e5 relative mb-7"
                    style={{
                        transform: `translate(${mouse.px * 2.5}px,${mouse.py * 2.5}px)`,
                        transition: 'transform .5s ease-out',
                    }}
                >
                    <div style={{ animation: 'ghostBounce 3.2s ease-in-out infinite' }}>
                        <div className="relative">
                            {/* Ghost body */}
                            <div
                                className="relative w-36 h-40 md:w-44 md:h-48 bg-white rounded-t-[50%]"
                                style={{
                                    boxShadow: '0 24px 64px rgba(0,0,0,.07), 0 0 0 1px rgba(0,0,0,.035), 0 8px 24px rgba(0,0,0,.04)',
                                }}
                            >
                                {/* Eyes */}
                                <div className="absolute top-14 left-1/2 -translate-x-1/2 flex gap-7">
                                    {[0, 1].map((i) => (
                                        <div
                                            key={i}
                                            className="relative w-[22px] h-[26px] bg-slate-800 rounded-full overflow-hidden"
                                            style={{ animation: `eyeBlink ${3.5 + i * .5}s ease-in-out infinite`, animationDelay: `${i * .12}s` }}
                                        >
                                            <div
                                                className="absolute w-[11px] h-[11px] bg-white rounded-full"
                                                style={{
                                                    top: '50%', left: '50%',
                                                    transform: `translate(calc(-50% + ${mouse.px * 4.5}px), calc(-50% + ${mouse.py * 3.5}px))`,
                                                    transition: 'transform .12s ease-out',
                                                }}
                                            />
                                        </div>
                                    ))}
                                </div>
                                {/* Mouth */}
                                <div className="absolute top-[105px] left-1/2 -translate-x-1/2 w-[14px] h-[14px] bg-slate-800 rounded-full" />
                                {/* Blush */}
                                <div className="absolute top-[90px] left-4 w-6 h-3.5 bg-rose-200/50 rounded-full" />
                                <div className="absolute top-[90px] right-4 w-6 h-3.5 bg-rose-200/50 rounded-full" />
                            </div>

                            {/* Ghost bottom waves */}
                            <div className="absolute -bottom-[2px] left-0 w-full flex" style={{ height: 20 }}>
                                {[0, 1, 2, 3, 4, 5].map((i) => (
                                    <div
                                        key={i}
                                        className="flex-1 bg-white"
                                        style={{
                                            borderBottomLeftRadius: i % 2 === 0 ? '50%' : '0',
                                            borderBottomRightRadius: i % 2 === 0 ? '0' : '50%',
                                            animation: `waveBottom ${1.8 + i * .25}s ease-in-out infinite`,
                                            animationDelay: `${i * .12}s`,
                                            boxShadow: i === 0 ? '-2px 5px 12px rgba(0,0,0,.04)' : i === 5 ? '2px 5px 12px rgba(0,0,0,.04)' : 'none',
                                        }}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Sign */}
                        <div
                            className="absolute -right-[72px] md:-right-[88px] top-8"
                            style={{ animation: 'signSwing 2.8s ease-in-out infinite', transformOrigin: 'left center' }}
                        >
                            <div className="absolute left-0 top-0 w-[5px] h-24 bg-amber-800/50 rounded-full -translate-x-1/2" />
                            <div
                                className="ml-3 px-3.5 py-2.5 bg-amber-50/90 border-2 border-amber-200/80 rounded-xl backdrop-blur-sm"
                                style={{ boxShadow: '0 6px 20px rgba(0,0,0,.05), inset 0 1px 0 rgba(255,255,255,.85)' }}
                            >
                                <p className="text-[9px] md:text-[11px] font-extrabold text-amber-800 whitespace-nowrap leading-tight tracking-wide">
                                    YOU LOST! 😈
                                </p>
                                <p className="text-[8px] md:text-[10px] text-amber-600/80 whitespace-nowrap font-medium mt-0.5">
                                    MUHAHAHA...
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── Subtitle ── */}
                <div className="e3 text-center mb-2">
                    <p className="text-lg md:text-2xl lg:text-[1.7rem] font-semibold text-slate-700 tracking-tight leading-snug">
                        You Came to the Wrong Neighborhood!
                    </p>
                </div>

                {/* ── Description ── */}
                <div className="e3 text-center mb-7 max-w-lg">
                    <p className="text-sm md:text-[15px] text-slate-400 leading-relaxed">
                        The page you're looking for has vanished into the digital void.
                        It might have been moved, deleted, or never existed at all.
                    </p>
                </div>

                {/* ── Divider ── */}
                <div className="e3 flex items-center gap-3 mb-8">
                    <div className="w-14 h-px bg-gradient-to-r from-transparent to-slate-300/60" />
                    <div className="w-2 h-2 rounded-full bg-amber-400" style={{ animation: 'pulseSoft 2.2s ease-in-out infinite' }} />
                    <div className="w-14 h-px bg-gradient-to-l from-transparent to-slate-300/60" />
                </div>

                {/* ── GO HOME Button ── */}
                <div className="e4" style={{ transform: `translateY(${mouse.py * 2}px)`, transition: 'transform .4s ease-out' }}>
                    <button
                        className="group relative px-12 py-4 bg-slate-900 text-white font-semibold text-sm md:text-[15px] rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-slate-900/20 hover:scale-105 active:scale-95 cursor-pointer"
                        onClick={() => (window.location.href = '/')}
                    >
                        <div
                            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                            style={{
                                background: 'linear-gradient(105deg, transparent 38%, rgba(255,255,255,.14) 44%, rgba(255,255,255,.14) 56%, transparent 62%)',
                                backgroundSize: '200% 100%',
                                animation: 'shimmer 2.2s linear infinite',
                            }}
                        />
                        <span className="relative z-10 flex items-center gap-2.5">
                            GO HOME
                            <svg className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                        </span>
                    </button>
                </div>

                {/* ── Quick Links ── */}
                <div className="e4 flex items-center gap-7 mt-9">
                    {['Dashboard', 'Help', 'Contact'].map((link) => (
                        <a
                            key={link}
                            href="#"
                            className="text-xs md:text-[13px] text-slate-400 hover:text-slate-700 transition-colors duration-300 relative group"
                        >
                            {link}
                            <span className="absolute -bottom-1 left-0 w-0 h-px bg-slate-600 transition-all duration-300 group-hover:w-full" />
                        </a>
                    ))}
                </div>
            </div>

            {/* ─── Corner Decorations ─── */}
            <div className="absolute top-7 left-7 opacity-25" style={{ animation: 'spinSlow 22s linear infinite' }}>
                <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
                    <rect x="2" y="2" width="34" height="34" rx="8" stroke="#F59E0B" strokeWidth="1.5" strokeDasharray="4 4" />
                </svg>
            </div>
            <div className="absolute top-7 right-7 opacity-25" style={{ animation: 'spinSlow 28s linear infinite reverse' }}>
                <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
                    <circle cx="19" cy="19" r="15" stroke="#EF4444" strokeWidth="1.5" strokeDasharray="4 4" />
                </svg>
            </div>
            <div className="absolute bottom-7 left-7 opacity-20">
                <div className="flex gap-1.5">
                    {[0, 1, 2].map((i) => (
                        <div key={i} className="w-[6px] h-[6px] rounded-full bg-slate-400"
                            style={{ animation: 'pulseSoft 2s ease-in-out infinite', animationDelay: `${i * .35}s` }} />
                    ))}
                </div>
            </div>
            <div className="absolute bottom-7 right-7 opacity-20" style={{ animation: 'wobble 3.5s ease-in-out infinite' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="1.5">
                    <path d="M12 2L15 8L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8L12 2Z" />
                </svg>
            </div>
        </div>
    );
};

export default Premium404;
