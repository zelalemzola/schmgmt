import FormModal from '@/components/FormModal'
import Pagination from '@/components/Pagination'
import Table from '@/components/Table'
import TableSearch from '@/components/TableSearch'
import { classesData, parentsData, role, studentsData, subjectsData, teachersData } from '@/lib/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Class = {
    id: number,
    name: string,
    capacity:number,
    grade:number,
    supervisor: string,
}

const columns = [
    {
        header: "Class Name",
        accesor: 'name'
    },
    {
        header: "Capacity ",
        accesor: 'capacity',
        className: 'hidden md:table-cell'
    },
    {
        header: "Grade ",
        accesor: 'grade',
        className: 'hidden md:table-cell'
        
    },
    {
        header: "Supervisor ",
        accesor: 'supervisor',
        className: 'hidden md:table-cell'
        
    },
    {
        header: "Actions",
        accesor: 'action',

    },
]
const ClassList = () => {

    const renderRow = (item: Class) => (
        <tr key={item.id} className='border-b-gray-200 even:bg-slate-50 text-sm hover:bg-schPurpleLight'>
            <td className='flex items-center gap-4 p-4'>
                <h3 className='font-semibold'>{item.name}</h3>
             </td>
             <td className='hidden md:table-cell'>
             <h4 className='text-sm font-fgray-500'>{item.grade}</h4>
            </td>
            <td className='hidden md:table-cell'>
             <h4 className='text-sm font-fgray-500'>{item.capacity}</h4>
            </td>
            <td className='hidden md:table-cell'>
             <h4 className='text-sm font-fgray-500'>{item.supervisor}</h4>
            </td>
          
           

            <td className=''>
                <div className="flex items-center gap-2">
                    <FormModal table='class' type='update' data={item} />
                    {role === "admin" && 
                        <FormModal table='class' type='delete' id={item.id} />
                    }
                </div>
            </td>
        </tr>
    )

    return (
        <div className='bg-white p-4 rounded-md flex-1 m-4 mt-0'>
            <div className="flex items-center justify-between">
                <h1 className='hidden md:block text-lg font-semibold'>ALL Classes</h1>
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
                            <FormModal table='class' type='create'  />
                        }
                    </div>
                </div>
            </div>

            <Table columns={columns} renderRow={renderRow} data={classesData} />
            <Pagination />
        </div>
    )
}

export default ClassList;