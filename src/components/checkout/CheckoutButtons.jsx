export default function CheckoutButtons({
    telegramLink,
    whatsappLink,
    paymentLink,
}) {
    return (
        <div className="mt-6 space-y-3">

            <a
                href={telegramLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-4 rounded-2xl bg-gradient-to-r from-sky-400 to-blue-500 text-white font-black hover:scale-[1.02] transition"
            >
                Buy with Telegram
            </a>

            <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-4 rounded-2xl bg-gradient-to-r from-green-400 to-emerald-500 text-black font-black hover:scale-[1.02] transition"
            >
                Buy with WhatsApp
            </a>

            <a
                href={paymentLink}
                className="block w-full text-center py-4 rounded-2xl bg-gradient-to-r from-red-500 to-pink-500 text-white font-black hover:scale-[1.02] transition"
            >
                Secure Payment
            </a>

        </div>
    );
}