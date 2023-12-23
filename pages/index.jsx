import Image from "next/image";
import Head from "next/head";
import { useState, useEffect } from "react";
import BurgerMenu from "@/components/navigation/BurgerMenu";
import { motion } from "framer-motion";
import Menu from "@/components/navigation/Menu";
import Link from "next/link";
import Nav from "@/components/navigation/Nav";

export default function Home() {
    // Handle logo scroll effect
    const [scrollDistance, setScrollDistance] = useState(0);
    const [imageSize, setImageSize] = useState(300);
    const [menuOpen, setMenuOpen] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            // Update the scroll distance when the user scrolls
            setScrollDistance(window.scrollY);
        };

        // Attach the event listener when the component mounts
        window.addEventListener("scroll", handleScroll);

        // Detach the event listener when the component unmounts to avoid memory leaks
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    useEffect(() => {
        if (scrollDistance > 30) {
            setImageSize(200);
            
        } else {
            setImageSize(400);
        }
    }, [scrollDistance]);

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
                    className="w-full h-auto flex flex-col items-center mt-40"
                >
                    {/* Images */}
                    <div className="flex w-full justify-center flex-wrap gap-8 py-16">
                        <div className="flex flex-col gap-4 items-center h-[23rem]">
                            <Image
                                src={"/dummy.webp"}
                                width={300}
                                height={300}
                                alt="aas"
                                className="hover:scale-105 transition-all duration-500"
                            />
                            <div className="flex-grow"></div>
                            <Link
                                href="https://buy.stripe.com/test_4gw17C4JKfzIfwAfYY"
                                className="py-2 px-4 bg-black border-2 border-white uppercase text-sm hover:bg-gray-200 hover:text-black transition-all duration-500 ease-in-out"
                            >
                                Shop now
                            </Link>
                        </div>
                        <div className="flex flex-col gap-4 items-center h-[23rem]">
                            <Image
                                src={"/dummy2.png"}
                                width={300}
                                height={300}
                                alt="aas"
                                className="hover:scale-105 transition-all duration-500"
                            />
                            <div className="flex-grow"></div>
                            <Link
                                href="/products/ring"
                                className="py-2 px-4 bg-black border-2 border-white uppercase text-sm hover:bg-gray-200 hover:text-black transition-all duration-500 ease-in-out"
                            >
                                Shop now
                            </Link>
                        </div>
                    </div>
                </motion.section>
                {/* Latets products */}
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
                    className="w-full h-auto flex flex-col items-center"
                >
                    <h2 className="text-3xl font-medium uppercase text-center mb-16 mt-8">
                        New products
                    </h2>
                </motion.section>
        </>
    );
}

