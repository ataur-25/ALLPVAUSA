import { useState } from 'react';
import { motion } from 'framer-motion';
import {
    FiPhone as Voice,
    FiShield as Shield,
    FiClock as Clock,
    FiAward as Award,
    FiCheck as Check,
    FiShoppingCart as ShoppingCart
} from 'react-icons/fi';

// ── Purchase Modal ─────────────────────────────
function PurchaseModal({ isOpen, product, onClose }) {
    if (!isOpen || !product) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-[#0d1b2e] border border-white/10 rounded-3xl p-8 max-w-md w-full relative"
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-white"
                >
                    ✕
                </button>

                <h2 className="text-2xl font-black text-white">
                    {product.title}
                </h2>

                <p className="text-gray-400 text-sm mt-2">
                    {product.desc}
                </p>

                <div className="text-3xl font-black text-[#34A853] mt-5">
                    {product.price}
                </div>

                <a
                    href="https://t.me/your_telegram"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block mt-6 text-center py-4 rounded-2xl bg-gradient-to-r from-[#34A853] to-[#4285F4] text-white font-black hover:scale-105 transition"
                >
                    Order Now
                </a>
            </motion.div>
        </div>
    );
}

// ── Products ─────────────────────────────
const products = [
    {
        title: "Fresh Google Voice Accounts",
        price: "$10.00",
        desc: "Freshly created Google Voice accounts with instant access.",
        img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200",
        stock: "4.8K In Stock",
        badge: "Fresh",
    },
    {
        title: "Aged Google Voice Accounts",
        price: "$35.00",
        desc: "Trusted aged Google Voice accounts with stable activity.",
        img: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1200",
        stock: "2K In Stock",
        badge: "Best Seller",
    },
    {
        title: "Verified Google Voice Accounts",
        price: "$65.00",
        desc: "Fully verified Google Voice accounts with recovery access.",
        img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200",
        stock: "950 In Stock",
        badge: "Verified",
    },
    {
        title: "Bulk Google Voice Package",
        price: "$450",
        desc: "Bulk Google Voice accounts for agencies & automation.",
        img: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200",
        stock: "Bulk Ready",
        badge: "Bulk",
    },
];

export default function GoogleVoiceAccounts() {
    const [selectedProduct, setSelectedProduct] = useState(null);

    return (
        <>
            <section className="relative min-h-screen bg-[#050816] text-white py-24 overflow-hidden">

                {/* Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#071a12] via-[#050816] to-[#06111d]" />

                {/* Google Style Grid */}
                <div className="absolute inset-0 bg-[radial-gradient(#34A85330_1px,transparent_1px)] bg-[length:60px_60px] opacity-40" />

                <div className="container mx-auto px-6 relative z-10">

                    {/* Heading */}
                    <div className="text-center mb-20">
                        <h1 className="text-4xl md:text-7xl font-black">
                            Buy Verified{" "}
                            <span className="bg-gradient-to-r from-[#34A853] to-[#4285F4] bg-clip-text text-transparent">
                                Google Voice Accounts
                            </span>
                        </h1>

                        <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                            Premium quality Google Voice accounts with secure access,
                            instant delivery and trusted authenticity.
                        </p>
                    </div>

                    {/* Trust Bar */}
                    <div className="flex flex-wrap justify-center gap-8 mb-16 text-sm text-gray-400">

                        <div className="flex items-center gap-3">
                            <Shield className="text-[#34A853]" />
                            Verified Accounts
                        </div>

                        <div className="flex items-center gap-3">
                            <Clock className="text-[#4285F4]" />
                            Instant Delivery
                        </div>

                        <div className="flex items-center gap-3">
                            <Award className="text-[#FBBC05]" />
                            Secure Access
                        </div>
                    </div>

                    {/* Cards */}
                    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

                        {products.map((item, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -10, scale: 1.02 }}
                                className="group relative rounded-[30px] overflow-hidden border border-white/10 bg-white/[0.04] backdrop-blur-xl"
                            >
                                {/* badge */}
                                <div className="absolute top-4 right-4 z-20 px-3 py-1 rounded-full bg-[#34A853]/20 text-[#9FF0B6] text-xs font-bold">
                                    {item.badge}
                                </div>

                                {/* image */}
                                <div className="h-52 overflow-hidden relative">
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent" />
                                </div>

                                {/* content */}
                                <div className="p-6">

                                    <h3 className="text-xl font-black flex items-center gap-2">
                                        <Voice className="text-[#34A853]" />
                                        {item.title}
                                    </h3>

                                    <p className="text-sm text-gray-400 mt-2">
                                        {item.desc}
                                    </p>

                                    <div className="mt-3 text-[#34A853] font-bold text-sm">
                                        {item.stock}
                                    </div>

                                    {/* features */}
                                    <div className="mt-4 space-y-2">
                                        {[
                                            "Instant Delivery",
                                            "Secure Login",
                                            "High Quality"
                                        ].map((f, idx) => (
                                            <div
                                                key={idx}
                                                className="flex items-center gap-2 text-sm text-gray-300"
                                            >
                                                <Check className="w-4 h-4 text-[#34A853]" />
                                                {f}
                                            </div>
                                        ))}
                                    </div>

                                    {/* bottom */}
                                    <div className="mt-6 flex items-center justify-between">
                                        <div className="text-3xl font-black text-[#34A853]">
                                            {item.price}
                                        </div>

                                        <button
                                            onClick={() => setSelectedProduct(item)}
                                            className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-[#34A853] to-[#4285F4] text-white text-xs font-black uppercase hover:scale-105 transition"
                                        >
                                            <ShoppingCart className="w-4 h-4" />
                                            Buy
                                        </button>
                                    </div>
                                </div>

                                {/* Google Hover Glow */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-tr from-[#34A853]/20 to-[#4285F4]/20" />

                                {/* Border Glow */}
                                <div className="absolute inset-0 rounded-[30px] border border-[#34A853]/0 group-hover:border-[#34A853]/40 transition duration-500" />
                            </motion.div>
                        ))}
                    </div>

                    {/* Footer */}
                    <div className="mt-24 text-center text-gray-400 text-sm">
                        All Google Voice accounts are tested • Instant delivery • 24/7 support
                    </div>
                </div>
            </section>

            {/* Modal */}
            <PurchaseModal
                isOpen={!!selectedProduct}
                product={selectedProduct}
                onClose={() => setSelectedProduct(null)}
            />
        </>
    );
}