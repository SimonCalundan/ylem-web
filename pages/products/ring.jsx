import Image from "next/image";
import Head from "next/head";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Nav from "@/components/navigation/Nav";
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
        <Nav />
            {/*Content her */}
            <div className="w-screen h-[80vh] flex items-center justify-center text-white">
            </div>
        </>
    );
};

export default function ring() {
    return <RingContent />;
}
