import { NAV_LINKS } from '@/constants'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='padding-container relative z-30 bg-white shadow-xl ring-1 ring-slate-100'>
      <div className='flexbetween mac-container'>
        <Link href='/' className='Bold-28 capitalize relative'>
          ATI<span className='text-blue-700'>QUE</span>
        </Link>
        <ul className='hidden h-full gap-6 lg:flex px-6 py-3'>
          {
            NAV_LINKS.map((link) => (
              <Link href={link.href} key={link.key} className='flexCenter text-[15px] font-[500] text-black hover:bg-blue-500 hover:text-white px-4 py-1 rounded-full cursor-pointer transition-all duration-300'>
                {link.label}

              </Link>
            ))
          }

        </ul>
      </div>
      navbar
    </nav>
  )
}

export default Navbar