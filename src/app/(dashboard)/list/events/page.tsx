import FormModal from '@/components/FormModal'
import Pagination from '@/components/Pagination'
import Table from '@/components/Table'
import TableSearch from '@/components/TableSearch'
import { assignmentsData, eventsData, examsData, lessonsData, resultsData, role } from '@/lib/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Event = {
    id: number,
    title: string,
    class: number,
    date: string,
    startTime: string,
    endTime: string,
 
}

const columns = [
    {
        header: "Title",
        accesor: 'title'
    },
    {
        header: "Class ",
        accesor: 'class',

    },
    
    {
        header: "date ",
        accesor: 'date',
        className: 'hidden md:table-cell'

    },
    {
        header: "Start Time ",
        accesor: 'startTime',
        className: 'hidden md:table-cell'

    },
    {
        header: "End Time ",
        accesor: 'endTime',
        className: 'hidden md:table-cell'

    },

    {
        header: "Actions",
        accesor: 'action',

    },
]
const EventsList = () => {

    const renderRow = (item: Event) => (
        <tr key={item.id} className='border-b-gray-200 even:bg-slate-50 text-sm hover:bg-schPurpleLight'>
            <td className='flex items-center gap-4 p-4'>
                <h3 className='font-semibold'>{item.title}</h3>
            </td>
            <td >
                {item.class}
            </td>
            <td className='hidden md:table-cell'>
                {item.date}
            </td>
            <td className='hidden md:table-cell'>
                {item.startTime}
            </td>
            <td className='hidden md:table-cell'>
                {item.endTime}
            </td>





            <td className=''>
                <div className="flex items-center gap-2">
                    {role === "admin" && 
                    <>
                        <FormModal table='event' type='update' data={item} />
                         <FormModal table='event' type='delete' id={item.id} />
                    </>
                    }
                </div>
            </td>
        </tr>
    )

    return (
        <div className='bg-white p-4 rounded-md flex-1 m-4 mt-0'>
            <div className="flex items-center justify-between">
                <h1 className='hidden md:block text-lg font-semibold'>ALL Events</h1>
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
                            <FormModal table='event' type='create'  />
                        }
                    </div>
                </div>
            </div>

            <Table columns={columns} renderRow={renderRow} data={eventsData} />
            <Pagination />
        </div>
    )
}

export default EventsList;