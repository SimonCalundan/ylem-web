import "@/styles/globals.css";
import { create } from 'zustand'
import { Bitter, EB_Garamond, Source_Serif_4, Alegreya, Cormorant } from "next/font/google";
const bitter = Bitter({ subsets: ['latin'] });
const ebGaramond = EB_Garamond({ subsets: ['latin'] });
const sourceSerif4 = Source_Serif_4({ subsets: ['latin'] });
const alegreya = Alegreya({ subsets: ['latin'] });
const cormorant = Cormorant({ subsets: ['latin'] });




export default function App({ Component, pageProps }) {
  return (
    <main className={cormorant.className}>
      <Component {...pageProps} />
    </main>
  );
}

export const useCartInfo = create((set) => ({
  cart: [],

  // Add item to cart
  addItem: (itemToAdd) => set((state) => {
    const existingItem = state.cart.find(item => item.stripe_price === itemToAdd.stripe_price);

    if (existingItem) {
      // Increase quantity if item already exists
      return {
        cart: state.cart.map(item =>
          item.stripe_price === itemToAdd.stripe_price
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      };
    } else {
      // Add new item to the cart
      return { cart: [...state.cart, { ...itemToAdd, quantity: 1 }] };
    }
  }),

  // Remove item from cart
  removeItem: (stripePrice) => set((state) => {
    const existingItem = state.cart.find(item => item.stripe_price === stripePrice);

    if (existingItem && existingItem.quantity > 1) {
      // Decrease quantity if more than one
      return {
        cart: state.cart.map(item =>
          item.stripe_price === stripePrice
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      };
    } else {
      // Remove item from cart if quantity is 1
      return { cart: state.cart.filter(item => item.stripe_price !== stripePrice) };
    }
  }),

  // Clear cart
  clearCart: () => set({ cart: [] })
}));


