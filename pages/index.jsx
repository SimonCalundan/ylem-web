import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { motion } from "framer-motion";
import Nav from "@/components/navigation/Nav";
export default function Home() {
  // Dette er en kommentar

  return (
    <>
      <Head>
        <title>YLEM</title>
        <link
          rel="icon"
          type="image/x-icon"
          href="/logo/LOGO_browser.jpg"
        ></link>
      </Head>
      <Nav />
      {/* banner */}
      {/* Content */}
      <motion.section
        initial={{ opacity: 0, }}
        animate={{ opacity: 1, }}
        transition={{
          delay: 1,
          type: "spring",
          stiffness: 260,
          damping: 90,
          duration: 700,
        }}
        className="w-full min-h-screen flex flex-col items-center mt-40 bg-dark-blue"
      >
        <div className="flex items-center justify-center w-[768px] h-[1152px] overflow-hidden ">
          <motion.img
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{
              ease: "easeOut",
              delay: 3,
              duration: 0.5,
            }}
            src="/model_billeder/front_1.jpg"
            width={600}
            height={600}
            alt="Oliver"
            className="w-full h-full"
          />
        </div>
        {/* CTA  */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 2,
            type: "spring",
            stiffness: 260,
            damping: 90,
            duration: 700,
          }}
          className="flex flex-col gap-4 text-white fixed bottom-20 ">
          <h1 className="text-5xl font-thin  p-4">Entangle out now</h1>
          <button className="bg-white text-black px-4 py-2 uppercase ">Shop now</button>
        </motion.div>
      </motion.section>
    </>
  );
}

