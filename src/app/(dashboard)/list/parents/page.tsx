import FormModal from '@/components/FormModal'
import Pagination from '@/components/Pagination'
import Table from '@/components/Table'
import TableSearch from '@/components/TableSearch'
import { parentsData, role, studentsData, teachersData } from '@/lib/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Parent = {
    id: number,
    name: string,
     email?: string,
    students: string[],
    phone: string,
    address: string,
}

const columns = [
    {
        header: "Info",
        accesor: 'info'
    },
    {
        header: "Student Names",
        accesor: 'students',
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
const ParentList = () => {

    const renderRow = (item: Parent) => (
        <tr key={item.id} className='border-b-gray-200 even:bg-slate-50 text-sm hover:bg-schPurpleLight'>
            <td className='flex items-center gap-4 p-4'>
                <div className='flex flex-col '>
                    <h3 className='font-semibold'>{item.name}</h3>
                    <h4 className='text-sm font-fgray-500'>{item?.email}</h4>
                </div>
            </td>
            <td className='hidden md:table-cell'>{item.students.join(' , ')}</td>
            <td className='hidden md:table-cell'>{item.phone}</td>
            <td className='hidden md:table-cell'>{item.address}</td>
            <td className=''>
                <div className="flex items-center gap-2">
                      {role === "admin" && 
                        <>
                          <FormModal table='parent' type='update' data={item} />
                          <FormModal table='parent' type='delete' id={item.id} />
                        </>
                    }
                </div>
            </td>
        </tr>
    )

    return (
        <div className='bg-white p-4 rounded-md flex-1 m-4 mt-0'>
            <div className="flex items-center justify-between">
                <h1 className='hidden md:block text-lg font-semibold'>ALL Parents</h1>
                <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
                    <TableSearch />
                    <div className="flex items-center gap-4 self-end">
                        <button className='w-8 h-8 flex items-center justify-center rounded-full bg-schYellow'>
                            <Image src='/filter.png' alt='' width={14} height={14} />
                        </button>
                        <button className='w-8 h-8 flex items-center justify-center rounded-full bg-schYellow'>
                            <Image src='/sort.png' alt='' width={14} height={14} />
                        </button>
                        {role === 'admin' && 
                            <FormModal table='parent' type='create'  />
                        }
                    </div>
                </div>
            </div>

            <Table columns={columns} renderRow={renderRow} data={parentsData} />
            <Pagination />
        </div>
    )
}

export default ParentList;