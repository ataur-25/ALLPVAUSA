import { useState } from "react";

import {
    Copy,
    CheckCircle2,
    Wallet,
    ShieldCheck,
    Bitcoin,
} from "lucide-react";

import { motion } from "framer-motion";
import { QRCodeCanvas } from "qrcode.react";

const wallets = [
    {
        coin: "USDT",
        network: "TRC20",
        color: "from-green-500 to-emerald-500",
        address: "YOUR_TRC20_ADDRESS",
    },
    {
        coin: "USDT",
        network: "BEP20",
        color: "from-yellow-500 to-orange-500",
        address: "YOUR_BEP20_ADDRESS",
    },
    {
        coin: "BTC",
        network: "Bitcoin",
        color: "from-orange-500 to-amber-500",
        address: "YOUR_BTC_ADDRESS",
    },
    {
        coin: "ETH",
        network: "ERC20",
        color: "from-cyan-500 to-blue-500",
        address: "YOUR_ETH_ADDRESS",
    },
    {
        coin: "SOL",
        network: "Solana",
        color: "from-purple-500 to-pink-500",
        address: "YOUR_SOL_ADDRESS",
    },
];

const supportedWallets = [
    "Binance",
    "Trust Wallet",
    "MetaMask",
    "Bybit",
    "Bitget",
    "OKX",
    "SafePal",
    "RedotPay",
    "Ledger",
    "Phantom",
];

export default function CryptoGateway() {
    const [selected, setSelected] = useState(wallets[0]);
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        await navigator.clipboard.writeText(selected.address);

        setCopied(true);

        setTimeout(() => {
            setCopied(false);
        }, 2000);
    };

    return (
        <div className="min-h-screen bg-black text-white overflow-hidden relative">

            {/* BACKGROUND */}
            <div className="absolute inset-0">

                <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-green-500/20 blur-[120px] rounded-full"></div>

                <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-cyan-500/20 blur-[120px] rounded-full"></div>

            </div>

            <div className="relative z-10 max-w-7xl mx-auto p-6">

                {/* HEADER */}
                <motion.div
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-3 bg-zinc-900/60 border border-zinc-800 backdrop-blur-xl px-5 py-2 rounded-full mb-6">

                        <ShieldCheck className="text-green-400" />

                        <span className="text-zinc-300">
                            Secure Crypto Payment Gateway
                        </span>

                    </div>

                    <h1 className="text-6xl md:text-7xl font-black leading-tight mb-5">

                        Pay With

                        <span className="bg-gradient-to-r from-green-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                            {" "}
                            Crypto
                        </span>

                    </h1>

                    <p className="text-zinc-400 text-xl max-w-2xl mx-auto leading-relaxed">
                        Send payments using Binance, Bybit, Bitget,
                        RedotPay or any supported crypto wallet securely.
                    </p>

                </motion.div>

                {/* MAIN GRID */}
                <div className="grid lg:grid-cols-3 gap-8">

                    {/* LEFT */}
                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        className="bg-zinc-900/40 backdrop-blur-2xl border border-zinc-800 rounded-3xl p-6"
                    >

                        <div className="flex items-center gap-3 mb-8">

                            <Wallet className="text-green-400" />

                            <h2 className="text-2xl font-bold">
                                Supported Coins
                            </h2>

                        </div>

                        <div className="space-y-4">

                            {wallets.map((wallet, index) => (

                                <motion.button
                                    whileHover={{
                                        scale: 1.03,
                                    }}
                                    whileTap={{
                                        scale: 0.98,
                                    }}
                                    key={index}
                                    onClick={() => setSelected(wallet)}
                                    className={`w-full p-5 rounded-2xl border transition-all duration-300 text-left ${selected.address === wallet.address
                                        ? "border-green-500 bg-green-500/10"
                                        : "border-zinc-800 bg-black/30 hover:border-zinc-700"
                                        }`}
                                >

                                    <div className="flex justify-between items-center">

                                        <div>

                                            <h3 className="font-bold text-lg">
                                                {wallet.coin}
                                            </h3>

                                            <p className="text-zinc-400 text-sm mt-1">
                                                {wallet.network}
                                            </p>

                                        </div>

                                        <div
                                            className={`w-12 h-12 rounded-xl bg-gradient-to-r ${wallet.color}`}
                                        ></div>

                                    </div>

                                </motion.button>

                            ))}

                        </div>

                    </motion.div>

                    {/* RIGHT */}
                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        className="lg:col-span-2 bg-zinc-900/40 backdrop-blur-2xl border border-zinc-800 rounded-3xl p-8"
                    >

                        <div className="flex flex-wrap justify-between gap-8 items-center">

                            <div>

                                <div
                                    className={`inline-flex px-4 py-2 rounded-full bg-gradient-to-r ${selected.color} text-black font-bold mb-5`}
                                >
                                    {selected.network}
                                </div>

                                <h2 className="text-6xl font-black mb-3">
                                    {selected.coin}
                                </h2>

                                <p className="text-zinc-400 text-lg">
                                    Send only through selected network
                                </p>

                            </div>

                            <motion.div
                                whileHover={{
                                    rotate: 2,
                                    scale: 1.03,
                                }}
                                className="bg-white p-4 rounded-3xl shadow-2xl"
                            >

                                <QRCodeCanvas
                                    value={selected.address}
                                    size={180}
                                />

                            </motion.div>

                        </div>

                        {/* ADDRESS */}
                        <div className="mt-10">

                            <label className="text-zinc-400 block mb-3">
                                Wallet Address
                            </label>

                            <div className="bg-black/40 border border-zinc-800 rounded-2xl p-5 break-all text-zinc-200 leading-relaxed">
                                {selected.address}
                            </div>

                        </div>

                        {/* BUTTON */}
                        <motion.button
                            whileTap={{
                                scale: 0.96,
                            }}
                            whileHover={{
                                scale: 1.01,
                            }}
                            onClick={handleCopy}
                            className={`w-full mt-6 bg-gradient-to-r ${selected.color} py-5 rounded-2xl text-black font-black text-lg flex items-center justify-center gap-3 shadow-2xl`}
                        >

                            {copied ? (
                                <>
                                    <CheckCircle2 />
                                    Copied Successfully
                                </>
                            ) : (
                                <>
                                    <Copy />
                                    Copy Wallet Address
                                </>
                            )}

                        </motion.button>

                        {/* NOTE */}
                        <div className="mt-10 border-t border-zinc-800 pt-8">

                            <h3 className="text-2xl font-bold mb-5">
                                Important Instructions
                            </h3>

                            <div className="grid md:grid-cols-2 gap-4">

                                {[
                                    "Only send using selected blockchain network.",
                                    "Wrong network transfers are irreversible.",
                                    "Crypto confirmation may take several minutes.",
                                    "Always verify wallet address before sending.",
                                ].map((item, index) => (

                                    <div
                                        key={index}
                                        className="bg-black/30 border border-zinc-800 rounded-2xl p-4 text-zinc-300"
                                    >
                                        {item}
                                    </div>

                                ))}

                            </div>

                        </div>

                    </motion.div>

                </div>

                {/* SUPPORTED WALLETS */}
                <motion.div
                    initial={{ opacity: 0, y: 70 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mt-16 bg-zinc-900/40 backdrop-blur-2xl border border-zinc-800 rounded-3xl p-8"
                >

                    <div className="flex items-center gap-4 mb-8">

                        <Bitcoin className="text-orange-400" size={35} />

                        <h2 className="text-3xl font-black">
                            Supported Wallets
                        </h2>

                    </div>

                    <div className="flex flex-wrap gap-4">

                        {supportedWallets.map((wallet, index) => (

                            <motion.div
                                whileHover={{
                                    y: -5,
                                    scale: 1.05,
                                }}
                                key={index}
                                className="px-6 py-4 bg-black/30 border border-zinc-800 rounded-2xl text-zinc-200 font-semibold"
                            >
                                {wallet}
                            </motion.div>

                        ))}

                    </div>

                </motion.div>

            </div>
        </div>
    );
}