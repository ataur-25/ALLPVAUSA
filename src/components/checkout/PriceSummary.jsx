export default function PriceSummary({
    subtotal,
    discount,
    total,
}) {
    return (
        <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-5 space-y-3">

            <div className="flex items-center justify-between text-gray-300">
                <span>Subtotal</span>
                <span>${subtotal}</span>
            </div>

            <div className="flex items-center justify-between text-green-400">
                <span>Discount</span>
                <span>- ${discount}</span>
            </div>

            <div className="border-t border-white/10 pt-3 flex items-center justify-between text-xl font-black text-white">
                <span>Total</span>
                <span>${total}</span>
            </div>

            <div className="text-sm text-green-400 font-bold">
                You Save ${discount}
            </div>

        </div>
    );
}