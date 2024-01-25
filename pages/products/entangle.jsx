import Image from "next/image";
import Head from "next/head";
import { useState, useEffect, useCallback, useRef } from "react";
import { motion } from "framer-motion";
import Nav from "@/components/navigation/Nav";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const RingContent = () => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    swipeToSlide: true,
  };
  const sliderRef = useRef(null);
  // Create the next function using useCallback for optimization
  const next = useCallback(() => {
    sliderRef.current.slickNext();
  }, [sliderRef]); // Depend on sliderRef, will only recreate if sliderRef changes

  // Create the previous function using useCallback for optimization
  const previous = useCallback(() => {
    sliderRef.current.slickPrev();
  }, [sliderRef]); // Depend on sliderRef, will only recreate if sliderRef changes


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
      <motion.div
        className="w-screen h-auto  flex items-center justify-center text-white">
        {/*Images and CTA */}
        <div className="flex relative w-screen min-h-[50vh]  justify-center items-center  ">
          <svg onClick={next} xmlns="http://www.w3.org/2000/svg" className="absolute z-50 w-20 h-48 hover:scale-105 active:scale-95 transition-all cursor-pointer  top-1/2 right-0" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M11 4l3 8l-3 8" /></svg>
          <svg onClick={previous} xmlns="http://www.w3.org/2000/svg" className="absolute z-50 w-20 h-48 hover:scale-105 active:scale-95 transition-all cursor-pointer top-1/2 left-0" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M13 20l-3 -8l3 -8" /></svg>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 100 }} transition={{ delay: 1, duration: 1, }} className="absolute top-1/2 w-96 h-auto bg-white text-dark-blue z-10 flex flex-col p-8 gap-4 items-center">
            <h1 className="text-xl font-medium uppercase text-center">YLEM Entangle silver ring</h1>
            <p className="text-xl font-light mb-4">KR 899</p>
            <div className="flex w-full justify-between">
              <select className="text-black px-4 py-3 border border-gray-200" defaultValue={"Select size"} name="" id="">
                <option value="">Select size.</option>
              </select>
              <p className="flex gap-2 items-center underline underline-offset-4 uppercase"><span>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-ruler-3" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M19.875 8c.621 0 1.125 .512 1.125 1.143v5.714c0 .631 -.504 1.143 -1.125 1.143h-15.875a1 1 0 0 1 -1 -1v-5.857c0 -.631 .504 -1.143 1.125 -1.143h15.75z" /><path d="M9 8v2" /><path d="M6 8v3" /><path d="M12 8v3" /><path d="M18 8v3" /><path d="M15 8v2" /></svg>
              </span>Size guide</p>
            </div>
            <button className="bg-dark-blue text-white w-full py-4 uppercase mt-4">Add to cart</button>
          </motion.div>
          <Slider ref={sliderRef} dotsClass="bg-blue-500" {...settings} className=" h-full w-screen mt-32 overflow-hidden  text-white ">
            <Image priority={true} src="/produkt_billeder/ring_3.jpg"
              width={500}
              height={500}
              alt=" ring" />
            <Image priority={true} src="/produkt_billeder/ring_7.jpg"
              width={500}
              height={500}
              alt=" ring" />
            <Image priority={true} src="/produkt_billeder/ring_2.jpg"
              width={500}
              height={500}
              alt=" ring" />
            <Image priority={true} src="/produkt_billeder/ring_4.jpg"
              width={500}
              height={500}
              alt=" ring" />
            <Image priority={true} src="/produkt_billeder/ring_5.jpg"
              width={500}
              height={500}
              alt=" ring" />
          </Slider>
        </div>
      </motion.div>
    </>
  );
};

export default function entangle() {
  return <RingContent />;
}
