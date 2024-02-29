import Head from "next/head";
import Nav from "@/components/navigation/Nav";
import { useState, useEffect, useCallback, useRef } from "react";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
export default function Privacy() {
  return (
    <>
      <Head>
        <title>YLEM | Privacy policy</title>
        <link
          rel="icon"
          type="image/x-icon"
          href="/logo/LOGO_browser.jpg"
        ></link>
      </Head>
      <Nav />
      <motion.div className=" text-white w-screen h-auto flex flex-col pt-24">
        {/* Image  */}
        <div className="w-full h-96 relative">
          <Image
            src="/page_covers/privacy.jpg"
            layout="fill"
            objectFit="cover"
            alt="Privacy policy"
          />
        </div>
        {/* Content  */}
        <motion.div className=" w-[1080px] max-w-full mx-auto flex flex-col items-start py-16 px-2">
          <h2 className="text-4xl font-medium my-4">Collection of Personal Data</h2>
          <p className="text-body text-base font-light tracking-wider text-gray-300 ml-4">
            You will always be informed about the gathering of your personal information.
            <br />
            The data we collect may include; your name, email, and similar identification data, information about your online purchases, and your website navigation. When you submit data, it will be clear whether the submission is voluntary or necessary to complete a desired action, such as finalizing a transaction in our webshop.
            <br />
            Your personal data will be collected when you shop online at ylemjewlery.com
          </p>
          <h2 className="text-4xl font-medium my-4">Use of Personal Data</h2>
          <ol className=" flex flex-col gap-2 mb-4 text-gray-300 ml-4">
            <li className="text-body text-base font-light tracking-wider">1. Assistance with order placement and order handling</li>
            <li className="text-body text-base font-light tracking-wider">2. Customer service support</li>
            <li className="text-body text-base font-light tracking-wider">3. Overview of purchase history</li>
            <li className="text-body text-base font-light tracking-wider">4. Measurement and improvement of our services</li>
          </ol>
          <p className="text-body text-base font-light tracking-wider text-gray-300 ml-4">
            Please note that we will only use your personal data for sending marketing material if you have explicitly given consent unless the law allows us to contact you without your consent. We generate statistics on which pages our users visit and which products our users prefer. This data does not include personal data. Information about your use of the website is collected through the gathered data. This information is used to enhance the website experience.
            <br />
            <br />
            Additionally, based on your location and preferences, we use data to direct you to the correct website domain. We also collect data on which products our users prefer as a whole. This information is further used to enhance the website experience.
            <br />
            <br />
            We neither sell nor disclose information about how you navigate and use the website.
            <br />
            We neither sell nor disclose information about your purchase history to a third party.
          </p>
          <h2 className="text-4xl font-medium my-4">Transfer to Other Data Controllers</h2>
          <p className="text-body text-base font-light tracking-wider text-gray-300 ml-4">
            We do not transfer your personal data to a third party without your consent. However, information related to delivery services and processing of goods will be transferred to the delivery service we use and our payment gateway partners. Under specific circumstances and with reference to the law, it may be relevant to transfer information to public authorities or the police. For example, in cases of suspected credit card fraud, information may possibly be disclosed to the police.
            <br />
            <br />
            In the event of reorganization, total or partial sale of the company, any exchange of data in this regard will comply with the current legislation on the processing of personal data.
          </p>
          <h2 className="text-4xl font-medium my-4">Exchange of Data with Data Controllers</h2>
          <p className="text-body text-base font-light tracking-wider text-gray-300 ml-4">
            Your personal data is disclosed to our partners providing services on behalf of Ylem - for example, when we market on social media, and process orders.
            <br /> <br />
            These parties only process your personal data on behalf of Ylem and in accordance with our instructions.
            <br /> <br />
            We delete your personal data when we no longer need to process it for one or more of the purposes mentioned in section 3. However, data in anonymized form may possibly be processed and stored for a longer period.
          </p>
          <h2 className="text-4xl font-medium my-4">Cookies</h2>
          <p className="text-body text-base font-light tracking-wider text-gray-300 ml-4">
            At ylemjewlery.com cookies are used with the aim of optimizing the website and its functionality, and thus making the visit as easy as possible for you.
            <br /><br />
            You can at any given time delete your cookies from your device.
          </p>
          <h2 className="text-4xl font-medium my-4">Security</h2>
          <p className="text-body text-base font-light tracking-wider text-gray-300 ml-4">
            We have implemented security measures to ensure that our internal procedures meet our high security standards. Therefore, we strive to ensure the quality and integrity of your personal data and reduce the risk of loss, misuse, unauthorized access, sharing, and alteration.
          </p>
          <h2 className="text-4xl font-medium my-4">Your Rights</h2>
          <p className="text-body text-base font-light tracking-wider text-gray-300 ml-4">
            You are entitled to be informed about the personal data we process about you - with certain legal exceptions. You also have the right to object to the collection and further processing of your personal data, including profiling/automated decision-making. Additionally, you have the right to have your personal data corrected, deleted, or blocked. Furthermore, you have the right to receive information about yourself that you have provided to us and the right to have this information transferred to another data controller.
          </p>
          <h2 className="text-4xl font-medium my-4">Disclaimer</h2>
          <p className="text-body text-base font-light tracking-wider text-gray-300 ml-4">
            You can withdraw any consent you have given us at any time, and we will delete your personal data unless we can continue processing based on another purpose.
            <br /> <br />
            If you wish to withdraw your consent, please contact us at <a href="mailto:ylemjewlery@gmail.com" className="underline">Ylemjewlery@gmail.com</a> or by phone: <a href="phoneto:28576157" className="underline">+45 28576157</a>.
          </p>
          <h2 className="text-4xl font-medium my-4">Links to Other Websites</h2>
          <p className="text-body text-base font-light tracking-wider text-gray-300 ml-4">
            Our website contains links to other websites or integrated pages. We are not responsible for the content of other company websites or their methods of collecting personal data. When visiting other companies, please read the owner's policy on the protection of personal data and other relevant policies.
          </p>
          <h2 className="text-4xl font-medium my-4">Change of Data</h2>
          <p className="text-body text-base font-light tracking-wider text-gray-300 ml-4">
            If you want us to 1) update, change, or delete the personal data we have collected about you, 2) you want to access the data we have collected about you, or 3) have any other questions regarding the above, please contact us at <a href="mailto:ylemjewlery@gmail.com" className="underline">Ylemjewlery@gmail.com</a> or by phone: <a href="phoneto:28576157" className="underline">+45 28576157</a>.
          </p>
          <div className="flex flex-col gap-2 w-full justify-center items-center mt-20 text-body text-gray-300 text-center">
            <p> This website is owned and administered by : </p>
            <p> Ylem I/S </p>
            <p> Guldsmedgade 1, 3.th, 8000 Aarhus C, Denmark </p>
            <p> CVR : 44195860 </p>
            <a> +45 28576157 </a>
            <a> contact@ylemjewelry.com </a>
          </div>
        </motion.div>
      </motion.div>
    </>
  )
}
