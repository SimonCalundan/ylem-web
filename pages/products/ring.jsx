import Image from "next/image";
import Head from "next/head";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Nav from "@/components/navigation/Nav";
import FixedNav from "@/components/navigation/FixedNav";
const RingContent = () => {
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
        <FixedNav />
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
                    className="w-80 flex items-center justify-center h-80 mx-auto ">
                    <Image
                        src="/dummy2.png"
                        width={300}
                        height={300}
                        alt="Billede af produkt"
                        className=" object-cover w-full h-full"
                    />
                </motion.div>
            </div>
            <section className=" max-w-3xl w-full mx-auto ">
                <div className="w-full flex justify-center items-center flex-col 
        gap-2">
                    <p className="text-gray-400 text-lg font-light">YLEM</p>
                    <h2 className="text-4xl font-medium">YLEM_ RING</h2>
                    <p className=" font-light text-xl text-gray-300 uppercase">799 kr</p>
                </div>
                <div className="flex w-full justify-center mt-8 flex-wrap">
                    <div className="flex flex-col gap-2 w-full md:w-1/2  ">
                        <button className="py-2 px-4 border border-white w-2/3 mx-auto hover:bg-gray-100
        hover:text-black transition-all">Add to cart</button>
                    </div>
                    <div className="flex flex-col gap-2 w-full px-4 py-10 md:p-0 md:w-1/2">
                        <p className="font-light">
                            Sterling silver band, clasp links, and case cage with a thick gold vermeil plating.
                            <br /> <br />
                            40 mm stainless steel watch case and stainless clasp mechanism.
                            <br /> <br />
                            Japanese three hand automatic mechanical movement, mounted with a hand fabricated dial. Each gold vermeil dial is crafted completely from scratch and is 1/1. Because of this unique and intensive technique the dial may vary from the photo above.
                            <br /> <br />
                            Each watch is designed, made, polished, fit, and assembled by hand.
                            <br /> <br />
                            Import duties, taxes, and charges are not included in the item price. These charges are the buyer&apos;s responsibility. Please be aware that customs fees will either be added during checkout or upon reception based on the customer&apos;s selection.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default function ring() {
    return <RingContent />;
}
