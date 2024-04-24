import Link from 'next/link'
import React from 'react'
import { Desktop, GithubLogo, LinkedinLogo } from "@phosphor-icons/react/dist/ssr";


export default function Header() {
  return (
    <div className='shadow-sm border-b sticky top-0 bg-white/50 backdrop-blur-lg z-30 p-4'>

      <div className='max-w-6xl mx-auto flex items-center justify-between'>
        {/* Logo */}
        <Link href='/' className='hidden lg:inline-flex'>
          <h1 className='text-3xl font-bold'>
            Project Gallery
          </h1>
        </Link>

        <Link href='/' className='lg:hidden flex items-center gap-2'>
          <Desktop size={32} /> Gallery
        </Link>

        <div className='flex items-center gap-4'>
          <Link href='https://github.com/aradhana1807' >
            <GithubLogo className='cursor-pointer transform hover:scale-125 transition duration-300 hover:text-red-500' size={32} />
          </Link>

          <Link href='https://www.linkedin.com/in/aradhana-nayak-607959212' >
            <LinkedinLogo className='cursor-pointer transform hover:scale-125 transition duration-300 hover:text-red-500'
              size={32} />
          </Link>
        </div>
      </div>
    </div>
  )
}
