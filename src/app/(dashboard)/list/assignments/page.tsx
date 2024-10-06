import FormModal from '@/components/FormModal'
import Pagination from '@/components/Pagination'
import Table from '@/components/Table'
import TableSearch from '@/components/TableSearch'
import { assignmentsData, examsData, lessonsData, role } from '@/lib/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Assignment = {
    id: number,
    subject: string,
    class: number,
    teacher: number,
    dueDate: string,

}

const columns = [
    {
        header: "Subject Name",
        accesor: 'name'
    },
    {
        header: "Class ",
        accesor: 'Class',

    },
    {
        header: "Teacher ",
        accesor: 'teacher',
        className: 'hidden md:table-cell'

    },
    {
        header: "Due Date ",
        accesor: 'dueDate',
        className: 'hidden md:table-cell'

    },

    {
        header: "Actions",
        accesor: 'action',

    },
]
const AssignmentList = () => {

    const renderRow = (item: Assignment) => (
        <tr key={item.id} className='border-b-gray-200 even:bg-slate-50 text-sm hover:bg-schPurpleLight'>
            <td className='flex items-center gap-4 p-4'>
                <h3 className='font-semibold'>{item.subject}</h3>
            </td>
            <td >
                <h4>{item.class}</h4>
            </td>
            <td className='hidden md:table-cell'>
                <h4 className='text-sm font-fgray-500'>{item.teacher}</h4>
            </td>
            <td className='hidden md:table-cell'>
                <h4 className='text-sm font-fgray-500'>{item.dueDate}</h4>
            </td>




            <td className=''>
                <div className="flex items-center gap-2">
                   {role === "admin" &&
                    <>
                        <FormModal table='assignment' type='update' data={item} />
                        <FormModal table='assignment' type='delete' id={item.id} />
                    </>
                    }
                </div>
            </td>
        </tr>
    )

    return (
        <div className='bg-white p-4 rounded-md flex-1 m-4 mt-0'>
            <div className="flex items-center justify-between">
                <h1 className='hidden md:block text-lg font-semibold'>ALL Assignments</h1>
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
                            <FormModal table='assignment' type='create'  />
                        }
                    </div>
                </div>
            </div>

            <Table columns={columns} renderRow={renderRow} data={assignmentsData} />
            <Pagination />
        </div>
    )
}

export default AssignmentList;