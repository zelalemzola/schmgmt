import Image from 'next/image'
import React from 'react'

const UserCard = ({type}:{type:string}) => {
  return (
    <div className='rounded-2xl odd:bg-schPurple even:bg-schYellow flex-1 min-w-[130px] p-4'>
        <div className="flex justify-between items-center">
            <span className='text-[10px] bg-white px-2 py-1 rounded-full text-green-600'>2024/25</span>
            <Image src='/more.png' alt='' width={20} height={20}/>
        </div>
        <h1 className='text-2xl font-bold my-4'>1,234</h1>
        <h2 className=' text-sm font-medium text-gray-500'><span className='capitalize'>{type}</span>s</h2>

    </div>
  )
}

export default UserCard