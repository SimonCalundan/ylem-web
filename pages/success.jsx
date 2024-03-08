import Nav from "@/components/navigation/Nav";
import { motion } from "framer-motion";
import Image from "next/image";
import Footer from "@/components/Footer";
export default function Success() {
  return (
    <>
      <Nav />
      <div className="flex flex-col items-center justify-center h-screen w-screen gap-4 contact-bg  bg-opacity-25">
        <motion.div
          initial={{ y: -20, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          transition={{ duration: 0.5 }}
    className="-translate-y-14 flex flex-col gap-4 justify-center items-center p-8 bg-dark-blue h-3/4 md:h-[18rem] w-[40rem] max-w-full rounded-sm bg-opacity-80 backdrop-blur">
          <Image
            src="/logo_small.png"
            width={700}
            height={700}
            alt="Logo"
            className=" w-1/4 h-auto"
          />
          <p className="text-4xl text-white text-center">Thank you for your purchase</p>
          <p className="text-base max-w-xl text-center text-gray-300 text-body">You will receive an email confirmation shortly. <br /> Should you encounter any issues or have any questions regarding your order, please don&apos;t hesitate to get in touch with us at <a className="text-white underline" href="mailto@contact@ylemjewelry.com">contact@ylemjewelry.com</a>.</p>
        </motion.div>
      </div>
      <Footer />
    </>
  )
}
