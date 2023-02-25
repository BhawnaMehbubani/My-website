import React from 'react'
import { motion } from 'framer-motion'

import Image from 'next/image';
import mypic from 'components/assests/img1.jpg'


type Props = {}

export default function About({}: Props) {
  return (
    <motion.div 
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:1.5}}
    className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
            About
        </h3>

      


        <motion.img 
            initial={{
                x:-200,
                opacity:0,

            }}
            transition={{
                duration:1.2,
            }}
            whileInView={{opacity:1, x:0}}
            viewport={{ once:true}}
            src="/img1.jpg" alt="" 
            className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[350px] xl:h-[350px]"
        />
        
        <div className="space-y-10 px-0 md:px-10">
            <h4 className='text-4xl font-semibold'>
            Here is a <span className="underline decoration-[#F7AB0A]/50">little</span> background
            </h4>
            <p className="text-sm">
            Coding is fun! and why should boys have all the fun?
A person who not only dreams but consistently strives to do something out of the box. Software Developer offering critical assistance for web application development, coding, and testing. Extensive familiarity with Java, Python, C++, and other frameworks. Proficient in complex Selenium with JAVA and Agile deployments as well. Strong communicator and multitasker with an organized, detail-oriented approach.
I believe, in the IT industry, DSA is never off the table!
            </p>
            </div>


    </motion.div>
  );
}