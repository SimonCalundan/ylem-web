// Import the Stripe library
const stripe = require('stripe')(process.env.STRIPE_API);

const countryCodes = [
    "AL", // Albania
    "AD", // Andorra
    "AM", // Armenia
    "AT", // Austria
    "AZ", // Azerbaijan
    "BY", // Belarus
    "BE", // Belgium
    "BA", // Bosnia and Herzegovina
    "BG", // Bulgaria
    "HR", // Croatia
    "CY", // Cyprus
    "CZ", // Czech Republic
    "DK", // Denmark
    "EE", // Estonia
    "FO", // Faroe Islands
    "FI", // Finland
    "FR", // France
    "GE", // Georgia
    "DE", // Germany
    "GI", // Gibraltar
    "GR", // Greece
    "GL", // Greenland
    "HU", // Hungary
    "IS", // Iceland
    "IE", // Ireland
    "IT", // Italy
    "XK", // Kosovo
    "LV", // Latvia
    "LI", // Liechtenstein
    "LT", // Lithuania
    "LU", // Luxembourg
    "MT", // Malta
    "MD", // Moldova
    "MC", // Monaco
    "ME", // Montenegro
    "NL", // Netherlands
    "MK", // North Macedonia (formerly known as Macedonia)
    "NO", // Norway
    "PL", // Poland
    "PT", // Portugal
    "RO", // Romania
    "RU", // Russia
    "SM", // San Marino
    "RS", // Serbia
    "SK", // Slovakia
    "SI", // Slovenia
    "ES", // Spain
    "SJ", // Svalbard and Jan Mayen
    "SE", // Sweden
    "CH", // Switzerland
    "TR", // Turkey
    "UA", // Ukraine
    "GB", // United Kingdom
    "VA"  // Vatican City
]

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // Extract items from the request body
      const { items } = req.body;

      // Convert items to Stripe's format
      const line_items = items.map(item => ({
        price: item.price,
        quantity: item.quantity,
      }));

      // Create a checkout session
      const session = await stripe.checkout.sessions.create({
        success_url: 'https://ylemjewelry.com/success',
        cancel_url: 'https://ylemjewelry.com/products/entangle',
        line_items,
        mode: 'payment',
        shipping_address_collection: {
          allowed_countries: countryCodes, // Example countries, adjust as needed
        },
      });

      // Respond with the session URL
      res.status(200).json({ url: session.url });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.message });
    }
  } else {
    // Handle any requests that aren't POST
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

