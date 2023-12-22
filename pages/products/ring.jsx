import Image from "next/image";
import Head from "next/head";
import { useState, useEffect } from "react";
import BurgerMenu from "@/components/navigation/BurgerMenu";
import { motion } from "framer-motion";
import Menu from "@/components/navigation/Menu";
import Link from "next/link";
const RingContent = () => {
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
            <main className={`flex min-h-screen h-[4000px] ${imageSize === 400 && "py-4"
                } transition-all duration-300 flex-col items-center`}
            >
                {/* Logo */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        delay: 0.6,
                        type: "spring",
                        stiffness: 260,
                        damping: 90,
                        duration: 2,
                    }}
                    className="w-full fixed flex justify-center z-50 bg-dark-blue h-20 items-center"
                >
                    <Link href="/" className="">
                        <Image
                            draggable={false}
                            src="/logo/LOGO_HEADER.png"
                            width={300}
                            height={300}
                            alt="Ylem logo"
                            className=" transition-all duration-500 ease-in-out"
                            style={{
                                width: `${imageSize}px`,
                                height: "auto",
                            }}
                        />
                    </Link>
                </motion.div>
                {/* Burger menu */}
                <div className="flex fixed z-50 w-full h-20  items-center pl-10">
                    <BurgerMenu
                        handleClick={() => setMenuOpen(!menuOpen)}
                        styling={scrollDistance > 30 ? "opacity-100" : "opacity-100"}
                    />
                </div>
                <Menu scrollDistance={scrollDistance} menuOpen={menuOpen} />
                {/*Content her */}
                <div className="w-screen h-[80vh] flex items-center justify-center">
                    {/* Billede af produkt  */}
                    <motion.div initial={{
                        opacity: 0,
                        y: 100,
                    }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            delay: 0.6,
                            type: "spring",
                            stiffness: 260,
                            damping: 90,
                            duration: 3,
                        }}
                     className="w-80 flex items-center justify-center h-80 ">
                        <Image
                            src="/dummy2.png"
                            width={300}
                            height={300}
                            alt="Billede af produkt"
                            className=" object-cover w-full h-full"
                        />
                    </motion.div>
                </div>
                <section className=" max-w-3xl w-full h-80">
                    <div className="w-full flex justify-center items-center flex-col 
        gap-2">
                        <p className="text-gray-400 text-lg font-light">YLEM</p>
                        <h2 className="text-4xl font-medium">YLEM_ RING</h2>
                        <p className=" font-light text-xl">399 kr</p>
                    </div>
                    <div className="flex w-full justify-center mt-8">
                        <div className="flex flex-col gap-2 w-1/2">
                            <button className="py-2 px-4 border border-white w-2/3 mx-auto">Add to cart</button>
                        </div>
                        <div className="flex flex-col gap-2 w-1/2">
                            <p className="font-light">
                                Sterling silver band, clasp links, and case cage with a thick gold vermeil plating.
                                <br /> <br />
                                40 mm stainless steel watch case and stainless clasp mechanism.
                                <br /> <br />
                                Japanese three hand automatic mechanical movement, mounted with a hand fabricated dial. Each gold vermeil dial is crafted completely from scratch and is 1/1. Because of this unique and intensive technique the dial may vary from the photo above.
                                <br /> <br />
                                Each watch is designed, made, polished, fit, and assembled by hand.
                                <br /> <br />
                                Import duties, taxes, and charges are not included in the item price. These charges are the buyer's responsibility. Please be aware that customs fees will either be added during checkout or upon reception based on the customer’s selection.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default function ring() {
    return <RingContent />;
}
