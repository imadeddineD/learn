import React from 'react'
import Accordion from '../Accordion'
import { motion } from "framer-motion";
import { SlideUp } from '../../utils/animate';


const Question = () => {
  return (
    <motion.div className=" w-[100%] max-w-[820px] my-[60px] md:px-0 mx-auto text-start px-4" variants={SlideUp(0.15)}
    initial="hidden"
    whileInView={"visible"}>
      <Accordion
        title="Do you prefer Android or iOS"
        answer="I like to use iOS products"
      />
      <Accordion
        title="Do you prefer writing CSS or Tailwind?"
        answer="I like to use Tailwind"
      />
      <Accordion title="Firebase or Supabase?" answer="I am using Supabase!" />
    </motion.div>
  )
}

export default Question