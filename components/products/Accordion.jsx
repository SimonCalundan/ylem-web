import { useState } from "react"
import { motion } from "framer-motion";
export default function Accordion() {
  const [active, setActive] = useState(0);
  const testArr = [
    {
      title: "Materials",
      content: "The Entangle ring is made of 925 sterling silver and plated with rhodium."
    },
    {
      title: "Shipping and returns info",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      title: "Payment options",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      title: "Ylem packaging",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
  return (
    <div className="flex w-full flex-col gap-2">
      {testArr.map((item, index) => (
        <div key={index} onClick={() => setActive(index)} className=" cursor-pointer py-2 px-4 flex justify-between w-full border-b-white border-opacity-20 border-b min-h-10">
          {/* Content */}
          <div className="flex flex-col gap-2 pb-2">
            <p className="text-2xl uppercase font-medium">{item.title}</p>
            {active === index && (
              <motion.p
                className="max-w-[90%]"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 100, y: 0 }}
                transition={{ duration: 0.3 }}
              >{item.content}</motion.p>
            )}
          </div>
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={`duration-500 ${active === index ? "rotate-180" : ""} transition-all duration-300 w-6 h-6 text-white text-opacity-50`}>
              <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
            </svg>

          </button>
        </div>
      ))}
    </div>
  )
}
