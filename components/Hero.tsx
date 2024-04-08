"use client"

import Image from 'next/image'
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
          <span>
            <Typewriter
              words={['Data Scientist', 'Tech Enthusiast', 'Programmer', 'Developer!']}
              loop={true}
              cursor
              cursorStyle='_'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h2>
        <p className='regular-16 max-w-[555px] my-4'>Hi there! I'm a data scientist who's all about turning data into insights and making informed decisions. With expertise in Python, SQL, Tableau, Microsoft Power BI, Numpy, and Pandas, I've got the skills you need to transform your data into actionable insights.

          As a Python expert, I have experience working with large datasets, and I use my expertise in Python to clean, preprocess, and analyze data. And when it comes to SQL, I'm your go-to person for writing complex queries and loading data from databases. I'm also a master of data visualization, using Tableau and Microsoft Power BI to create compelling visuals that tell a story.

          Whether it's statistical analysis, machine learning, or predictive modeling, I've got you covered. I've worked on a wide range of projects, and I'm always up for a challenge. But most importantly, I believe that effective communication is key. That's why I'm always looking for new ways to present data in a way that's easy to understand.

          In conclusion, I'm a data scientist with expertise in Python, SQL, Tableau, Microsoft Power BI, Numpy, and Pandas. I have experience working on a wide range of projects, and I'm always looking for new challenges. If you're looking for someone who can turn your data into insights, I'm the person for you. Let's connect and discuss how I can help you with your data needs!</p>
        <div className='my-5 flex flex-wrap gap-5'>
          <div className='flex items-center gap-2'>
            {
              Array(1).fill(1).map((_, index) => (
                <Image 
                  src="/star.jpg"
                  key={index}
                  alt='star'
                  height={200}
                  width={200}
                />
              ))
            }
          </div>
          <p className='bold-18 lg:bold-20'>1100+ <span className='regular-16 lg:regular-20'>Exellent Reviews</span></p>
        </div>
        <div className='flexstart gap-1 pt-6'>
          <button
          type="button"
          title="download CV"
          icon="/download.svg"
          variant="btn_dark_round"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero