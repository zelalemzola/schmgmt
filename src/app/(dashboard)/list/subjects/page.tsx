import FormModal from '@/components/FormModal'
import Pagination from '@/components/Pagination'
import Table from '@/components/Table'
import TableSearch from '@/components/TableSearch'
import { parentsData, role, studentsData, subjectsData, teachersData } from '@/lib/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Subject = {
    id: number,
    name: string,
    teachers: string[],
}

const columns = [
    {
        header: "Subject Name",
        accesor: 'name'
    },
    {
        header: "Teachers ",
        accesor: 'teachers',
        className: 'hidden md:table-cell'
    },
    {
        header: "Actions",
        accesor: 'action',

    },
]
const SubjectList = () => {

    const renderRow = (item: Subject) => (
        <tr key={item.id} className='border-b-gray-200 even:bg-slate-50 text-sm hover:bg-schPurpleLight'>
            <td className='flex items-center gap-4 p-4'>
                <div className='flex flex-col '>
                    <h3 className='font-semibold'>{item.name}</h3>
                 
                </div>
            </td>
            
            <td className='hidden md:table-cell'>
                <h4 className='text-sm font-fgray-500'>{item.teachers.join(' , ')}</h4>
                </td>
            <td className=''>
                <div className="flex items-center gap-2">
                    {role === "admin" && 
                      <>
                        <FormModal table='subject' type='update' data={item} />
                        <FormModal table='subject' type='delete' id={item.id} />
                        </>
                    }
                </div>
            </td>
        </tr>
    )

    return (
        <div className='bg-white p-4 rounded-md flex-1 m-4 mt-0'>
            <div className="flex items-center justify-between">
                <h1 className='hidden md:block text-lg font-semibold'>ALL Subjects</h1>
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
                            <FormModal table='subject' type='create'  />
                        }
                    </div>
                </div>
            </div>

            <Table columns={columns} renderRow={renderRow} data={subjectsData} />
            <Pagination />
        </div>
    )
}

export default SubjectList;