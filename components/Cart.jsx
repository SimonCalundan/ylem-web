import { motion, AnimatePresence } from "framer-motion";
import { useCartInfo } from "@/pages/_app";
import Image from "next/image";
import { useRef } from "react";
import  useClickAway  from "@/hooks/useClickAway";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

const mockCart = [
  {
    id: 1,
    name: "Entangle ring",
    price: 520,
    quantity: 1,
    img_path: "/produkt_billeder/ring_3.jpg"
  },
  {
    id: 1,
    name: "Entangle ring",
    price: 520,
    quantity: 1,
    img_path: "/produkt_billeder/ring_3.jpg"
  },
];
export default function Cart() {
  const { showCart, toggleCart } = useCartInfo();
  const wrapperRef = useRef(null);
  useClickAway(wrapperRef, () => toggleCart());
  return (
    <AnimatePresence>
      {showCart && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
          }}
          exit={{ opacity: 0 }}
          className="fixed top-0 left-0 w-screen h-screen bg-dark-blue bg-opacity-25 backdrop-grayscale backdrop-blur-[1px] z-[9998]">
          <motion.div
            ref={wrapperRef}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="w-full md:w-[25rem] absolute right-0 top-0 h-[100vh] bg-dark-blue z-[9999] flex flex-col gap-2 items-center py-2 px-2">
            <button onClick={toggleCart} className=" text-white self-end">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
                <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
              </svg>
            </button>
            <h2 className="text-3xl text-white my-2">Shopping cart</h2>
            <div className="h-[0.2px] opacity-50 w-4/5 mx-auto bg-white" />
            {/** Cart items */}
            <motion.div variants={container} className="flex flex-col gap-2 w-full py-4 px-8">
              {true ? (mockCart.map((item) => (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={item} key={item.id} className="flex w-full items-start justify-between text-body">
                  <div className="w-1/3 h-20">
                    <Image
                      src={item.img_path}
                      width={70}
                      height={70}
                      alt="product"
                      className="rounded-lg"
                    />
                  </div>
                  <div className="flex flex-col w-1/3 pt-1">
                    <h3 className="text-white text-xl whitespace-nowrap">{item.name}</h3>
                    <p className="text-white text-lg opacity-70">{item.price} DKK</p>
                  </div>
                  <div className="flex flex-col items-end justify-between h-full pb-4 pt-1 w-1/3">
                    <button className="text-gray-400 text-sm underline">Remove</button>
                    <input type="number" className=" w-12 text-body h-8 flex justify-center items-center bg-gray-700 text-white pl-2" placeholder={item.quantity} />
                  </div>
                </motion.div>
              ))) : <p className="text-white mx-auto text-xl">No items in cart</p>}
            </motion.div>
            {true && ( 
              <button className="bg-white text-dark-blue bottom-32 py-3 px-6 text-xl absolute hover:scale-105 transition-all duration-300">Checkout</button>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
