"use client"

import React from 'react'
import { Typewriter } from 'react-simple-typewriter'


const Hero = () => {
  return (
    <section className='max-container padding-container flex flex-col flexcenter gap-20 py-10 pb-32 md:gap-28 lg:py-20 lg:flex-row'>
      <span className='max-container absolute top-64 left-44 h-[144px] w-[777px] bg-blue-400 rounded-full shadow-lg blur-[7rem]'></span>
      {/*LEFT*/}
      <div className='relative z-20 flex flex-1 flex-col pt-16'>
        <h4 className='bold-20'>Hello</h4>
        <h1 className='bold-48 lg:bold-64 relative'>I'm Muhammad Atique Qayum</h1>
        <h2 className='bold-28 lg:bold-32 text-[1.8rem] capitalize'>
          A {' '}
        </h2>
        <span>
        <Typewriter
          words={['Data Scientist', 'Tech Enthusiast', 'Coder', 'Developer!']}
          loop={5}
          cursor
          cursorStyle='_'
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
        </span>
      </div>
    </section>
  )
}

export default Hero