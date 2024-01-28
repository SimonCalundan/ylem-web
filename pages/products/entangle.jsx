import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { useState, useEffect, useCallback, useRef } from "react";
import { motion } from "framer-motion";
import Nav from "@/components/navigation/Nav";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Accordion from '@mui/joy/Accordion';
import AccordionDetails from '@mui/joy/AccordionDetails';
import AccordionGroup from '@mui/joy/AccordionGroup';
import AccordionSummary from '@mui/joy/AccordionSummary';


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
    soldOut: true
  },
];

function AccordionComp() {
  return (
    <AccordionGroup size="lg" sx={{ width: "100%" }}>
      <Accordion className="hover:bg-dark-blue">
        <AccordionSummary className=""><p className="text-white">MATERIALS AND CARE</p></AccordionSummary>
        <AccordionDetails>
          <p className="text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion className="hover:bg-dark-blue">
        <AccordionSummary className=""><p className="text-white">SHIPPING AND RETURNS INFO</p></AccordionSummary>
        <AccordionDetails>
          <p className="text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion className="hover:bg-dark-blue">
        <AccordionSummary className=""><p className="text-white">PAYMENT OPTIONS</p></AccordionSummary>
        <AccordionDetails>
          <p className="text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion className="hover:bg-dark-blue">
        <AccordionSummary className=""><p className="text-white">YLEM PACKAGING</p></AccordionSummary>
        <AccordionDetails>
          <p className="text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </AccordionDetails>
      </Accordion>
    </AccordionGroup>
  );
}
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
          <svg onClick={next} xmlns="http://www.w3.org/2000/svg" className="absolute z-30 w-20 h-48 hover:scale-105 active:scale-95 transition-all cursor-pointer  top-1/2 right-0" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M11 4l3 8l-3 8" /></svg>
          <svg onClick={previous} xmlns="http://www.w3.org/2000/svg" className="absolute z-30 w-20 h-48 hover:scale-105 active:scale-95 transition-all cursor-pointer top-1/2 left-0" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M13 20l-3 -8l3 -8" /></svg>
          <Link href="#product_info" className="flex flex-col p-1 justify-center items-center absolute left-1/2 -translate-x-1/2 top-1/2  bg-dark-blue opacity-30 hover:opacity-100 h-12 w-60 z-50 transition-all duration-300 cursor-pointer ">
            <p className="text-white uppercase">Go to product info</p>
          </Link>
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
        <div className="flex flex-col-reverse gap-12 md:gap-0 md:flex-row w-full max-w-[1280px] mx-auto h-screen pt-4 md:pt-20 px-8" id="product_info">
          { /* Accordion */}
          <div className="flex flex-col gap-2 w-full md:w-1/2 px-2 md:px-8">
            <AccordionComp />
          </div>
          { /* Info, select and purchase */}
          <div className="flex flex-col gap-2 w-full md:w-1/2 px-2 md:px-8">
            {/* Name, description and price */}
            <div className="flex justify-between items-end ">
              <p className="text-2xl uppercase font-medium">Entangle ring</p>
              <p className="text-xl uppercase font-light">899 DKK</p>
            </div>
            <div className="flex mb-10"><p className="text-gray-300 font-light">Sterling silver | ekstra info her</p></div>
            { /* Select size */}
            <div className="flex justify-between w-full mb-1">
              <p className="font-medium">Select size</p>
              <button className=" underline underline-offset-4">Size guide</button>
            </div>
            { /* Size buttons */}
            <div className="flex w-full">
              {sizes.map((size, i) => (
                <button disabled={size.soldOut} className="disabled:opacity-30 w-1/5 h-12 hover:bg-white hover:text-dark-blue transition-all text-sm flex justify-center items-center border border-white" key={i}>{size.size}</button>
              ))}
            </div>
            { /* Purchase button */}
            <button className="w-full h-12 mt-8 flex justify-center items-center bg-white text-dark-blue hover:text-white hover:bg-dark-blue transition-all border border-white">Add to cart</button>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default function entangle() {
  return <RingContent />;
}
