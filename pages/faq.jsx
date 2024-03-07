import Head from "next/head";
import Nav from "@/components/navigation/Nav";
import { useState, useEffect, useCallback, useRef } from "react";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
export default function Faq() {
  return (
    <>
      <Head>
        <title>YLEM | FAQ</title>
        <link
          rel="icon"
          type="image/x-icon"
          href="/logo/LOGO_browser.jpg"
        ></link>
      </Head>
      <Nav />
      <motion.div className=" text-white w-screen h-auto flex flex-col pt-24">
        {/* Image  */}
        <div className="w-screen h-96 max-h-[40vh] relative">
          <div className="  faq-bg bg-opacity-50 w-screen h-full absolute top-0 left-0 flex flex-col items-center justify-center">
            <p className=" text-5xl font-thin z-10">FAQ</p>
            <div className="w-screen absolute -bottom-12 flex justify-center">
              <Image
                src="/logo_sm_2.png"
                className="animate-in w-28 h-28"
                width={400}
                height={400}
                alt="Logo"
              />
            </div>
          </div>
        </div>
        {/* Content  */}
        <motion.div className=" w-[1080px] max-w-full mx-auto flex flex-col items-start py-16 px-2">
          <h2 className="text-4xl font-medium my-4">What materials do you use?</h2>
          <p className="text-body text-base font-light tracking-wider text-gray-300 ml-4">The Entangle ring is made of recycled 925 sterling silver with rhodium plating.</p>
          <h2 className="text-4xl font-medium my-4">How do i wear and take care of my Ylem jewelry?</h2>
          <p className="text-body text-base font-light tracking-wider text-gray-300 ml-4">
            The ring is made in such a way that you can safely and carefully bend it to fit your finger perfectly.
            <br />
            Please wear your jewelry with care and take it off in any situation where the spikes could easily get entangled in fabric or the like.
            <br />
            To care for your ring, clean it with a bit of soapy water or polish it with a silver polishing cloth regularly. Avoid exposing it to harsh chemicals, moisture, or direct sunlight to maintain its shine. We recommend storing them in our jewelry boxes, that follow with purchase.
          </p>
          <h2 className="text-4xl font-medium my-4">Can i cancel my order?</h2>
          <p className="text-body text-base font-light tracking-wider text-gray-300 ml-4">If your order is yet to be shipped, you can cancel the order and we will refund the whole amount. If your order has already been shipped, you cannot cancel it, and will have to process a return instead.</p>
          <h2 className="text-4xl font-medium my-4">What is your return policy?</h2>
          <p className="text-body text-base font-light tracking-wider text-gray-300 ml-4">
            You may return your jewelry within 14 days of the date of delivery, provided the jewelry piece is in its original packaging, in new and unused condition, with all materials intact.
            If you wish to make a return, you will have to pay the shipping costs. To do so fill out the following form: link.
            <br />
            Given the product has met the above conditions, you will receive a full refund. If the conditions are not met, we reserve the right to make a partial refund of the amount of the product.
          </p>
        </motion.div>
      </motion.div>
      <Footer />
    </>
  )
}

