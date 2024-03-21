import "@/styles/globals.css";
import { create } from 'zustand'
import { Cormorant } from "next/font/google";
import Head from "next/head";

const cormorant = Cormorant({ subsets: ['latin'] });
import Cart from "@/components/Cart";




export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Ylem Jewelry</title>
        <link
          rel="icon"
          type="image/x-icon"
          href="/logo/LOGO_browser.jpg"
        ></link>
        <meta name="description" content="Ylem Jewelry" />
      </Head>
      <main className={cormorant.className}>
        <Cart />
        <Component {...pageProps} />
      </main>
    </>
  );
}

export const useCartInfo = create((set) => ({
  cart: [],
  exampleCartItem: {
    name: "Example Item",
    price: 1000,
    stripe_price: "price_1J2h3I2eZvKYlo2Cv5O6Tc0A",
    image: "/images/example-item.jpg",
  },

  // Add item to cart
  addItem: (itemToAdd) => set((state) => {
    const existingItemIndex = state.cart.findIndex(item => item.price === itemToAdd.price);

    if (existingItemIndex !== -1) {
      // Clone the cart to avoid direct state mutation
      let newCart = [...state.cart];

      // Increase quantity for the existing item
      newCart[existingItemIndex] = {
        ...newCart[existingItemIndex],
        quantity: newCart[existingItemIndex].quantity + 1
      };

      // Return the new state with the updated cart
      return { cart: newCart };
    } else {
      // Item does not exist, add as new item
      return {
        cart: [...state.cart, { ...itemToAdd, quantity: 1 }]
      };
    }
  }),

  // Function to remove an item from the cart
  removeItem: (price) => set((state) => {
    return {
      cart: state.cart.filter(item => item.price !== price)
    };
  }),
  // Function to update item quantity in cart
  setQuantity: (price, newQuantity) => set((state) => {
    // Check if the item exists in the cart
    const itemIndex = state.cart.findIndex(item => item.price === price);
    if (itemIndex === -1) {
      // Item not found, return the state as is
      console.warn("Item with the given price not found in the cart.");
      return state;
    }

    // Item found, proceed to update quantity
    // Check for newQuantity value to decide if item should be removed or updated
    if (newQuantity <= 0) {
      // If new quantity is 0 or less, remove the item from the cart
      return {
        cart: state.cart.filter((item, index) => index !== itemIndex)
      };
    } else {
      // If new quantity is more than 0, update the item's quantity
      return {
        cart: state.cart.map((item, index) =>
          index === itemIndex ? { ...item, quantity: newQuantity } : item
        )
      };
    }
  }),

  // Clear cart
  clearCart: () => set({ cart: [] }),

  // Show cart
  showCart: false,
  toggleCart: () => set((state) => ({ showCart: !state.showCart })),
}));


