import React from 'react'
import image from "../../assets/about.png"
import { FaBookReader } from 'react-icons/fa'
import { motion } from "framer-motion";
import { SlideUp } from '../../utils/animate';

const About = () => {
  return (
    <div className="relative w-[100%] flex justify-center items-center my-[60px]">
      <div className=" w-[100%] max-w-[820px] mx-auto md:px-0 px-4" >

        <motion.div
        variants={SlideUp(0.15)}
        initial="hidden"
        whileInView={"visible"}
         className="text-[35px] font-bold text-primary text-center mb-5">
          About Us
        </motion.div>

        <motion.div
        variants={SlideUp(0.3)}
        initial="hidden"
        whileInView={"visible"}
         className=' text-[20px] font-semibold'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, et soluta! Repellat dignissimos doloribus adipisci harum totam neque possimus magni laudantium aliquam. Laborum ab aperiam voluptates illum nobis alias quas.
          Lorem ipsum dolor sit <span className=' font-bold text-secondary'>amet consectetur adipisicing elit</span>. Quod, et soluta! Repellat dignissimos doloribus adipisci harum totam neque possimus magni laudantium aliquam. Laborum ab aperiam voluptates illum nobis alias quas.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, et soluta! Repellat dignissimos doloribus adipisci harum totam neque possimus magni laudantium aliquam. Laborum ab aperiam voluptates illum nobis alias quas.
        </motion.div>

        <div className=" w-[100%] max-w-[820px] mx-auto mt-[60px] grid grid-cols-1 md:grid-cols-2 gap-8 space-y-6 md:space-y-0" >
          <div className="flex justify-center items-center">
            <motion.img
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
             src={image} alt="about img" className=' w-[350px] md:w[450px] object-cover drop-shadow ' />
          </div>
          <div className="flex flex-col justify-center">
            <div className="text-center md:text-left space-y-12">
              <h1 className="text-3xl md:text-4xl font-bold !leading-snug">
                The World&apos;s Leading Online Platform
              </h1>
              <div className=' flex flex-col gap-5'>
                <motion.div
                variants={SlideUp(0.1)}
                initial="hidden"
                whileInView={"visible"}
                 className="flex items-center gap-4 p-6 rounded-2xl hover:bg-white duration-300 hover:shadow-2xl bg-[#F4F4F4]">
                  <FaBookReader className='text-2xl'/>
                  <p className="text-lg">10.000 Courses</p>
                </motion.div>
                <motion.div
                variants={SlideUp(0.2)}
                initial="hidden"
                whileInView={"visible"}
                className="flex items-center gap-4 p-6 rounded-2xl hover:bg-white duration-300 hover:shadow-2xl bg-[#F4F4F4]">
                  <FaBookReader className='text-2xl'/>
                  <p className="text-lg">10.000 Courses</p>
                </motion.div>
                <motion.div
                variants={SlideUp(0.3)}
                initial="hidden"
                whileInView={"visible"}
                 className="flex items-center gap-4 p-6 rounded-2xl hover:bg-white duration-300 hover:shadow-2xl bg-[#F4F4F4]">
                  <FaBookReader className='text-2xl'/>
                  <p className="text-lg">10.000 Courses</p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default About