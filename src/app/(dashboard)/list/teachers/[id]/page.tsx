import Announcements from '@/components/Announcements';
import BigCalendar from '@/components/BigCalendar';
import FormModal from '@/components/FormModal';
import Performance from '@/components/Performance';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const SingleTeacher = () => {
  return (
    <div className='flex-1 p-4 flex flex-col gap-4 xl:flex-row '>
        <div className="w-full xl:w-2/3">
          <div className="flex flex-col lg:flex-row gap-4">
          <div className="bg-schSky p-6 px-4 rounded-md flex-1 flex gap-4">
            <div className="w-1/3">
             <Image src='https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=1200' alt='' width={144} height={144} className='w-36 h-36 rounded-full object cover'/>
            </div>
            <div className="w-2/3 flex flex-col justtify-between gap">
            <div className="flex items-center gap-4">
              <h1 className='text-xl font-semibold'>Justina Frank</h1>
              <FormModal table='teacher' type='update' data={
                {
                    id:1,
                    username:"Jhonny",
                    email:"jhon@gmailom",
                    password:'password',
                    firstName:'Jhon',
                    lastName:"Doe",
                    phone:"+25198864633",
                    address:'253 Bole, Atlas',
                    booldType:'A+',
                    dateOfBirth:'2000-01-01',
                    sex:"male",
                    img:'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=1200'
                }
              }/>
              </div>
              <p className='text-sm text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus?</p>
              <div className="flex items-center justify-between gap-2 flex-wrap text-sm font-medium">
                <div className="w-full md:w-1/3 lg:w-full  flex items-center gap-2">
                    <Image src='/blood.png' alt='' width={14} height={14}/>
                    <span>A+</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full  flex items-center gap-2">
                    <Image src='/date.png' alt='' width={14} height={14}/>
                    <span>January 2025</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full  flex items-center gap-2">
                    <Image src='/mail.png' alt='' width={14} height={14}/>
                    <span>user@gmail.com</span>
                </div>
                 <div className="w-full md:w-1/3 lg:w-full  flex items-center gap-2">
                    <Image src='/phone.png' alt='' width={14} height={14}/>
                    <span>+25198865465</span>
                </div>
                
              </div>
            </div>
          </div>
          <div className="flex-1 flex gap-4 justify-between flex-wrap">
                <div className="bg-white  p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%] ">
                    <Image src='/singleAttendance.png' alt='' width={24} height={24} className='w-6 h-6'/>
                    <div className="">
                        <h1 className='text-xl font-semibold'>90%</h1>
                        <span className='text-sm text-gray-400'>Attendance</span>
                    </div>
                </div>
                <div className="bg-white  p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%] ">
                    <Image src='/singleBranch.png' alt='' width={24} height={24} className='w-6 h-6'/>
                    <div className="">
                        <h1 className='text-xl font-semibold'>2</h1>
                        <span className='text-sm text-gray-400'>Branches</span>
                    </div>
                </div>
                <div className="bg-white  p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%] ">
                    <Image src='/singleLesson.png' alt='' width={24} height={24} className='w-6 h-6'/>
                    <div className="">
                        <h1 className='text-xl font-semibold'>6</h1>
                        <span className='text-sm text-gray-400'>Lessons</span>
                    </div>
                </div>
                <div className="bg-white  p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%] ">
                    <Image src='/singleClass.png' alt='' width={24} height={24} className='w-6 h-6'/>
                    <div className="">
                        <h1 className='text-xl font-semibold'>6</h1>
                        <span className='text-sm text-gray-400'>Classes</span>
                    </div>
                </div>
                
          </div>
          </div>

          <div className="mt-4 bg-white rounded-md p-4 h-[800px]">
             <h1>Teacher&apos;s Schedule</h1>
             <BigCalendar/>
          </div>
        </div>
        <div className="w-full xl:w-1/3 flex flex-col gap-4">
         <div className="bg-white p-4 rounded-md">
            <h1 className='text-xl font-semibold'>Shortcuts</h1>
            <div className="mt-4 flex gap-4 flex-wrap text-sm text-gray-500">
                <Link href='' className='p-3 rounded-md bg-schSkyLight'>Teacher&apos;s Classes</Link>
                <Link href='' className='p-3 rounded-md bg-schPurpleLight'>Teacher&apos;s Students</Link>
                <Link href='' className='p-3 rounded-md bg-schYellowLight'>Teacher&apos;s Lessons</Link>
                <Link href='' className='p-3 rounded-md bg-pink-50'>Teacher&apos;s Exams</Link>
                <Link href='' className='p-3 rounded-md bg-schSkyLight'>Teacher&apos;s Assignments</Link>
            </div>
         </div>
         <Performance/>
         <Announcements/>
        </div>
    </div>
  )
}

export default SingleTeacher;