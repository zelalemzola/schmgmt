import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div className='w-full h-screen flex items-center justify-center  text-schYellow'>
        <div className='flex flex-col items-center gap-8'>
            <div className='flex items-center gap-3'>
                  <Image src='/logo.png' alt="logo" width={120} height={120} />
                  <span className='hidden lg:block text-2xl font-extrabold'>School</span>
            </div>
            <div className="flex flex-col items-center gap-4">
                <h1 className='text-2xl font-bold'>Sorry Dear, You are searching for a page that doesn't exist</h1>
                <Link href='/' className='bg-schYellow text-black p-3 rounded-full shadow-md hover:animate-pulse'>Click here to go back to the Home Page</Link>
            </div>
        </div>
    </div>
  )
}

export default NotFound