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
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1,
          type: "spring",
          stiffness: 260,
          damping: 90,
          duration: 700,
        }}
        className="w-full min-h-screen flex flex-col items-center mt-40 bg-dark-blue"
      >
        <motion.div
    initial={{y: -20, opacity: 0}}
    animate={{y: 0, opacity: 1}} 
    transition={{ 
      delay: 1.5,
      type: "spring",
      duration: 1,
    }}
    className="flex justify-center h-8 w-full bg-white items-center  uppercase shadow-xl"><p>Entagle now available. <Link href="/" className="font-medium underline underline-offset-4">Shop here</Link></p>  {" "} .</motion.div>
        <Image
          src="/model_billeder/front_1.jpg"
          width={800}
          height={800}
          alt="Oliver"
        />
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

