import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.2,
            staggerChildren: 0.2,
        },
    },
    exit: {
        opacity: 0,
        transition: {
            delayChildren: 0.2,
            staggerChildren: 0.2,
        },
    },
};

const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
    },
    exit: { y: 20, opacity: 0 },
};

const menuItems = [
    { name: "Home", link: "/" },
    { name: "Cart", link: "/cart" },
    { name: "Collection", link: "/collection" },
    { name: "Products", link: "/products" },
    { name: "Faq", link: "/faq" },
    { name: "Contact", link: "/contact" },
];

const Menu = ({ scrollDistance, menuOpen }) => {
    return (
        <AnimatePresence
            onExitComplete={() => {
                console.log("exit complete");
            }}
        >
            {menuOpen && (
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="visible"
                    exit={container.exit}
                    className="bg-black top-0 left-0 fixed w-screen h-screen flex flex-col justify-center items-center gap-8 z-99"
                >
                    {menuItems.map((link, i) => (
                        <motion.p
                            transition={{
                                duration: 0.5,
                                type: "spring",
                                stiffness: 260,
                                damping: 20,
                                duration: 2,
                            }}
                            exit={item.exit}
                            key={i}
                            variants={item}
                        >
                            <Link
                                className="text-white link text-2xl uppercase font-light hover:scale-105"
                                href={link.link}
                            >
                                {link.name}
                                <span className="line"></span>
                            </Link>
                        </motion.p>
                    ))}
                    <motion.div
                        transition={{
                            duration: 0.5,
                            type: "spring",
                            stiffness: 260,
                            damping: 20,
                            duration: 2,
                        }}
                        variants={item}
                        exit={item.exit}
                    >
                        <Link className="mt-32 uppercase text-sm text-gray-400 hover:underline underline-offset-8" href={"/"}>
                            Refund policy
                        </Link>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Menu;
