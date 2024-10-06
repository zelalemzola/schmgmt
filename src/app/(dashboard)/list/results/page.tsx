import FormModal from '@/components/FormModal'
import Pagination from '@/components/Pagination'
import Table from '@/components/Table'
import TableSearch from '@/components/TableSearch'
import { assignmentsData, examsData, lessonsData, resultsData, role } from '@/lib/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Result = {
    id: number,
    subject: string,
    class: number,
    teacher: number,
    student: string,
    type: "exam"|"assignment",
    date: string,
    score:number
}

const columns = [
    {
        header: "Subject Name",
        accesor: 'name'
    },
    {
        header: "Student ",
        accesor: 'student',
        
    },
    {
        header: "Score ",
        accesor: 'score',
        className: 'hidden md:table-cell'
    },

    {
        header: "Teacher ",
        accesor: 'teacher',
        className: 'hidden md:table-cell'

    },
    {
        header: "Class ",
        accesor: 'Class',
        className: 'hidden md:table-cell'
    },
    {
        header: "Due Date ",
        accesor: 'date',
        className: 'hidden md:table-cell'

    },

    {
        header: "Actions",
        accesor: 'action',

    },
]
const ResultList = () => {

    const renderRow = (item: Result) => (
        <tr key={item.id} className='border-b-gray-200 even:bg-slate-50 text-sm hover:bg-schPurpleLight'>
            <td className='flex items-center gap-4 p-4'>
                <h3 className='font-semibold'>{item.subject}</h3>
            </td> 
            <td >
             {item.student}
            </td>
            <td className='hidden md:table-cell'>
              {item.score}
            </td>
            <td className='hidden md:table-cell'>
               {item.teacher}
            </td>
            <td className='hidden md:table-cell'>
               {item.class}
            </td>
           
            <td className='hidden md:table-cell'>
                {item.date}
            </td>

            <td className=''>
                <div className="flex items-center gap-2">
                    <FormModal table='result' type='update' data={item} />
                    {role === "admin" && 
                        <FormModal table='result' type='delete' id={item.id} />
                    }
                </div>
            </td>
        </tr>
    )

    return (
        <div className='bg-white p-4 rounded-md flex-1 m-4 mt-0'>
            <div className="flex items-center justify-between">
                <h1 className='hidden md:block text-lg font-semibold'>ALL Results</h1>
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
                            <FormModal table='result' type='create'  />
                        }
                    </div>
                </div>
            </div>

            <Table columns={columns} renderRow={renderRow} data={resultsData} />
            <Pagination />
        </div>
    )
}

export default ResultList;