import React from 'react'
import Image from "../../assets/image.png"
import { motion } from "framer-motion";

const contact = () => {
  return (
    <>
    <div className="bg-primary relative w-[100%] h-[100vh] flex justify-center items-center">
      <motion.div 
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 100, delay: 0.2 }} 
      className=" md:w-[100%] w-[93%] max-w-[820px] h-[550px] bg-white rounded-[20px] overflow-hidden item">
        <div className="contact bg-white flex justify-center items-center flex-col">
          <div className="text-primary p-[20px] text-[32px] font-semibold text-center">
            Let&apos;s get in touch
            </div>
            <img 
            src={Image} alt="Image" className=' w-[300px] h-[300px] m-auto' />
        </div>
        <div className="submit-form bg-primary p-[20px]">
          <div className="text-[25px] font-semibold  text-white classs">Contact Us</div>
          <form action="">
            <div className=" h-[40px] w-[85%] mt-[25px] mx-0 relative ttt">
              <input type="text" className=' w-[100%] h-[100%] bg-transparent border-[2px] border-solid border-white rounded-[20px] outline-none text-[#333] text-[16px] pl-[10px]' required />
              <label htmlFor="" className=' absolute top-[20px] left-[10px] pl-[10px] translate-y-[-50%] text-[15px] text-white font-[500] transition-all duration-200'>Name</label>
            </div>
            <div className=" h-[40px] w-[85%] mt-[25px] mx-0 relative ttt">
              <input type="email" className=' w-[100%] h-[100%] bg-transparent border-[2px] border-solid border-white rounded-[20px] outline-none text-[#333] text-[16px] pl-[10px]' required />
              <label htmlFor="" className=' absolute top-[20px] left-[10px] pl-[10px] translate-y-[-50%] text-[15px] text-white font-[500] transition-all duration-200'>Email</label>
            </div>
            <div className=" h-[40px] w-[85%] mt-[25px] mx-0 relative ttt">
              <input type="tel" className=' w-[100%] h-[100%] bg-transparent border-[2px] border-solid border-white rounded-[20px] outline-none text-[#333] text-[16px] pl-[10px]' required />
              <label htmlFor="" className=' absolute top-[20px] left-[10px] pl-[10px] translate-y-[-50%] text-[15px] text-white font-[500] transition-all duration-200'>Phone</label>
            </div>
            <div className=" h-[120px] w-[85%] mt-[25px] mx-0 relative ttt">
              <textarea name="" id="" className=' w-[100%] h-[100%] bg-transparent border-[2px] border-solid border-white rounded-[20px] outline-none text-[#333] text-[16px] pl-[10px]' required></textarea>
              <label htmlFor="" className=' absolute top-[20px] left-[10px] pl-[10px] translate-y-[-50%] text-[15px] text-white font-[500] transition-all duration-200'>Message</label>
            </div>
            <input type="submit" value="Send" className=' relative top-[50px] bg-secondary outline-none border-none w-[30%] h-[45px] text-[16px] text-white cursor-pointer font-[600] rounded-[8px] hover:bg-secondary/70 duration-200 transition-all' />
          </form>
        </div>
      </motion.div>
    </div>
    </>
  )
}

export default contact