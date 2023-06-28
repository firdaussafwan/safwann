import React from "react";
import { Tilt } from "react-tilt";

import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

import { SectionWrapper } from "../hoc";

const ServiceCard = ({index, title, icon}) => {
  return (
  // <p>{title} </p>

    <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full red-black-gradient p-[1px] rounded-[20px] shadow-card'
      // className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-[#0c0a09] rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        // className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt={title}
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>

  )
}


const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={ styles.sectionSubText }>Introduction</p>
        <h2 className={ styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p variants={ fadeIn("", "", 0.1, 1)}
        className = "mt-4 text-[#a8a29e] text-[17px] max-2-3xl leading-[30px]"
        >
          Experience in handling web development, with using PHP, JavaScript, CSS, and the Laravel framework. I also have proficiency in 3D animation using Blender and game development using Unity. I am enthusiastic about expanding my knowledge and acquiring further experience in these fields.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10 place-content-center">
        { services.map((service, index) => (
          <ServiceCard key = {service.title} index= {index} {...service} />
        ))}
      </div>

    </>
  )
}

// Pass Component and Id
export default SectionWrapper(About, "about")