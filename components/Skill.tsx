import React from 'react'
import { motion } from 'framer-motion'

type Props = {
    directionLeft?: boolean;
}

function Skill({directionLeft}: Props) {
  return (
    <div className="group relative flex cursor-pointer">
        <motion.img
            initial={{
                x:directionLeft ? -200:200,
                opacity:0
            }}
            transition={{duration: 1}}
            whileInView={{opacity:1,x:0}}
            src="\skills\vs.png"
            
            className="rounded-full border border-gray-500 object-cover w-18 h-18 xl:w-20 xl:h-20 filter group-hover:grayscale transition duration-300 ease-in-out"
        />
        <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-14 w-14 md:h-18 md:w-18 xl:w-20 xl:h-20 rounded-full z-0">
            <div className="flex items-center justify-center h-full">
                <p className="text-3xl font-bold text-black opacity-100">100%</p>
            </div>
        </div>
        
    </div>
  );
}
export default Skill;