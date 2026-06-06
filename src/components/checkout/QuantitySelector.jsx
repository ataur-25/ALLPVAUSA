export default function QuantitySelector({
    quantity,
    increase,
    decrease,
}) {
    return (
        <div className="flex items-center justify-center gap-4 mt-6">

            <button
                onClick={decrease}
                className="w-12 h-12 rounded-xl bg-white/10 hover:bg-white/20 text-white text-2xl font-black transition"
            >
                -
            </button>

            <div className="min-w-[120px] text-center py-3 rounded-xl bg-white/5 border border-white/10 text-xl font-black text-white">
                {quantity}
            </div>

            <button
                onClick={increase}
                className="w-12 h-12 rounded-xl bg-white/10 hover:bg-white/20 text-white text-2xl font-black transition"
            >
                +
            </button>

        </div>
    );
}