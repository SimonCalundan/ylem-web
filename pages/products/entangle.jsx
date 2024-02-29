import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { useState, useEffect, useCallback, useRef } from "react";
import { motion } from "framer-motion";
import Nav from "@/components/navigation/Nav";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Accordion from "@/components/products/Accordion";
import Footer from "@/components/Footer";

const sizes = [
  {
    size: 6,
    soldOut: false
  },
  {
    size: 7,
    soldOut: false
  },
  {
    size: 8,
    soldOut: false
  },
  {
    size: 9,
    soldOut: false
  },
];

const RingContent = () => {
  const [windowWidth, setWindowWidth] = useState(2000);
  useEffect(() => {
    // Handler to call on window resize
    const handleResize = () => {
      // Set window width to the inner width of the window
      setWindowWidth(window.innerWidth);
    };

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  let settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: windowWidth > 768 ? 2 : 1,
    swipeToSlide: true,
  };
  const sliderRef = useRef(null);
  const next = useCallback(() => {
    sliderRef.current.slickNext();
  }, [sliderRef]);
  const previous = useCallback(() => {
    sliderRef.current.slickPrev();
  }, [sliderRef]);


  // Handle size select 
  const [selectedSize, setSelectedSize] = useState(0);
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
        className="w-screen h-auto  flex flex-col  text-white">
        {/*Images and CTA */}
        <div className="flex relative w-screen min-h-[50vh]  justify-center items-center  ">
          <svg onClick={next} xmlns="http://www.w3.org/2000/svg" className="absolute z-30 w-28 h-80 hover:scale-105 active:scale-95 transition-all cursor-pointer  top-2/5 right-0" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M11 4l3 8l-3 8" /></svg>
          <svg onClick={previous} xmlns="http://www.w3.org/2000/svg" className="absolute z-30 w-28 h-80 hover:scale-105 active:scale-95 transition-all cursor-pointer top-2/5 left-0" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M13 20l-3 -8l3 -8" /></svg>
          <Slider
            ref={sliderRef} dotsClass="bg-blue-500" {...settings} className=" h-full w-screen mt-24 overflow-hidden  text-white ">
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
        <div className="flex flex-col-reverse gap-12 md:gap-0 md:flex-row w-full max-w-[1280px] mx-auto h-auto pb-12 pt-8 md:pt-20 px-8" id="product_info">
          { /* Accordion */}
          <div className="flex flex-col gap-2 w-full md:w-1/2 px-2 md:px-8">
            <Accordion />
          </div>
          { /* Info, select and purchase */}
          <div className="flex flex-col gap-2 w-full md:w-1/2 px-2 mb-8 md:mb-0 md:px-8">
            {/* Name, description and price */}
            <div className="flex justify-between items-end ">
              <p className="tracking-wider text-2xl uppercase font-medium">Entangle ring</p>
              <p className="text-xl uppercase text-body font-light">899 DKK</p>
            </div>
            <div className="flex mb-10"><p className="text-gray-300 font-light text-body">Recycled 925 sterling silver | Rhodium plating</p></div>
            { /* Select size */}
            <div className="flex justify-between w-full mb-4 md:mb-1">
              <p className="font-medium text-body">Select size</p>
              <button className=" underline underline-offset-4 text-body">Size guide</button>
            </div>
            { /* Size buttons */}
            <div className="flex w-full">
              {sizes.map((size, i) => (
                <button onClick={() => setSelectedSize(size.size)} disabled={size.soldOut} className={`text-body ${selectedSize === size.size ? "bg-white text-dark-blue" : ""} disabled:opacity-30 w-1/5 h-12 hover:bg-white hover:text-dark-blue transition-all text-sm flex justify-center items-center border border-white`} key={i}>{size.size}</button>
              ))}
            </div>
            { /* Purchase button */}
            <button className="w-full h-12 mt-8 flex justify-center items-center bg-white text-dark-blue hover:text-white hover:bg-dark-blue transition-all border border-white text-body">Add to cart</button>
          </div>
        </div>
      </motion.div>
      <Footer />
    </>
  );
};

export default function entangle() {
  return <RingContent />;
}
