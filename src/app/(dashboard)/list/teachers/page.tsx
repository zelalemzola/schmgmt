import FormModal from '@/components/FormModal'
import Pagination from '@/components/Pagination'
import Table from '@/components/Table'
import TableSearch from '@/components/TableSearch'
import { role, studentsData, teachersData } from '@/lib/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Teacher = {
    id: number,
    teacherId: number,
    name: string,
    email?: string,
    photo: string,
    phone: string,
    subjects: string[],
    classes: string[],
    address: string,
}

const columns = [
    {
        header: "Info",
        accesor: 'info'
    },
    {
        header: "Teacher ID",
        accesor: 'teacherId',
        className: 'hidden md:table-cell'
    },
    {
        header: "Subjects",
        accesor: 'subjects',
        className: 'hidden md:table-cell'
    },
    {
        header: "Classes",
        accesor: 'classes',
        className: 'hidden md:table-cell'
    },
    {
        header: "Phone",
        accesor: 'phone',
        className: 'hidden lg:table-cell'
    },
    {
        header: "Address",
        accesor: 'address',
        className: 'hidden lg:table-cell'
    },
    {
        header: "Actions",
        accesor: 'action',

    },
]
const TeacherList = () => {

    const renderRow = (item: Teacher) => (
        <tr key={item.id} className='border-b-gray-200 even:bg-slate-50 text-sm hover:bg-schPurpleLight'>
            <td className='flex items-center gap-4 p-4'>
                <Image src={item.photo} alt='' width={30} height={30} className='md:hidden xl:block w-10 h-10 rounded-full object-cover' />
                <div className='flex flex-col '>
                    <h3 className='font-semibold'>{item.name}</h3>
                    <h4 className='text-sm font-fgray-500'>{item?.email}</h4>
                </div>
            </td>
            <td className='hidden md:table-cell'>{item.teacherId}</td>
            <td className='hidden md:table-cell'>{item.subjects.join(' , ')}</td>
            <td className='hidden md:table-cell'>{item.classes?.join(" , ")}</td>
            <td className='hidden md:table-cell'>{item.phone}</td>
            <td className='hidden md:table-cell'>{item.address}</td>
            <td className=''>
                <div className="flex items-center gap-2">
                    <Link href={`/list/teachers/${item.id}`}>
                        <button className='w-7 h-7 flex items-center justify-center rounded-full bg-schSky'>
                            <Image src='/view.png' alt='' width={16} height={16} />
                        </button>
                    </Link>
                    {role === "admin" && 
                        <FormModal table='teacher' type='delete' id={item.id} />
                    }
                </div>
            </td>
        </tr>
    )

    return (
        <div className='bg-white p-4 rounded-md flex-1 m-4 mt-0'>
            <div className="flex items-center justify-between">
                <h1 className='hidden md:block text-lg font-semibold'>ALL Teachers</h1>
                <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
                    <TableSearch />
                    <div className="flex items-center gap-4 self-end">
                        <button className='w-8 h-8 flex items-center justify-center rounded-full bg-schYellow'>
                            <Image src='/filter.png' alt='' width={14} height={14} />
                        </button>
                        <button className='w-8 h-8 flex items-center justify-center rounded-full bg-schYellow'>
                            <Image src='/sort.png' alt='' width={14} height={14} />
                        </button>
                        {role==='admin' &&
                        <FormModal table='teacher' type='create'/>
                        }
                    </div>
                </div>
            </div>

            <Table columns={columns} renderRow={renderRow} data={teachersData} />
            <Pagination />
        </div>
    )
}

export default TeacherList