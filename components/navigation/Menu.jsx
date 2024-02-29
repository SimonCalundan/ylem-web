import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const container = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.1,
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
  { name: "Entangle ring", link: "/products/entangle" },
  { name: "YLEM Universe", link: "/universe" },
  { name: "Cart", link: "/cart" },
];

const secondaryMenuItems = [
  { name: "FAQ", link: "/faq" },
  { name: "Contact us", link: "/contact" },
  { name: "Terms and conditions", link: "/toc" },
  { name: "Privacy policy", link: "/privacy" },
];

const Menu = ({ menuOpen }) => {
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
          className="bg-dark-blue top-0 left-0 fixed w-screen h-screen flex flex-col justify-center items-center gap-8 z-50"
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
        className="flex items-center gap-4 w-92 flex-wrap justify-center fixed bottom-20"
          >
            {secondaryMenuItems.map((link, i) => (
              <Link key={i} className=" text-body uppercase text-sm text-gray-400 hover:underline underline-offset-8" href={link.link}>
              {link.name}
              </Link>)
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Menu;
