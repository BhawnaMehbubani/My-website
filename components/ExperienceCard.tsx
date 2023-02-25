import React from 'react'
import { motion } from 'framer-motion'


type Props = {}

export default function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0">
        <motion.img 
            initial={{
                y:-100,
                opacity:0,
            }}
            transition={{duration:1.2}}
            whileInView={{opacity: 1, y:0}}
            viewport={{ once:true}}

        className="w-20 h-20 rounded-full pt+5 xl:w-[80px] xl:h-[80px] object-cover object-center"
        src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/ejnnbcqvqqvxsu9ef1ud" alt=""
        />




            <div className="px-0 md:px-10">
                <h4 className="text-2xl font-light">
                    Programmer Analyst Trainee
                </h4>
                <p className="font-bold text-1xl mt-1">
                    Cognizant Technology Solutions
                </p>
                <div className="flex space-x-2 my-2">
                    <img 
                    className="h-10 w-10 rounded-full"
                    src="data:image/png;base64,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" alt=""
                    />
                    <img 
                    className="h-10 w-10 rounded-full"
                    src="data:image/png;base64,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" alt=""
                    />
                    <img 
                    className="h-10 w-10 rounded-full"
                    src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/ejnnbcqvqqvxsu9ef1ud" alt=""
                    />
                    {/*Tech Used*/}
                    {/*Tech Used*/}
                    {/*Tech Used*/}
                </div>
                <p className="uppercase py-5 text-gray-300">
                    Started work.... - Ended...
                </p>
                <ul className="list-disc space-y-4 ml-5 text-lg">
                    <li>Summary Points </li>
                    <li>Summary Points </li>
                    <li>Summary Points </li>
                    <li>Summary Points </li>
                </ul>

            </div>












    </article>
  );
}