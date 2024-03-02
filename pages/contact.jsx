import Head from "next/head";
import Nav from "@/components/navigation/Nav";
import { useState, useEffect, useCallback, useRef } from "react";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import axios from "axios";
export default function Terms() {
  const [formData, setFormData] = useState({});

  async function sendEmail() {
    try {
      const response = await axios.post('https://api.emailjs.com/api/v1.0/email/send', { 
        service_id: 'service_etp0ci7', 
        template_id: 'template_sllt8wf', 
        user_id: 'oxFjUr_HRGzGJaBVl', 
        template_params: { 
          from_name: formData.from_name,
          from_mail: formData.from_mail,
          from_phone: formData.from_phone,
          message: formData.message
        }
      });
      console.log(response)
    } catch (error) {
     console.log(error) 
    }
  }

  return (
    <>
      <Head>
        <title>YLEM | Contact us</title>
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
          <div className="w-screen h-full absolute top-0 left-0 flex flex-col items-center justify-center">
            <p className=" text-5xl font-thin z-10">Contact</p>
          </div>
          <Image
            src="/contact.jpg"
            layout="fill"
            objectFit="cover"
            alt="Privacy policy"
            className="opacity-50"
          />
        </div>
        {/* Content  */}
        <motion.div className=" w-[1080px] max-w-full mx-auto flex flex-col items-center py-16 px-2">

          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-4 w-[41rem] max-w-full px-4 md:px-0">
            <p className="text-2xl ">Contact us</p>
            <div className="w-full flex flex-col md:flex-row gap-4 md:gap-0 justify-between">
              <input onChange={(e) => setFormData(
                {
                  ...formData,
                  from_name: e.target.value
                }
              )} placeholder="First name" className=" px-4 text-lg text-dark-blue h-12 w-full md:w-80 bg-gray-100" type="text" />
              <input onChange={(e) => setFormData(
                {
                  ...formData,
                  from_mail: e.target.value
                }
              )} placeholder="Email" className=" px-4 text-lg text-dark-blue h-12 w-full md:w-80 bg-gray-100" type="text" />
            </div>
            <input onChange={(e) => setFormData(
              {
                ...formData,
                from_phone: e.target.value
              }
            )} placeholder="Phone number" className=" px-4 w-full text-lg text-dark-blue h-12 bg-gray-100" type="text" />
            <textarea onChange={(e) => setFormData({
              ...formData,
              message: e.target.value
            })} placeholder="Your message" className=" px-4 py-2 w-full text-lg text-dark-blue resize-none h-32 bg-gray-100" type="text" />
            <button onClick={() => sendEmail()} className="w-40 h-12 bg-white text-dark-blue text-lg">Send</button>
          </form>
        </motion.div>
      </motion.div>
      <Footer />
    </>
  )
}


