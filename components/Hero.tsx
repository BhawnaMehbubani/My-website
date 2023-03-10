import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles';
import Link from "next/link";

type Props = {}

export default function Hero({}: Props) {
  const[text, count] = useTypewriter({
    words: [
      "Hi, I am Bhawna Mehbubani",
      "Coder-Girl.tsx",
      "<And-Also-Loves-Coffee />",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles/>

      <img className="relative rounded-full h-32 w-32 mx-auto object-cover"  
      src="https://media.licdn.com/dms/image/D5603AQH910r3PiUuvQ/profile-displayphoto-shrink_800_800/0/1667815429006?e=2147483647&v=beta&t=rQE9lvfvtEvInRojI5xirW1S2xs6d696QTUvaDHFUfw" alt=""/>


    <div className="z-20">
      <h2 className="text-sn uppercase text-gray-500 pb-2 tracking-[15px]">
        Software Developer
      </h2>
    <h1 className="text-5xl lg:text-6xl font-semibold px-10">
        <span>{text}</span>
        <Cursor cursorColor="#F7ABBA" />
      </h1>
    <div className="pt-5">
      <Link href="#about">
          <button className="heroButton">About</button>
      </Link>
      <Link href="#experience">
          <button className="heroButton">Experience</button>
      </Link>
      <Link href="#skills">
          <button className="heroButton">Skills</button>
      </Link>
      <Link href="#projects">    
          <button className="heroButton">Project</button>
      </Link>

    </div>

    </div>
      
    </div>
  );
}