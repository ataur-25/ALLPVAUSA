export function calculatePrice(pricing, quantity) {
    const quantities = Object.keys(pricing)
        .map(Number)
        .sort((a, b) => a - b);

    let matchedPrice = pricing[1];

    for (let qty of quantities) {
        if (quantity >= qty) {
            matchedPrice = pricing[qty];
        }
    }

    return matchedPrice;
}