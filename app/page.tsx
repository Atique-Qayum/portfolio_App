import About from '@/components/About'
import Hero from '@/components/Hero'
import Porfolio from '@/components/Porfolio'
import Skills from '@/components/Skills'
import Testimonial from '@/components/Testimonial'
import React from 'react'

export const page = () => {
  return (
    <main>
      <div>
        <Hero/>
        <About/>
        <Skills/>
        <Porfolio/>
        <Testimonial/>
      </div>
    </main>
  )
}

export default page