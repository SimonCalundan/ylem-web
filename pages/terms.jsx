import Head from "next/head";
import Nav from "@/components/navigation/Nav";
import { useState, useEffect, useCallback, useRef } from "react";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
export default function Terms() {
  return (
    <>
      <Head>
        <title>YLEM | Terms and conditions</title>
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
          <div className="w-screen  term-bg bg-opacity-50  h-full absolute top-0 left-0 flex flex-col items-center justify-center">
            <p className=" text-5xl font-thin z-10 uppercase text-center">Terms and conditions</p>
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
          <h2 className="text-4xl  my-4">Payment </h2>
          <p className="text-body text-base font-light tracking-wider text-gray-300 ml-4">
            Ylem accepts payment via ApplePay, Paypal, Credit card and Klarna
            <br />
            Payment will be deducted only when the physical item has been shipped, unless otherwise agreed upon or stated in your order.
          </p>
          <h2 className="text-4xl font-medium my-4">Reservation amount</h2>
          <p className="text-body text-base font-light tracking-wider text-gray-300 ml-4">
            Upon the use of credit cards, the amount equal to the transaction is reserved. Said amount will be held until the webshop processes and ship your order. The funds are debited from your account, once your order has been shipped.
          </p>
          <h2 className="text-4xl font-medium my-4">Transfer to Other Data Controllers</h2>
          <p className="text-body text-base font-light tracking-wider text-gray-300 ml-4">
            We do not transfer your personal data to a third party without your consent. However, information related to delivery services and processing of goods will be transferred to the delivery service we use and our payment gateway partners. Under specific circumstances and with reference to the law, it may be relevant to transfer information to public authorities or the police. For example, in cases of suspected credit card fraud, information may possibly be disclosed to the police.
            <br />
            <br />
            In the event of reorganization, total or partial sale of the company, any exchange of data in this regard will comply with the current legislation on the processing of personal data.
          </p>
          <h2 className="text-4xl font-medium my-4">Amount Reservation</h2>
          <p className="text-body text-base font-light tracking-wider text-gray-300 ml-4">When using debit or credit cards, an amount equivalent to the transaction is set aside. This reserved amount remains held until the webshop processes and dispatches your order. Once the order is shipped, the funds are withdrawn from your account. The duration of the reservation period is contingent on the specific product or service.</p>
          <h2 className="text-4xl font-medium my-4">Debit Card Authorization</h2>
          <p className="text-body text-base font-light tracking-wider text-gray-300 ml-4">For debit cards, you may observe that the funds are earmarked in your account, leading to a reduction in your available balance. If you decide to cancel your order or if the webshop cancels it later, the webshop cannot retrieve the funds immediately, but the reservation will persist for a certain duration. It is important to note that only your bank (or card issuer) possesses the authority to cancel the reservation.</p>
          <h2 className="text-4xl font-medium my-4">Credit Card Authorization</h2>
          <p className="text-body text-base font-light tracking-wider text-gray-300 ml-4">
            The funds will be subtracted from your account and will be reflected in your statement as soon as the webshop processes and completes the payment for your order.
            <br />
            All amounts on the website include VAT.
            <br />
            The website uses the following currencies for pricing:
            <br />
            <br />
            Denmark - Kroner (DKK)
            <br />
            Worldwide - Euro (EUR)
          </p>
          <h2 className="text-4xl font-medium my-4">Delivery</h2>
          <p className="text-body text-base font-light tracking-wider text-gray-300 ml-4">
            Delivery time is 2-3 business days for orders within the danish borders and 2-3 business days for worldwide orders.
            <br />
            Ylem ships via the following carriers : GLS
            <br />
            Shipping fees will vary depending on disered delivery location, but deliveries to Denmark are usually 48,25DKK (6,47 EUR).
          </p>
        </motion.div>
      </motion.div>
      <Footer />
    </>
  )
}

