import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion";
export default function Accordion() {
  const [active, setActive] = useState(null);
  const testArr = [
    {
      title: "Wear and care",
      content: "The ring is made in such a way that you can safely and carefully bend it to fit your finger perfectly. Please wear your jewelry with care and take it off in any situation where the spikes could easily get entangled in fabric or the like. To care for your ring, clean it with a bit of soapy water or polish it with a silver polishing cloth regularly. Avoid exposing it to harsh chemicals, moisture, or direct sunlight to maintain its shine. We recommend storing them in our jewelry boxes, that follow with purchase."
    },
    {
      title: "Order cancellation",
      content: "Yes. If your order is yet to be shipped, you can cancel the order and we will refund the whole amount. If your order has already been shipped, you cannot cancel it, and will have to process a return instead."
    },
    {
      title: "Return policy",
      content: "You may return your jewelry within 14 days of the date of delivery, provided the jewelry piece is in its original packaging, in new and unused condition, with all materials intact. If you desire to initiate a return, kindly note that the associated shipping costs will be your responsibility. To expedite this process, please complete the provided form, through the following link: Given the product has met the above conditions, you will receive a full refund. If the conditions are not met, we reserve the right to make a partial refund of the amount of the product."
    }
  ]
  return (
    <div className="flex w-full flex-col gap-2">
      {testArr.map((item, index) => (
        <div key={index} onClick={() => {
          if (active === index) {
            setActive(null);
          } else {
            setActive(index);
          }
        }} className=" cursor-pointer py-2 px-4 flex justify-between w-full border-b-white border-opacity-20 border-b min-h-10">
          {/* Content */}
          <div className="flex flex-col gap-2 pb-2">
            <p className="text-2xl uppercase font-medium tracking-wider">{item.title}</p>
            <AnimatePresence>
              {active === index && (
                <motion.p
                  className="font-thin max-w-[90%] text-body"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 100, y: 0 }}
                  transition={{ duration: 0.6 }}
                >{item.content}</motion.p>
              )}
            </AnimatePresence>
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
