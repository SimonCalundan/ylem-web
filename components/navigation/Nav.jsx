import Image from "next/image";
import Head from "next/head";
import { useState, useEffect } from "react";
import BurgerMenu from "@/components/navigation/BurgerMenu";
import { motion } from "framer-motion";
import Menu from "@/components/navigation/Menu";
import Link from "next/link";
import Badge from '@mui/joy/Badge';


export default function Nav() {
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
            <main className={`flex  transition-all duration-300 flex-col items-center`}>
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
                    className="w-full fixed py-4  justify-end mr-10 z-50 bg-dark-blue h-20 items-center
        flex md:hidden"
                >
                    <Link href="/">
                        <Image
                            draggable={false}
                            src="/logo/LOGO_HEADER.png"
                            width={200}
                            height={200}
                            alt="Ylem logo"
                            className=" transition-all duration-500 ease-in-out"
                        />
                    </Link>
                </motion.div>

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
                    className="w-full fixed py-4  justify-center z-50 bg-dark-blue h-20 items-center
        hidden md:flex"
                >
                    <Link href="/">
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
                <div className="flex fixed py-4 z-50 w-full h-20  items-center pl-10 justify-between px-4 ">
                    <BurgerMenu
                        handleClick={() => setMenuOpen(!menuOpen)}
                        styling={scrollDistance > 30 ? "opacity-100" : "opacity-100"}
                    />
                    <button className=" justify-center items-center mr-8 hidden md:flex " >
                        <Badge badgeContent={4} color="secondary" variant="soft" size="sm">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                                className="hover:scale-105 active:scale-95 transition-all w-18 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                            </svg>
                        </Badge>
                    </button>
                </div>
                <Menu scrollDistance={scrollDistance} menuOpen={menuOpen} />
            </main>
        </>
    );
}

