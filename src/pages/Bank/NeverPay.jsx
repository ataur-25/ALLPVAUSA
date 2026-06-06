import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiShield, FiClock, FiStar, FiArrowLeft } from 'react-icons/fi';

export default function NeverPay() {
    return (
        <div className="min-h-screen pt-28 pb-20 bg-slate-50 dark:bg-slate-950">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">

                {/* Breadcrumb */}
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-indigo-600 mb-8"
                >
                    <FiArrowLeft /> Back to Home
                </Link>

                <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <div className="inline-block px-4 py-1.5 bg-emerald-100 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-full text-sm font-semibold mb-4">
                            Bank-2
                        </div>
                        <h1 className="text-5xl font-bold text-slate-900 dark:text-white mb-6">
                            Buy <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600">Verified Never Pay Accounts</span>
                        </h1>
                        <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
                            100% Verified NeverPay accounts with full access. Instant delivery, high balance ready accounts available.
                        </p>

                        <div className="flex gap-4">
                            <button className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl font-semibold text-lg">
                                Buy Now
                            </button>
                            <button className="px-8 py-4 border border-slate-300 dark:border-slate-700 rounded-2xl font-semibold">
                                Chat on Telegram
                            </button>
                        </div>
                    </motion.div>

                    <div className="relative">
                        <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-xl">
                            <div className="h-80 bg-gradient-to-br from-green-400 to-emerald-600 rounded-2xl flex items-center justify-center">
                                <span className="text-6xl font-bold text-white drop-shadow-lg">NeverPay</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Features */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { icon: <FiCheckCircle className="text-emerald-500" />, title: "Fully Verified", desc: "Phone + Email Verified" },
                        { icon: <FiShield className="text-indigo-500" />, title: "Secure & Safe", desc: "No previous violations" },
                        { icon: <FiClock className="text-orange-500" />, title: "Instant Delivery", desc: "Within 5 minutes" },
                        { icon: <FiStar className="text-amber-500" />, title: "Premium Quality", desc: "High quality accounts" }
                    ].map((f, i) => (
                        <motion.div key={i} whileHover={{ y: -5 }} className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
                            <div className="text-3xl mb-4">{f.icon}</div>
                            <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
                            <p className="text-slate-600 dark:text-slate-400">{f.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
