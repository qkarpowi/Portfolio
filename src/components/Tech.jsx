import React from "react";

import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { frameworks } from "../constants";
import { languages, certificates } from "../constants";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      initial="hidden"
        animate="show"
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 250,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-5 flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const Tech = () => {
  return (
    <>
    <motion.div variants={textVariant()}
    initial="hidden"
    animate="show" >
      <p className={`${styles.sectionSubText} `}>My Proficiencies</p>
      <h2 className={`${styles.sectionHeadText}`}>Knowledge.</h2>
    </motion.div>

    <div className='w-full flex'>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        initial="hidden"
        animate="show" 
        className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        The following are areas I excel in. You can trust that I will deliver the best results using these languages, frameworks, and technologies.
      </motion.p>
    </div>

    <motion.div variants={textVariant()} 
    initial="hidden"
    animate="show" 
    className="mt-10">
      <p className={`${styles.sectionSubText} `}>Languages</p>
    </motion.div>
    <div className='flex flex-row flex-wrap justify-center gap-10 mb-20 mt-10'>
        {languages.map((technology, index) => (
          <ServiceCard key={technology.id} title={technology.name} index={index} {...technology} />
        ))}
    </div>

    <motion.div variants={textVariant()} className="mt-10"
    initial="hidden"
    animate="show" >
      <p className={`${styles.sectionSubText} `}>Frameworks</p>
    </motion.div>
    <div className='flex flex-row flex-wrap justify-center gap-10 mb-20 mt-10'>
        {frameworks.map((technology, index) => (
          <ServiceCard key={technology.id} title={technology.name} index={index} {...technology} />
        ))}
    </div>

    <motion.div variants={textVariant()} className="mt-10"
    initial="hidden"
    animate="show" >
      <p className={`${styles.sectionSubText} `}>Technologies</p>
    </motion.div>
    <div className='flex flex-row flex-wrap justify-center gap-10 mb-20 mt-10'>
        {technologies.map((technology, index) => (
          <ServiceCard key={technology.id} title={technology.name} index={index} {...technology} />
        ))}
    </div>

    <motion.div variants={textVariant()} className="mt-10"
    initial="hidden"
    animate="show" >
      <p className={`${styles.sectionSubText} `}>Certifications</p>
    </motion.div>
    <div className='flex flex-row flex-wrap justify-center gap-10 mt-10'>
        {certificates.map((technology, index) => (
          <ServiceCard key={technology.id} title={technology.name} index={index} {...technology} />
        ))}
    </div>
  </>

  );
};

export default SectionWrapper(Tech, "");