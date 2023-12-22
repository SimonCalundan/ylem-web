const stripe = require("stripe")(
    "sk_test_51OGNosFsBWVHbyQn7y1BDrq5NnI76fPvi2odd4tjKGf6cWGVH4BnB2CCkpzy7KitK6EPCurWfCcAeiWpBGIIXYwR00sJODU1PD"
);
async function test() {
    try {
        const session = await stripe.checkout.sessions.create({
            success_url: "https://example.com/success",
            line_items: [
                { price: "price_1OGNq5FsBWVHbyQnFRRC1agw", quantity: 2 },
                { price: "price_1OGNq5FsBWVHbyQnFRRC1agw", quantity: 2 },
                { price: "price_1OGNq5FsBWVHbyQnFRRC1agw", quantity: 2 },
                { price: "price_1OGNq5FsBWVHbyQnFRRC1agw", quantity: 2 },
            ],
            mode: "payment",
        });
        console.log(session);
    } catch (error) {
        console.log(error);
    }
}

test();
