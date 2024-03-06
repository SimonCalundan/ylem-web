import Head from "next/head";
import { motion } from "framer-motion";
import Nav from "@/components/navigation/Nav";
import Footer from "@/components/Footer";
import { useRouter } from "next/router";
export default function Home() {
  const router = useRouter();
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
        <div className="flex items-center justify-center w-[768px] max-w-full h-auto overflow-hidden group  relative">
          <div
            className="absolute w-full h-full top-0 left-0 bg-dark-blue bg-opacity-20 md:bg-opacity-50 z-30 opacity-100 md:opacity-0 md:group-hover:opacity-100 
                        transition-all duration-300 flex justify-center items-center">
            <button onClick={() => router.push("/products/entangle")} className="bg-white py-4 px-16 uppercase text-dark-blue hover:scale-[1.02] transition-all duration-300">Shop entangle ring</button>
          </div>
          <motion.img
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{
              ease: "easeOut",
              delay: 2,
              duration: 0.5,
            }}
            src="/nye_billeder/hero_image.jpg"
            width={600}
            height={600}
            alt="Oliver"
            className="w-full h-full"
          />
        </div>
      </motion.section>
      <Footer />
    </>
  );
}

